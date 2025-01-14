import { RootStore } from 'mobx/RootStore';
import { Initialization, API, Wallet } from 'bnc-onboard/dist/src/interfaces';
import { API as NotifyAPI } from 'bnc-notify';
import Onboard from 'bnc-onboard';
import Notify, { InitOptions } from 'bnc-notify';
import { BLOCKNATIVE_API_KEY, NETWORK_IDS } from 'config/constants';
import { NetworkConfig } from '@badger-dao/sdk/lib/config/network/network.config';
import { action, extendObservable } from 'mobx';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { SDKProvider } from '@badger-dao/sdk';
import { getOnboardWallets, isRpcWallet, isSupportedNetwork, onboardWalletCheck } from 'config/wallets';
import rpc from 'config/rpc.config';
import { ethers } from 'ethers';

const WALLET_STORAGE_KEY = 'selectedWallet';

export class OnboardStore {
	public onSupportedNetwork: boolean;
	public config: NetworkConfig;
	public wallet?: Wallet;
	public onboard: API;
	public notify: NotifyAPI;
	public provider?: SDKProvider;
	public address?: string;

	constructor(private store: RootStore, config: NetworkConfig) {
		this.onSupportedNetwork = true;
		this.config = config;
		this.onboard = Onboard(this.getInitialization(config));
		const notifyOptions: InitOptions = {
			dappId: BLOCKNATIVE_API_KEY,
			networkId: config.id,
		};
		this.notify = Notify(notifyOptions);
		extendObservable(this, {
			onSupportedNetwork: this.onSupportedNetwork,
			onboard: this.onboard,
			provider: undefined,
			address: undefined,
		});
		this.connect(true);
	}

	/**
	 * creates a new multichain compatible web3 provider for ethers
	 * @see https://github.com/ethers-io/ethers.js/issues/1107
	 */
	get ethersWeb3Provider(): Web3Provider | null {
		if (!this.wallet) {
			return null;
		}

		return new ethers.providers.Web3Provider(this.wallet.provider, 'any');
	}

	isActive(): boolean {
		return this.address !== undefined && this.provider !== undefined;
	}

	isMetamask(): boolean {
		return this.wallet !== undefined && this.wallet.type === 'injected';
	}

	reset(): void {
		this.onboard.walletReset();
	}

	async connect(init = false): Promise<boolean> {
		const savedWallet = window.localStorage.getItem(WALLET_STORAGE_KEY);
		if (!savedWallet && init) {
			return false;
		}
		const selected = await this.onboard.walletSelect(savedWallet ?? undefined);
		if (!selected) {
			return false;
		}
		return this.onboard.walletCheck();
	}

	disconnect(): void {
		try {
			this.wallet = undefined;
			this.address = undefined;
			this.provider = undefined;
			window.localStorage.removeItem(WALLET_STORAGE_KEY);
			this.onboard.walletReset();
		} catch {} // ignore disconnect failures from provider
	}

	addressListener = action(async (address: string): Promise<void> => {
		const shouldUpdate = this.address !== undefined && this.address !== address;
		this.address = address;
		if (shouldUpdate && this.wallet) {
			await this.walletListener(this.wallet);
			if (this.provider) {
				await this.store.updateProvider(this.provider);
			}
		}
	});

	networkListener = action(async (network: number | undefined) => {
		if (!network) {
			return;
		}

		if (isSupportedNetwork(network)) {
			this.onSupportedNetwork = true;
			await this.store.updateNetwork(network);
			if (this.provider) {
				await this.store.updateProvider(this.provider);
			}
		} else {
			this.onSupportedNetwork = false;
			await this.onboard.walletCheck();
		}
	});

	walletListener = action(async (wallet: Wallet): Promise<void> => {
		try {
			this.wallet = wallet;
			if (wallet.provider) {
				this.provider = this.getProvider(wallet.provider, wallet.name);
			}
			if (wallet.name) {
				window.localStorage.setItem(WALLET_STORAGE_KEY, wallet.name);
			}
		} catch (err) {
			console.error(err);
		}
	});

	private getProvider(provider: any, wallet: string | null): SDKProvider {
		let library;
		const targetChain = provider.chainId ? parseInt(provider.chainId, 16) : NETWORK_IDS.ETH;
		const config = NetworkConfig.getConfig(targetChain);
		if (isRpcWallet(wallet)) {
			library = new JsonRpcProvider(rpc[config.network], config.id);
		} else {
			library = new Web3Provider(provider, config.id);
		}
		library.pollingInterval = 15000;
		this.config = config;
		return library;
	}

	private getInitialization(config: NetworkConfig): Initialization {
		this.config = config;
		return {
			dappId: BLOCKNATIVE_API_KEY,
			networkId: config.id,
			blockPollingInterval: 15000,
			darkMode: true,
			subscriptions: {
				address: this.addressListener,
				network: this.networkListener,
				wallet: this.walletListener,
			},
			walletSelect: {
				heading: 'Connect Wallet',
				description: 'WALLET',
				wallets: getOnboardWallets(config),
			},
			walletCheck: onboardWalletCheck,
		};
	}
}

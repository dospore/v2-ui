import { RouterStore } from 'mobx-router';
import UiState from './reducers';
import WalletStore from './stores/walletStore';
import ContractsStore from './stores/contractsStore';
import AirdropStore from './stores/airdropStore';
import RebaseStore from './stores/rebaseStore';
import RewardsStore from './stores/rewardsStore';
import IbBTCStore from './stores/ibBTCStore';
import TransactionsStore from './stores/transactionsStore';
import SettStoreV2 from './stores/settStoreV2';
import { NETWORK_LIST } from '../config/constants';

export class RootStore {
	public router: RouterStore<RootStore>;
	public wallet: WalletStore;
	public uiState: UiState;
	public contracts: ContractsStore;
	public airdrops: AirdropStore;
	public rebase: RebaseStore;
	public rewards: RewardsStore;
	public ibBTCStore: IbBTCStore;
	public setts: SettStoreV2;
	public transactions: TransactionsStore;

	constructor() {
		this.router = new RouterStore<RootStore>(this);
		this.wallet = new WalletStore(this);
		this.contracts = new ContractsStore(this);
		this.airdrops = new AirdropStore(this);
		this.rebase = new RebaseStore(this);
		this.rewards = new RewardsStore(this);
		this.uiState = new UiState(this);
		this.ibBTCStore = new IbBTCStore(this);
		// RenVM transactions store.
		this.transactions = new TransactionsStore(this);
		this.setts = new SettStoreV2(this);

		this.walletRefresh();
	}

	async walletRefresh(): Promise<void> {
		const chain = this.wallet.network.name;
		const refreshData = [
			this.setts.loadAssets(chain),
			this.setts.loadPrices(chain),
		]
		if (chain === NETWORK_LIST.ETH) {
			refreshData.push(this.setts.loadGeysers(chain));
			refreshData.push(this.rebase.fetchRebaseStats());
		} else {
			refreshData.push(this.setts.loadSetts(chain));
		}
		await Promise.all(refreshData);
		await this.contracts.fetchContracts();
		console.log('finish update contracts')
		if (this.wallet.connectedAddress) {
			this.contracts.updateProvider();
			this.rewards.fetchSettRewards();
			this.uiState.reduceAirdrops();
			this.uiState.reduceTreeRewards();
			this.airdrops.fetchAirdrops();
		}
		this.uiState.reduceRebase();
		this.ibBTCStore.init();
		this.uiState.reduceStats();
	}
}

const store = new RootStore();

export default store;

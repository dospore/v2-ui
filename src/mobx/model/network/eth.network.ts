import { FLAGS, NETWORK_IDS, NETWORK_LIST } from 'config/constants';
import { createChainBatchConfig, toSettConfig } from 'web3/config/config-utils';
import { BatchCallRequest } from 'web3/interface/batch-call-request';
import { Deploy } from 'web3/interface/deploy';
import { SettMap } from '../setts/sett-map';
import { GasPrices } from '../system-config/gas-prices';
import { BadgerSett } from '../vaults/badger-sett';
import { Network } from './network';
import deploy from '../../../config/deployments/mainnet.json';
import { SettState } from '../setts/sett-state';
import { toRecord } from 'web3/config/token-config';
import { ProtocolTokens } from 'web3/interface/protocol-token';

export class Ethereum extends Network {
	constructor() {
		super(
			'https://etherscan.io',
			'Ethereum',
			NETWORK_LIST.ETH,
			NETWORK_IDS.ETH,
			'ETH',
			ETH_DEPLOY,
			ethSettDefinitions,
		);
	}

	get settOrder(): string[] {
		return [
			this.deploy.sett_system.vaults['native.cvxCrv'],
			this.deploy.sett_system.vaults['native.cvx'],
			this.deploy.sett_system.vaults['native.tricryptoCrv'],
			this.deploy.sett_system.vaults['native.sbtcCrv'],
			this.deploy.sett_system.vaults['native.renCrv'],
			this.deploy.sett_system.vaults['native.tbtcCrv'],
			this.deploy.sett_system.vaults['native.hbtcCrv'],
			this.deploy.sett_system.vaults['native.pbtcCrv'],
			this.deploy.sett_system.vaults['native.obtcCrv'],
			this.deploy.sett_system.vaults['native.bbtcCrv'],
			this.deploy.sett_system.vaults['native.sushiibBTCwBTC'],
			this.deploy.sett_system.vaults['yearn.wBtc'],
			this.deploy.sett_system.vaults['native.digg'],
			this.deploy.sett_system.vaults['native.badger'],
			this.deploy.sett_system.vaults['native.sushiDiggWbtc'],
			this.deploy.sett_system.vaults['native.sushiBadgerWbtc'],
			this.deploy.sett_system.vaults['native.sushiWbtcEth'],
			this.deploy.sett_system.vaults['native.uniDiggWbtc'],
			this.deploy.sett_system.vaults['native.uniBadgerWbtc'],
			this.deploy.sett_system.vaults['harvest.renCrv'],
			...(FLAGS.STABILIZATION_SETTS ? [this.deploy.sett_system.vaults['experimental.digg']] : []),
		];
	}

	batchRequests(setts: SettMap, address: string): BatchCallRequest[] {
		const tokenAddresses = Object.values(setts).map((sett) => sett.underlyingToken);
		const settAddresses = Object.values(setts).map((sett) => sett.vaultToken);
		const generalSetts = settAddresses.filter((sett) => setts[sett].state === SettState.Open);
		const guardedSetts = settAddresses.filter((sett) => setts[sett].state !== SettState.Open);
		const geyserAddresses = ethSetts.map((sett) => sett.geyser).filter((geyser): geyser is string => !!geyser);
		return createChainBatchConfig(tokenAddresses, generalSetts, guardedSetts, geyserAddresses, address);
	}

	async updateGasPrices(): Promise<GasPrices> {
		const prices = await fetch('https://www.gasnow.org/api/v3/gas/price?utm_source=badgerv2');
		const result = await prices.json();
		return {
			rapid: result.data['rapid'] / 1e9,
			fast: result.data['fast'] / 1e9,
			standard: result.data['standard'] / 1e9,
			slow: result.data['slow'] / 1e9,
		};
	}
}

export const ETH_DEPLOY = deploy as Deploy;

const ethSettDefinitions: BadgerSett[] = [
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['sushi.wBTC-DIGG'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.sushiDiggWbtc'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.sushiDiggWbtc'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['sushi.wBTC-BADGER'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.sushiBadgerWbtc'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.sushiBadgerWbtc'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['sushi.wBTC-WETH'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.sushiWbtcEth'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.sushiWbtcEth'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['sushi.ibBTC-wBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.sushiibBTCwBTC'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['uni.wBTC-BADGER'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.uniBadgerWbtc'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.uniBadgerWbtc'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['uni.wBTC-DIGG'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.uniDiggWbtc'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.uniDiggWbtc'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens.badger,
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.badger'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.badger'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens.digg,
			decimals: 9,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.digg'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens.wBTC,
			decimals: 8,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['yearn.wBtc'],
			decimals: 8,
		},
		geyser: ETH_DEPLOY.geysers['yearn.wBtc'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.renWBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.renCrv'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.renCrv'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.renWBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['harvest.renCrv'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['harvest.renCrv'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.tBTC-sBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.tbtcCrv'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.tbtcCrv'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.renWSBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.sbtcCrv'],
			decimals: 18,
		},
		geyser: ETH_DEPLOY.geysers['native.sbtcCrv'],
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens.digg,
			decimals: 9,
			symbol: 'DIGG',
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['experimental.digg'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.hBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.hbtcCrv'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.pBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.pbtcCrv'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.oBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.obtcCrv'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.bBTC'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.bbtcCrv'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['curve.tricrypto'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.tricryptoCrv'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['cvx'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.cvx'],
			decimals: 18,
		},
	},
	{
		depositToken: {
			address: ETH_DEPLOY.tokens['cvxCRV'],
			decimals: 18,
		},
		vaultToken: {
			address: ETH_DEPLOY.sett_system.vaults['native.cvxCrv'],
			decimals: 18,
		},
	},
];

export const ethSetts = toSettConfig(ethSettDefinitions);

const ethTokens = ethSetts.flatMap((sett) => [sett.depositToken, sett.vaultToken]);

export const ethProtocolTokens: ProtocolTokens = toRecord(ethTokens, 'address');
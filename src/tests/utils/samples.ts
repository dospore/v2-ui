import { BadgerVault } from '../../mobx/model/vaults/badger-vault';
import { TokenBalance } from '../../mobx/model/tokens/token-balance';
import BigNumber from 'bignumber.js';
import { BouncerType, Protocol, Vault, VaultData, VaultState, VaultType } from '@badger-dao/sdk';
import { TEST_ADDRESS } from './snapshots';

export const SAMPLE_IBBTC_TOKEN_BALANCE = new TokenBalance(
	{
		name: 'ibBTC',
		symbol: 'ibBTC',
		decimals: 18,
		address: '0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F',
	},
	new BigNumber('10000000000000000000'),
	new BigNumber('12.012381'),
);

export const SAMPLE_BADGER_SETT: BadgerVault = {
	depositToken: {
		address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
		decimals: 18,
	},
	vaultToken: {
		address: '0xd04c48A53c111300aD41190D63681ed3dAd998eC',
		decimals: 18,
	},
};

export const SAMPLE_SETT: Vault = {
	type: VaultType.Standard,
	asset: 'sBTCCRV',
	vaultAsset: 'bsBTCCRV',
	state: VaultState.Open,
	apr: 0.123456789123454,
	balance: 2580.4779797767615,
	bouncer: BouncerType.None,
	boost: {
		enabled: false,
		weight: 0,
	},
	name: 'Curve.fi renBTC/wBTC/sBTC',
	protocol: Protocol.Curve,
	pricePerFullShare: 1.0082389531413567,
	strategy: {
		address: TEST_ADDRESS,
		withdrawFee: 50,
		performanceFee: 20,
		strategistFee: 10,
	},
	sources: [
		{
			name: 'Vault Compounding',
			apr: 0.123456789123454,
			harvestable: false,
			boostable: true,
			performance: {
				oneDay: 0,
				threeDay: 0.969833148006872,
				sevenDay: 1.9606822867801268,
				thirtyDay: 1.7906745798173762,
			},
			minApr: 0.123456789123454,
			maxApr: 1.123456789123454,
		},
		{
			name: 'Curve LP Fees',
			apr: 0.123456789123454,
			harvestable: false,
			boostable: true,
			performance: {
				oneDay: 0.3785608655360706,
				threeDay: 0.3785608655360706,
				sevenDay: 0.18228323420248493,
				thirtyDay: 0.368978072171422,
			},
			minApr: 0.123456789123454,
			maxApr: 1.123456789123454,
		},
	],
	tokens: [
		{
			address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
			name: 'Curve.fi renBTC/wBTC/sBTC',
			symbol: 'curve-renBTC-wBTC-sBTC',
			decimals: 18,
			balance: 2580.4779797767615,
			value: 135697015.0445408,
		},
	],
	underlyingToken: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
	value: 135697015.0445408,
	vaultToken: '0xd04c48A53c111300aD41190D63681ed3dAd998eC',
};

export const SAMPLE_SETT_BALANCE: VaultData = {
	address: '0xd04c48A53c111300aD41190D63681ed3dAd998eC',
	name: 'Convex renBTC/wBTC/sBTC',
	symbol: 'crvsBTC',
	pricePerFullShare: 1.0131098014439799,
	balance: 400,
	value: 21219315.213123,
	tokens: [
		{
			address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
			name: 'Ren Protocol BTC',
			symbol: 'renBTC',
			decimals: 8,
			balance: 478.88017950592223,
			value: 23410536.455326512,
		},
		{
			address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
			name: 'Wrapped Bitcoin',
			symbol: 'WBTC',
			decimals: 8,
			balance: 472.0972849608856,
			value: 23145985.687062297,
		},
		{
			address: '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
			name: 'Synthetix Network BTC',
			symbol: 'sBTC',
			decimals: 18,
			balance: 337.6574109700648,
			value: 16588824.96873407,
		},
	],
	earnedBalance: 0.0001352660720517207,
	earnedValue: 6.662841869510715,
	earnedTokens: [
		{
			address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
			name: 'Ren Protocol BTC',
			symbol: 'renBTC',
			decimals: 8,
			balance: 478.88017950592223,
			value: 23410536.455326512,
		},
		{
			address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
			name: 'Wrapped Bitcoin',
			symbol: 'WBTC',
			decimals: 8,
			balance: 472.0972849608856,
			value: 23145985.687062297,
		},
		{
			address: '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
			name: 'Synthetix Network BTC',
			symbol: 'sBTC',
			decimals: 18,
			balance: 337.6574109700648,
			value: 16588824.96873407,
		},
	],
	depositedBalance: 0.7407489634010854,
	withdrawnBalance: 0.7408842294731371,
};

export const SAMPLE_TOKEN_BALANCE = new TokenBalance(
	{
		address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
		name: 'Curve.fi renBTC/wBTC/sBTC',
		symbol: 'curve-renBTC-wBTC-sBTC',
		decimals: 18,
	},
	new BigNumber(2580.4779797767615),
	new BigNumber(135697015.0445408),
);

export const SAMPLE_VAULTS: Vault[] = [
	{
		name: 'ibBTC / crvsBTC LP',
		asset: 'crvibBTC',
		vaultAsset: 'bcrvibBTC',
		state: VaultState.Open,
		underlyingToken: '0xFbdCA68601f835b27790D98bbb8eC7f05FDEaA9B',
		vaultToken: '0xaE96fF08771a109dc6650a1BdCa62F2d558E40af',
		value: 41931.75180585348,
		balance: 3178.06787828893,
		protocol: Protocol.Convex,
		pricePerFullShare: 1,
		tokens: [
			{
				value: 20094.268952577364,
				address: '0x8751D4196027d4e6DA63716fA7786B5174F04C15',
				name: 'wibBTC',
				symbol: 'wibBTC',
				decimals: 18,
				balance: 1498.3866834755574,
			},
			{
				value: 21837.482853276113,
				address: '0x000000000000000000000000000000000000000175b1bb99792c9E1041bA13afEf80C91a1e70fB3',
				name: 'Curve.fi renBTC/wBTC/sBTC',
				symbol: 'crvsBTC',
				decimals: 18,
				balance: 1666.1554813267362,
			},
		],
		apr: 19.16862206903562,
		boost: {
			enabled: true,
			weight: 10000,
		},
		minApr: 9.461123356709754,
		maxApr: 61.652732126597286,
		sources: [
			{
				name: 'Curve LP Fees',
				apr: 0.05773875239807311,
				boostable: false,
				harvestable: false,
				performance: {
					oneDay: 0.05773875239807311,
					threeDay: 0.05773875239807311,
					sevenDay: 0.05773875239807311,
					thirtyDay: 0.05773875239807311,
				},
				minApr: 0.05773875239807311,
				maxApr: 0.05773875239807311,
			},
			{
				name: 'bCVXCRV Rewards',
				apr: 3.6637832355582183,
				boostable: false,
				harvestable: false,
				performance: {
					oneDay: 3.6637832355582183,
					threeDay: 3.6637832355582183,
					sevenDay: 3.6637832355582183,
					thirtyDay: 3.6637832355582183,
				},
				minApr: 3.6637832355582183,
				maxApr: 3.6637832355582183,
			},
			{
				name: 'Boosted Badger Rewards',
				apr: 9.733607571140217,
				boostable: true,
				harvestable: false,
				performance: {
					oneDay: 9.733607571140217,
					threeDay: 9.733607571140217,
					sevenDay: 9.733607571140217,
					thirtyDay: 9.733607571140217,
				},
				minApr: 0.02610885881435094,
				maxApr: 52.217717628701884,
			},
			{
				name: 'bveCVX Rewards',
				apr: 5.713492509939111,
				boostable: false,
				harvestable: false,
				performance: {
					oneDay: 5.713492509939111,
					threeDay: 5.713492509939111,
					sevenDay: 5.713492509939111,
					thirtyDay: 5.713492509939111,
				},
				minApr: 5.713492509939111,
				maxApr: 5.713492509939111,
			},
		],
		bouncer: BouncerType.None,
		strategy: {
			address: '0x6D4BA00Fd7BB73b5aa5b3D6180c6f1B0c89f70D1',
			withdrawFee: 10,
			performanceFee: 2000,
			strategistFee: 0,
		},
		type: VaultType.Boosted,
	},
	{
		name: 'Badger',
		asset: 'Badger',
		vaultAsset: 'bBadger',
		state: VaultState.Open,
		underlyingToken: '0x0000000000000000000000000000000000000001',
		vaultToken: '0x0000000000000000000000000000000000000001',
		value: 10000,
		balance: 100,
		protocol: Protocol.Badger,
		pricePerFullShare: 0.18907615705168573,
		tokens: [
			{
				address: '0x0000000000000000000000000000000000000001',
				name: 'Badger',
				symbol: 'BADGER',
				decimals: 10,
				balance: 100,
				value: 10000,
			},
		],
		apr: 8.174287821972374,
		boost: {
			enabled: false,
			weight: 0,
		},
		sources: [
			{
				name: 'Vault Compounding',
				apr: 8.174287821972374,
				boostable: false,
				harvestable: false,
				performance: {
					oneDay: 0,
					threeDay: 2.5464786033167146e-7,
					sevenDay: 3.344828765174996e-7,
					thirtyDay: 8.174287821972374,
				},
				minApr: 8.174287821972374,
				maxApr: 8.174287821972374,
			},
		],
		bouncer: BouncerType.None,
		strategy: {
			address: '0x4a8651F2edD68850B944AD93f2c67af817F39F62',
			withdrawFee: 0,
			performanceFee: 0,
			strategistFee: 0,
		},
		type: VaultType.Native,
	},
	{
		name: 'Digg',
		asset: 'DIGG',
		vaultAsset: 'bDIGG',
		state: VaultState.Open,
		underlyingToken: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
		vaultToken: '0x7e7E112A68d8D2E221E11047a72fFC1065c38e1a',
		value: 2873.538729634401,
		balance: 237.567564646,
		protocol: Protocol.Badger,
		pricePerFullShare: 0.18907615705168573,
		tokens: [
			{
				address: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
				name: 'Digg',
				symbol: 'DIGG',
				decimals: 9,
				balance: 237.567564646,
				value: 2873.538729634401,
			},
		],
		apr: 8.174287821972374,
		boost: {
			enabled: false,
			weight: 0,
		},
		sources: [
			{
				name: 'Vault Compounding',
				apr: 8.174287821972374,
				boostable: false,
				harvestable: false,
				performance: {
					oneDay: 0,
					threeDay: 2.5464786033167146e-7,
					sevenDay: 3.344828765174996e-7,
					thirtyDay: 8.174287821972374,
				},
				minApr: 8.174287821972374,
				maxApr: 8.174287821972374,
			},
		],
		bouncer: BouncerType.None,
		strategy: {
			address: '0x4a8651F2edD68850B944AD93f2c67af817F39F62',
			withdrawFee: 0,
			performanceFee: 0,
			strategistFee: 0,
		},
		type: VaultType.Standard,
	},
];

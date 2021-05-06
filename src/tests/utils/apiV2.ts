import * as api from '../../mobx/utils/apiV2';
import { Protocol } from '../../mobx/model';
import BigNumber from 'bignumber.js';

export function mockApi(): void {
	jest.spyOn(api, 'listSetts').mockReturnValue(
		Promise.resolve([
			{
				asset: 'sBTCCRV',
				apy: 1.3483940135429426,
				balance: 2580.4779797767615,
				hasBouncer: false,
				name: 'Curve.fi renBTC/wBTC/sBTC',
				ppfs: 1.0082389531413567,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 0.969833148006872,
						apr: 0.123456789123454,
						performance: {
							oneDay: 0,
							threeDay: 0.969833148006872,
							sevenDay: 1.9606822867801268,
							thirtyDay: 1.7906745798173762,
						},
					},
					{
						name: 'Curve LP Fees',
						apy: 0.3785608655360706,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 0.3785608655360706,
							threeDay: 0.3785608655360706,
							sevenDay: 0.18228323420248493,
							thirtyDay: 0.368978072171422,
						},
					},
				],
				tokens: [
					{
						address: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
						name: 'Curve.fi renBTC/wBTC/sBTC',
						symbol: 'Curve.fi renBTC/wBTC/sBTC',
						decimals: 18,
						balance: 2580.4779797767615,
						value: 135697015.0445408,
					},
				],
				underlyingToken: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
				value: 135697015.0445408,
				vaultToken: '0xd04c48A53c111300aD41190D63681ed3dAd998eC',
			},
			{
				asset: 'renBTCCRV',
				apy: 0.8692587919414914,
				balance: 4941.679422683604,
				hasBouncer: false,
				name: 'Curve.fi crvRenWBTC',
				ppfs: 1.0066916057277777,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 0.7311628427373824,
						apr: 0.123456789123454,
						performance: {
							oneDay: 0,
							threeDay: 0.7311628427373824,
							sevenDay: 1.4543467104250192,
							thirtyDay: 2.083626954749879,
						},
					},
					{
						name: 'Curve LP Fees',
						apy: 0.13809594920410895,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 0.13809594920410895,
							threeDay: 0.13809594920410895,
							sevenDay: 0.16493276913092103,
							thirtyDay: 0.3455785814580059,
						},
					},
				],
				tokens: [
					{
						address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
						name: 'Curve.fi: renCrv Token',
						symbol: 'Curve.fi renBTC/wBTC (crvRenWBTC)',
						decimals: 18,
						balance: 4941.679422683604,
						value: 257412081.12758893,
					},
				],
				underlyingToken: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
				value: 257412081.12758893,
				vaultToken: '0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545',
			},
			{
				asset: 'tBTCCRV',
				apy: 0.41504614261791417,
				balance: 2415.4268390200577,
				hasBouncer: false,
				name: 'Curve.fi tBTC/sBTCCrv LP',
				ppfs: 1.0155787278067296,
				experimental: false,
				sources: [
					{
						name: 'Curve LP Fees',
						apy: 0.41504614261791417,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 0.41504614261791417,
							threeDay: 0.41504614261791417,
							sevenDay: 0.18560668556244497,
							thirtyDay: 0.34936554603628434,
						},
					},
				],
				tokens: [
					{
						address: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
						name: 'Curve.fi tBTC/sbtcCrv',
						symbol: 'Curve.fi tBTC/sbtcCrv (tbtc/sbtc)',
						decimals: 18,
						balance: 2415.4268390200577,
						value: 128162548.07840426,
					},
				],
				underlyingToken: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
				value: 128162548.07840426,
				vaultToken: '0xb9D076fDe463dbc9f915E5392F807315Bf940334',
			},
			{
				asset: 'hrenBTCCRV',
				apy: 1.3136852111142303,
				balance: 1992.1769700610525,
				hasBouncer: false,
				name: 'Harvest Curve.fi crvRenWBTC',
				ppfs: 1.0046284642433154,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 1.1755892619101214,
						apr: 0.123456789123454,
						performance: {
							oneDay: 3.4924657544052606,
							threeDay: 1.1755892619101214,
							sevenDay: 1.084966170205111,
							thirtyDay: 1.3949689244260888,
						},
					},
					{
						name: 'Curve LP Fees',
						apy: 0.13809594920410895,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 0.13809594920410895,
							threeDay: 0.13809594920410895,
							sevenDay: 0.16493276913092103,
							thirtyDay: 0.3455785814580059,
						},
					},
				],
				tokens: [
					{
						address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
						name: 'Curve.fi: renCrv Token',
						symbol: 'Curve.fi renBTC/wBTC (crvRenWBTC)',
						decimals: 18,
						balance: 1992.1769700610525,
						value: 103772498.37048022,
					},
				],
				underlyingToken: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
				value: 103772498.37048022,
				vaultToken: '0xAf5A1DECfa95BAF63E0084a35c62592B774A2A87',
			},
			{
				asset: 'BADGER-WBTC',
				apy: 31.118033085487408,
				balance: 0.07568321005973541,
				hasBouncer: false,
				name: 'Uniswap Wrapped BTC/Badger',
				ppfs: 1.5399331182892404,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 31.118033085487408,
						apr: 0.123456789123454,
						performance: {
							oneDay: 30.461688898377844,
							threeDay: 31.118033085487408,
							sevenDay: 31.316138261612686,
							thirtyDay: 32.01513980875965,
						},
					},
				],
				tokens: [
					{
						name: 'Wrapped BTC',
						address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
						symbol: 'WBTC',
						decimals: 8,
						balance: 196.9993557243267,
						value: 10267409.420996184,
					},
					{
						name: 'Badger',
						address: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
						symbol: 'BADGER',
						decimals: 18,
						balance: 362105.40178323304,
						value: 10348972.3829648,
					},
				],
				underlyingToken: '0xcD7989894bc033581532D2cd88Da5db0A4b12859',
				value: 20616381.803960983,
				vaultToken: '0x235c9e24D3FB2FAFd58a2E49D454Fdcd2DBf7FF1',
			},
			{
				asset: 'DIGG-WBTC',
				apy: 83.24736405767452,
				balance: 5.8658897644e-8,
				hasBouncer: false,
				name: 'Uniswap Wrapped BTC/Digg',
				ppfs: 1.476848635621132,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 83.24736405767452,
						apr: 0.123456789123454,
						performance: {
							oneDay: 72.99492782978379,
							threeDay: 83.24736405767452,
							sevenDay: 93.95011438198767,
							thirtyDay: 93.98498784953632,
						},
					},
				],
				tokens: [
					{
						name: 'Wrapped BTC',
						address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
						symbol: 'WBTC',
						decimals: 8,
						balance: 104.07358532549782,
						value: 5424211.193579621,
					},
					{
						name: 'Digg',
						address: '0x798d1be841a82a273720ce31c822c61a67a601c3',
						symbol: 'DIGG',
						decimals: 9,
						balance: 128.5505215626803,
						value: 5203982.213900425,
					},
				],
				underlyingToken: '0xE86204c4eDDd2f70eE00EAd6805f917671F56c52',
				value: 10628193.407480046,
				vaultToken: '0xC17078FDd324CC473F8175Dc5290fae5f2E84714',
			},
			{
				asset: 'SLP-WBTC-ETH',
				apy: 19.16796145481053,
				balance: 0.003869623825219316,
				hasBouncer: false,
				name: 'Sushiswap Wrapped BTC/Wrapped Ether',
				ppfs: 1,
				experimental: false,
				sources: [
					{
						name: 'Sushiswap LP Fees',
						apy: 7.336761818636485,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 11.843401310826318,
							threeDay: 7.336761818636485,
							sevenDay: 6.31785197701984,
							thirtyDay: 3.633687707316913,
						},
					},
					{
						name: 'Sushi Rewards',
						apy: 11.831199636174047,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 11.831199636174047,
							threeDay: 11.831199636174047,
							sevenDay: 11.831199636174047,
							thirtyDay: 11.831199636174047,
						},
					},
				],
				tokens: [
					{
						name: 'Wrapped BTC',
						address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
						symbol: 'WBTC',
						decimals: 8,
						balance: 1995.329056091346,
						value: 103994555.07442488,
					},
					{
						name: 'Wrapped Ether',
						address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
						symbol: 'WETH',
						decimals: 18,
						balance: 42761.64190437989,
						value: 106329388.29375485,
					},
				],
				underlyingToken: '0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58',
				value: 210323943.36817974,
				vaultToken: '0x758A43EE2BFf8230eeb784879CdcFF4828F2544D',
			},
			{
				asset: 'SLP-BADGER-WBTC',
				apy: 59.00098709236694,
				balance: 0.10604880118763182,
				hasBouncer: false,
				name: 'Sushiswap Wrapped BTC/Badger',
				ppfs: 1.3072491640901058,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 35.24415840194862,
						apr: 0.123456789123454,
						performance: {
							oneDay: 50.72612372757549,
							threeDay: 35.24415840194862,
							sevenDay: 28.021176422708155,
							thirtyDay: 30.180746246754413,
						},
					},
					{
						name: 'Sushiswap LP Fees',
						apy: 9.600171256638255,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 15.224183451961709,
							threeDay: 9.600171256638255,
							sevenDay: 8.077442267733373,
							thirtyDay: 7.135294030590439,
						},
					},
					{
						name: 'Sushi Rewards',
						apy: 14.156657433780072,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 14.156657433780072,
							threeDay: 14.156657433780072,
							sevenDay: 14.156657433780072,
							thirtyDay: 14.156657433780072,
						},
					},
				],
				tokens: [
					{
						name: 'Wrapped BTC',
						address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
						symbol: 'WBTC',
						decimals: 8,
						balance: 257.9391421581187,
						value: 13443530.150138991,
					},
					{
						name: 'Badger',
						address: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
						symbol: 'BADGER',
						decimals: 18,
						balance: 469413.7218677222,
						value: 13415844.1709795,
					},
				],
				underlyingToken: '0x110492b31c59716AC47337E616804E3E3AdC0b4a',
				value: 26859374.32111849,
				vaultToken: '0x1862A18181346EBd9EdAf800804f89190DeF24a5',
			},
			{
				asset: 'SLP-DIGG-WBTC',
				apy: 82.16637668349159,
				balance: 7.6435509973e-8,
				hasBouncer: false,
				name: 'Sushiswap Wrapped BTC/Digg',
				ppfs: 1.4287885782611953,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 62.683522481090584,
						apr: 0.123456789123454,
						performance: {
							oneDay: 123.05562985780323,
							threeDay: 62.683522481090584,
							sevenDay: 66.22731902932728,
							thirtyDay: 72.96658660124425,
						},
					},
					{
						name: 'Sushi Rewards',
						apy: 16.441120565330397,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 16.441120565330397,
							threeDay: 16.441120565330397,
							sevenDay: 16.441120565330397,
							thirtyDay: 16.441120565330397,
						},
					},
					{
						name: 'Sushiswap LP Fees',
						apy: 3.0417336370706,
						apr: 0.123456789123454,
						harvestable: false,
						performance: {
							oneDay: 1.0113429870424038,
							threeDay: 3.0417336370706,
							sevenDay: 2.878697959829601,
							thirtyDay: 3.967113032376117,
						},
					},
				],
				tokens: [
					{
						name: 'Wrapped BTC',
						address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
						symbol: 'WBTC',
						decimals: 8,
						balance: 125.12377681565114,
						value: 6521326.123854922,
					},
					{
						name: 'Digg',
						address: '0x798d1be841a82a273720ce31c822c61a67a601c3',
						symbol: 'DIGG',
						decimals: 9,
						balance: 153.87206224004694,
						value: 6229048.823601581,
					},
				],
				underlyingToken: '0x9a13867048e01c663ce8Ce2fE0cDAE69Ff9F35E3',
				value: 12750374.947456503,
				vaultToken: '0x88128580ACdD9c04Ce47AFcE196875747bF2A9f6',
			},
			{
				asset: 'DIGG',
				apy: 48.67114674149115,
				balance: 374.597748655,
				hasBouncer: false,
				name: 'Digg',
				ppfs: 1.3266858646211546,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 48.67114674149115,
						apr: 0.123456789123454,
						performance: {
							oneDay: 50.458810103007366,
							threeDay: 48.67114674149115,
							sevenDay: 48.65152870233621,
							thirtyDay: 60.37331576294087,
						},
					},
				],
				tokens: [
					{
						address: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
						name: 'Digg',
						symbol: 'DIGG',
						decimals: 9,
						balance: 374.597748655,
						value: 15164466.06105171,
					},
				],
				underlyingToken: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
				value: 15164466.06105171,
				vaultToken: '0x7e7E112A68d8D2E221E11047a72fFC1065c38e1a',
			},
			{
				asset: 'BADGER',
				apy: 3.108848002965724,
				balance: 3627133.2708200538,
				hasBouncer: false,
				name: 'Badger',
				ppfs: 1.2255596879313162,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 3.108848002965724,
						apr: 0.123456789123454,
						performance: {
							oneDay: 3.0852593087371143,
							threeDay: 3.108848002965724,
							sevenDay: 3.086088680688814,
							thirtyDay: 3.7514779039316415,
						},
					},
				],
				tokens: [
					{
						address: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
						name: 'Badger',
						symbol: 'BADGER',
						decimals: 18,
						balance: 3627133.2708200538,
						value: 103663468.88003713,
					},
				],
				underlyingToken: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
				value: 103663468.88003713,
				vaultToken: '0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28',
			},
			{
				asset: 'byvWBTC',
				apy: 16.90778487521685,
				balance: 49.99999999,
				hasBouncer: true,
				name: 'Yearn WBTC',
				ppfs: 1.00337478,
				experimental: false,
				sources: [
					{
						name: 'Vault Compounding',
						apy: 16.90778487521685,
						apr: 0.123456789123454,
						performance: {
							oneDay: 0,
							threeDay: 16.90778487521685,
							sevenDay: 7.210848880951402,
							thirtyDay: 0,
						},
					},
				],
				tokens: [
					{
						address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
						name: 'Wrapped Bitcoin',
						symbol: 'WBTC',
						decimals: 8,
						balance: 49.99999999,
						value: 2605949.99947881,
					},
				],
				underlyingToken: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
				value: 2605949.99947881,
				vaultToken: '0x4b92d19c11435614CD49Af1b589001b7c08cD4D5',
				affiliate: {
					protocol: Protocol.Yearn,
					availableDepositLimit: 0,
					depositLimit: 50,
				},
			},
		]),
	);

	jest.spyOn(api, 'getTokenPrices').mockReturnValue(
		Promise.resolve({
			'0x3472A5A71965499acd81997a54BBA8D852C6E53d': new BigNumber(0.01177548),
			'0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599': new BigNumber(21.475027),
			'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': new BigNumber(1.023819),
			'0x49849C98ae39Fff122806C06791Fa73784FB3675': new BigNumber(21.458917),
			'0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3': new BigNumber(21.639523),
			'0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd': new BigNumber(21.862744),
			'0x798D1bE841a82a273720CE31c822C61a67a601C3': new BigNumber(16.668173),
			'0x6B3595068778DD592e39A122f4f5a5cF09C90fE2': new BigNumber(0.00512575),
			'0x110492b31c59716AC47337E616804E3E3AdC0b4a': new BigNumber(104355.93624675558),
			'0x9a13867048e01c663ce8Ce2fE0cDAE69Ff9F35E3': new BigNumber(68708936992.72883),
			'0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58': new BigNumber(22387170.102105886),
			'0xcD7989894bc033581532D2cd88Da5db0A4b12859': new BigNumber(112237.99034222205),
			'0xE86204c4eDDd2f70eE00EAd6805f917671F56c52': new BigNumber(74629520214.76715),
			'0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28': new BigNumber(0.014431553594041455),
			'0x7e7E112A68d8D2E221E11047a72fFC1065c38e1a': new BigNumber(7.765345441389416),
			'0xC17078FDd324CC473F8175Dc5290fae5f2E84714': new BigNumber(110216505106.23857),
			'0x235c9e24D3FB2FAFd58a2E49D454Fdcd2DBf7FF1': new BigNumber(172838.99845821565),
			'0x758A43EE2BFf8230eeb784879CdcFF4828F2544D': new BigNumber(22387119.650653824),
			'0x1862A18181346EBd9EdAf800804f89190DeF24a5': new BigNumber(136419.2104264116),
			'0x88128580ACdD9c04Ce47AFcE196875747bF2A9f6': new BigNumber(98170544399.67908),
			'0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545': new BigNumber(21.618729413677382),
			'0xd04c48A53c111300aD41190D63681ed3dAd998eC': new BigNumber(21.81781001599831),
			'0xb9D076fDe463dbc9f915E5392F807315Bf940334': new BigNumber(22.180300350022645),
			'0xAf5A1DECfa95BAF63E0084a35c62592B774A2A87': new BigNumber(21.574423394593733),
			'0x4b92d19c11435614CD49Af1b589001b7c08cD4D5': new BigNumber(21.547500491619058),
		}),
	);

	jest.spyOn(api, 'getTotalValueLocked').mockReturnValue(
		Promise.resolve({
			totalValue: 1027656295.4097776,
			setts: [
				{
					balance: 2580.4779797767615,
					name: 'Curve.fi renBTC/wBTC/sBTC',
					value: 135697015.0445408,
				},
				{
					balance: 4941.679422683604,
					name: 'Curve.fi crvRenWBTC',
					value: 257412081.12758893,
				},
				{
					balance: 2415.4268390200577,
					name: 'Curve.fi tBTC/sBTCCrv LP',
					value: 128162548.07840426,
				},
				{
					balance: 1992.1769700610525,
					name: 'Harvest Curve.fi crvRenWBTC',
					value: 103772498.37048022,
				},
				{
					balance: 0.07568321005973541,
					name: 'Uniswap Wrapped BTC/Badger',
					value: 20616381.803960983,
				},
				{
					balance: 5.8658897644e-8,
					name: 'Uniswap Wrapped BTC/Digg',
					value: 10628193.407480046,
				},
				{
					balance: 0.003869623825219316,
					name: 'Sushiswap Wrapped BTC/Wrapped Ether',
					value: 210323943.36817974,
				},
				{
					balance: 0.10604880118763182,
					name: 'Sushiswap Wrapped BTC/Badger',
					value: 26859374.32111849,
				},
				{
					balance: 7.6435509973e-8,
					name: 'Sushiswap Wrapped BTC/Digg',
					value: 12750374.947456503,
				},
				{
					balance: 374.597748655,
					name: 'Digg',
					value: 15164466.06105171,
				},
				{
					balance: 3627133.2708200538,
					name: 'Badger',
					value: 103663468.88003713,
				},
				{
					balance: 49.99999999,
					name: 'Yearn WBTC',
					value: 2605949.99947881,
				},
			],
		}),
	);

	jest.spyOn(api, 'checkShopEligibility').mockReturnValue(
		Promise.resolve({
			isEligible: true,
		}),
	);

	jest.spyOn(api, 'fetchBouncerProof').mockReturnValue(
		Promise.resolve({
			address: '0x1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a',
			proof: [],
		}),
	);

	jest.spyOn(api, 'getAccountDetails').mockReturnValue(
		Promise.resolve({
			id: '0x1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a',
			value: 0,
			earnedValue: 0,
			balances: [],
			depositLimits: {
				'0x4b92d19c11435614CD49Af1b589001b7c08cD4D9': {
					available: 0.5,
					limit: 0.5,
				},
			},
			boost: 1,
			multipliers: {
				'0x2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b': 1,
			},
		}),
	);
}

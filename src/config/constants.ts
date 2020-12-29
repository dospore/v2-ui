import BigNumber from "bignumber.js"

const BadgerVault = require("./abis/Sett.json")
const CurvePool = require("./abis/CurvePool.json")
const BadgerGeyser = require("./abis/BadgerGeyser.json")
const SushiGeyser = require("./abis/SushiGeyser.json")
const BadgerHunt = require("./abis/BadgerHunt.json")
const BadgerTree = require("./abis/BadgerTree.json")
const EnokiVault = require("./abis/SporePool.json")
const UFragments = require("./abis/UFragments.json")

export const collections = [
	{
		title: "Badger Setts",
		id: 'badger',

		rebase: {
			contract: "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
			abi: UFragments.abi
		},

		contracts: {
			vaults: [
				"0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545",
				"0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28",
				"0xd04c48A53c111300aD41190D63681ed3dAd998eC",
				"0xb9D076fDe463dbc9f915E5392F807315Bf940334",
				"0x235c9e24D3FB2FAFd58a2E49D454Fdcd2DBf7FF1",
				"0xAf5A1DECfa95BAF63E0084a35c62592B774A2A87",
				"0x758A43EE2BFf8230eeb784879CdcFF4828F2544D",
				"0x1862A18181346EBd9EdAf800804f89190DeF24a5",
			],
			geysers: [
				"0x2296f174374508278DC12b806A7f27c87D53Ca15",
				"0xa9429271a28F8543eFFfa136994c0839E7d7bF77",
				"0x10fC82867013fCe1bD624FafC719Bb92Df3172FC",
				"0x085A9340ff7692Ab6703F17aB5FfC917B580a6FD",
				"0xA207D69Ea6Fb967E54baA8639c408c31767Ba62D",
				"0xeD0B7f5d9F6286d00763b0FFCbA886D8f9d56d5e",
				"0x7a56d65254705b4def63c68488c0182968c452ce",
				"0x3a494D79AA78118795daad8AeFF5825C6c8dF7F1",
			],
		},

		configs: {
			vaults: {
				abi: BadgerVault.abi,
				underlying: 'token',
				walletMethods: ['balanceOf'],
				featured: [
					"0x235c9e24d3fb2fafd58a2e49d454fdcd2dbf7ff1",
					"0xaf5a1decfa95baf63e0084a35c62592b774a2a87"
				],
				superSett: [
					"0xaf5a1decfa95baf63e0084a35c62592b774a2a87"
				],
				sushi: [
					"0x758A43EE2BFf8230eeb784879CdcFF4828F2544D",
					"0x1862A18181346EBd9EdAf800804f89190DeF24a5",
				]
			},
			geysers: {
				abi: BadgerGeyser.abi,
				sushiAbi: SushiGeyser.abi,
				walletMethods: ['totalStakedFor'],
				underlying: 'getStakingToken',
				sushi: [
					"0x7a56d65254705b4def63c68488c0182968c452ce",
					"0x3a494D79AA78118795daad8AeFF5825C6c8dF7F1",
				],
				rewards: {
					method: 'getUnlockSchedulesFor',
					tokens: ['0x3472a5a71965499acd81997a54bba8d852c6e53d', '0xa0246c9032bc3a600820415ae600c6388619a14d'],
					merkle: {
						proofEndpoint: 'https://fzqm8i0owc.execute-api.us-east-1.amazonaws.com/prod',
						proofNetwork: 1,
						hashContract: "0x660802Fc641b154aBA66a62137e71f331B6d787A",
						abi: BadgerTree.abi
					},
				},
			},
		},
		airdrops: {
			badger: "0xe0CC3F129ACe3888b41a4f8F04FC01CD1974C727"
		},
		curveBtcPools: {
			contracts: [
				"0x49849c98ae39fff122806c06791fa73784fb3675",  //renBTC/wBTC (crvRenWBTC)
				"0x64eda51d3ad40d56b9dfc5554e06f94e1dd786fd", //Curve.fi tBTC/sbtcCrv (tbtc/sbtc...)
				"0x075b1bb99792c9e1041ba13afef80c91a1e70fb3", //Curve.fi renBTC/wBTC/sBTC
			],
			prices: [
				"https://www.curve.fi/raw-stats/ren2-1440m.json",
				"https://www.curve.fi/raw-stats/tbtc-1440m.json",
				"https://www.curve.fi/raw-stats/rens-1440m.json",
			],
			names: [
				"Curve.fi renBTC/wBTC",
				"Curve.fi tBTC/sbtcCrv",
				"Curve.fi renBTC/wBTC/sBTC",
			],
			symbols: [
				"renBTC/wBTC",
				"tBTC/sbtcCrv",
				"renBTC/wBTC/sBTC",
			]
		}
	}
]

export const INFURA_KEY = "77a0f6647eb04f5ca1409bba62ae9128"
export const APP_URL = "https://app.badger.finance/"
export const CONTACT_EMAIL = "hello@badger.finance"
export const RPC_URL = "https://mainnet.infura.io/v3/77a0f6647eb04f5ca1409bba62ae9128"
export const APP_NAME = "badgerDAO"
import BigNumber from "bignumber.js";
import Web3 from "web3";
import { Contract, ContractSendMethod } from "web3-eth-contract";
import { PromiEvent } from 'web3-core'
import WalletStore from "../stores/walletStore";
import _ from "lodash";
import { CollectionsOutlined } from "@material-ui/icons";

const { fetchJson } = require('../../config/constants')

export const estimateAndSend = (web3: Web3, gasPrice: number, method: ContractSendMethod, address: string, callback: (transaction: PromiEvent<Contract>) => void) => {


	let instantWei = new BigNumber(gasPrice.toFixed(0))

	method.estimateGas({
		from: address,
		gas: instantWei.toNumber()
	}, (error: any, gasLimit: number) => {
		callback(method.send({ from: address, gas: gasLimit, gasPrice: instantWei.multipliedBy(1e9).toFixed(0) }))
	})


}


export const batchConfig = (namespace: string, wallet: WalletStore, addresses: any[], methods: any[], abi: any, allReadMethods: boolean = true) => {

	let readMethods = {}
	let abiFile = {}

	if (methods.length > 0)
		readMethods = {
			readMethods: methods
		}
	if (!!abi)
		abiFile = {
			abi: abi
		}
	return ({
		namespace,
		abi,
		addresses,
		allReadMethods,
		groupByNamespace: true,
		logging: false,
		...readMethods,
		...abiFile
	})
}

export const getTokenAddresses = (contracts: any, config: any) => {
	// pull underlying and yileding token addresses
	let addresses: any[] = []
	_.map(contracts, (contract: any) => {
		if (!!contract[config.underlying!])
			addresses.push({ address: contract[config.underlying!], contract: contract.address.toLowerCase(), type: 'underlying' })
		// if (!!contract[config.yielding!])
		// 	addresses.push({ address: contract[config.yielding!], contract: contract.address.toLowerCase(), type: 'yielding' })
	})
	return addresses
}

export const contractMethods = (config: any, wallet: WalletStore): any[] => {
	let methods = []
	if (!!config.rewards) {
		methods.push({
			name: config.rewards.method,
			args: config.rewards.tokens
		})
	}

	if (!!wallet.connectedAddress)
		methods = methods.concat(
			config.walletMethods.map((method: string) => {
				return {
					name: method,
					args: [
						wallet.connectedAddress
					]
				}
			}))

	return methods
}
export const erc20Methods = (wallet: WalletStore, token: any, vaults: any[]): any[] => {
	if (!!wallet.connectedAddress && !!token.contract) {
		// get allowance of each vault
	
		return [{
			name: "balanceOf",
			args: [
				Web3.utils.toChecksumAddress(wallet.connectedAddress)
			]
		}, {
			name: "allowance",
			args: [
				Web3.utils.toChecksumAddress(wallet.connectedAddress),
				Web3.utils.toChecksumAddress(token.contract),
			]
		}];
	} else {
		return []
	}
}

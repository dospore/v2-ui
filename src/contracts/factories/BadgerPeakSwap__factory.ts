/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { BadgerPeakSwap, BadgerPeakSwapInterface } from '../BadgerPeakSwap';

const _abi = [
	{
		inputs: [
			{
				internalType: 'int128',
				name: 'i',
				type: 'int128',
			},
			{
				internalType: 'int128',
				name: 'j',
				type: 'int128',
			},
			{
				internalType: 'uint256',
				name: 'dx',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'min_dy',
				type: 'uint256',
			},
		],
		name: 'exchange',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_virtual_price',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

export class BadgerPeakSwap__factory {
	static readonly abi = _abi;
	static createInterface(): BadgerPeakSwapInterface {
		return new utils.Interface(_abi) as BadgerPeakSwapInterface;
	}
	static connect(address: string, signerOrProvider: Signer | Provider): BadgerPeakSwap {
		return new Contract(address, _abi, signerOrProvider) as BadgerPeakSwap;
	}
}

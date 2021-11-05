/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ConvexDelegator, ConvexDelegatorInterface } from '../ConvexDelegator';

const _abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'delegate',
				type: 'address',
			},
		],
		name: 'ClearDelegate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'delegate',
				type: 'address',
			},
		],
		name: 'SetDelegate',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'clearDelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'delegation',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'delegate',
				type: 'address',
			},
		],
		name: 'setDelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

export class ConvexDelegator__factory {
	static readonly abi = _abi;
	static createInterface(): ConvexDelegatorInterface {
		return new utils.Interface(_abi) as ConvexDelegatorInterface;
	}
	static connect(address: string, signerOrProvider: Signer | Provider): ConvexDelegator {
		return new Contract(address, _abi, signerOrProvider) as ConvexDelegator;
	}
}

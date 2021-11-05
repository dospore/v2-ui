/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
	ethers,
	EventFilter,
	Signer,
	BigNumber,
	BigNumberish,
	PopulatedTransaction,
	BaseContract,
	ContractTransaction,
	Overrides,
	CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface VotiumMerkleTreeInterface extends ethers.utils.Interface {
	functions: {
		'claim(address,uint256,address,uint256,bytes32[])': FunctionFragment;
		'claimMulti(address,(address,uint256,uint256,bytes32[])[])': FunctionFragment;
		'isClaimed(address,uint256)': FunctionFragment;
		'merkleRoot(address)': FunctionFragment;
		'owner()': FunctionFragment;
		'transferOwnership(address)': FunctionFragment;
		'update(address)': FunctionFragment;
		'updateMerkleRoot(address,bytes32)': FunctionFragment;
	};

	encodeFunctionData(
		functionFragment: 'claim',
		values: [string, BigNumberish, string, BigNumberish, BytesLike[]],
	): string;
	encodeFunctionData(
		functionFragment: 'claimMulti',
		values: [
			string,
			{
				token: string;
				index: BigNumberish;
				amount: BigNumberish;
				merkleProof: BytesLike[];
			}[],
		],
	): string;
	encodeFunctionData(functionFragment: 'isClaimed', values: [string, BigNumberish]): string;
	encodeFunctionData(functionFragment: 'merkleRoot', values: [string]): string;
	encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
	encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
	encodeFunctionData(functionFragment: 'update', values: [string]): string;
	encodeFunctionData(functionFragment: 'updateMerkleRoot', values: [string, BytesLike]): string;

	decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'claimMulti', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'isClaimed', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'merkleRoot', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'update', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'updateMerkleRoot', data: BytesLike): Result;

	events: {
		'Claimed(address,uint256,uint256,address,uint256)': EventFragment;
		'MerkleRootUpdated(address,bytes32,uint256)': EventFragment;
		'OwnershipTransferred(address,address)': EventFragment;
	};

	getEvent(nameOrSignatureOrTopic: 'Claimed'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'MerkleRootUpdated'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export type ClaimedEvent = TypedEvent<
	[string, BigNumber, BigNumber, string, BigNumber] & {
		token: string;
		index: BigNumber;
		amount: BigNumber;
		account: string;
		update: BigNumber;
	}
>;

export type MerkleRootUpdatedEvent = TypedEvent<
	[string, string, BigNumber] & {
		token: string;
		merkleRoot: string;
		update: BigNumber;
	}
>;

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>;

export class VotiumMerkleTree extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this;
	attach(addressOrName: string): this;
	deployed(): Promise<this>;

	listeners<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
	): Array<TypedListener<EventArgsArray, EventArgsObject>>;
	off<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>,
	): this;
	on<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>,
	): this;
	once<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>,
	): this;
	removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>,
	): this;
	removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
	): this;

	listeners(eventName?: string): Array<Listener>;
	off(eventName: string, listener: Listener): this;
	on(eventName: string, listener: Listener): this;
	once(eventName: string, listener: Listener): this;
	removeListener(eventName: string, listener: Listener): this;
	removeAllListeners(eventName?: string): this;

	queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
		event: TypedEventFilter<EventArgsArray, EventArgsObject>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined,
	): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

	interface: VotiumMerkleTreeInterface;

	functions: {
		claim(
			token: string,
			index: BigNumberish,
			account: string,
			amount: BigNumberish,
			merkleProof: BytesLike[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		claimMulti(
			account: string,
			claims: {
				token: string;
				index: BigNumberish;
				amount: BigNumberish;
				merkleProof: BytesLike[];
			}[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		isClaimed(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

		merkleRoot(arg0: string, overrides?: CallOverrides): Promise<[string]>;

		owner(overrides?: CallOverrides): Promise<[string]>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		update(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

		updateMerkleRoot(
			token: string,
			_merkleRoot: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;
	};

	claim(
		token: string,
		index: BigNumberish,
		account: string,
		amount: BigNumberish,
		merkleProof: BytesLike[],
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	claimMulti(
		account: string,
		claims: {
			token: string;
			index: BigNumberish;
			amount: BigNumberish;
			merkleProof: BytesLike[];
		}[],
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	isClaimed(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

	merkleRoot(arg0: string, overrides?: CallOverrides): Promise<string>;

	owner(overrides?: CallOverrides): Promise<string>;

	transferOwnership(
		newOwner: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	update(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

	updateMerkleRoot(
		token: string,
		_merkleRoot: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	callStatic: {
		claim(
			token: string,
			index: BigNumberish,
			account: string,
			amount: BigNumberish,
			merkleProof: BytesLike[],
			overrides?: CallOverrides,
		): Promise<void>;

		claimMulti(
			account: string,
			claims: {
				token: string;
				index: BigNumberish;
				amount: BigNumberish;
				merkleProof: BytesLike[];
			}[],
			overrides?: CallOverrides,
		): Promise<void>;

		isClaimed(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		merkleRoot(arg0: string, overrides?: CallOverrides): Promise<string>;

		owner(overrides?: CallOverrides): Promise<string>;

		transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

		update(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

		updateMerkleRoot(token: string, _merkleRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
	};

	filters: {
		'Claimed(address,uint256,uint256,address,uint256)'(
			token?: string | null,
			index?: null,
			amount?: null,
			account?: string | null,
			update?: BigNumberish | null,
		): TypedEventFilter<
			[string, BigNumber, BigNumber, string, BigNumber],
			{
				token: string;
				index: BigNumber;
				amount: BigNumber;
				account: string;
				update: BigNumber;
			}
		>;

		Claimed(
			token?: string | null,
			index?: null,
			amount?: null,
			account?: string | null,
			update?: BigNumberish | null,
		): TypedEventFilter<
			[string, BigNumber, BigNumber, string, BigNumber],
			{
				token: string;
				index: BigNumber;
				amount: BigNumber;
				account: string;
				update: BigNumber;
			}
		>;

		'MerkleRootUpdated(address,bytes32,uint256)'(
			token?: string | null,
			merkleRoot?: BytesLike | null,
			update?: BigNumberish | null,
		): TypedEventFilter<[string, string, BigNumber], { token: string; merkleRoot: string; update: BigNumber }>;

		MerkleRootUpdated(
			token?: string | null,
			merkleRoot?: BytesLike | null,
			update?: BigNumberish | null,
		): TypedEventFilter<[string, string, BigNumber], { token: string; merkleRoot: string; update: BigNumber }>;

		'OwnershipTransferred(address,address)'(
			previousOwner?: string | null,
			newOwner?: string | null,
		): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

		OwnershipTransferred(
			previousOwner?: string | null,
			newOwner?: string | null,
		): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;
	};

	estimateGas: {
		claim(
			token: string,
			index: BigNumberish,
			account: string,
			amount: BigNumberish,
			merkleProof: BytesLike[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		claimMulti(
			account: string,
			claims: {
				token: string;
				index: BigNumberish;
				amount: BigNumberish;
				merkleProof: BytesLike[];
			}[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		isClaimed(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		merkleRoot(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<BigNumber>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		update(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

		updateMerkleRoot(
			token: string,
			_merkleRoot: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;
	};

	populateTransaction: {
		claim(
			token: string,
			index: BigNumberish,
			account: string,
			amount: BigNumberish,
			merkleProof: BytesLike[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		claimMulti(
			account: string,
			claims: {
				token: string;
				index: BigNumberish;
				amount: BigNumberish;
				merkleProof: BytesLike[];
			}[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		isClaimed(token: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		merkleRoot(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		update(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		updateMerkleRoot(
			token: string,
			_merkleRoot: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;
	};
}

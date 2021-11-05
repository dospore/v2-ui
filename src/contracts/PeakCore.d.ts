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

interface PeakCoreInterface extends ethers.utils.Interface {
	functions: {
		'accumulatedFee()': FunctionFragment;
		'bBTC()': FunctionFragment;
		'bBtcToBtc(uint256)': FunctionFragment;
		'btcToBbtc(uint256)': FunctionFragment;
		'collectFee()': FunctionFragment;
		'feeSink()': FunctionFragment;
		'guestList()': FunctionFragment;
		'mint(uint256,address,bytes32[])': FunctionFragment;
		'mintFee()': FunctionFragment;
		'owner()': FunctionFragment;
		'peakAddresses(uint256)': FunctionFragment;
		'peaks(address)': FunctionFragment;
		'pricePerShare()': FunctionFragment;
		'redeem(uint256,address)': FunctionFragment;
		'redeemFee()': FunctionFragment;
		'setConfig(uint256,uint256,address)': FunctionFragment;
		'setGuestList(address)': FunctionFragment;
		'setPeakStatus(address,uint8)': FunctionFragment;
		'totalSystemAssets()': FunctionFragment;
		'transferOwnership(address)': FunctionFragment;
		'whitelistPeak(address)': FunctionFragment;
	};

	encodeFunctionData(functionFragment: 'accumulatedFee', values?: undefined): string;
	encodeFunctionData(functionFragment: 'bBTC', values?: undefined): string;
	encodeFunctionData(functionFragment: 'bBtcToBtc', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'btcToBbtc', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'collectFee', values?: undefined): string;
	encodeFunctionData(functionFragment: 'feeSink', values?: undefined): string;
	encodeFunctionData(functionFragment: 'guestList', values?: undefined): string;
	encodeFunctionData(functionFragment: 'mint', values: [BigNumberish, string, BytesLike[]]): string;
	encodeFunctionData(functionFragment: 'mintFee', values?: undefined): string;
	encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
	encodeFunctionData(functionFragment: 'peakAddresses', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'peaks', values: [string]): string;
	encodeFunctionData(functionFragment: 'pricePerShare', values?: undefined): string;
	encodeFunctionData(functionFragment: 'redeem', values: [BigNumberish, string]): string;
	encodeFunctionData(functionFragment: 'redeemFee', values?: undefined): string;
	encodeFunctionData(functionFragment: 'setConfig', values: [BigNumberish, BigNumberish, string]): string;
	encodeFunctionData(functionFragment: 'setGuestList', values: [string]): string;
	encodeFunctionData(functionFragment: 'setPeakStatus', values: [string, BigNumberish]): string;
	encodeFunctionData(functionFragment: 'totalSystemAssets', values?: undefined): string;
	encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
	encodeFunctionData(functionFragment: 'whitelistPeak', values: [string]): string;

	decodeFunctionResult(functionFragment: 'accumulatedFee', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'bBTC', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'bBtcToBtc', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'btcToBbtc', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'collectFee', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'feeSink', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'guestList', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'mintFee', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'peakAddresses', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'peaks', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'pricePerShare', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'redeemFee', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setGuestList', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setPeakStatus', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'totalSystemAssets', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'whitelistPeak', data: BytesLike): Result;

	events: {
		'FeeCollected(uint256)': EventFragment;
		'OwnershipTransferred(address,address)': EventFragment;
		'PeakWhitelisted(address)': EventFragment;
	};

	getEvent(nameOrSignatureOrTopic: 'FeeCollected'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'PeakWhitelisted'): EventFragment;
}

export type FeeCollectedEvent = TypedEvent<[BigNumber] & { amount: BigNumber }>;

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>;

export type PeakWhitelistedEvent = TypedEvent<[string] & { peak: string }>;

export class PeakCore extends BaseContract {
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

	interface: PeakCoreInterface;

	functions: {
		accumulatedFee(overrides?: CallOverrides): Promise<[BigNumber]>;

		bBTC(overrides?: CallOverrides): Promise<[string]>;

		bBtcToBtc(
			bBtc: BigNumberish,
			overrides?: CallOverrides,
		): Promise<[BigNumber, BigNumber] & { btc: BigNumber; fee: BigNumber }>;

		btcToBbtc(
			btc: BigNumberish,
			overrides?: CallOverrides,
		): Promise<[BigNumber, BigNumber] & { bBtc: BigNumber; fee: BigNumber }>;

		collectFee(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

		feeSink(overrides?: CallOverrides): Promise<[string]>;

		guestList(overrides?: CallOverrides): Promise<[string]>;

		mint(
			btc: BigNumberish,
			account: string,
			merkleProof: BytesLike[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		mintFee(overrides?: CallOverrides): Promise<[BigNumber]>;

		owner(overrides?: CallOverrides): Promise<[string] & { _owner: string }>;

		peakAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

		peaks(arg0: string, overrides?: CallOverrides): Promise<[number]>;

		pricePerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

		redeem(
			bBtc: BigNumberish,
			account: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		redeemFee(overrides?: CallOverrides): Promise<[BigNumber]>;

		setConfig(
			_mintFee: BigNumberish,
			_redeemFee: BigNumberish,
			_feeSink: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setGuestList(
			_guestList: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setPeakStatus(
			peak: string,
			state: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		totalSystemAssets(overrides?: CallOverrides): Promise<[BigNumber] & { totalAssets: BigNumber }>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		whitelistPeak(
			peak: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;
	};

	accumulatedFee(overrides?: CallOverrides): Promise<BigNumber>;

	bBTC(overrides?: CallOverrides): Promise<string>;

	bBtcToBtc(
		bBtc: BigNumberish,
		overrides?: CallOverrides,
	): Promise<[BigNumber, BigNumber] & { btc: BigNumber; fee: BigNumber }>;

	btcToBbtc(
		btc: BigNumberish,
		overrides?: CallOverrides,
	): Promise<[BigNumber, BigNumber] & { bBtc: BigNumber; fee: BigNumber }>;

	collectFee(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

	feeSink(overrides?: CallOverrides): Promise<string>;

	guestList(overrides?: CallOverrides): Promise<string>;

	mint(
		btc: BigNumberish,
		account: string,
		merkleProof: BytesLike[],
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	mintFee(overrides?: CallOverrides): Promise<BigNumber>;

	owner(overrides?: CallOverrides): Promise<string>;

	peakAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

	peaks(arg0: string, overrides?: CallOverrides): Promise<number>;

	pricePerShare(overrides?: CallOverrides): Promise<BigNumber>;

	redeem(
		bBtc: BigNumberish,
		account: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	redeemFee(overrides?: CallOverrides): Promise<BigNumber>;

	setConfig(
		_mintFee: BigNumberish,
		_redeemFee: BigNumberish,
		_feeSink: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setGuestList(
		_guestList: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setPeakStatus(
		peak: string,
		state: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	totalSystemAssets(overrides?: CallOverrides): Promise<BigNumber>;

	transferOwnership(
		newOwner: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	whitelistPeak(
		peak: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	callStatic: {
		accumulatedFee(overrides?: CallOverrides): Promise<BigNumber>;

		bBTC(overrides?: CallOverrides): Promise<string>;

		bBtcToBtc(
			bBtc: BigNumberish,
			overrides?: CallOverrides,
		): Promise<[BigNumber, BigNumber] & { btc: BigNumber; fee: BigNumber }>;

		btcToBbtc(
			btc: BigNumberish,
			overrides?: CallOverrides,
		): Promise<[BigNumber, BigNumber] & { bBtc: BigNumber; fee: BigNumber }>;

		collectFee(overrides?: CallOverrides): Promise<void>;

		feeSink(overrides?: CallOverrides): Promise<string>;

		guestList(overrides?: CallOverrides): Promise<string>;

		mint(
			btc: BigNumberish,
			account: string,
			merkleProof: BytesLike[],
			overrides?: CallOverrides,
		): Promise<BigNumber>;

		mintFee(overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<string>;

		peakAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

		peaks(arg0: string, overrides?: CallOverrides): Promise<number>;

		pricePerShare(overrides?: CallOverrides): Promise<BigNumber>;

		redeem(bBtc: BigNumberish, account: string, overrides?: CallOverrides): Promise<BigNumber>;

		redeemFee(overrides?: CallOverrides): Promise<BigNumber>;

		setConfig(
			_mintFee: BigNumberish,
			_redeemFee: BigNumberish,
			_feeSink: string,
			overrides?: CallOverrides,
		): Promise<void>;

		setGuestList(_guestList: string, overrides?: CallOverrides): Promise<void>;

		setPeakStatus(peak: string, state: BigNumberish, overrides?: CallOverrides): Promise<void>;

		totalSystemAssets(overrides?: CallOverrides): Promise<BigNumber>;

		transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

		whitelistPeak(peak: string, overrides?: CallOverrides): Promise<void>;
	};

	filters: {
		'FeeCollected(uint256)'(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

		FeeCollected(amount?: null): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

		'OwnershipTransferred(address,address)'(
			previousOwner?: string | null,
			newOwner?: string | null,
		): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

		OwnershipTransferred(
			previousOwner?: string | null,
			newOwner?: string | null,
		): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

		'PeakWhitelisted(address)'(peak?: string | null): TypedEventFilter<[string], { peak: string }>;

		PeakWhitelisted(peak?: string | null): TypedEventFilter<[string], { peak: string }>;
	};

	estimateGas: {
		accumulatedFee(overrides?: CallOverrides): Promise<BigNumber>;

		bBTC(overrides?: CallOverrides): Promise<BigNumber>;

		bBtcToBtc(bBtc: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		btcToBbtc(btc: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		collectFee(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

		feeSink(overrides?: CallOverrides): Promise<BigNumber>;

		guestList(overrides?: CallOverrides): Promise<BigNumber>;

		mint(
			btc: BigNumberish,
			account: string,
			merkleProof: BytesLike[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		mintFee(overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<BigNumber>;

		peakAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		peaks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

		pricePerShare(overrides?: CallOverrides): Promise<BigNumber>;

		redeem(
			bBtc: BigNumberish,
			account: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		redeemFee(overrides?: CallOverrides): Promise<BigNumber>;

		setConfig(
			_mintFee: BigNumberish,
			_redeemFee: BigNumberish,
			_feeSink: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setGuestList(
			_guestList: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setPeakStatus(
			peak: string,
			state: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		totalSystemAssets(overrides?: CallOverrides): Promise<BigNumber>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		whitelistPeak(peak: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
	};

	populateTransaction: {
		accumulatedFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		bBTC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		bBtcToBtc(bBtc: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		btcToBbtc(btc: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		collectFee(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

		feeSink(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		guestList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		mint(
			btc: BigNumberish,
			account: string,
			merkleProof: BytesLike[],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		mintFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		peakAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		peaks(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		pricePerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		redeem(
			bBtc: BigNumberish,
			account: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		redeemFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		setConfig(
			_mintFee: BigNumberish,
			_redeemFee: BigNumberish,
			_feeSink: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setGuestList(
			_guestList: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setPeakStatus(
			peak: string,
			state: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		totalSystemAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		whitelistPeak(
			peak: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;
	};
}

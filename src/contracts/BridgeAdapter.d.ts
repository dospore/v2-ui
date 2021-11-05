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

interface BridgeAdapterInterface extends ethers.utils.Interface {
	functions: {
		'MAX_BPS()': FunctionFragment;
		'approvedVaults(address)': FunctionFragment;
		'burn(address,address,uint256,bytes,uint256)': FunctionFragment;
		'burnFeeBps()': FunctionFragment;
		'governance()': FunctionFragment;
		'initialize(address,address,address,address,address,uint256[4])': FunctionFragment;
		'mint(address,uint256,address,address,uint256,bytes32,bytes)': FunctionFragment;
		'mintFeeBps()': FunctionFragment;
		'owner()': FunctionFragment;
		'recoverStuck(bytes,uint256,bytes32,bytes)': FunctionFragment;
		'registry()': FunctionFragment;
		'renBTC()': FunctionFragment;
		'renounceOwnership()': FunctionFragment;
		'rewards()': FunctionFragment;
		'router()': FunctionFragment;
		'setBurnFeeBps(uint256)': FunctionFragment;
		'setCurveTokenWrapper(address)': FunctionFragment;
		'setMintFeeBps(uint256)': FunctionFragment;
		'setPercentageFeeGovernanceBps(uint256)': FunctionFragment;
		'setPercentageFeeRewardsBps(uint256)': FunctionFragment;
		'setRegistry(address)': FunctionFragment;
		'setRewards(address)': FunctionFragment;
		'setRouter(address)': FunctionFragment;
		'setVaultApproval(address,bool)': FunctionFragment;
		'sweep()': FunctionFragment;
		'transferOwnership(address)': FunctionFragment;
		'version()': FunctionFragment;
		'wBTC()': FunctionFragment;
	};

	encodeFunctionData(functionFragment: 'MAX_BPS', values?: undefined): string;
	encodeFunctionData(functionFragment: 'approvedVaults', values: [string]): string;
	encodeFunctionData(
		functionFragment: 'burn',
		values: [string, string, BigNumberish, BytesLike, BigNumberish],
	): string;
	encodeFunctionData(functionFragment: 'burnFeeBps', values?: undefined): string;
	encodeFunctionData(functionFragment: 'governance', values?: undefined): string;
	encodeFunctionData(
		functionFragment: 'initialize',
		values: [string, string, string, string, string, [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
	): string;
	encodeFunctionData(
		functionFragment: 'mint',
		values: [string, BigNumberish, string, string, BigNumberish, BytesLike, BytesLike],
	): string;
	encodeFunctionData(functionFragment: 'mintFeeBps', values?: undefined): string;
	encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
	encodeFunctionData(
		functionFragment: 'recoverStuck',
		values: [BytesLike, BigNumberish, BytesLike, BytesLike],
	): string;
	encodeFunctionData(functionFragment: 'registry', values?: undefined): string;
	encodeFunctionData(functionFragment: 'renBTC', values?: undefined): string;
	encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
	encodeFunctionData(functionFragment: 'rewards', values?: undefined): string;
	encodeFunctionData(functionFragment: 'router', values?: undefined): string;
	encodeFunctionData(functionFragment: 'setBurnFeeBps', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'setCurveTokenWrapper', values: [string]): string;
	encodeFunctionData(functionFragment: 'setMintFeeBps', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'setPercentageFeeGovernanceBps', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'setPercentageFeeRewardsBps', values: [BigNumberish]): string;
	encodeFunctionData(functionFragment: 'setRegistry', values: [string]): string;
	encodeFunctionData(functionFragment: 'setRewards', values: [string]): string;
	encodeFunctionData(functionFragment: 'setRouter', values: [string]): string;
	encodeFunctionData(functionFragment: 'setVaultApproval', values: [string, boolean]): string;
	encodeFunctionData(functionFragment: 'sweep', values?: undefined): string;
	encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
	encodeFunctionData(functionFragment: 'version', values?: undefined): string;
	encodeFunctionData(functionFragment: 'wBTC', values?: undefined): string;

	decodeFunctionResult(functionFragment: 'MAX_BPS', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'approvedVaults', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'burnFeeBps', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'mintFeeBps', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'recoverStuck', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'registry', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'renBTC', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setBurnFeeBps', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setCurveTokenWrapper', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setMintFeeBps', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setPercentageFeeGovernanceBps', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setPercentageFeeRewardsBps', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setRegistry', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setRewards', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setRouter', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'setVaultApproval', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'sweep', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result;
	decodeFunctionResult(functionFragment: 'wBTC', data: BytesLike): Result;

	events: {
		'Burn(uint256,uint256,uint256)': EventFragment;
		'Mint(uint256,uint256,uint256)': EventFragment;
		'OwnershipTransferred(address,address)': EventFragment;
		'RecoverStuck(uint256,uint256)': EventFragment;
		'SwapError(bytes)': EventFragment;
	};

	getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'RecoverStuck'): EventFragment;
	getEvent(nameOrSignatureOrTopic: 'SwapError'): EventFragment;
}

export type BurnEvent = TypedEvent<
	[BigNumber, BigNumber, BigNumber] & {
		renbtc_burned: BigNumber;
		wbtc_transferred: BigNumber;
		fee: BigNumber;
	}
>;

export type MintEvent = TypedEvent<
	[BigNumber, BigNumber, BigNumber] & {
		renbtc_minted: BigNumber;
		wbtc_swapped: BigNumber;
		fee: BigNumber;
	}
>;

export type OwnershipTransferredEvent = TypedEvent<[string, string] & { previousOwner: string; newOwner: string }>;

export type RecoverStuckEvent = TypedEvent<[BigNumber, BigNumber] & { amount: BigNumber; fee: BigNumber }>;

export type SwapErrorEvent = TypedEvent<[string] & { error: string }>;

export class BridgeAdapter extends BaseContract {
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

	interface: BridgeAdapterInterface;

	functions: {
		MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

		approvedVaults(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

		burn(
			_token: string,
			_vault: string,
			_slippage: BigNumberish,
			_btcDestination: BytesLike,
			_amount: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		burnFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;

		governance(overrides?: CallOverrides): Promise<[string]>;

		initialize(
			_governance: string,
			_rewards: string,
			_registry: string,
			_router: string,
			_wbtc: string,
			_feeConfig: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		mint(
			_token: string,
			_slippage: BigNumberish,
			_user: string,
			_vault: string,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		mintFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;

		owner(overrides?: CallOverrides): Promise<[string]>;

		recoverStuck(
			encoded: BytesLike,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		registry(overrides?: CallOverrides): Promise<[string]>;

		renBTC(overrides?: CallOverrides): Promise<[string]>;

		renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

		rewards(overrides?: CallOverrides): Promise<[string]>;

		router(overrides?: CallOverrides): Promise<[string]>;

		setBurnFeeBps(
			_burnFeeBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setCurveTokenWrapper(
			_wrapper: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setMintFeeBps(
			_mintFeeBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setPercentageFeeGovernanceBps(
			_percentageFeeGovernanceBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setPercentageFeeRewardsBps(
			_percentageFeeRewardsBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setRegistry(
			_registry: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setRewards(
			_rewards: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setRouter(
			_router: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		setVaultApproval(
			_vault: string,
			_status: boolean,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		sweep(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<ContractTransaction>;

		version(overrides?: CallOverrides): Promise<[string]>;

		wBTC(overrides?: CallOverrides): Promise<[string]>;
	};

	MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

	approvedVaults(arg0: string, overrides?: CallOverrides): Promise<boolean>;

	burn(
		_token: string,
		_vault: string,
		_slippage: BigNumberish,
		_btcDestination: BytesLike,
		_amount: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	burnFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

	governance(overrides?: CallOverrides): Promise<string>;

	initialize(
		_governance: string,
		_rewards: string,
		_registry: string,
		_router: string,
		_wbtc: string,
		_feeConfig: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	mint(
		_token: string,
		_slippage: BigNumberish,
		_user: string,
		_vault: string,
		_amount: BigNumberish,
		_nHash: BytesLike,
		_sig: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	mintFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

	owner(overrides?: CallOverrides): Promise<string>;

	recoverStuck(
		encoded: BytesLike,
		_amount: BigNumberish,
		_nHash: BytesLike,
		_sig: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	registry(overrides?: CallOverrides): Promise<string>;

	renBTC(overrides?: CallOverrides): Promise<string>;

	renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

	rewards(overrides?: CallOverrides): Promise<string>;

	router(overrides?: CallOverrides): Promise<string>;

	setBurnFeeBps(
		_burnFeeBps: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setCurveTokenWrapper(
		_wrapper: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setMintFeeBps(
		_mintFeeBps: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setPercentageFeeGovernanceBps(
		_percentageFeeGovernanceBps: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setPercentageFeeRewardsBps(
		_percentageFeeRewardsBps: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setRegistry(
		_registry: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setRewards(
		_rewards: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setRouter(
		_router: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	setVaultApproval(
		_vault: string,
		_status: boolean,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	sweep(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

	transferOwnership(
		newOwner: string,
		overrides?: Overrides & { from?: string | Promise<string> },
	): Promise<ContractTransaction>;

	version(overrides?: CallOverrides): Promise<string>;

	wBTC(overrides?: CallOverrides): Promise<string>;

	callStatic: {
		MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

		approvedVaults(arg0: string, overrides?: CallOverrides): Promise<boolean>;

		burn(
			_token: string,
			_vault: string,
			_slippage: BigNumberish,
			_btcDestination: BytesLike,
			_amount: BigNumberish,
			overrides?: CallOverrides,
		): Promise<void>;

		burnFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

		governance(overrides?: CallOverrides): Promise<string>;

		initialize(
			_governance: string,
			_rewards: string,
			_registry: string,
			_router: string,
			_wbtc: string,
			_feeConfig: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
			overrides?: CallOverrides,
		): Promise<void>;

		mint(
			_token: string,
			_slippage: BigNumberish,
			_user: string,
			_vault: string,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: CallOverrides,
		): Promise<void>;

		mintFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<string>;

		recoverStuck(
			encoded: BytesLike,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: CallOverrides,
		): Promise<void>;

		registry(overrides?: CallOverrides): Promise<string>;

		renBTC(overrides?: CallOverrides): Promise<string>;

		renounceOwnership(overrides?: CallOverrides): Promise<void>;

		rewards(overrides?: CallOverrides): Promise<string>;

		router(overrides?: CallOverrides): Promise<string>;

		setBurnFeeBps(_burnFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;

		setCurveTokenWrapper(_wrapper: string, overrides?: CallOverrides): Promise<void>;

		setMintFeeBps(_mintFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;

		setPercentageFeeGovernanceBps(
			_percentageFeeGovernanceBps: BigNumberish,
			overrides?: CallOverrides,
		): Promise<void>;

		setPercentageFeeRewardsBps(_percentageFeeRewardsBps: BigNumberish, overrides?: CallOverrides): Promise<void>;

		setRegistry(_registry: string, overrides?: CallOverrides): Promise<void>;

		setRewards(_rewards: string, overrides?: CallOverrides): Promise<void>;

		setRouter(_router: string, overrides?: CallOverrides): Promise<void>;

		setVaultApproval(_vault: string, _status: boolean, overrides?: CallOverrides): Promise<void>;

		sweep(overrides?: CallOverrides): Promise<void>;

		transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

		version(overrides?: CallOverrides): Promise<string>;

		wBTC(overrides?: CallOverrides): Promise<string>;
	};

	filters: {
		'Burn(uint256,uint256,uint256)'(
			renbtc_burned?: null,
			wbtc_transferred?: null,
			fee?: null,
		): TypedEventFilter<
			[BigNumber, BigNumber, BigNumber],
			{ renbtc_burned: BigNumber; wbtc_transferred: BigNumber; fee: BigNumber }
		>;

		Burn(
			renbtc_burned?: null,
			wbtc_transferred?: null,
			fee?: null,
		): TypedEventFilter<
			[BigNumber, BigNumber, BigNumber],
			{ renbtc_burned: BigNumber; wbtc_transferred: BigNumber; fee: BigNumber }
		>;

		'Mint(uint256,uint256,uint256)'(
			renbtc_minted?: null,
			wbtc_swapped?: null,
			fee?: null,
		): TypedEventFilter<
			[BigNumber, BigNumber, BigNumber],
			{ renbtc_minted: BigNumber; wbtc_swapped: BigNumber; fee: BigNumber }
		>;

		Mint(
			renbtc_minted?: null,
			wbtc_swapped?: null,
			fee?: null,
		): TypedEventFilter<
			[BigNumber, BigNumber, BigNumber],
			{ renbtc_minted: BigNumber; wbtc_swapped: BigNumber; fee: BigNumber }
		>;

		'OwnershipTransferred(address,address)'(
			previousOwner?: string | null,
			newOwner?: string | null,
		): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

		OwnershipTransferred(
			previousOwner?: string | null,
			newOwner?: string | null,
		): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

		'RecoverStuck(uint256,uint256)'(
			amount?: null,
			fee?: null,
		): TypedEventFilter<[BigNumber, BigNumber], { amount: BigNumber; fee: BigNumber }>;

		RecoverStuck(
			amount?: null,
			fee?: null,
		): TypedEventFilter<[BigNumber, BigNumber], { amount: BigNumber; fee: BigNumber }>;

		'SwapError(bytes)'(error?: null): TypedEventFilter<[string], { error: string }>;

		SwapError(error?: null): TypedEventFilter<[string], { error: string }>;
	};

	estimateGas: {
		MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

		approvedVaults(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

		burn(
			_token: string,
			_vault: string,
			_slippage: BigNumberish,
			_btcDestination: BytesLike,
			_amount: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		burnFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

		governance(overrides?: CallOverrides): Promise<BigNumber>;

		initialize(
			_governance: string,
			_rewards: string,
			_registry: string,
			_router: string,
			_wbtc: string,
			_feeConfig: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		mint(
			_token: string,
			_slippage: BigNumberish,
			_user: string,
			_vault: string,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		mintFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<BigNumber>;

		recoverStuck(
			encoded: BytesLike,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		registry(overrides?: CallOverrides): Promise<BigNumber>;

		renBTC(overrides?: CallOverrides): Promise<BigNumber>;

		renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

		rewards(overrides?: CallOverrides): Promise<BigNumber>;

		router(overrides?: CallOverrides): Promise<BigNumber>;

		setBurnFeeBps(
			_burnFeeBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setCurveTokenWrapper(
			_wrapper: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setMintFeeBps(
			_mintFeeBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setPercentageFeeGovernanceBps(
			_percentageFeeGovernanceBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setPercentageFeeRewardsBps(
			_percentageFeeRewardsBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		setRegistry(_registry: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

		setRewards(_rewards: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

		setRouter(_router: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

		setVaultApproval(
			_vault: string,
			_status: boolean,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		sweep(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<BigNumber>;

		version(overrides?: CallOverrides): Promise<BigNumber>;

		wBTC(overrides?: CallOverrides): Promise<BigNumber>;
	};

	populateTransaction: {
		MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		approvedVaults(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

		burn(
			_token: string,
			_vault: string,
			_slippage: BigNumberish,
			_btcDestination: BytesLike,
			_amount: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		burnFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		initialize(
			_governance: string,
			_rewards: string,
			_registry: string,
			_router: string,
			_wbtc: string,
			_feeConfig: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		mint(
			_token: string,
			_slippage: BigNumberish,
			_user: string,
			_vault: string,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		mintFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		recoverStuck(
			encoded: BytesLike,
			_amount: BigNumberish,
			_nHash: BytesLike,
			_sig: BytesLike,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		renBTC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

		rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		setBurnFeeBps(
			_burnFeeBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setCurveTokenWrapper(
			_wrapper: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setMintFeeBps(
			_mintFeeBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setPercentageFeeGovernanceBps(
			_percentageFeeGovernanceBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setPercentageFeeRewardsBps(
			_percentageFeeRewardsBps: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setRegistry(
			_registry: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setRewards(
			_rewards: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setRouter(
			_router: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		setVaultApproval(
			_vault: string,
			_status: boolean,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		sweep(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> },
		): Promise<PopulatedTransaction>;

		version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		wBTC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
	};
}

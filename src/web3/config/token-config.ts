import { ethers } from 'ethers';
import { arbitrumProtocolTokens } from 'mobx/model/network/arbitrum.network';
import { avaxProtocolTokens } from 'mobx/model/network/avalanche.network';
import { bscProtocolTokens } from 'mobx/model/network/bsc.network';
import { ethProtocolTokens } from 'mobx/model/network/eth.network';
import { ftmProtocolTokens } from 'mobx/model/network/ftm.network';
import { maticProtocolTokens } from 'mobx/model/network/matic.network';
import { BadgerToken } from 'mobx/model/tokens/badger-token';
import { ProtocolTokens } from 'web3/interface/protocol-token';

export const protocolTokens = (): ProtocolTokens => {
	const tokens = {
		...(ethProtocolTokens && ethProtocolTokens),
		...(bscProtocolTokens && bscProtocolTokens),
		...(maticProtocolTokens && maticProtocolTokens),
		...(arbitrumProtocolTokens && arbitrumProtocolTokens),
		...(avaxProtocolTokens && avaxProtocolTokens),
		...(ftmProtocolTokens && ftmProtocolTokens),
	};
	return Object.fromEntries(
		Object.entries(tokens).map((t) => {
			const [address, token] = t;
			token.address = ethers.utils.getAddress(token.address);
			return [ethers.utils.getAddress(address), token];
		}),
	);
};

export const getToken = (address: string): BadgerToken | undefined => {
	return protocolTokens()[address];
};

/**
 * https://stackoverflow.com/questions/61414459/typescript-generic-array-to-record-function-with-proper-type-restrictions
 */
export function toRecord<
	T extends { [K in keyof T]: string | number | symbol }, // added constraint
	K extends keyof T,
>(array: T[], selector: K): Record<T[K], T> {
	return array.reduce((acc, item) => ((acc[item[selector]] = item), acc), {} as Record<T[K], T>);
}

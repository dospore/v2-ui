import React, { useContext } from 'react';
import BigNumber from 'bignumber.js';
import { Typography, List, ListItem } from '@material-ui/core';
import { Vault, Geyser, Sett } from 'mobx/model';
import _ from 'lodash';
import {
	formatBalanceUnderlying,
	formatBalanceValue,
	formatGeyserBalance,
	formatGeyserBalanceValue,
	formatBalance,
	formatTokenBalanceValue,
} from 'mobx/reducers/statsReducers';
import { StoreContext } from 'mobx/store-context';
import TableHeader from '../../components/Collection/Setts/TableHeader';
import { DepositCardV2 } from '../common/DepositCardV2';

interface DepositListProps {
	contracts: string[];
	settList: Sett[];
	vaults: any;
	hideZeroBal: boolean;
	classes: Record<'title' | 'header' | 'list' | 'listItem' | 'before' | 'hiddenMobile' | 'chip', string>;
	onOpen: (vault: Vault, sett: Sett) => void;
	period: string;
	vaultBalance: string;
	depositBalance: string;
	walletBalance: string;
}

export default function DepositListV2(props: DepositListProps): JSX.Element {
	const {
		settList,
		contracts,
		classes,
		vaults,
		hideZeroBal,
		onOpen,
		period,
		walletBalance,
		depositBalance,
		vaultBalance,
	} = props;
	console.log('props: ', props);
	const store = useContext(StoreContext);
	const {
		uiState: { currency },
	} = store;

	let walletBalances = contracts.map((address: string) => {
		const vault: Vault = vaults[address.toLowerCase()];
		const sett: any = settList.find((s: Sett) => s.underlyingToken.toLowerCase() === address.toLowerCase());
		const userBalance =
			vault && vault.underlyingToken ? new BigNumber(vault.underlyingToken.balance) : new BigNumber(0);
		if (sett && userBalance.gt(0)) {
			return (
				<ListItem key={address} className={classes.listItem}>
					<DepositCardV2
						isGlobal={!hideZeroBal}
						vault={vault}
						sett={sett}
						onOpen={onOpen}
						balance={formatBalance(vault.underlyingToken)}
						balanceValue={formatTokenBalanceValue(vault.underlyingToken, currency)}
					/>
				</ListItem>
			);
		}
	});

	let depositBalances = contracts.map((address: string) => {
		const vault: Vault = vaults[address.toLowerCase()];
		const sett: any = settList.find((s: Sett) => s.underlyingToken.toLowerCase() === address.toLowerCase());
		const userBalance = vault ? vault.balance.toNumber() : 0;
		if (sett && userBalance > 0) {
			return (
				<ListItem key={address} className={classes.listItem}>
					<DepositCardV2
						isGlobal={!hideZeroBal}
						vault={vault}
						sett={sett}
						onOpen={onOpen}
						balance={formatBalanceUnderlying(vault)}
						balanceValue={formatBalanceValue(vault, currency)}
					/>
				</ListItem>
			);
		}
	});

	let vaultBalances = contracts.map((address: string) => {
		const vault: Vault = vaults[address.toLowerCase()];
		const sett: any = settList.find((s: Sett) => s.underlyingToken.toLowerCase() === address.toLowerCase());
		const geyser: Geyser | undefined = vault ? vault.geyser : undefined;
		const userBalance = geyser ? geyser.balance.toNumber() : 0;
		if (sett && geyser && userBalance > 0) {
			return (
				<ListItem key={address} className={classes.listItem}>
					<DepositCardV2
						isGlobal={!hideZeroBal}
						vault={vault}
						sett={sett}
						onOpen={onOpen}
						balance={formatGeyserBalance(geyser)}
						balanceValue={formatGeyserBalanceValue(geyser, currency)}
					/>
				</ListItem>
			);
		}
	});

	walletBalances = _.compact(walletBalances);
	depositBalances = _.compact(depositBalances);
	vaultBalances = _.compact(vaultBalances);
	const positions = walletBalances.length + depositBalances.length + vaultBalances.length;

	if (positions > 0)
		return (
			<>
				{walletBalances.length > 0 && (
					<>
						<TableHeader
							title={`Your Wallet - ${walletBalance}`}
							tokenTitle="Available"
							classes={classes}
							period={period}
						/>
						<List key={'wallet' + contracts[0]} className={classes.list}>
							{walletBalances}
						</List>
					</>
				)}
				{depositBalances.length > 0 && (
					<>
						<TableHeader
							title={`Your Vault Deposits - ${depositBalance}`}
							tokenTitle="Tokens"
							classes={classes}
							period={period}
						/>
						<List key={'deposit' + contracts[0]} className={classes.list}>
							{depositBalances}
						</List>
					</>
				)}
				{vaultBalances.length > 0 && (
					<>
						<TableHeader
							title={`Your Staked Amounts - ${vaultBalance}`}
							tokenTitle="Tokens"
							classes={classes}
							period={period}
						/>
						<List key={'vault' + contracts[0]} className={classes.list}>
							{vaultBalances}
						</List>
					</>
				)}
			</>
		);

	return (
		<Typography align="center" variant="subtitle1" color="textSecondary" style={{ margin: '2rem 0' }}>
			Your address does not have tokens to deposit.
		</Typography>
	);
}

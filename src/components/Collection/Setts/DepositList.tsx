import React from 'react';
import { Typography, List, ListItem } from '@material-ui/core';
import { Vault } from 'mobx/model';
import { DepositCard } from './DepositCard';
import _ from 'lodash';
import TableHeader from './TableHeader';
import BigNumber from "bignumber.js";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function DepositList(props: any) {
	const { allSetts, contracts, classes, vaults, hideEmpty, onOpen, depositBalance, period, wallet } = props;

	let list = _.map(contracts, (address: string) => {
		const vault: Vault = vaults[address.toLowerCase()];
		const sett: any = allSetts.find((s: any) => s.address.toLowerCase() === address.toLowerCase());
		const userBalance = vault && vault.underlyingToken ? vault.underlyingToken.balance : new BigNumber(0);

		if (!!vault && (!hideEmpty || (!!vault.geyser && vault.geyser.balance.gt(0)) || vault.balance.gt(0) || userBalance.gt(0)))
			return (
				<ListItem key={address} className={classes.listItem}>
					<DepositCard isGlobal={!hideEmpty} vault={vault} sett={sett} onOpen={onOpen} />
				</ListItem>
			);
	});

	list = _.compact(list);

	if (list.length > 0)
		return (
			<>
				<TableHeader
					title={`Your Deposits - ${depositBalance}`}
					tokenTitle="Tokens"
					classes={classes}
					period={period}
				/>
				<List key={contracts[0]} className={classes.list}>
					{list}
				</List>
			</>
		);

	return (
		<Typography align="center" variant="subtitle1" color="textSecondary" style={{ margin: '2rem 0' }}>
			Your address does not have tokens to deposit.
		</Typography>
	);
}

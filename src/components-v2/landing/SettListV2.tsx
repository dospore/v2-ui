import React, { useContext, useState } from 'react';
import TableHeader from '../../components/Collection/Setts/TableHeader';
import { observer } from 'mobx-react-lite';
import { List, makeStyles, Typography } from '@material-ui/core';
import { StoreContext } from 'mobx/store-context';
import { Loader } from 'components/Loader';
import SettListItem from 'components-v2/common/SettListItem';
import BigNumber from 'bignumber.js';
import { usdToCurrency } from '../../mobx/utils/helpers';
import { formatPrice } from '../../mobx/reducers/statsReducers';
import { Vault } from '../../mobx/model';
import DepositList from '../../components/Collection/Setts/DepositList';
import SettDialog from '../../components/Collection/Setts/SettDialog';
import DepositListV2 from './DepositListv2';

const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		borderRadius: theme.shape.borderRadius,
		overflow: 'hidden',
		background: `${theme.palette.background.paper}`,
		padding: 0,
		boxShadow: theme.shadows[1],
		marginBottom: theme.spacing(1),
	},
	listItem: {
		padding: 0,
		'&:last-child div': {
			borderBottom: 0,
		},
	},
	before: {
		marginTop: theme.spacing(3),
		width: '100%',
	},
	header: {
		padding: theme.spacing(0, -2, 0, 0),
	},
	hiddenMobile: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	chip: {
		marginLeft: theme.spacing(1),
		padding: 0,
	},
	title: {
		padding: theme.spacing(2, 2, 2),
	},
	settListContainer: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(12),
	},
}));

interface Props {
	totalValue: BigNumber;
	isUsd: boolean;
}

const SettListV2 = observer((props: Props) => {
	const classes = useStyles();
	const store = useContext(StoreContext);

	const {
		setts: { settList },
		uiState: { currency, period, hideZeroBal, stats },
		contracts: { vaults },
		wallet: { network },
	} = store;

	const { totalValue, isUsd } = props;

	let displayValue: string | undefined;
	if (totalValue) {
		displayValue = isUsd ? usdToCurrency(totalValue, currency) : formatPrice(totalValue, currency);
	}

	// TODO: add vault symbol image to SettDialog
	const [dialogProps, setDialogProps] = useState({ open: false, vault: undefined as any, sett: undefined as any });
	const onOpen = (vault: Vault, sett: any) => setDialogProps({ vault: vault, open: true, sett: sett });
	const onClose = () => setDialogProps({ ...dialogProps, open: false });

	const getSettListDisplay = (): JSX.Element => {
		const error = settList === null;
		return (
			<>
				{error ? (
					<Typography variant="h4">There was an issue loading setts. Try refreshing.</Typography>
				) : !settList ? (
					<Loader />
				) : (
					settList.map((sett) => {
						const vault: Vault = vaults[sett.vaultToken.toLowerCase()];
						return (
							<SettListItem
								sett={sett}
								key={sett.name}
								currency={currency}
								onOpen={() => onOpen(vault, sett)}
							/>
						);
					})
				)}
			</>
		);
	};

	const getDepositListDisplay = (): JSX.Element => {
		const error = settList === null;

		if (error) {
			return <Typography variant="h4">There was an issue loading setts. Try refreshing.</Typography>;
		} else if (!settList) {
			return <Loader />;
		}

		var contracts = [];
		if (network.vaults.digg) contracts.push(...network.vaults.digg.contracts);
		if (network.vaults.sushiswap) contracts.push(...network.vaults.sushiswap.contracts);
		if (network.vaults.uniswap) contracts.push(...network.vaults.uniswap.contracts);

		console.log('stats: ', stats.stats);

		const depositListProps = {
			contracts,
			settList,
			vaults,
			hideZeroBal,
			classes,
			onOpen,
			period,
			vaultBalance: formatPrice(stats.stats.vaultDeposits, currency),
			depositBalance: formatPrice(stats.stats.deposits, currency),
			walletBalance: formatPrice(stats.stats.wallet, currency),
		};

		return <DepositListV2 {...depositListProps} />;
	};

	return (
		<>
			{hideZeroBal && getDepositListDisplay()}
			{!hideZeroBal && (
				<>
					<TableHeader
						title={`Vault Deposits - ${displayValue}`}
						tokenTitle={'Tokens'}
						classes={classes}
						period={period}
					/>
					<List className={classes.list}>{getSettListDisplay()}</List>
				</>
			)}
			<SettDialog dialogProps={dialogProps} classes={classes} onClose={onClose} />
		</>
	);
});

export default SettListV2;

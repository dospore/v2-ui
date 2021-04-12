import { ListItem, makeStyles, Typography, Grid, Tooltip, Chip, IconButton } from '@material-ui/core';
import { BigNumber } from 'bignumber.js';
import { Sett, TokenBalance } from 'mobx/model';
import { numberWithCommas, usdToCurrency } from 'mobx/utils/helpers';
import React from 'react';
import { UnfoldMoreTwoTone } from '@material-ui/icons';
import CurrencyDisplay from '../common/CurrencyDisplay';

const useStyles = makeStyles((theme) => ({
	border: {
		borderBottom: `1px solid ${theme.palette.background.default}`,
		padding: theme.spacing(2, 2),
		alignItems: 'center',
		overflow: 'hidden',
		transition: '.2s background ease-out',
		cursor: 'pointer',
		'&:hover': {
			background: '#3a3a3a',
		},
		'&:active': {
			background: theme.palette.background.default,
		},
	},
	mobileLabel: {
		textAlign: 'right',
		paddingRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	name: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(2),
		},
	},
	chip: {
		marginLeft: theme.spacing(1),
		padding: 0,
	},
	symbol: {
		marginTop: 'auto',
		marginBottom: 'auto',
		padding: theme.spacing(0, 0, 0, 0),
		marginRight: theme.spacing(2),
		display: 'inline-block',
		float: 'left',
		width: '2.4rem',
	},
	tokenSymbol: {
		marginTop: 'auto',
		marginBottom: 'auto',
		padding: theme.spacing(0, 0, 0, 0),
		marginRight: theme.spacing(1),
		display: 'inline-block',
		float: 'left',
		width: '1rem',
	},
	listItem: {
		padding: 0,
		'&:last-child div': {
			borderBottom: 0,
		},
	},
	bnbIcon: {
		width: 20,
		height: 20,
		marginRight: theme.spacing(1),
	},
	currencyIcon: {
		width: 20,
		height: 20,
		marginRight: theme.spacing(1),
	},
}));

interface SettListItemProps {
	sett: Sett;
	balance?: string;
	balanceValue?: string;
	currency: string;
	period: string;
	onOpen: () => void;
}

interface RoiData {
	apy: number;
	tooltip: JSX.Element;
}

const SettListItem = (props: SettListItemProps): JSX.Element => {
	const classes = useStyles();

	const { sett, balance, balanceValue, currency, period, onOpen } = props;
	const displayName = sett.name.replace('Uniswap ', '').replace('Sushiswap ', '').replace('Harvest ', '');

	const getRoi = (sett: Sett, period: string): RoiData => {
		const getToolTip = (sett: Sett, divisor: number): JSX.Element => {
			return (
				<>
					{sett.sources.map((source) => {
						const apr = `${(source.apy / divisor).toFixed(2)}% ${source.name}`;
						return <div key={source.name}>{apr}</div>;
					})}
				</>
			);
		};
		if (sett && sett.apy) {
			if (period === 'month') {
				return { apy: sett.apy / 12, tooltip: getToolTip(sett, 12) };
			} else {
				return { apy: sett.apy, tooltip: getToolTip(sett, 1) };
			}
		} else {
			return { apy: 0, tooltip: <></> };
		}
	};
	const { apy, tooltip } = getRoi(sett, period);
	const displayValue = balanceValue ? balanceValue : usdToCurrency(new BigNumber(sett.value), currency);

	return (
		<ListItem className={classes.listItem} onClick={() => onOpen()}>
			<Grid container className={classes.border}>
				<Grid item xs={12} md={4} className={classes.name} container>
					<Grid item>
						<img
							alt={`Badger ${sett.name} Vault Symbol`}
							className={classes.symbol}
							src={`/assets/icons/${sett.asset.toLowerCase()}.png`}
						/>
					</Grid>
					<Grid item>
						<Grid container direction={'column'}>
							<Typography variant="body1">{displayName}</Typography>
							<Grid container direction={'row'}>
								<Typography variant="body2" color="textSecondary">
									{sett.asset}
								</Typography>
								{/^Harvest/i.exec(sett.name) && (
									<Chip className={classes.chip} label="Harvest" size="small" color="primary" />
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} md={2} container>
					<Grid item className={classes.mobileLabel} xs={6}>
						<Typography variant="body2" color={'textSecondary'}>
							Tokens Deposited
						</Typography>
					</Grid>
					<Grid item xs={6} md={12}>
						{balance && (
							<Grid container alignItems={'center'}>
								<img
									alt={`${sett.name} symbol`}
									className={classes.tokenSymbol}
									src={`/assets/icons/${sett.asset.toLowerCase()}.png`}
								/>
								<Typography>{balance}</Typography>
							</Grid>
						)}
						{!balance &&
							sett.tokens.map((tokenBalance: TokenBalance, index: number) => {
								const iconName =
									sett.tokens.length === 1
										? `${sett.asset.toLowerCase()}`
										: `${tokenBalance.symbol.toLowerCase()}-small`;
								const icon = `/assets/icons/${iconName}.png`;
								const displayDecimals = tokenBalance.balance > 1 ? 0 : 4;
								const balanceDisplay = tokenBalance.balance.toFixed(displayDecimals);
								return (
									<Grid container key={`token-${index}`} alignItems={'center'}>
										<img
											alt={`${tokenBalance.name} symbol`}
											className={classes.tokenSymbol}
											src={icon}
										/>
										<Typography>{numberWithCommas(balanceDisplay)}</Typography>
									</Grid>
								);
							})}
					</Grid>
				</Grid>

				<Grid item className={classes.mobileLabel} xs={6}>
					<Typography variant="body2" color={'textSecondary'}>
						{'ROI'}
					</Typography>
				</Grid>
				<Grid item xs={6} md={2}>
					<Tooltip enterDelay={0} leaveDelay={300} arrow placement="left" title={tooltip}>
						<Typography style={{ cursor: 'default' }} variant="body1" color={'textPrimary'}>
							{apy.toFixed(2)}%
						</Typography>
					</Tooltip>
				</Grid>
				<Grid item className={classes.mobileLabel} xs={6}>
					<Typography variant="body2" color={'textSecondary'}>
						Value
					</Typography>
				</Grid>
				<Grid item xs={6} md={2}>
					<CurrencyDisplay displayValue={displayValue} variant="body1" justify="flex-start" />
				</Grid>
				<Grid item xs={12} md={2} style={{ textAlign: 'right' }}>
					<IconButton color="default">
						<UnfoldMoreTwoTone />
					</IconButton>
				</Grid>
			</Grid>
		</ListItem>
	);
};

export default SettListItem;

import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import views from '../../config/routes';
import { StoreContext } from '../../context/store-context';
import {
	Button,
	Grid,
	DialogContent,
	TextField,
	DialogActions,
	ButtonGroup
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Loader } from '../Loader';
import BigNumber from 'bignumber.js'
import { useForm } from 'react-hook-form';

const TEXTFIELD_ID = 'amountField'

const useStyles = makeStyles((theme) => ({

	// root: { marginTop: theme.spacing(2) },
	stat: {
		float: "left",
		width: "25%",
		padding: theme.spacing(2, 2, 0, 0),
		wordWrap: "break-word",
		overflow: 'hidden',
		whiteSpace: "nowrap",
		position: 'relative'
	},
	card: {
		overflow: 'hidden',

		padding: theme.spacing(0, 2, 2, 2)
	},
	fade: {
		position: 'absolute',
		right: 0,
		bottom: 0
	}
	, buttons: {
		textAlign: "right"
	},
	button: {
		marginBottom: theme.spacing(1)
	},
	field: {
		margin: theme.spacing(1, 0, 1)
	},
	border: {
		border: `1px solid rgba(255,255,255,.2)`,
		marginBottom: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2, 1),
		alignItems: 'center'
	}

}));
export const VaultStake = observer((props: any) => {
	const store = useContext(StoreContext);
	const classes = useStyles();
	const { onStake,
		onUnwrap,
		uiStats } = props
	const { register, handleSubmit, watch, errors, setValue } = useForm({ mode: 'all' });

	const { router: { params, goTo }, contracts: { vaults, tokens }, uiState: { collection }, wallet: { provider } } = store;

	const setAmount = (percent: number) => {
		// (document.getElementById(TEXTFIELD_ID)! as HTMLInputElement).value = uiStats.availableFull[percent];
		setValue('amount', uiStats.availableFull[percent])
	}

	if (!uiStats) {
		return <Loader />
	}

	let renderAmounts = <ButtonGroup fullWidth className={classes.button}>
		<Button onClick={() => { setAmount(25) }} variant={watch().amount === uiStats.availableFull[25] ? "contained" : "outlined"} color="primary">25%</Button>
		<Button onClick={() => { setAmount(50) }} variant={watch().amount === uiStats.availableFull[50] ? "contained" : "outlined"} color="primary">50%</Button>
		<Button onClick={() => { setAmount(75) }} variant={watch().amount === uiStats.availableFull[75] ? "contained" : "outlined"} color="primary">75%</Button>
		<Button onClick={() => { setAmount(100) }} variant={watch().amount === uiStats.availableFull[100] ? "contained" : "outlined"} color="primary">100%</Button>
	</ButtonGroup>


	let anyAvailable = !!uiStats.availableBalance && parseFloat(uiStats.availableBalance) !== 0
	return <>
		<DialogContent style={{ textAlign: 'center' }}>

			<Typography variant="body1" color={'textSecondary'}>
				Balance
			</Typography>

			<Typography variant="h5" color={!anyAvailable ? "textSecondary" : 'textPrimary'}>
				{uiStats.availableFull[100]} {uiStats.symbol}
			</Typography>


		</DialogContent>
		<DialogContent style={{ textAlign: "center" }}>
			{renderAmounts}



			<TextField name="amount" inputRef={register} id={TEXTFIELD_ID} className={classes.field} variant="outlined" fullWidth placeholder="Type an amount to stake" />


			<Button onClick={() => onStake(uiStats.address)} variant="contained" color="primary" fullWidth className={classes.button}>Stake</Button>

		</DialogContent>
		<DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography variant="body2" color="textPrimary">ROI:</Typography>
			<div style={{ display: 'flex' }}><Typography variant="body2" color="textPrimary">{uiStats.day}</Typography>&nbsp;
				<Typography variant="body2" color="textSecondary"> daily</Typography></div>
			<div style={{ display: 'flex' }}><Typography variant="body2" color="textPrimary">{uiStats.month}</Typography>&nbsp;
				<Typography variant="body2" color="textSecondary"> monthly</Typography></div>
			<div style={{ display: 'flex' }}><Typography variant="body2" color="textPrimary">{uiStats.year}</Typography>&nbsp;
				<Typography variant="body2" color="textSecondary"> yearly</Typography></div>
		</DialogActions>
	</>


});


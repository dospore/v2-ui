import React from 'react';
import { DialogTitle, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Vault } from '@badger-dao/sdk';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	mode: {
		fontSize: 12,
	},
	settLogo: {
		width: '100%',
		margin: 'auto',
	},
	logoContainer: {
		display: 'flex',
		width: 32,
		height: 32,
		marginRight: theme.spacing(1),
	},
}));

interface Props {
	vault: Vault;
	mode: string;
}

export const VaultDialogTitle = ({ vault, mode }: Props): JSX.Element => {
	const classes = useStyles();

	return (
		<DialogTitle className={classes.root}>
			<Grid container alignItems="center">
				<Grid item className={classes.logoContainer}>
					<img
						className={classes.settLogo}
						src={`/assets/icons/${vault.vaultAsset.toLowerCase()}.png`}
						alt={`Badger ${vault.name} Vault Symbol`}
					/>
				</Grid>
				<Grid item>
					<Typography className={classes.mode} color="textSecondary">
						{mode}
					</Typography>
					<Typography variant="body1" color="textPrimary">
						{vault.name}
					</Typography>
				</Grid>
			</Grid>
		</DialogTitle>
	);
};
import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../mobx/store-context';
import useENS from 'hooks/useEns';
import { shortenAddress } from '../../utils/componentHelpers';

const useStyles = makeStyles((theme) => ({
	walletDot: {
		display: 'block',
		width: theme.spacing(0.9),
		height: theme.spacing(0.8),
		marginLeft: theme.spacing(0.4),
		borderRadius: theme.spacing(0.4),
	},
	redDot: {
		background: theme.palette.error.main,
	},
	greenDot: {
		background: theme.palette.success.main,
	},
	walletButtonLabel: {
		textTransform: 'none',
	},
}));

const WalletWidget = observer(() => {
	const classes = useStyles();
	const store = useContext(StoreContext);
	const { onboard, uiState } = store;

	async function connect(): Promise<void> {
		if (onboard.isActive()) {
			uiState.toggleWalletDrawer();
		} else {
			try {
				await onboard.connect();
			} catch (error) {
				uiState.queueError('Issue connecting, please try again');
				console.error(error);
			}
		}
	}

	const { ensName } = useENS(onboard.address);
	const walletAddress = onboard.address ? shortenAddress(onboard.address) : 'Connect';

	return (
		<Button
			disableElevation
			color="primary"
			variant={onboard.isActive() ? 'outlined' : 'contained'}
			onClick={connect}
			classes={{ label: classes.walletButtonLabel }}
		>
			{ensName || walletAddress}
		</Button>
	);
});

export default WalletWidget;

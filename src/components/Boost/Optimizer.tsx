import React, { useCallback, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Divider, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { OptimizerBody } from './OptimizerBody';
import { StoreContext } from '../../mobx/store-context';
import { StakeInformation } from './StakeInformation';
import { OptimizerHeader } from './OptimizerHeader';
import { debounce } from '../../utils/componentHelpers';
import { formatWithoutExtraZeros } from '../../mobx/utils/helpers';
import NoWallet from '../Common/NoWallet';
import {
	boostLevelByMatchingStakeRatio,
	calculateMultiplier,
	calculateNativeToMatchBoost,
	isValidMultiplier,
} from '../../utils/boost-ranks';

const useStyles = makeStyles((theme) => ({
	calculatorContainer: {
		width: '100%',
		boxSizing: 'border-box',
		padding: theme.spacing(3),
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			height: 470,
		},
	},
	divider: {
		[theme.breakpoints.down('sm')]: {
			margin: theme.spacing(3, 0, 0, 1),
		},
		margin: theme.spacing(3, 0),
	},
	placeholderContainer: {
		width: '50%',
		margin: 'auto',
		padding: theme.spacing(3),
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
	},
	placeholderText: {
		marginBottom: theme.spacing(2),
	},
}));

export const Optimizer = observer(
	(): JSX.Element => {
		const {
			user: { accountDetails },
			wallet: { connectedAddress },
		} = useContext(StoreContext);

		const classes = useStyles();
		const [multiplier, setMultiplier] = useState<string>();
		const [native, setNative] = useState<string>();
		const [nonNative, setNonNative] = useState<string>();
		const [nativeToAdd, setNativeToAdd] = useState<string>();
		const [showBouncingMessage, setShowBouncingMessage] = useState(false);

		const calculateNativeToMatchMultiplier = useCallback(
			(targetBoost: number) => {
				const nativeToAdd = calculateNativeToMatchBoost(Number(native), Number(nonNative), targetBoost);

				if (isNaN(nativeToAdd)) {
					return;
				}

				setNativeToAdd(nativeToAdd.toString());
			},
			[native, nonNative],
		);

		// reason: the plugin does not recognize the dependency inside the debounce function
		// eslint-disable-next-line react-hooks/exhaustive-deps
		const debounceBoostChange = useCallback(
			debounce(
				600,
				async (updatedBoost: number): Promise<void> => {
					calculateNativeToMatchMultiplier(updatedBoost);
				},
			),
			[calculateNativeToMatchMultiplier],
		);

		const updateMultiplier = (newNative: string, newNonNative: string) => {
			const newStakeRatio = (Number(newNative) / Number(newNonNative)) * 100;

			if (isNaN(newStakeRatio)) {
				return;
			}

			setMultiplier(boostLevelByMatchingStakeRatio(newStakeRatio).multiplier.toString());
		};

		const handleReset = () => {
			if (!accountDetails) return;

			const { nativeBalance, nonNativeBalance } = accountDetails;

			setNativeToAdd(undefined);
			setNative(formatWithoutExtraZeros(nativeBalance, 4));
			setNonNative(formatWithoutExtraZeros(nonNativeBalance, 4));
			setMultiplier(calculateMultiplier(nativeBalance, nonNativeBalance).toString());
		};

		const handleRankClick = (rankBoost: number) => {
			if (!nonNative || Number(nonNative) === 0) {
				setShowBouncingMessage(true);
				return;
			}

			setMultiplier(rankBoost.toFixed(2));
			calculateNativeToMatchMultiplier(rankBoost);
		};

		const handleMultiplierChange = (updatedMultiplier: string) => {
			if (!isValidMultiplier(Number(updatedMultiplier))) {
				setMultiplier(updatedMultiplier);
				setNativeToAdd(undefined);
				return;
			}

			setMultiplier(updatedMultiplier);
			debounceBoostChange(Number(updatedMultiplier));
		};

		const handleNativeChange = (change: string) => {
			setNative(change);
			setNativeToAdd(undefined);

			if (nonNative) {
				updateMultiplier(change, nonNative);
			}
		};

		const handleNonNativeChange = (change: string) => {
			setNonNative(change);
			setNativeToAdd(undefined);

			if (native) {
				updateMultiplier(native, change);
			}
		};

		// load store holdings by default once they're available
		useEffect(() => {
			if (!accountDetails) return;

			const { nativeBalance, nonNativeBalance } = accountDetails;

			setNative(formatWithoutExtraZeros(nativeBalance, 4));
			setNonNative(formatWithoutExtraZeros(nonNativeBalance, 4));
			setMultiplier(calculateMultiplier(nativeBalance, nonNativeBalance).toString());
		}, [accountDetails]);

		if (!connectedAddress) {
			return <NoWallet message="Please connect your wallet to use the optimizer" />;
		}

		return (
			<Grid container spacing={2}>
				<Grid item xs={12} lg>
					<Grid container component={Paper} className={classes.calculatorContainer}>
						<Grid item>
							<OptimizerHeader
								accountMultiplier={accountDetails?.boost}
								multiplier={multiplier}
								disableBoost={!nonNative || Number(nonNative) === 0}
								onBoostChange={handleMultiplierChange}
								onReset={handleReset}
								onLockedBoostClick={() => setShowBouncingMessage(true)}
							/>
						</Grid>
						<Divider className={classes.divider} />
						<Grid item container xs direction="column" justify="center">
							<OptimizerBody
								multiplier={multiplier || '1'}
								native={native || ''}
								nonNative={nonNative || ''}
								nativeToAdd={nativeToAdd}
								showMessageBounce={showBouncingMessage}
								onNativeChange={handleNativeChange}
								onNonNativeChange={handleNonNativeChange}
								onBounceAnimationEnd={() => setShowBouncingMessage(false)}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={3}>
					<StakeInformation native={native} nonNative={nonNative} onRankClick={handleRankClick} />
				</Grid>
			</Grid>
		);
	},
);

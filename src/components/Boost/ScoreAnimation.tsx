import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { percentageBetweenRange } from '../../utils/componentHelpers';
import { MAX_BOOST_LEVEL, MIN_BOOST_LEVEL } from '../../config/system/boost-ranks';
import { rankAndLevelFromMultiplier } from '../../utils/boost-ranks';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 8,
		width: 240,
		height: 240,
		maxWidth: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			width: 160,
			height: 160,
		},
	},
	boost: {
		display: 'flex',
		borderRadius: '8px',
		justifyContent: 'center',
		alignItems: 'center',
	},
	boostImage: {
		width: '60%',
	},
	boostEye: {
		width: '30px',
		height: '30px',
		borderRadius: '9999px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		background: 'radial-gradient(rgba(255,255,255,0.2),hsla(33deg,88%,56%,0))',
		top: '46%',
		mixBlendMode: 'hard-light',
		transformOrigin: 'center',
		[theme.breakpoints.down('sm')]: {
			top: '43%',
		},
	},
	boostLeft: {
		left: '32.2%',
		[theme.breakpoints.down('sm')]: {
			left: '29%',
		},
	},
	boostRight: {
		right: '31.5%',
		[theme.breakpoints.down('sm')]: {
			right: '28.5%',
		},
	},
	boostEyeStar: {
		position: 'absolute',
		width: '20%',
	},
}));

type BoostBadgeProps = {
	multiplier: number;
};

const useAnimatedStyles = (multiplier: number) => {
	const firstMultiplier = MIN_BOOST_LEVEL.multiplier;
	const lastMultiplier = MAX_BOOST_LEVEL.multiplier;
	const score = percentageBetweenRange(multiplier, lastMultiplier, firstMultiplier);

	const scale = 0.75 + score / 40;
	const [rank] = rankAndLevelFromMultiplier(multiplier);

	return makeStyles(() => ({
		container: {
			margin: 'auto',
			background: rank.signatureColor,
		},
		eyes: {
			transform: `scale(${scale})`,
			animation: '$glow 1s ease-in-out infinite alternate',
			background: `radial-gradient(${rank.signatureColor}, transparent 75%)`,
		},
		'@keyframes glow': {
			'0%': { transform: `scale(${scale})` },
			'100%': { transform: `scale(${scale * 0.8})` },
		},
	}));
};

export const BoostBadgerAnimation = ({ multiplier }: BoostBadgeProps): JSX.Element => {
	const classes = useStyles();
	const animatedClasses = useAnimatedStyles(multiplier)();

	const eyesImage = <img src={'assets/badger-eyes.png'} alt="Badger Eyes" className={classes.boostEyeStar} />;

	return (
		<Box className={[classes.root, animatedClasses.container].join(' ')}>
			<div className={[classes.boostEye, classes.boostLeft, animatedClasses.eyes].join(' ')}>{eyesImage}</div>
			<img alt="Badger Logo" src={'assets/badger-transparent.png'} className={classes.boostImage} />
			<div className={[classes.boostEye, classes.boostRight, animatedClasses.eyes].join(' ')}>{eyesImage}</div>
		</Box>
	);
};

import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../mobx/store-context';
import { makeStyles, MenuItem, TextField } from '@material-ui/core';
import { Protocol } from '@badger-dao/sdk';
import SelectControlsChips from './SelectControlsChips';

const useStyles = makeStyles({
	formControl: {
		width: '100%',
		textTransform: 'capitalize',
	},
	capitalized: {
		textTransform: 'capitalize',
	},
});

interface Props {
	platforms?: Protocol[];
	onChange: (platforms: Protocol[]) => void;
}

const VaultsPlatformSelector = ({ platforms = [], onChange }: Props): JSX.Element => {
	const {
		vaults: { vaultsProtocols },
	} = useContext(StoreContext);
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		onChange(event.target.value as Protocol[]);
	};

	return (
		<TextField
			select
			variant="outlined"
			size="small"
			value={platforms}
			defaultValue=""
			onChange={handleChange}
			label="Platform"
			id="platform-selector-id"
			name="Platform"
			color="primary"
			className={classes.formControl}
			SelectProps={{
				multiple: true,
				renderValue: (selected) => <SelectControlsChips selected={selected as string[]} />,
			}}
		>
			<MenuItem disabled value="">
				<em>Platform</em>
			</MenuItem>
			{vaultsProtocols.map((protocol: Protocol) => (
				<MenuItem className={classes.capitalized} key={protocol} value={protocol}>
					{protocol}
				</MenuItem>
			))}
		</TextField>
	);
};

export default observer(VaultsPlatformSelector);

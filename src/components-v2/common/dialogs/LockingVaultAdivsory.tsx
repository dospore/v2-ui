import { VaultDTO } from '@badger-dao/sdk';
import React from 'react';
import AdvisoryLink from './AdvisoryLink';
import GenericVaultAdvisory, { VaultAdvisoryBaseProps } from './GenericVaulAdvisory';

interface LockingVaultAdvisoryProps extends VaultAdvisoryBaseProps {
	vault: VaultDTO;
}

const LockingVaultAdvisory = ({ vault, accept }: LockingVaultAdvisoryProps): JSX.Element => {
	const depositToken = vault.underlyingToken;
	return (
		<GenericVaultAdvisory accept={accept}>
			<p>This vault locks {depositToken} in a staking contract that is 16 weeks long.</p>
			<p>
				The Total Withdrawable Amount in the vault may be lower than your balance depending on what is currently
				available and will fluctuate with deposits and withdraws from the vault as well as locks and unlocks
				from the contract.
			</p>
			<p>
				Any vault withdraws will have an opportunity to utilize the freshly deposited liquidity before it gets
				locked on a first-come-first-serve basis.
			</p>
			{/* TODO: remove or update this page on a per locked token basis */}
			<AdvisoryLink
				href="https://docs.badger.com/badger-finance/sett-user-guides/blcvx-locked-convex"
				linkText="Learn More"
			/>
		</GenericVaultAdvisory>
	);
};

export default LockingVaultAdvisory;

import React from 'react';
import { VaultDTO } from '@badger-dao/sdk';
import AdvisoryLink from './AdvisoryLink';
import GenericVaultAdvisory, { VaultAdvisoryBaseProps } from './GenericVaulAdvisory';

interface LockingVaultAdvisoryProps extends VaultAdvisoryBaseProps {
	vault: VaultDTO;
	lockingWeeks: number;
	learnMoreLink?: string;
}

const LockingVaultAdvisory = ({
	vault,
	accept,
	lockingWeeks,
	learnMoreLink,
}: LockingVaultAdvisoryProps): JSX.Element => {
	return (
		<GenericVaultAdvisory accept={accept}>
			<p>{`This vault locks ${vault.asset} in a staking contract that is ${lockingWeeks} weeks long.`}</p>
			<p>
				The Total Withdrawable Amount in the vault may be lower than your balance depending on what is currently
				available and will fluctuate with deposits and withdraws from the vault as well as locks and unlocks
				from the contract.
			</p>
			<p>
				Any vault withdraws will have an opportunity to utilize the freshly deposited liquidity before it gets
				locked on a first-come-first-serve basis.
			</p>
			{learnMoreLink && <AdvisoryLink href={learnMoreLink} linkText="Learn More" />}
		</GenericVaultAdvisory>
	);
};

export default LockingVaultAdvisory;

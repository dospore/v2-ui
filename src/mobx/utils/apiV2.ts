import { RewardMerkleClaim } from '../model/rewards/reward-merkle-claim';
import { SettChartFetchParams, SettSnapshot, SettSnapshotGranularity } from '../model/setts/sett-snapshot';
import { DEBUG } from 'config/environment';
import { Network } from '@badger-dao/sdk';

export const getApi = (): string => {
	if (DEBUG) {
		return 'https://staging-api.badger.com/v2';
	}
	return 'https://api.badger.com/v2';
};
export const BADGER_API = getApi();

// api endpoints
const getClaimProofEndpoint = `${BADGER_API}/reward/tree`;
const getSettChartInformationEndpoint = `${BADGER_API}/charts`;

// api function calls

export const fetchClaimProof = async (address: string, chain = Network.Ethereum): Promise<RewardMerkleClaim | null> => {
	return fetchData(() => fetch(`${getClaimProofEndpoint}/${address}?chain=${chain}`));
};

export const fetchSettChartInformation = async ({
	id,
	chain = Network.Ethereum,
	from,
	to,
	granularity = SettSnapshotGranularity.DAY,
}: SettChartFetchParams): Promise<SettSnapshot[] | null> => {
	const params = new URLSearchParams({ id, granularity, chain });

	if (from) {
		params.set('start', from.toISOString());
	}

	if (to) {
		params.set('end', to.toISOString());
	}

	return fetchData(() => fetch(`${getSettChartInformationEndpoint}?${params.toString()}`));
};

const fetchData = async <T>(request: () => Promise<Response>): Promise<T | null> => {
	try {
		const response = await request();
		if (!response.ok) {
			return null;
		}
		// purposefully await to use try / catch
		return await response.json();
	} catch {
		return null;
	}
};

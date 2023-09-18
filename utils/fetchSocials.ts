import { sanityClient } from '../sanity';
import { Social } from '../typings';

export const fetchSocials = async () => {
	const query = `*[_type == 'social']`;
	const data = await sanityClient.fetch(query, { cache: 'force-cache' });
	return data as Social[];
};

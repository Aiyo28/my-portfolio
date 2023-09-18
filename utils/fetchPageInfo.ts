import { sanityClient } from '../sanity';
import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
	const query = `*[_type == "pageinfo"][0]`;
	const data = await sanityClient.fetch(query, { cache: 'force-cache' });
	return data as PageInfo;
};

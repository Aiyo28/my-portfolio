import { sanityClient } from '../sanity';
import { Skill } from '../typings';

export const fetchSkills = async () => {
	const query = `*[_type == 'skills']`;
	const data = await sanityClient.fetch(query, { cache: 'force-cache' });
	return data as Skill[];
};

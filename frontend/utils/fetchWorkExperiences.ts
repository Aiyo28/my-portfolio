import { sanityClient } from '../sanity';
import { WorkExperience } from '../typings';

export const fetchWorkExperience = async () => {
	const query = `*[_type == "workexperiences"]{..., technologies[]->}`;
	const data = await sanityClient.fetch(query, { cache: 'force-cache' });
	return data as WorkExperience[];
};

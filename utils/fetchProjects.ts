import { sanityClient } from '../sanity';
import { Project } from '../typings';

export const fetchProjects = async () => {
	const query = `*[_type == "projects"]{..., technologies[]->}`;
	const data = await sanityClient.fetch(query, { cache: 'force-cache' });
	return data as Project[];
};

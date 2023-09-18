// Next.js API route support: https://nextjs.org/docs/api-routes/intorduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { WorkExperience } from '../../../typings';

const query = groq`*[_type == "workexperiences"]{..., technologies[]->}`;

type Data = {
	workexperiences: WorkExperience[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const workexperiences: WorkExperience[] = await sanityClient.fetch(query);
	res.status(200).json({ workexperiences });
}

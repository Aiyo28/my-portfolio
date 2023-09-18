import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	apiVersion: '2021-10-21',
	useCdn: true,
};

//set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config);

export const urlFor = (source: any) => {
	return builder.image(source);
};

'use client';

import React, { Component } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { sanityClient, urlFor } from '../../sanity';
import { PageInfo, Social } from '../../typings';
import { fetchSkills } from '../../utils/fetchSkills';
import { fetchPageInfo } from '../../utils/fetchPageInfo';
// import { urlFor, client } from '../client.js';

type Props = {};

type State = {
	personalInfo: PageInfo | undefined;
};

export default class About extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			personalInfo: undefined,
		};
	}

	async componentDidMount() {
		let personalInfo = await fetchPageInfo();
		this.setState({ personalInfo });
		// debugger;
	}

	render() {
		return (
			<motion.div
				className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
					About
				</h3>
				{this.state.personalInfo && (
					<motion.img
						className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover 
					md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
						src={urlFor(this.state.personalInfo?.heroImage).url()}
						initial={{
							x: -200,
							opacity: 0,
						}}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.5 }}
						viewport={{ once: true }}
					/>
				)}

				<div className="space-y-10 px-0 md:px-10">
					<h4 className="text-4xl font-semibold">
						Here is a{' '}
						<span className="underline decoration-[#313bac]/50">
							little
						</span>{' '}
						background
					</h4>
					<p className="text-base">
						{this.state.personalInfo?.backgroundInfo}
					</p>
				</div>
			</motion.div>
		);
	}
}

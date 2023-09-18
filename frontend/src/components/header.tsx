'use client';

import React, { Component } from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fetchSocials } from '../../utils/fetchSocials';
import { Social } from '../../typings';

type Props = {};

type State = {
	social: Social[] | undefined;
};

export default class Header extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			social: undefined,
		};
	}

	async componentDidMount() {
		let social = await fetchSocials();
		this.setState({ social });
	}

	render() {
		return (
			<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
				<motion.div
					className="flex flex-row items-center"
					initial={{
						x: -500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.2,
					}}
				>
					{this.state.social
						? this.state.social.map((item: Social) => {
								return (
									<SocialIcon
										key={item._id}
										url={item.url}
										fgColor="gray"
										bgColor="transparent"
									/>
								);
						  })
						: null}
				</motion.div>
				<motion.div
					className="flex flex-row items-center text-gray-300 cursor-pointer"
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.2,
					}}
				>
					<SocialIcon
						url="#contact"
						className="cursor-pointer"
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>
					<Link href="#contact" className="">
						<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
							Get in Touch
						</p>
					</Link>
				</motion.div>
			</header>
		);
	}
}

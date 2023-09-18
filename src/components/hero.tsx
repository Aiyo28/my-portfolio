'use client';

import React, { Component } from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './backgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '../../typings';
import { fetchPageInfo } from '../../utils/fetchPageInfo';
import { urlFor } from '../../sanity';

type Props = {};

type State = {
	personalInfo: PageInfo | undefined;
};

export default class Hero extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			personalInfo: undefined,
		};
	}

	async componentDidMount() {
		let personalInfo = await fetchPageInfo();
		this.setState({ personalInfo });
	}

	render() {
		return (
			<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
				<BackgroundCircles />
				{this.state.personalInfo && (
					<Image
						className="relative rounded-full h-32 w-32 mx-auto object-cover"
						src={urlFor(this.state.personalInfo?.profilePic).url()}
						alt="Ayal Nogovitsyn"
						width={200}
						height={200}
					/>
				)}

				{this.state.personalInfo && (
					<div className="z-20">
						<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
							{this.state.personalInfo.role}
						</h2>
						<h1 className="text-5xl lg:6xl font-semibold px-10">
							<span className="mr-3">
								<Typewriter
									words={[
										`Hi, my name is ${this.state.personalInfo.name}`,
										'Guy who loves Coffee.tsx',
										'<ButLovesToCreateMore />',
									]}
									loop={true}
									delaySpeed={2000}
								/>
							</span>
							<Cursor cursorColor="#F7AB0A" />
						</h1>
						<div className="p-5">
							<Link href="#about">
								<button className="heroButton">About</button>
							</Link>
							<Link href="#work">
								<button className="heroButton">
									Work Experience
								</button>
							</Link>
							<Link href="#skills">
								<button className="heroButton">Skills</button>
							</Link>
							<Link href="#projects">
								<button className="heroButton">Projects</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		);
	}
}

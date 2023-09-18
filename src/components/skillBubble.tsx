'use client';

import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../typings';
import { urlFor } from '../../sanity';

type Props = { directionLeft?: boolean; skill: Skill };

type State = {};

export default class SkillBubble extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="group relative flex cursor-pointer">
				<motion.img
					className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-22 md:h-22 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
					initial={{
						x: this.props.directionLeft ? -200 : 200,
						opacity: 0,
					}}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ diration: 1.2 }}
					src={urlFor(this.props.skill.image).url()}
					alt={this.props.skill.name}
				/>
				<div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:backdrop-blur-lg w-20 h-20 md:w-22 md:h-22 xl:w-24 xl:h-24 rounded-full z-0">
					<div className="flex flex-col items-center justify-center h-full ">
						<p className="font-bold text-center text-white opacity-100">
							{this.props.skill.name}
						</p>
						<p className="text-2xl font-bold text-white opacity-100">
							{`${this.props.skill.progress}%`}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

'use client';

import { motion } from 'framer-motion';
import React, { Component } from 'react';
import SkillBubble from './skillBubble';
import { Skill } from '../../typings';
import { fetchSkills } from '../../utils/fetchSkills';

type Props = {};

type State = {
	skills: Skill[] | undefined;
};

export default class Skills extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			skills: undefined,
		};
	}

	async componentDidMount() {
		let skills = await fetchSkills();
		this.setState({ skills });
	}

	render() {
		return (
			<motion.div
				className="md:relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
			>
				<h3 className="md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
					Skills
				</h3>

				<h3 className="md:absolute lg:pb-0 pb-10 top-36 uppercase tracking-[3px] text-gray-400">
					Hover over skills to see proficiency{' '}
				</h3>

				<div className=" grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3  gap-5 ">
					{this.state.skills
						?.slice(0, this.state.skills.length / 2)
						.map((item: Skill, index: number) => {
							return (
								<SkillBubble
									key={`key-${item.name}`}
									skill={item}
								/>
							);
						})}
					{this.state.skills
						?.slice(
							this.state.skills.length / 2,
							this.state.skills.length
						)
						.map((item: Skill, index: number) => {
							return (
								<SkillBubble
									key={`key-${item.name}`}
									skill={item}
									directionLeft
								/>
							);
						})}
				</div>
			</motion.div>
		);
	}
}

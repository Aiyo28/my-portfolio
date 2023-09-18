'use client';

import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Skill, WorkExperience } from '../../typings';
import { urlFor } from '../../sanity';
import * as moment from 'moment';

type Props = { wordPlace: WorkExperience };

type State = {};

export default class WorkCard extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {};
	}

	render() {
		function moment(): React.ReactNode {
			throw new Error('Function not implemented.');
		}

		return (
			this.props.wordPlace && (
				<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] mt-28 p-10 pt-16 hover:opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
					<motion.img
						initial={{ y: -100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						viewport={{ once: true }}
						className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
						src={urlFor(this.props.wordPlace.companyImage).url()}
						alt={this.props.wordPlace.company}
					/>
					<div className="px-0 md:px-10">
						<h4 className="text-4xl font-light text-center">
							{this.props.wordPlace.jobTitle}
						</h4>
						<p className="font-bold text-2xl mt-1 text-center">
							{this.props.wordPlace.company}
						</p>
						<div className="flex space-x-2 my-2">
							{this.props.wordPlace.technologies.map(
								(item: Skill) => {
									return (
										<img
											className="h-10 w-10 rounded-full"
											src={urlFor(item.image).url()}
											key={item._id}
											alt={item.name}
										/>
									);
								}
							)}
						</div>
						<p className="uppercase py-5 text-gray-500">
							{new Date(
								this.props.wordPlace.dateStarted
							).toDateString()}{' '}
							-{' '}
							{this.props.wordPlace.isCurrentlyWorkingHere
								? 'Present'
								: new Date(
										this.props.wordPlace.dateEnded
								  ).toDateString()}
						</p>
						<ul className="list-disc space-y-4 ml-5 text-md h-54 overflow-y-scroll scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#313bac]/30">
							{this.props.wordPlace.achievements.map(
								(achievement: string, index: number) => {
									return (
										<li key={`key-${index}`}>
											{achievement}
										</li>
									);
								}
							)}
						</ul>
					</div>
				</article>
			)
		);
	}
}

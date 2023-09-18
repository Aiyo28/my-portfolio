'use client';

import React, { Component } from 'react';
import { motion } from 'framer-motion';
import WorkCard from './workCard';
import { fetchWorkExperience } from '../../utils/fetchWorkExperiences';
import { WorkExperience } from '../../typings';

type Props = {};

type State = {
	workEx: WorkExperience[] | undefined;
};

export default class Work extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			workEx: undefined,
		};
	}

	async componentDidMount() {
		let workEx = await fetchWorkExperience();
		let sortWordEx = this.sortByDateStarted(workEx);
		this.setState({ workEx: sortWordEx });
	}

	sortByDateStarted = (array: WorkExperience[]) => {
		const sortedArray = array.sort((a: any, b: any) => {
			if (a.isCurrentlyWorkingHere && !b.isCurrentlyWorkingHere)
				return -1;
			if (!a.isCurrentlyWorkingHere && b.isCurrentlyWorkingHere) return 1;

			if (
				a.jobTitle === 'Education Lead' &&
				b.jobTitle !== 'Education Lead'
			)
				return 1;
			if (
				a.jobTitle !== 'Education Lead' &&
				b.jobTitle === 'Education Lead'
			)
				return -1;

			const dateA = new Date(a.dateStarted);
			const dateB = new Date(b.dateStarted);
			return dateB.getTime() - dateA.getTime();
		});
		return sortedArray;
	};

	render() {
		return (
			<motion.div
				className="h-screen flex relative overflow-hidden flex-col text-fir ms:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
					Work Experience
				</h3>

				<div
					className="w-full h-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
				scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#313bac]"
				>
					{this.state.workEx &&
						this.state.workEx.map((item: WorkExperience) => {
							return <WorkCard key={item._id} wordPlace={item} />;
						})}
				</div>
			</motion.div>
		);
	}
}

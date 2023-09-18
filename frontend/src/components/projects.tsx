'use client';

import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { fetchProjects } from '../../utils/fetchProjects';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Project } from '../../typings';
import { url } from 'inspector';
import { urlFor } from '../../sanity';

type Props = {};

type State = {
	projects: Project[] | undefined;
};

export default class Projects extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			projects: undefined,
		};
	}

	async componentDidMount() {
		let projects = await fetchProjects();
		this.setState({ projects });
		// debugger;
	}

	render() {
		return (
			<motion.div
				className="h-screen relative flex flex-col overflow-hidden text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
				initial={{ y: 300, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
			>
				<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
					Projects
				</h3>

				<div
					className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x z-20
				scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#313bac]"
				>
					{this.state.projects &&
						this.state.projects.map((item, index) => {
							return (
								<div
									key={`key-${index}`}
									className="w-screen flex-shrink-0 snap-center flex flex-col lg:flex-row space-y-5 items-center justify-center p-20 md:p-44 h-screen "
								>
									<a
										target="_blank"
										href={item.linkToBuild}
										className=" lg:flex-1"
									>
										<img
											className="h-[280px] lg:h-[400px] "
											src={urlFor(item.image).url()}
											alt={item.title}
										/>
									</a>
									<div className="space-y-6 px-0 md:px-10 msx-w-6xl lg:flex-1 ">
										<a
											target="_blank"
											href={item.linkToBuild}
										>
											<h4 className="text-3xl font-semibold text-center">{` ${item.title}`}</h4>
										</a>
										<h5 className="text-2xl font-semibold text-center">
											{this.state.projects && (
												<span className="underline decoration-[#313bac]/50">
													Project {index + 1} of{' '}
													{this.state.projects.length}
													:
												</span>
											)}
										</h5>

										<p className="text-lg text-justify">
											{item.summary}
										</p>
									</div>
								</div>
							);
						})}
				</div>
			</motion.div>
		);
	}
}

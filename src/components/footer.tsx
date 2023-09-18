'use client';

import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Alert from '@mui/material/Alert';

type Props = {};

type State = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default class Footer extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
		};
	}

	onFormName = (e: any) => {
		this.setState({ name: e.target.value });
	};
	onFormEmail = (e: any) => {
		this.setState({ email: e.target.value });
	};
	onFormSubject = (e: any) => {
		this.setState({ subject: e.target.value });
	};
	onFormMessage = (e: any) => {
		this.setState({ message: e.target.value });
	};

	onSubmit = (event: any) => {
		event.preventDefault();
		if (
			this.state.name &&
			this.state.email &&
			this.state.subject &&
			this.state.message
		) {
			let object = {
				name: this.state.name,
				email: this.state.email,
				subject: this.state.subject,
				message: this.state.message,
			};

			console.log(object);
			window.location.href = `mailto:ayal.nogovitsyn@gmail.com?subject=${this.state.subject}&body=Hi, my name is ${this.state.name}. ${this.state.message} (${this.state.email})`;
		} else if (
			this.state.name.length === 0 ||
			this.state.email.length === 0 ||
			this.state.subject.length === 0 ||
			this.state.message.length === 0
		) {
			debugger;
			return (
				<Alert severity="error">Please fill in missing fields!</Alert>
			);
		}
	};

	render() {
		return (
			<div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center">
				<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
					Contact
				</h3>

				<div className="flex flex-col space-y-10 items-center">
					<h4 className="text-4xl font-semibold text-center">
						I have got just what you need.{' '}
						<span className="decoration-[#313bac]/50 underline">
							Lets Talk.
						</span>
					</h4>
				</div>

				<div className="space-y-6 mt-6 items-center">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#313bac] h-7 w-7 animate-pulse" />
						<p className="text-2xl">+852 9149 7727</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#313bac] h-7 w-7 animate-pulse" />
						<p className="text-2xl">ayal.nogovitsyn@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#313bac] h-7 w-7 animate-pulse" />
						<p className="text-2xl">Hong Kong</p>
					</div>
				</div>

				<form
					onSubmit={this.onSubmit}
					className="flex flex-col space-y-2 w-fit mx-auto mt-8"
				>
					<div className=" flex space-x-2">
						<input
							onChange={this.onFormName}
							placeholder="Name"
							type="text"
							className="ContactInput"
						/>
						<input
							onChange={this.onFormEmail}
							placeholder="Email"
							type="email"
							className="ContactInput"
						/>
					</div>
					<input
						onChange={this.onFormSubject}
						placeholder="Subject"
						type="text"
						className="ContactInput"
					/>
					<textarea
						onChange={this.onFormMessage}
						placeholder="Message"
						className="ContactInput"
					/>
					<button
						type="submit"
						className="bg-[#313bac] py-5 px-10 rounded-md text-white font-bold text-lg "
					>
						Send
					</button>
				</form>
			</div>
		);
	}
}

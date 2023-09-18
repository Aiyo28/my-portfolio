import Image from 'next/image';
import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Work from '@/components/work';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { InferGetServerSidePropsType } from 'next';
import {
	PageInfo,
	WorkExperience,
	Skill,
	Project,
	Social,
} from '../../typings';
import { fetchPageInfo } from '../../utils/fetchPageInfo';
import { fetchWorkExperience } from '../../utils/fetchWorkExperiences';
import { fetchSkills } from '../../utils/fetchSkills';
import { fetchProjects } from '../../utils/fetchProjects';
import { fetchSocials } from '../../utils/fetchSocials';

export default async function Home() {
	return (
		<main
			className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
		scrollbar  scrollbar-track-gray-600/20 scrollbar-thumb-[#313bac]/50 "
		>
			<Header />
			<section id="hero" className="snap-center">
				<Hero />
			</section>
			<section id="about" className="snap-center">
				<About />
			</section>
			<section id="projects" className="snap-center">
				<Projects />
			</section>
			<section id="skills" className="snap-center">
				<Skills />
			</section>
			<section id="work" className="snap-center">
				<Work />
			</section>
			<section id="contact" className="snap-center">
				<Footer />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer ">
					<div className="flex items-center justify-end color-red">
						<ArrowUpCircleIcon className="h-10 w-10  filter grayscale hover:grayscale-0 cursor-pointer" />
					</div>
				</footer>
			</Link>
		</main>
	);
}

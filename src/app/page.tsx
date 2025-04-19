"use client";

import React, { useState, useEffect } from "react";
import {
	Mail,
	ExternalLink,
	Menu,
	X,
	ArrowRight,
	Briefcase,
	Github,
	Linkedin,
} from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("languages");
	const [animatedElements, setAnimatedElements] = useState<Record<string, boolean>>({});

	useEffect(() => {
		// Function to check if an element is in viewport
		const isInViewport = (element: Element) => {
			const rect = element.getBoundingClientRect();
			return rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
		};

		// Function to handle scroll event
		const handleScroll = () => {
			// Get all elements with animation classes
			const animatableElements = document.querySelectorAll(".animate-on-scroll");

			const newAnimatedElements = { ...animatedElements };

			animatableElements.forEach((element) => {
				const id = element.id || element.getAttribute("data-id") || "";
				if (id && !animatedElements[id] && isInViewport(element)) {
					// Mark as animated
					newAnimatedElements[id] = true;
					element.classList.add("animated");
				}
			});

			setAnimatedElements(newAnimatedElements);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Initial check
		setTimeout(handleScroll, 100);

		// Cleanup
		return () => window.removeEventListener("scroll", handleScroll);
	}, [animatedElements]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const techCategories = [
		{ id: "languages", name: "Languages" },
		{ id: "frontend", name: "Frontend" },
		{ id: "backend", name: "Backend" },
		{ id: "tools", name: "Tools" },
	];

	const techSkills: Record<string, string[]> = {
		languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"],
		frontend: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"Redux",
			"Angular",
			"Vue.js",
			"Material UI",
		],
		backend: [
			"Node.js",
			"Express",
			"Django",
			"Spring Boot",
			"MongoDB",
			"PostgreSQL",
			"Redis",
			"GraphQL",
		],
		tools: [
			"Git",
			"GitHub",
			"Docker",
			"AWS",
			"Firebase",
			"VS Code",
			"Postman",
			"Webpack",
			"Jest",
		],
	};

	type Job = {
		company: string;
		position: string;
		period: string;
		description: string;
		technologies: string[];
		website?: string; // Optional website URL
	};

	const experience = [
		{
			company: "Society of PC Building (SPCB) - University of Florida",
			position: "Full Stack Developer",
			period: "Nov 2023 - Present",
			description:
				"• Leading development of SPCB's flagship website using Next.js and Firebase.\n" +
				"• Engineered full backend infrastructure with RESTful API operations, admin authentication, and dynamic routing.\n" +
				"• Future-proofed the platform with a custom admin backend, enabling officers to update content without coding knowledge.\n" +
				"• Established CI/CD workflows using GitHub Actions and led bi-weekly sprints for a 3-dev team.\n" +
				"• Mentored two freshmen in full-stack fundamentals and software engineering basics.",
			technologies: [
				"Next.js",
				"TypeScript",
				"Firebase",
				"TailwindCSS",
				"GitHub Actions",
				"Vercel",
			],
			website: "https://spcbatuf.org",
		},
		{
			company: "Samsung Austin Semiconductor",
			position: "Software Engineering Intern",
			period: "May 2024 - Aug 2024",
			description:
				"• Spearheaded a Vue dashboard initiative across 3 teams to automate trend analysis, cutting machine response time by 40%.\n" +
				"• Processed 300K+ rows of training data to generate weekly reports, reducing report creation time from 4 hours to 15 minutes.\n" +
				"• Automated supervisor reporting workflows, saving 8 hours/week in manual data entry.\n" +
				"• Boosted training compliance by 20% with a reminder system impacting 500+ employees.",
			technologies: [
				"Python",
				"JavaScript",
				"Vue.js",
				"FastAPI",
				"Pandas",
				"Streamlit",
			],
		},
		{
			company: "Society of PC Building (SPCB) - University of Florida",
			position: "Event Coordinator",
			period: "Nov 2023 - Present",
			description:
				"• Organized and hosted high-engagement General Body Meetings (GBMs) with 200+ attendees.\n" +
				"• Secured $34,000 per semester in funding through technical proposals to UF Student Government.\n" +
				"• Drove a 216% increase in club membership (from 300 to 100) through enhanced digital engagement and promotional efforts.",
			technologies: [
				"Leadership",
				"Public Speaking",
				"Event Planning",
				"Technical Proposals",
			],
		},
	];

	const projects = [
		{
			title: "Project101 - AI-Powered Project Generator",
			description:
				"An AI-powered web application that helps users generate, design, and configure project ideas based on their experience, goals, and interests.",
			technologies: [
				"Next.js",
				"Google Gemini API",
				"Tailwind CSS",
				"Firebase",
				"React",
			],
			github: "https://github.com/ClaudioGSDB/project101",
			live: "https://project101-nine.vercel.app/",
			image: "/project101.png",
		},
		{
			title: "Hudle.io - Custom Wordle-like Games Creator",
			description: "A platform for creating and playing custom Wordle-like games.",
			technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "TypeScript"],
			github: "https://github.com/ClaudioGSDB/hudle.io",
			live: "https://hudle-io.vercel.app/",
			image: "/Hudle.png",
		},
		{
			title: "Collaborative Task Manager",
			description:
				"A real-time collaborative task management application with team workspaces, custom task views, and progress analytics.",
			technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
			github: "https://github.com/yourusername/task-manager",
			live: "https://task-manager-demo.com",
			image: "/sample.png",
		},
		{
			title: "Developer Community Platform",
			description:
				"A platform for developers to share projects, ask questions, and connect with other developers. Features include user profiles, project showcases, and a discussion board.",
			technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
			github: "https://github.com/yourusername/dev-community",
			live: "https://dev-community-demo.com",
			image: "/sample.png",
		},
		{
			title: "Personal Finance Dashboard",
			description:
				"A comprehensive dashboard for tracking personal finances, investments, and budget goals with customizable visualizations and financial insights.",
			technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
			github: "https://github.com/yourusername/finance-dashboard",
			live: "https://finance-dashboard-demo.com",
			image: "/sample.png",
		},
	];

	return (
		<div className="bg-white min-h-screen font-sans text-gray-800 relative overflow-hidden">
			{/* Google-themed animated decorations */}
			<div className="absolute top-20 right-10 w-16 h-16 rounded-full border-4 border-blue-500 opacity-30 animate-[spin_15s_linear_infinite]"></div>
			<div className="absolute top-40 right-20 w-32 h-32 rounded-full border-4 border-red-500 opacity-20 animate-[spin_20s_linear_infinite_reverse]"></div>
			<div className="absolute bottom-20 right-10 w-20 h-20 rounded-full border-4 border-yellow-500 opacity-25 animate-[bounce_8s_ease-in-out_infinite]"></div>
			<div className="absolute top-1/3 -left-10 w-40 h-40 rounded-full border-4 border-green-500 opacity-20 animate-[spin_25s_linear_infinite]"></div>
			<div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-4 border-red-500 opacity-10 animate-[ping_7s_ease-in-out_infinite]"></div>
			<div className="absolute top-2/3 right-1/3 w-16 h-16 border-4 border-green-500 opacity-20 animate-[ping_10s_ease-in-out_infinite]"></div>

			{/* Sidebar for larger screens */}
			<aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-white shadow-md p-8 z-10">
				<div className="h-full flex flex-col">
					<div className="mb-8">
						<h1 className="text-2xl font-bold text-gray-900">Claudio</h1>
						<p className="text-gray-600 mt-1">Full Stack Developer</p>
					</div>

					<div className="mb-8">
						<h3 className="text-sm uppercase text-gray-500 mb-3 tracking-wide">
							Connect
						</h3>
						<div className="space-y-3">
							<a
								href="https://github.com/claudioGSDB"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
							>
								<Github size={16} />
								<span>GitHub</span>
							</a>
							<a
								href="https://www.linkedin.com/in/claudiosciotto/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
							>
								<Briefcase size={16} />
								<span>LinkedIn</span>
							</a>
							<a
								href="mailto:claudioGSDB@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
							>
								<Mail size={16} />
								<span>Email</span>
							</a>
						</div>
					</div>

					<nav className="space-y-4">
						<a
							href="#about"
							className="block hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md text-gray-600 transition-colors"
						>
							About
						</a>
						<a
							href="#skills"
							className="block hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md text-gray-600 transition-colors"
						>
							Skills
						</a>
						<a
							href="#experience"
							className="block hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md text-gray-600 transition-colors"
						>
							Experience
						</a>
						<a
							href="#projects"
							className="block hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md text-gray-600 transition-colors"
						>
							Projects
						</a>
					</nav>
				</div>
			</aside>

			{/* Mobile header */}
			<header className="lg:hidden sticky top-0 bg-white shadow-sm z-50 p-4">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-bold text-gray-900">Claudio</h1>
					<button onClick={toggleMenu} className="text-gray-700">
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile menu */}
				{menuOpen && (
					<div className="fixed inset-0 bg-white z-40 pt-16">
						<nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
							<div className="mb-8">
								<h3 className="text-sm uppercase text-gray-500 mb-4 tracking-wide">
									Connect
								</h3>
								<div className="flex flex-col space-y-4">
									<a
										href="https://github.com/yourusername"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
									>
										<Github size={18} />
										<span>GitHub</span>
									</a>
									<a
										href="https://linkedin.com/in/yourusername"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
									>
										<Briefcase size={18} />
										<span>LinkedIn</span>
									</a>
									<a
										href="mailto:your.email@example.com"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
									>
										<Mail size={18} />
										<span>Email</span>
									</a>
								</div>
							</div>

							<div className="pt-4 border-t">
								<a
									href="#about"
									onClick={toggleMenu}
									className="block py-2 text-gray-800 hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md transition-colors"
								>
									About
								</a>
								<a
									href="#skills"
									onClick={toggleMenu}
									className="block py-2 text-gray-800 hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md transition-colors"
								>
									Skills
								</a>
								<a
									href="#experience"
									onClick={toggleMenu}
									className="block py-2 text-gray-800 hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md transition-colors"
								>
									Experience
								</a>
								<a
									href="#projects"
									onClick={toggleMenu}
									className="block py-2 text-gray-800 hover:text-blue-500 hover:bg-gray-100 p-2 rounded-md transition-colors"
								>
									Projects
								</a>
							</div>
						</nav>
					</div>
				)}
			</header>

			{/* Main content */}
			<main className="lg:pl-64 relative z-10">
				{/* Hero/About section */}
				<section id="about" className=" py-10 md:py-20 lg:py-20 relative">
					<div className="container mx-auto px-4 md:px-8 lg:px-16">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div
								className="animate-on-scroll"
								data-id="hero-text"
								style={{
									transform: animatedElements["hero-text"]
										? "translateX(0)"
										: "translateX(-30px)",
									opacity: animatedElements["hero-text"] ? 1 : 0,
									transition: "all 0.8s ease-out",
								}}
							>
								<span className="text-gray-600 mb-4 block">
									HELLO THERE, I'M
								</span>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
									Claudio <span className="text-yellow-500">!</span>
								</h1>
								<p className="text-lg text-gray-600 uppercase tracking-wide mb-4">
									FULL-STACK DEVELOPER
								</p>
								<div className="prose prose-lg text-gray-700 my-6 max-w-2xl">
									<p>
										I am a passionate full-stack developer with over 5
										years of experience in building web applications
										that not only look good but also perform well. I
										believe in writing clean, maintainable code and
										using the latest technologies to deliver the best
										results for my clients.
									</p>
									<br></br>
									<p>
										My drive lies in crafting full-stack solutions
										with React, Node.js, and modern cloud technologies
										that actually matter to people. I'm obsessed with
										the little details others might miss and deeply
										committed to understanding the humans behind the
										screens.
									</p>
								</div>
								<a
									href="/resume.pdf"
									target="_blank"
									className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors font-medium hover:shadow-md"
								>
									CHECK OUT MY CV!
								</a>
							</div>
							<div
								className="animate-on-scroll"
								data-id="hero-image"
								style={{
									transform: animatedElements["hero-image"]
										? "translateX(0)"
										: "translateX(30px)",
									opacity: animatedElements["hero-image"] ? 1 : 0,
									transition: "all 0.2s ease-out",
								}}
							>
								<div className="relative rounded-2xl mx-auto max-w-md">
									<Image
										src="/me.png"
										alt="Claudio - Full Stack Developer"
										width={500}
										height={500}
										className="w-full h-auto object-cover rounded-2xl"
										priority
									/>
									<div
										className="absolute -z-10 rounded-2xl bg-black/80"
										style={{
											top: "8px",
											right: "-15px",
											bottom: "-15px",
											left: "8px",
										}}
									></div>
									{/* Google-like design elements */}
									{/* <div className="absolute -right-10 bottom-0 w-24 h-24 rounded-full border-4 border-red-500 opacity-30"></div>
									<div className="absolute -left-5 top-10 w-16 h-16 rounded-full border-4 border-blue-500 opacity-30"></div>
									<div className="absolute right-20 top-5 w-10 h-32 rounded-full border-4 border-green-500 opacity-30"></div>
									<div className="absolute left-10 bottom-10 w-32 h-10 rounded-full border-4 border-yellow-500 opacity-30"></div> */}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Skills section */}
				<section id="skills" className="py-16 md:py-10 border-t border-gray-200">
					<div className="container mx-auto px-4 md:px-8 lg:px-16">
						<h2
							className="text-2xl font-bold text-gray-900 mb-6 animate-on-scroll"
							data-id="skills-title"
							style={{
								transform: animatedElements["skills-title"]
									? "translateY(0)"
									: "translateY(20px)",
								opacity: animatedElements["skills-title"] ? 1 : 0,
								transition: "all 0.4s ease-out",
							}}
						>
							Skills & Technologies
						</h2>

						<div
							className="mb-4 animate-on-scroll"
							data-id="skills-tabs"
							style={{
								transform: animatedElements["skills-tabs"]
									? "translateY(0)"
									: "translateY(20px)",
								opacity: animatedElements["skills-tabs"] ? 1 : 0,
								transition: "all 0.6s ease-out 0.1s",
							}}
						>
							<div className="flex border-b border-gray-200">
								{techCategories.map((category) => (
									<button
										key={category.id}
										onClick={() => setActiveTab(category.id)}
										className={`px-4 py-2 font-medium text-sm transition-colors ${
											activeTab === category.id
												? "text-blue-500 border-b-2 border-blue-500"
												: "text-gray-500 hover:text-gray-700"
										}`}
									>
										{category.name}
									</button>
								))}
							</div>
						</div>

						<div
							className="flex flex-wrap gap-2 animate-on-scroll"
							data-id="skills-content"
							style={{
								transform: animatedElements["skills-content"]
									? "translateY(0)"
									: "translateY(20px)",
								opacity: animatedElements["skills-content"] ? 1 : 0,
								transition: "all 0.6s ease-out 0.2s",
							}}
						>
							{techSkills[activeTab].map((tech: string) => (
								<span
									key={tech}
									className="px-3 py-1 bg-white border border-gray-200 shadow-sm rounded-lg text-gray-800 hover:border-gray-300 hover:shadow transition-all text-sm"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* Experience section */}
				<section
					id="experience"
					className="py-16 md:py-20 bg-white border-t border-gray-200"
				>
					<div className="container mx-auto px-4 md:px-8 lg:px-16">
						<h2
							className="text-2xl font-bold text-gray-900 mb-8 animate-on-scroll"
							data-id="experience-title"
							style={{
								transform: animatedElements["experience-title"]
									? "translateY(0)"
									: "translateY(20px)",
								opacity: animatedElements["experience-title"] ? 1 : 0,
								transition: "all 0.6s ease-out",
							}}
						>
							Work Experience
						</h2>

						<div className="space-y-10">
							{experience.map((job, index) => (
								<div
									key={index}
									className="whitespace-pre-line relative pl-8 border-l-2 border-gray-200 hover:border-blue-500 transition-colors duration-300 animate-on-scroll"
									data-id={`experience-${index}`}
									style={{
										transform: animatedElements[`experience-${index}`]
											? "translateX(0)"
											: "translateX(-20px)",
										opacity: animatedElements[`experience-${index}`]
											? 1
											: 0,
										transition: `all 0.6s ease-out ${
											0.1 * (index + 1)
										}s`,
									}}
								>
									<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
									<div>
										<h3 className="text-xl font-bold text-gray-900">
											{job.position}
											{job.website && (
												<a
													href={job.website}
													target="_blank"
													rel="noopener noreferrer"
													className="ml-2 inline-flex items-center gap-1 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 px-2 py-0.5 rounded-md transition-all duration-200 group"
												>
													<ExternalLink
														size={12}
														className="group-hover:translate-x-0.5 transition-transform"
													/>
													<span className="font-medium">
														Website
													</span>
												</a>
											)}
										</h3>

										<div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mt-1 mb-3">
											<span className="font-medium">
												{job.company}
											</span>
											<span className="hidden sm:block text-gray-400">
												•
											</span>

											<span>{job.period}</span>
										</div>
										<p className="text-gray-700">{job.description}</p>
										<div className="flex flex-wrap gap-2 mt-4">
											{job.technologies.map((tech: string) => (
												<span
													key={tech}
													className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Projects section */}
				<section
					id="projects"
					className="py-16 md:py-10 border-t border-gray-200 bg-white"
				>
					<div className="container mx-auto px-4 md:px-8 lg:px-16">
						<h2
							className="text-2xl font-bold text-gray-900 mb-8 animate-on-scroll"
							data-id="projects-title"
							style={{
								transform: animatedElements["projects-title"]
									? "translateY(0)"
									: "translateY(20px)",
								opacity: animatedElements["projects-title"] ? 1 : 0,
								transition: "all 0.6s ease-out",
							}}
						>
							Projects
						</h2>

						<div className="grid grid-cols-1 gap-16">
							{projects.map((project, index) => (
								<div
									key={index}
									className="group animate-on-scroll"
									data-id={`project-${index}`}
									style={{
										transform: animatedElements[`project-${index}`]
											? "translateY(0)"
											: "translateY(30px)",
										opacity: animatedElements[`project-${index}`]
											? 1
											: 0,
										transition: `all 0.8s ease-out ${
											0.1 * (index + 1)
										}s`,
									}}
								>
									<div
										className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
											index % 2 === 1 ? "lg:grid-flow-dense" : ""
										}`}
									>
										<div
											className={`${
												index % 2 === 1 ? "lg:col-start-2" : ""
											}`}
										>
											<div className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl bg-gray-100">
												<Image
													src={project.image}
													alt={project.title}
													width={800}
													height={450}
													className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
												/>
											</div>
										</div>
										<div className="flex flex-col justify-center">
											<h3 className="text-xl font-bold text-gray-900 mb-3">
												{project.title}
											</h3>
											<p className="text-gray-700 mb-6">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2 mb-6">
												{project.technologies.map(
													(tech: string) => (
														<span
															key={tech}
															className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"
														>
															{tech}
														</span>
													)
												)}
											</div>
											<div className="flex gap-4">
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-500 font-medium transition-colors"
												>
													<Github size={16} />
													View Code
												</a>
												<a
													href={project.live}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-1 text-gray-700 hover:text-green-500 font-medium transition-colors"
												>
													<ExternalLink size={16} />
													Live Demo
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-white py-6 border-t border-gray-200">
					<div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
						<div className="text-center md:text-left mb-4 md:mb-0">
							<p className="text-gray-600">
								© {new Date().getFullYear()} Claudio
							</p>
							<p className="text-gray-500 text-sm mt-1">
								Made with Next.js & Tailwind CSS
							</p>
						</div>

						<div className="flex space-x-4">
							<a
								href="https://github.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-500 transition-colors hover:scale-110 transform duration-300"
								aria-label="GitHub"
							>
								<Github size={20} />
							</a>
							<a
								href="https://linkedin.com/in/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-500 transition-colors hover:scale-110 transform duration-300"
								aria-label="LinkedIn"
							>
								<Briefcase size={20} />
							</a>
							<a
								href="mailto:your.email@example.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-500 transition-colors hover:scale-110 transform duration-300"
								aria-label="Email"
							>
								<Mail size={20} />
							</a>
						</div>
					</div>
				</footer>
			</main>

			{/* Add keyframes for animations */}
			<style jsx global>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				@keyframes slideInFromLeft {
					from {
						transform: translateX(-30px);
						opacity: 0;
					}
					to {
						transform: translateX(0);
						opacity: 1;
					}
				}

				@keyframes slideInFromRight {
					from {
						transform: translateX(30px);
						opacity: 0;
					}
					to {
						transform: translateX(0);
						opacity: 1;
					}
				}

				@keyframes slideInFromBottom {
					from {
						transform: translateY(30px);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
};

export default Portfolio;

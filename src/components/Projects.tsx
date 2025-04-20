type Project = {
	title: string;
	description: string;
	technologies: string[];
	github: string;
	live: string;
	image: string;
	category: string;
};

const projects: Project[] = [
	{
		title: "SPCB - Society of PC Building Website",
		description:
			"A responsive website for the Society of PC Building club at the University of Florida. Features include event calendar with multiple views, member counts, project showcases, and an admin dashboard for managing club content.",
		technologies: [
			"Next.js",
			"TypeScript",
			"React",
			"Tailwind CSS",
			"Firebase",
			"Framer Motion",
			"React Query",
		],
		github: "https://github.com/PCBuilding/SPCBWebsite",
		live: "https://spcbatuf.org/",
		image: "/projects/spcb.png",
		category: "Webapp",
	},
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
		image: "/projects/project101.png",
		category: "Webapp",
	},
	{
		title: "Hudle.io - Custom Wordle-like Games Creator",
		description: "A platform for creating and playing custom Wordle-like games.",
		technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "TypeScript"],
		github: "https://github.com/ClaudioGSDB/hudle.io",
		live: "https://hudle-io.vercel.app/",
		image: "/projects/Hudle.png",
		category: "Webapp",
	},
	{
		title: "MusicVisz - Spotify Music Visualization (API Deprecated)",
		description:
			"An interactive visualization tool that creates a network graph of your top Spotify tracks, connecting songs based on audio feature similarity and providing detailed insights into your music taste.",
		technologies: [
			"React",
			"TypeScript",
			"D3.js",
			"Spotify Web API",
			"Styled Components",
			"Data structures",
		],
		github: "https://github.com/ClaudioGSDB/spotifyVisz",
		live: "https://musicvisz.vercel.app/",
		image: "/projects/musicvisz.png",
		category: "Webapp",
	},
	{
		title: "Split-Mate - Group Expense Management",
		description:
			"A streamlined web application for managing expense splitting across social groups, featuring shared shopping lists, expense tracking, payment history, and automated expense reports.",
		technologies: ["Next.js", "Supabase", "React", "Tailwind CSS", "TypeScript"],
		github: "https://www.split-mate.com/",
		live: "https://split-mate-mu.vercel.app/",
		image: "/projects/splitmate.png",
		category: "Webapp",
	},
	{
		title: "Orbital Defender - Space Arcade Game",
		description:
			"A space-themed arcade game where players orbit a planet and defend it from incoming meteors. Features include procedurally generated meteors, orbital movement mechanics, difficulty progression, and visual effects like explosions and thruster animations.",
		technologies: [
			"Java",
			"Processing",
			"Object-Oriented Design",
			"Procedural Generation",
			"Collision Detection",
		],
		github: "https://github.com/ClaudioGSDB/Orbital-defender",
		live: "",
		image: "/projects/orbitaldefender.png",
		category: "Game",
	},
	{
		title: "Leaper - Minimalist Platformer Game",
		description:
			"A precision platformer where players control a character leaping across challenging levels. Built with Unity, Leaper features smooth movement, minimalist pixel art, and levels that test timing and skill.",
		technologies: ["Unity", "C#", "2D Game Physics", "Pixel Art"],
		github: "https://github.com/ClaudioGSDB/Leaper",
		live: "https://fisizion.itch.io/leaper",
		image: "/projects/leaper.png",
		category: "Game",
	},
	{
		title: "Little Samurai - Top-Down Boss Rush Adventure",
		description:
			"A top-down pixel art boss rush game where you play as a brave samurai seeking revenge for his father's death. Battle through an atmospheric temple, face a gauntlet of deadly bosses, and prove your honor in this short but intense action-packed journey.",
		technologies: [
			"Unity",
			"C#",
			"2D Game Physics",
			"Pixel Art",
			"Enemy AI",
			"Animation",
		],
		github: "",
		live: "https://fisizion.itch.io/little-samurai",
		image: "/projects/littlesamurai.png",
		category: "Game",
	},
	{
		title: "Outside the Box - Sensor-Based Android Puzzle Game",
		description:
			"An Android puzzle game that challenges players to think outside conventional gameplay mechanics. Each level utilizes different device sensors and capabilities including accelerometer, gyroscope, camera, light sensor, network connectivity, touch, and more.",
		technologies: [
			"Android Studio",
			"Java",
			"Android Sensors API",
			"Camera API",
			"Device Sensor Integration",
			"ML Kit Text Recognition",
		],
		github: "https://github.com/ClaudioGSDB/Outside-the-box",
		live: "",
		image: "/projects/outsidethebox.png",
		category: "Mobile App",
	},
];

export default projects;

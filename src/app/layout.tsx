import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Claudio Sciotto Portfolio",
	description:
		"Claudio Sciotto is a passionate full-stack developer specializing in React, Node.js, and modern cloud technologies.",
	keywords: [
		"Claudio Sciotto",
		"Claudio Sciotto developer",
		"Claudio Sciotto UF",
		"Claudio Sciotto University of Florida",
		"Claudio Sciotto portfolio",
		"Claudio Sciotto full stack developer",
		"Claudio Sciotto React",
		"Claudio Sciotto Next.js",
		"Claudio Sciotto TypeScript",
		"Claudio Sciotto Samsung Austin Semiconductor",
		"Claudio Sciotto SPCB",
		"Claudio Sciotto web developer",
		"Fisz",
		"Fisizion",
	],
	authors: [{ name: "Claudio Sciotto", url: "https://github.com/claudioGSDB" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

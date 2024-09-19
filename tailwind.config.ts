import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "500px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				myblue: "#1B71FF",
				bgone: "#AFF7EC",
				bgtwo: "#A5A2CD",
				bgthree: "#F9EDC8",
			},
			padding: {
				safe: "env(safe-area-inset-top)",
			},
		},
	},
	plugins: [],
};
export default config;

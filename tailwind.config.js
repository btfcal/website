const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2b50dc",
				accent: "#fcc2c1",
			},
			fontFamily: {
				primary: ["Circular", defaultTheme.fontFamily.sans],
				accent: ["Ambit", defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"-gradient-60": "linear-gradient(-60deg, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

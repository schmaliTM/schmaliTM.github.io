module.exports = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundSize: {
				"50%": "50%",
			},
			colors: {
				grau: "hsla(240, 0%, 55%, 1)",
				blau: "hsla(198.2, 100%, 44.5%, 1)",
				gruen: "hsla(86, 52%, 60%, 1)",
			},
			fontFamily: {
				martel: ["Martel", "system-ui", "serif"],
				serif: ["Roboto Slab", "system-ui", "serif"],
				sans: ["Baloo Tamma 2", "system-ui", "sans-serif"],
				code: ["JetBrainsMono", "system-ui", "mono"],
			},
			gridTemplateColumns: {
				timeline: "1.5fr 70px 5fr",
				referenz: "minmax(6rem,14rem), minmax(min-content, max-content)",
				bigReferenz: "minmax(6rem,10rem), minmax(min-content, 290px)",
			},
			gridTemplateRows: {
				referenz: "max-content, auto",
			},
			screens: {
				xs: "540px",
				smallish: "720px",
			},
		},
	},
	plugins: [],
};

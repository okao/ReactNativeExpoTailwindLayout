/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{tsx, ts, js, jsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: ['nativewind/babel', require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

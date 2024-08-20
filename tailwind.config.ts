import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#F95F62',
				secondary: '#00A676',
				backgroundStart: '#0F2027',
				backgroundEnd: '#2C5364',
				textPrimary: '#FFFFFF',
				textSecondary: '#D3D3D3',
			},
			fontFamily: {
				headline: ['"Abril Fatface"', 'serif'],
				body: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, #0F2027 0%, #2C5364 100%)',
			},
			boxShadow: {
				'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
				'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [require('daisyui')],
};
export default config;

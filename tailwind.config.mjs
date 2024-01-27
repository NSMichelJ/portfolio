/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'banner-background': "url('/img/banner-background.jpg')",
			},
			colors: {
				'mariner': {
					'50': '#edfaff',
					'100': '#d6f3ff',
					'200': '#b5ecff',
					'300': '#83e2ff',
					'400': '#48cfff',
					'500': '#1eb1ff',
					'600': '#0693ff',
					'700': '#0071e2',
					'800': '#0861c5',
					'900': '#0d549b',
					'950': '#0e335d',
				},
				'bunker': {
					'50': '#f7f7f8',
					'100': '#eeeef0',
					'200': '#d9d9de',
					'300': '#b8b9c1',
					'400': '#91939f',
					'500': '#747583',
					'600': '#5e5f6b',
					'700': '#4c4d58',
					'800': '#42424a',
					'900': '#3a3a40',
					'950': '#19191c',
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}

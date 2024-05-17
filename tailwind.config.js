/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#B5EF87',
        secondary: "#18191A"
			}
		}
	},
	plugins: []
};

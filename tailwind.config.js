/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {
		animation: {
			'fade-in': 'fadeIn 0.3s ease-out',
		  },
	  },
	},
	plugins: [require("daisyui")],
	daisyui: {
	  themes: ["dark"],
	}
  }
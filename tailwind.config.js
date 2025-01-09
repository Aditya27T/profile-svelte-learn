// tailwind.config.js
module.exports = {
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
	  themes: [
		{
		  light: {
			...require("daisyui/src/theming/themes")["light"],
			primary: "#570df8",
			"primary-content": "#ffffff",
		  },
		  dark: {
			...require("daisyui/src/theming/themes")["dark"],
			primary: "#570df8",
			"primary-content": "#ffffff",
		  },
		},
	  ],
	},
  }
import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		csrf: {
	                trustedOrigins: [
				"https://morningtide.com.au",
				"https://db.morningtide.com.au",
				"http://localhost:3000",
				"http://127.0.0.1:3000"
			],
		},
		adapter: adapter()
	},
};

export default config;

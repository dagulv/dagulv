import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	// preprocess: [
	// 	vitePreprocess(),
	// 	mdsvex({
	// 		extensions: [".md"]
	// 	}),
	// ],
	// extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			'$db': './src/db',
			'$components': 'src/components'
		}
	}
};

export default config;

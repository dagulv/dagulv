import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

const slugs = JSON.parse(fs.readFileSync("src/lib/slugs.json", 'utf-8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			'$db': './src/db',
			'$components': 'src/components'
		},
		prerender: {
			entries: Object.keys(slugs)
		}
	}
};

export default config;

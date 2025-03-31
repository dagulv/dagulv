import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';
import markdownit from 'markdown-it';
import anchor from 'markdown-it-anchor';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		mdPlugin({ mode: [Mode.HTML], markdownIt: markdownit().use(anchor) })
	]
});

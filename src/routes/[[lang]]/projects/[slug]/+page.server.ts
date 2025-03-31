import { getPage } from '$lib/api';
import type { postPage } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const page = await getPage(parent, 'json', 'projects', params.slug, 'index');
	const post = (await getPage(parent, 'md', 'projects', params.slug, 'index')) as postPage;
	// const page = await getPage(parent, 'json', 'index');

	// const toc = getTOC((content as { html: string }).html);
	console.log(post.toc);

	return { page, content: post.html, toc: post.toc };
};

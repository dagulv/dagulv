import { getPage, getPost } from '$lib/api.svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const page = await getPage<'projects'>(parent, 'projects', params.slug);
	const post = await getPost(parent, 'projects', params.slug);
	return { page, content: post.html };
};

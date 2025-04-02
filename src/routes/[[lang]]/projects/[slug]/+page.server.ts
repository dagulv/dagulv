import { getPage, getPost } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const page = await getPage(parent, 'projects', params.slug, 'index');
	const post = await getPost(parent, 'projects', params.slug, 'index');
	return { page, content: post.html };
};

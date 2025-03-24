import { getPage } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const page = await getPage(parent, 'json', 'projects', params.slug, 'index');
	const content = await getPage(parent, 'md', 'projects', params.slug, 'index');
	// const page = await getPage(parent, 'json', 'index');

	return { page, content };
};

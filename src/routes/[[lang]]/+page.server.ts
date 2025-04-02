import { getPage } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const page = await getPage(parent, 'index');

	return { page };
};

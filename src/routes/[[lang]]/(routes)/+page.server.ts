import { getPage } from '$lib/api.svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const page = await getPage(parent);

	return { page };
};

import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PageError } from '$lib/error';
import { validPage } from '$lib/api.svelte';

export const load: LayoutServerLoad = async ({ url, parent }) => {
	const data = await parent();

	try {
		if (!(await validPage(data.lang, url.pathname))) {
			return;
		}
	} catch (err) {
		if (err instanceof PageError) {
			error(404, { message: 'error', page: err.page });
		}
	}

	return;
};

export const prerender = true;

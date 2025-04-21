import slugs from '$lib/slugs.json';
import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
	if (url.pathname in slugs) {
		return slugs[url.pathname as keyof typeof slugs];
	}

	return url.pathname;
};

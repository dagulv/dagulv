import { slugs } from '$lib/api.svelte';
import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
	if (url.pathname in slugs) {
		return slugs[url.pathname];
	}

	return url.pathname;
};

// import type { Transport } from '@sveltejs/kit';
// import { DateTime } from 'luxon';

// export const transport: Transport = {
// 	DateTime: {
// 		encode: (value) => DateTime. && value.toISODate(),
// 		decode: (value) => DateTime.fromISO(value)
// 	}
// };

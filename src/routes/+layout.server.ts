import type { misc as miscType } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const lang = locals.lang;

	const { default: misc }: { default: miscType } = await import(`$db/${lang}/misc.json`);

	return {
		lang,
		misc
	};
};

export const prerender = true;
export const trailingSlash = 'always';

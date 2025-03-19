import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is ('en') => {
	return param === 'en';
}) satisfies ParamMatcher;
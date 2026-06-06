import { otherLangs } from '$lib/constants';
import type { lang } from '$lib/types';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'en' => {
	return otherLangs.includes(param as lang);
}) satisfies ParamMatcher;

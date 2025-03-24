import { otherLangs } from '$lib/constants';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'en' => {
	console.log('params match', param);

	return otherLangs.includes(param);
}) satisfies ParamMatcher;

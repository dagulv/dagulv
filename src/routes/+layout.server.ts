import type { misc as miscType, lang } from '$lib/types';
import type { LayoutServerLoad } from './[[lang=lang]]/$types';
import { defaultLang } from '$lib/constants';

export const load: LayoutServerLoad = async ({ params }) => {
	const lang: lang = params.lang || defaultLang;
	const { default: misc }: { default: miscType } = await import(`$db/${lang}/misc.json`);

	return {
		lang,
		misc
	};
};

import type { misc as miscType, lang, pageTypes } from '$lib/types';
import { error } from '@sveltejs/kit';
import { PageError } from '$lib/error';
import type { LayoutServerLoad } from './$types';
import { slugs } from '$lib/api';
import { defaultLang } from '$lib/constants';

export const load: LayoutServerLoad = async ({ params, url }) => {
	// return {};
	const lang: lang = params.lang || defaultLang;
	// const page: keyof pageTypes = url.pathname.split('/')[1] || 'index';

	try {
		if (!(await validPage(lang, url.pathname))) {
			return;
		}

		const { default: misc }: { default: miscType } = await import(`$db/${lang}/misc.json`);

		return {
			lang,
			misc
		};
	} catch (err) {
		if (err instanceof PageError) {
			error(404, { message: 'error', page: err.page });
		}
	}
	// const pageContent = await getPage(lang, rawPage);
	// error(404, { message: 'error', page: pageContent });
};

async function validPage(lang: lang, path: string): Promise<boolean> {
	// const page = pages.includes(rawPage as T) ? (rawPage as T) : '404';

	// const { default: pageContent }: { default: pageTypes['404'] } = await import(
	// 	`db/${lang}/404.json`
	// );
	// // return pageContent;
	// if (slugs.includes(rawPage as T)) {
	// 	const { default: pageContent } = await import(`db/${lang}/${rawPage}.json`);
	// 	return pageContent satisfies pageTypes[T];
	// }
	// throw new PageError(pageContent);

	if (Object.keys(slugs).includes(path)) {
		return true;
	}

	const { default: pageContent }: { default: pageTypes['404'] } = await import(
		`$db/${lang}/404.json`
	);
	throw new PageError(pageContent);
}

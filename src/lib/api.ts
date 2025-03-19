import type { PageServerParentData } from '../routes/[[lang=lang]]/$types';
import { defaultLang } from './constants';
import type { pageTypes } from './types';

// export async function getPage<T extends keyof pageTypes>(
// 	lang: lang,
// 	rawPage: string
// ): Promise<pageTypes[T]> {
// 	// const page = pages.includes(rawPage as T) ? (rawPage as T) : '404';

// 	const { default: pageContent }: { default: pageTypes['404'] } = await import(
// 		`db/${lang}/404.json`
// 	);
// 	// return pageContent;
// 	if (slugs.includes(rawPage as T)) {
// 		const { default: pageContent } = await import(`db/${lang}/${rawPage}.json`);
// 		return pageContent satisfies pageTypes[T];
// 	}
// 	throw new PageError(pageContent);
// }

export async function getPage<T extends keyof pageTypes>(
	parent: () => Promise<PageServerParentData>,
	ext: string,
	...slug: T[]
) {
	const data = await parent();

	const lang = data.lang ?? defaultLang;

	const { default: pageContent }: { default: pageTypes[T] } = await import(
		`$db/${lang}/${slug.join('/')}.${ext}`
	);
	console.log(pageContent);

	return pageContent;
}

export const slugs: Record<string, string> = {
	'/': '/',
	'/en': '/en',

	'/projekt/designstudion': '/projects/the-design-studio',
	'/en/projects/the-design-studio': '/projects/the-design-studio',

	'/projekt/ioffice': '/projects/ioffice',
	'/en/projects/ioffice': '/projects/ioffice'
};

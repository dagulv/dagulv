import { page } from '$app/state';
import type { PageServerParentData } from './$types';
import { defaultLang, otherLangs } from './constants';
import { getLangContext } from './contexts';
import { PageError } from './error';
import type { lang, pageTypes, postPage } from './types';

const db = import.meta.glob('$db/**/*.*', { eager: true });

async function getContent<T extends keyof pageTypes>(
	parent: () => Promise<PageServerParentData>,
	ext: 'json' | 'md',
	slug: T,
	files: string[]
) {
	const data = await parent();

	const lang = data.lang ?? defaultLang;

	let path = `/src/db/${lang}/${slug}.${ext}`;

	if (files.length > 0) {
		path = `/src/db/${lang}/${slug}/${files.join('/')}.${ext}`;
	}

	if (!db[path]) {
		throw new Error('not found');
	}

	return (await db[path]) as pageTypes[T] | postPage;
}

export async function getPost<T extends keyof pageTypes>(
	parent: () => Promise<PageServerParentData>,
	slug: T,
	...files: string[]
) {
	return (await getContent(parent, 'md', slug, files)) as postPage;
}

export async function getPage<T extends keyof pageTypes>(
	parent: () => Promise<PageServerParentData>,
	slug: T,
	...files: string[]
) {
	return (await getContent(parent, 'json', slug, files)) as pageTypes[T];
}

export async function validPage(lang: lang, path: string): Promise<boolean> {
	if (Object.keys(slugs).includes(path)) {
		return true;
	}

	const { default: pageContent }: { default: pageTypes['404'] } = await import(
		`$db/${lang}/404.json`
	);
	throw new PageError(pageContent);
}

export const slugs: Record<string, string> = {
	'/': '/',
	'/en': '/',

	'/projekt/designstudion': '/projects/the-design-studio',
	'/en/projects/the-design-studio': '/projects/the-design-studio',

	'/projekt/ioffice': '/projects/ioffice',
	'/en/projects/ioffice': '/projects/ioffice'
};

export function link(href: string): string {
	for (const l of otherLangs) {
		if (href.startsWith(`/${l}/`)) {
			return href;
		}
	}

	const lang = getLangContext();

	if (lang === defaultLang) {
		return href;
	}

	return '/' + lang + href;
}

import type { PageServerParentData } from './$types';
import { defaultLang, otherLangs } from './constants';
import { getLangContext } from './contexts';
import { PageError } from './error';
import type { lang, pageTypes, postPage } from './types';
import slugs from './slugs.json';

const db = import.meta.glob('$db/**/*.*', { eager: true });

async function getContent(
	parent: () => Promise<PageServerParentData>,
	ext: 'json' | 'md',
	paths: string[]
) {
	const data = await parent();

	const lang: lang = data.lang ?? defaultLang;

	const path = '/' + paths.join('/');

	let dbPath = '';

	for (const [key, value] of Object.entries(slugs)) {
		const isOtherLang = otherLangs.includes(lang);

		if (value === path && key.startsWith(`/${isOtherLang ? lang : ''}`)) {
			dbPath = '/src/db';

			if (!isOtherLang) {
				dbPath += `/${lang}`;
			}

			dbPath += key;

			if (!dbPath.endsWith('/')) {
				dbPath += '/';
			}

			dbPath += `index.${ext}`;
			break;
		}
	}

	if (!db[dbPath]) {
		throw new Error('not found');
	}

	return db[dbPath];
}

export async function getPost(parent: () => Promise<PageServerParentData>, ...paths: string[]) {
	return (await getContent(parent, 'md', paths)) as postPage;
}

export async function getPage<T extends keyof pageTypes>(
	parent: () => Promise<PageServerParentData>,
	...paths: string[]
) {
	return (await getContent(parent, 'json', paths)) as pageTypes[T];
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

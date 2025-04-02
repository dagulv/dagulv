import type { PageServerParentData } from './$types';
import { defaultLang } from './constants';
import type { pageTypes, postPage } from './types';

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
	// const parser = new DOMParser();
	// const doc = parser.parseFromString((module as { html: string }).html, 'text/html');
	// const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
	// const toc: toc[] = [];
	// for (const heading of headings) {
	// 	if (heading.id) {
	// 		const level = parseInt(heading.tagName[1]);
	// 		toc.push({
	// 			label: heading.textContent?.trim() ?? '',
	// 			value: heading.id,
	// 			indent: level
	// 		});
	// 	}
	// }
	return (await getContent(parent, 'md', slug, files)) as postPage;
}

export async function getPage<T extends keyof pageTypes>(
	parent: () => Promise<PageServerParentData>,
	slug: T,
	...files: string[]
) {
	return (await getContent(parent, 'json', slug, files)) as pageTypes[T];
}

// export function getTOC(md: string): option[] {
// 		const lines = mdString.split("\n");
// 		const toc = [];

// 		lines.forEach(line => {
// 			const match = line.match(/^(#{1,6})\s+(.+?)(?:\s+\{#(.+?)\})?$/); // Match headings
// 			if (match) {
// 				const level = match[1].length; // Number of `#` determines level
// 				const text = match[2].trim();
// 				const id = match[3] || text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""); // Auto-generate ID if missing

// 				toc.push({ level, text, id });
// 			}
// 		});

// 	return [];
// }

export const slugs: Record<string, string> = {
	'/': '/',
	'/en': '/',

	'/projekt/designstudion': '/projects/the-design-studio',
	'/en/projects/the-design-studio': '/projects/the-design-studio',

	'/projekt/ioffice': '/projects/ioffice',
	'/en/projects/ioffice': '/projects/ioffice'
};

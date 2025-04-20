import { otherLangs } from '$lib/constants';
import { defaultLang } from '$lib/constants';
import type { pageTypes } from '$lib/types';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const lang: Handle = async ({ event, resolve }) => {
	let lang = defaultLang;

	const rawLang = event.url.pathname.split('/')[1] as typeof lang;

	if (otherLangs.includes(rawLang)) {
		lang = rawLang;
	}

	event.locals.lang = lang;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
	return response;
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ event }) {
	const { default: pageContent }: { default: pageTypes['404'] } = await import(
		`$db/${event.locals.lang}/404.json`
	);

	return {
		message: 'error',
		page: pageContent
	};
}

export const handle = sequence(lang);

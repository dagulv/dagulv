import { otherLangs } from '$lib/constants';
import { defaultLang } from '$lib/constants';
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

export const handle = sequence(lang);

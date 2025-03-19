import { getContext, setContext } from 'svelte';
import type { misc, lang } from './types';

const miscKey = Symbol('misc');

export function setMiscContext(misc: misc) {
	setContext(miscKey, misc);
}

export function getMiscContext(): misc {
	return getContext(miscKey) as misc;
}

const langKey = Symbol('lang');

export function setLangContext(lang: lang) {
	setContext(langKey, lang);
}

export function getLangContext(): lang {
	return getContext(langKey) as lang;
}

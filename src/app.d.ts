// See https://svelte.dev/docs/kit/types#app.d.ts

import type { lang, pageTypes } from '$lib/types';

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			page: pageTypes['404'];
		}
		interface Locals {
			error: boolean;
			lang: lang;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

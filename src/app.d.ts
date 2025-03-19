// See https://svelte.dev/docs/kit/types#app.d.ts

import type { pageTypes } from '$lib/types';

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			page: pageTypes['404'];
		}
		interface Locals {
			error: boolean;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

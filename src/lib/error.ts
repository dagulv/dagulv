import type { pageTypes } from './types';

export class PageError {
	constructor(page: pageTypes['404']) {
		this.page = page;
	}

	page: pageTypes['404'];
}

import { page } from '$app/state';
import { DateTime } from 'luxon';

export const date = {
	today: DateTime.local(),
	get current() {
		return page.url.searchParams.has('date')
			? DateTime.fromISO(page.url.searchParams.get('date') || '')
			: this.today;
	}
};

export const TimeFormat = 'HH:mm';
export const YearMonthFormat = 'yyyy MMMM';

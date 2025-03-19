import type { Icon } from 'lucide-svelte';
import type { SiComponentType } from '@icons-pack/svelte-simple-icons';

type date = string;

export type indexPage = {
	name: string;
	role: string;
	intro: string;
	content: string;
	projects: postItem[];
	articles: postItem[];
	about: postItem;
	experience: timelineItem[];
	education: timelineItem[];
};

export type page404 = {
	title: string;
	description: string;
	message: string;
};

export type pageTypes = {
	index: indexPage;
	'404': page404;
};

export type misc = {
	present: string;
	experience: string;
	education: string;
	skills: string;
	projects: string;
	articles: string;
	today: string;
};

export type lang = 'sv' | 'en';

export type timelineItem = {
	imgUrl: string;
	title: string;
	description: string;
	from: date;
	to: date | null;
};

export type postItem = {
	title: string;
	description: string;
	link?: string;
};

export type iconOption = {
	icon: string | typeof Icon | SiComponentType;
	label: string;
};

export type option = {
	label: string;
	value: string;
};

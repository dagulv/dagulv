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

export type errorPage = {
	title: string;
	description: string;
	message: string;
};

export type projectPage = {
	title: string;
	subtitle: string;
	date: string;
};

export type pageTypes = {
	index: indexPage;
	'404': errorPage;
	projects: projectPage;
};

export type misc = {
	name: string;
	present: string;
	experience: string;
	education: string;
	skills: string;
	projects: string;
	articles: string;
	today: string;
	nav: {
		link: string;
		label: string;
	}[];
	home: string;
	content: string;
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

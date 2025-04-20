import type { Icon } from 'lucide-svelte';
import type { SiGithub } from '@icons-pack/svelte-simple-icons';

type date = string;

export type link = {
	text: string;
	href: string;
};

export type indexPage = {
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
	headings: option[];
};

export type pageTypes = {
	index: indexPage;
	'404': errorPage;
	projects: projectPage;
};

export type misc = {
	name: string;
	role: string;
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
	resume: {
		text: string;
		link: link;
	};
};

export type lang = 'sv' | 'en';

export type timelineItem = {
	imgUrl: string;
	title: string;
	description: string;
	from: date;
	to: date | null;
	background: string | undefined;
};

export type postItem = {
	title: string;
	description: string;
	link?: string;
};

export type postPage = { html: string };

export type iconOption = {
	icon: string | (typeof Icon | typeof SiGithub);
	label: string;
};

export type option = {
	label: string;
	value: string;
};

export type toc = {
	label: string;
	value: string;
	indent: number;
};

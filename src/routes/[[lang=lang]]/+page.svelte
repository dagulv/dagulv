<script lang="ts">
	import { page } from '$app/state';
	import TimelineList from '$components/TimelineList.svelte';
	import type { PageProps } from './$types';
	import { getMiscContext } from '$lib/contexts';
	import CapsuleList from '$components/CapsuleList.svelte';
	import {
		SiFigma,
		SiFlutter,
		SiGithub,
		SiGo,
		SiJavascript,
		SiPhp,
		SiPostgresql,
		SiSvelte,
		SiThreedotjs,
		SiTypescript,
		SiWordpress
	} from '@icons-pack/svelte-simple-icons';
	import PostList from '../../components/PostList.svelte';

	let { data }: PageProps = $props();

	const { sv, en } = $derived.by(() => {
		let path = page.url.pathname;

		if (path.startsWith('/en')) {
			path = path.slice(3);
		}

		return {
			sv: page.url.origin + path + page.url.search,
			en: page.url.origin + '/en' + path + page.url.search
		};
	});

	const misc = getMiscContext();
</script>

<header class="mt-4 mb-16 flex justify-center md:mt-32">
	<div class="container flex items-baseline justify-between">
		<div>
			<h1 class="text-gold-400 text-base font-bold">{data.page.name}</h1>
			<p class="text-gold-700 text-sm">{data.page.role}</p>
		</div>

		<nav>
			<div class="text-gold-500 flex gap-0.5">
				<a
					data-sveltekit-reload
					class={['cursor-pointer hover:underline', data.lang === 'sv' && 'underline']}
					href={sv}>SV</a
				>
				<span>/</span>
				<a
					data-sveltekit-reload
					class={['cursor-pointer hover:underline', data.lang === 'en' && 'underline']}
					href={en}>EN</a
				>
			</div>
		</nav>
	</div>
</header>

<main class="mb-16 flex flex-col items-center gap-20">
	<div class="animate container">
		<p>{data.page.intro}</p>
	</div>
	<div class="container flex flex-wrap items-start gap-4 gap-y-20">
		<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
			<h2 class="animate">{misc.projects}</h2>
			<PostList items={data.page.projects} />
		</div>
		<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
			<h2 class="animate">{misc.articles}</h2>
			<PostList items={data.page.articles} />
		</div>
	</div>
	<div class="container">
		<h2 class="animate">{misc.today}</h2>
		<p class="animate">{data.page.content}</p>
	</div>
	<div class="container">
		<h2 class="animate">{misc.experience}</h2>
		<TimelineList items={data.page.experience} />
	</div>
	<div class="container">
		<h2 class="animate">{misc.education}</h2>
		<TimelineList items={data.page.education} />
	</div>
	<div class="container">
		<h2 class="animate">{misc.skills}</h2>
		<CapsuleList
			items={[
				{
					icon: SiGithub,
					label: 'Github'
				},
				{
					icon: SiGo,
					label: 'Go'
				},
				{
					icon: SiSvelte,
					label: 'Svelte'
				},
				{
					icon: SiJavascript,
					label: 'Javascript'
				},
				{
					icon: SiTypescript,
					label: 'Typescript'
				},
				{
					icon: SiPhp,
					label: 'PHP'
				},
				{
					icon: SiWordpress,
					label: 'Wordpress'
				},
				{
					icon: SiThreedotjs,
					label: 'Three.js'
				},
				{
					icon: SiFlutter,
					label: 'Flutter'
				},
				{
					icon: SiFigma,
					label: 'Figma'
				},
				{
					icon: SiPostgresql,
					label: 'Postgresql'
				}
			]}
		/>
	</div>
</main>

<footer class="animate border-gold-750 flex h-16 items-center justify-center border-t">
	<div class="container flex justify-between">
		<p class="text-gold-700 text-sm">Dag Ulvsbäck</p>
		<ul class="text-gold-700 flex text-sm">
			<li class="contents">
				<a href="https://github.com/" target="_blank">Github</a>
			</li>
		</ul>
	</div>
</footer>

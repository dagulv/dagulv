<script lang="ts">
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
	import Header from '$components/Header.svelte';

	let { data }: PageProps = $props();

	const misc = getMiscContext();
</script>

<Header title={data.page.name} subtitle={data.page.role} />

<main class="mb-16 flex flex-col items-center gap-20">
	<div class="animate container">
		<p>{data.page.intro}</p>
	</div>
	<div class="container flex flex-wrap items-start gap-4 gap-y-20">
		<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
			<h2 class="label animate">{misc.projects}</h2>
			<PostList items={data.page.projects} />
		</div>
		<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
			<h2 class="label animate">{misc.articles}</h2>
			<PostList items={data.page.articles} />
		</div>
	</div>
	<div class="container">
		<h2 class="label animate">{misc.today}</h2>
		<p class="animate">{data.page.content}</p>
	</div>
	<div class="container">
		<h2 class="label animate">{misc.experience}</h2>
		<TimelineList items={data.page.experience} />
	</div>
	<div class="container">
		<h2 class="label animate">{misc.education}</h2>
		<TimelineList items={data.page.education} />
	</div>
	<div class="container">
		<h2 class="label animate">{misc.skills}</h2>
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

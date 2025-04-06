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
	import Wrapper from '$components/Wrapper.svelte';

	let { data }: PageProps = $props();

	const misc = getMiscContext();
</script>

<Wrapper>
	<Header title={data.page.name} subtitle={data.page.role} class="col-start-2 mb-8" />

	<main class="col-start-2 mb-0 flex flex-col items-center gap-20 *:w-full">
		<div class="">
			<p class="m-0">{data.page.intro}</p>
		</div>
		<div class=" flex flex-wrap items-start gap-4 gap-y-20">
			{#if data.page.projects.length > 0}
				<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
					<h2 class="label animate">{misc.projects}</h2>
					<PostList items={data.page.projects} />
				</div>
			{/if}
			{#if data.page.articles.length > 0}
				<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
					<h2 class="label animate">{misc.articles}</h2>
					<PostList items={data.page.articles} />
				</div>
			{/if}
		</div>
		<div class="">
			<h2 class="label animate">{misc.today}</h2>
			<p class="animate m-0">{data.page.content}</p>
		</div>
		<div class="">
			<h2 class="label animate">{misc.experience}</h2>
			<TimelineList items={data.page.experience} />
		</div>
		<div class="">
			<h2 class="label animate">{misc.education}</h2>
			<TimelineList items={data.page.education} />
		</div>
		<div class="">
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

	<aside class="col-start-3 h-max">
		<p class="m-0 inline text-sm italic">
			{misc.resume.text}
			<a target="_blank" href={misc.resume.link.href}>
				<strong>{misc.resume.link.text}</strong>
			</a>
		</p>
	</aside>
</Wrapper>

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
	import PostList from '$components/PostList.svelte';
	import Header from '$components/Header.svelte';
	import Wrapper from '$components/Wrapper.svelte';

	let { data }: PageProps = $props();

	const misc = getMiscContext();
</script>

<Wrapper>
	<Header title={data.misc.name} subtitle={data.misc.role} class="col-start-2 mb-8" />

	<main class="col-start-2 mb-0 flex flex-col items-center gap-20 *:w-full">
		<div class="">
			<p class="m-0">{data.page.intro}</p>
		</div>
		<div class=" flex flex-wrap items-start gap-4 gap-y-20">
			{#if data.page.projects.length > 0}
				<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
					<h2 class="label">{misc.projects}</h2>
					<PostList items={data.page.projects} />
				</div>
			{/if}
			{#if data.page.articles.length > 0}
				<div class="max-w-80 min-w-[min(100%,calc(var(--spacing)*64))] flex-1">
					<h2 class="label">{misc.articles}</h2>
					<PostList items={data.page.articles} />
				</div>
			{/if}
		</div>
		<div class="">
			<h2 class="label">{misc.today}</h2>
			<p class="m-0">{data.page.content}</p>
		</div>
		<div class="">
			<h2 class="label">{misc.experience}</h2>
			<TimelineList items={data.page.experience} />
		</div>
		<div class="">
			<h2 class="label">{misc.education}</h2>
			<TimelineList items={data.page.education} />
		</div>
		<div class="">
			<h2 class="label">{misc.skills}</h2>
			<CapsuleList
				items={[
					{
						icon: SiGo,
						label: 'Go'
					},
					{
						icon: SiPostgresql,
						label: 'Postgresql'
					},
					{
						icon: SiJavascript,
						label: 'Javascript'
					},
					{
						icon: SiSvelte,
						label: 'Svelte'
					},
					{
						icon: SiGithub,
						label: 'Github'
					}
				]}
			/>
		</div>
	</main>

	<aside class="col-start-3 h-max">
		<p class="m-0 mt-24 hidden text-sm italic md:inline">
			{misc.resume.text}
			<a target="_blank" href={misc.resume.link.href}>
				<strong>{misc.resume.link.text}</strong>
			</a>
		</p>
	</aside>
</Wrapper>

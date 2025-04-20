<script lang="ts">
	import type { PageProps } from './$types';
	import { getMiscContext } from '$lib/contexts';
	import Header from '$components/Header.svelte';
	import { ArrowUpLeft } from 'lucide-svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import { link } from '$lib/api.svelte';

	let { data }: PageProps = $props();

	const misc = getMiscContext();
</script>

<Wrapper>
	<aside class="col-1 top-32 left-0 col-start-1 col-end-1 row-span-2 h-max md:sticky">
		<nav class="flex h-max flex-col gap-16">
			<a class="label flex items-center gap-1" href={link('/')}>
				<ArrowUpLeft size="16" class="text-gold-700" />
				{misc.home}
			</a>
			<div class="hidden md:block">
				<h3 class="label">{misc.content}</h3>
				<ul class="text-gold-500 flex list-none flex-col gap-0.5 p-0 text-sm leading-6">
					{#each data.page.headings as heading}
						<li class="contents">
							<a href={`#${heading.value}`}>{heading.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</aside>

	<main>
		<Header
			title={data.page.title}
			subtitle={new Date(data.page.date).toLocaleString('sv-SE', {
				day: 'numeric',
				year: 'numeric',
				month: 'long'
			})}
			class="col-start-2 col-end-2 mb-8 w-full p-0"
		/>

		{@html data.content}
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

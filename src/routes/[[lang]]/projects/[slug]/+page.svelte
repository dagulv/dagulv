<script lang="ts">
	import type { PageProps } from './$types';
	import { getMiscContext } from '$lib/contexts';
	import Header from '$components/Header.svelte';
	import { ArrowUpLeft } from 'lucide-svelte';

	let { data }: PageProps = $props();

	const misc = getMiscContext();
</script>

<main
	class="container mt-4 mb-16 flex grid-cols-[calc(var(--spacing)*48)_1fr_calc(var(--spacing)*48)] flex-col gap-4 md:mt-32 md:grid"
>
	<nav
		class="col-1 top-32 left-0 col-start-1 col-end-1 row-span-2 flex h-max flex-col gap-16 md:sticky"
	>
		<a class="label flex items-center gap-1" href="/">
			<ArrowUpLeft size="16" class="text-gold-700" />
			{misc.home}
		</a>
		<div class="hidden md:block">
			<h3 class="label">{misc.content}</h3>
			<ul class="text-gold-500 list-none p-0 text-sm leading-6">
				<li>Test 1</li>
				<li>Test 2</li>
				<li>Test 3</li>
			</ul>
		</div>
	</nav>

	<Header
		title={data.page.title}
		subtitle={new Date(data.page.date).toLocaleString('sv-SE', {
			day: 'numeric',
			year: 'numeric',
			month: 'long'
		})}
		class="col-start-2 col-end-2 mb-8 w-full p-0"
	/>

	<div class="col-start-2 col-end-2">
		{@html data.content.html}
	</div>
</main>

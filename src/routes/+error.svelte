<script lang="ts">
	import { page } from '$app/state';
	import Header from '$components/Header.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import { link } from '$lib/api.svelte';
	import { getMiscContext } from '$lib/contexts';
	import { ArrowUpLeft } from 'lucide-svelte';

	const misc = getMiscContext();
</script>

{#if page.error}
	<Wrapper>
		<aside class="col-1 top-32 left-0 col-start-1 col-end-1 row-span-2 h-max md:sticky">
			<nav class="flex h-max flex-col gap-16">
				<a class="label flex items-center gap-1" href={link('/')}>
					<ArrowUpLeft size="16" class="text-gold-700" />
					{misc.home}
				</a>
			</nav>
		</aside>

		<main>
			<Header
				title={misc.name}
				subtitle={misc.role}
				class="col-start-2 col-end-2 mb-8 w-full p-0"
			/>

			<p>{page.error.page.title}</p>

			<p>{page.error.page.description}</p>
		</main>

		<aside class="col-start-3 h-max">
			<p class="m-0 mt-24 hidden text-sm italic md:inline">
				{misc.resume.text}
				<a target="_blank" href={misc.resume.link.href} class="underline">
					<strong>{misc.resume.link.text}</strong>
				</a>
			</p>
		</aside>
	</Wrapper>
{/if}

<script lang="ts">
	import type { PageProps } from './$types';
	import { getMiscContext } from '$lib/contexts';
	import Header from '$components/Header.svelte';

	let { data }: PageProps = $props();

	console.log('content', data.content);

	const misc = getMiscContext();
</script>

<Header title={data.page.title} subtitle={data.page.subtitle} />

<main class=" mb-16 flex flex-col items-center gap-20 pt-16">
	<div class="container">
		{@html data.content.html}
	</div>
</main>

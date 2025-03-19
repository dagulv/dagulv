<script lang="ts">
	import type { PageProps } from './$types';
	import { getMiscContext } from '$lib/contexts';

	let { data }: PageProps = $props();

	const misc = getMiscContext();
</script>

<main class="mb-16 flex flex-col items-center gap-20">
	<div class="animate container">
		<p>{'test'}</p>
	</div>

	<div class="container">
		<h2 class="animate">{misc.today}</h2>
		<p class="animate">{'content'}</p>
	</div>
</main>

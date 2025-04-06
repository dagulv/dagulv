<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="wrapper mt-4 mb-12 flex grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)] flex-col gap-4 md:mt-32 md:mb-16 md:grid"
>
	{@render children()}
</div>

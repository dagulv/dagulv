<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className }: { children: Snippet; class?: string } = $props();
</script>

<div
	class={[
		'wrapper mt-4 mb-12 flex flex-1 grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)] flex-col gap-4 gap-x-[var(--sidebar-gap)] md:mt-32 md:mb-16 md:grid',
		className
	]}
>
	{@render children()}
</div>

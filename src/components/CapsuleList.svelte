<script lang="ts">
	import type { iconOption } from '$lib/types';

	let { items = [] }: { items: iconOption[] } = $props();
</script>

<ul class="animate flex flex-wrap gap-1">
	{#each items as item}
		<li class="contents">
			<span
				class="bg-gold-750 text-gold-500 hover:bg-gold-600 hover:text-gold-400 flex items-center gap-1 rounded-sm px-2 py-1 text-sm transition"
			>
				{#if typeof item.icon === 'string'}
					<img class="size-4" src={item.icon} alt={item.label} />
				{:else}
					<item.icon size={'16'} />
				{/if}
				{item.label}
			</span>
		</li>
	{/each}
</ul>

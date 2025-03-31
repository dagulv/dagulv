<script lang="ts">
	import type { postItem } from '$lib/types';
	import { ChevronRight } from 'lucide-svelte';

	let { items = [], class: className }: { items: postItem[]; class?: string } = $props();
</script>

<ul class={['m-0 flex flex-col gap-4 p-0', className]}>
	{#each items as item}
		<li class="contents">
			<a
				href={item.link}
				class="animate group border-gold-600 bg-gold-800 flex flex-col gap-2 rounded-xs border px-4 py-3 transition"
			>
				<p class="m-0 flex items-center gap-1 p-0 text-base font-bold group-hover:underline">
					{item.title}
					<ChevronRight
						size="16"
						class="text-gold-500 group-hover:animate-blurslide-in-x animate-blur-out-x opacity-0 [animation-play-state:paused]"
					/>
				</p>

				<span class="text-gold-700 text-sm">{item.description}</span>
			</a>
		</li>
	{/each}
</ul>

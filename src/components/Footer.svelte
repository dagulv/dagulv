<script lang="ts">
	import { getMiscContext } from '$lib/contexts';

	const misc = getMiscContext();
</script>

<footer class="animate border-gold-750 flex h-16 shrink-0 items-center justify-center border-t">
	<div class="container flex justify-between">
		<a href="/" class="text-gold-700 text-sm">{misc.name}</a>
		<ul class="text-gold-700 m-0 flex gap-2 text-sm">
			{#each misc.nav as item}
				<li class="contents">
					<a class="hover:underline" href={item.link} target="_blank">{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>

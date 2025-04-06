<script lang="ts">
	import { getMiscContext } from '$lib/contexts';
	import { SiGithub, SiLinkedin } from '@icons-pack/svelte-simple-icons';

	const misc = getMiscContext();
</script>

<footer class="animate border-gold-750 flex h-16 shrink-0 items-center justify-center border-t">
	<div class="wrapper w-full">
		<div
			class="flex justify-between md:pr-[calc(var(--sidebar-width)+var(--spacing)*4)] md:pl-[calc(var(--sidebar-width)+var(--spacing)*4)]"
		>
			<a href="/" class="text-gold-700 text-sm">{misc.name}</a>
			<ul class="text-gold-700 m-0 flex gap-2 text-sm">
				{#each misc.nav as item}
					<li class="contents">
						<a class="hover:underline" href={item.link} target="_blank">{item.label}</a>
					</li>
				{/each}
				<li class="contents">
					<a class="hover:underline" href="https://github.com/dagulv" target="_blank"
						><SiGithub size={20} /></a
					>
				</li>
				<li class="contents">
					<a
						class="hover:underline"
						href="www.linkedin.com/in/dag-ulvsbäck-a7b773160"
						target="_blank"><SiLinkedin size={20} /></a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>

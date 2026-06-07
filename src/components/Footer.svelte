<script lang="ts">
	import { link } from '$lib/api.svelte';
	import { getMiscContext } from '$lib/contexts';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';

	const misc = getMiscContext();
</script>

<footer class="border-gold-750 flex h-16 shrink-0 items-center justify-center border-t">
	<div class="wrapper w-full">
		<div
			class="flex justify-between md:pr-[calc(var(--sidebar-width)+var(--sidebar-gap))] md:pl-[calc(var(--sidebar-width)+var(--sidebar-gap))]"
		>
			<a href={link('/')} class="text-gold-700 text-sm">{misc.name}</a>
			<ul class="text-gold-700 m-0 flex gap-2 text-sm">
				{#each misc.nav as item}
					<li class="contents">
						<a class="hover:underline" href={item.link} target="_blank" rel="noopener noreferrer"
							>{item.label}</a
						>
					</li>
				{/each}
				<li class="contents">
					<a
						class="hover:underline"
						href="https://github.com/dagulv"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"><SiGithub size={20} aria-hidden="true" /></a
					>
				</li>
				<li class="contents">
					<a
						class="hover:underline h-5 w-5"
						href="https://www.linkedin.com/in/dag-ulvsbäck-a7b773160"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						><span
							class="bg-gold-700 block h-5 w-5 mask-[url(/assets/linkedin.svg)] mask-center mask-no-repeat mask-contain"
							aria-hidden="true"
						></span></a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>

<script lang="ts">
	import { page } from '$app/state';
	import { getLangContext } from '$lib/contexts';

	let { title, subtitle }: { title: string; subtitle: string } = $props();

	const { sv, en } = $derived.by(() => {
		let path = page.url.pathname;

		if (path.startsWith('/en')) {
			path = path.slice(3);
		}

		return {
			sv: page.url.origin + path + page.url.search,
			en: page.url.origin + '/en' + path + page.url.search
		};
	});

	const lang = getLangContext();
</script>

<header class="mt-4 mb-16 flex justify-center md:mt-32">
	<div class="container flex items-baseline justify-between">
		<div>
			<h1 class="text-gold-400 m-0 mb-2 text-base font-bold">{title}</h1>
			<p class="text-gold-700 text-sm">{subtitle}</p>
		</div>

		<nav>
			<div class="text-gold-500 flex gap-0.5">
				<a
					data-sveltekit-reload
					class={['cursor-pointer hover:underline', lang === 'sv' && 'underline']}
					href={sv}>SV</a
				>
				<span>/</span>
				<a
					data-sveltekit-reload
					class={['cursor-pointer hover:underline', lang === 'en' && 'underline']}
					href={en}>EN</a
				>
			</div>
		</nav>
	</div>
</header>

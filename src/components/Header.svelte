<script lang="ts">
	import { page } from '$app/state';
	import { slugs } from '$lib/api';
	import { defaultLang, otherLangs } from '$lib/constants';
	import { getLangContext } from '$lib/contexts';

	let {
		title,
		subtitle,
		class: className
	}: { title: string; subtitle: string; class?: string } = $props();

	const langs = $derived.by(() => {
		let path = page.url.pathname;

		const normalizedSlug = slugs[path];

		let langs: Record<string, string>[] = [];

		for (const slug of Object.entries(slugs)) {
			if (slug[1] !== normalizedSlug) {
				continue;
			}

			const currLang = otherLangs.find((lang) => slug[0].split('/')[1] === lang);

			if (typeof currLang !== 'string') {
				langs.push({ [defaultLang]: slug[0] });

				continue;
			}

			langs.push({ [currLang]: slug[0] });
		}

		return langs;
	});

	const currLang = getLangContext();
</script>

<header class={['flex justify-center', className]}>
	<div class="flex w-full items-baseline justify-between">
		<div>
			<h1 class="text-gold-400 m-0 mb-1 text-base font-bold">{title}</h1>
			<p class="text-gold-700 m-0 text-sm">{subtitle}</p>
		</div>

		<nav>
			<ul class="text-gold-500 flex gap-0.5">
				{#each langs as l, i}
					{@const [lang, link] = Object.entries(l)[0]}
					<li class="contents">
						<a
							data-sveltekit-reload
							class={['cursor-pointer uppercase hover:underline', currLang === lang && 'underline']}
							href={link}>{lang}</a
						>
					</li>
					{#if i < langs.length - 1}
						<span>/</span>
					{/if}
				{/each}
				<!-- <a
					data-sveltekit-reload
					class={['cursor-pointer hover:underline', lang === 'sv' && 'underline']}
					href={sv}>SV</a
				>
				<span>/</span>
				<a
					data-sveltekit-reload
					class={['cursor-pointer hover:underline', lang === 'en' && 'underline']}
					href={en}>EN</a
				> -->
			</ul>
		</nav>
	</div>
</header>

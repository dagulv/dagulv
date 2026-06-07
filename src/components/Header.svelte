<script module>
	const languages = [defaultLang, ...otherLangs];
</script>

<script lang="ts">
	import { page } from '$app/state';
	import slugs from '$lib/slugs.json';
	import { defaultLang, otherLangs } from '$lib/constants';
	import { getLangContext } from '$lib/contexts';

	let {
		title,
		subtitle,
		class: className,
		headingTag = 'h1'
	}: { title: string; subtitle: string; class?: string; headingTag?: 'h1' | 'span' } = $props();

	const titleClass = 'animate text-gold-400 m-0 mb-1 block text-base font-bold';

	const langsPaths = $derived.by(() => {
		let path = page.url.pathname;

		const normalizedSlug = slugs[path as keyof typeof slugs];

		if (!normalizedSlug) {
			for (const l of otherLangs) {
				if (path.startsWith('/' + l + '/')) {
					path = path.replace('/' + l, '');
					break;
				}
			}

			return languages.map((l) => {
				let langPath = '';

				if (l !== defaultLang) {
					langPath += '/' + l;
				}

				langPath += path;

				return {
					[l]: langPath
				};
			});
		}

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
			{#if headingTag === 'span'}
				<span class={titleClass}>{title}</span>
			{:else}
				<h1 class={titleClass}>{title}</h1>
			{/if}
			<p class="animate text-gold-700 m-0 text-sm" style="--item: 1">{subtitle}</p>
		</div>

		<nav aria-label="Language">
			<ul class="text-gold-500 flex gap-0.5">
				{#each langsPaths as l, i}
					{@const [lang, link] = Object.entries(l)[0]}
					<li class="contents">
						<a
							data-sveltekit-reload
							aria-current={currLang === lang ? 'true' : undefined}
							class={[
								'text-gold-300 cursor-pointer border-none uppercase no-underline',
								currLang === lang && 'underline'
							]}
							href={link}>{lang}</a
						>
					</li>
					{#if i < langsPaths.length - 1}
						<li class="contents" aria-hidden="true"><span>/</span></li>
					{/if}
				{/each}
			</ul>
		</nav>
	</div>
</header>

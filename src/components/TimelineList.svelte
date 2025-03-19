<script lang="ts">
	import { getLangContext, getMiscContext } from '$lib/contexts';
	import { date, YearMonthFormat } from '$lib/date';
	import type { timelineItem } from '$lib/types';
	import { DateTime } from 'luxon';

	let { items = [] }: { items: timelineItem[] } = $props();
	// item.from?.toFormat('MMMM yyyy') ||
	// item.to?.toFormat('MMMM yyyy') ??
	const misc = getMiscContext();
	const lang = getLangContext();
</script>

<ol class="flex flex-col gap-8 pl-px">
	{#each items as item}
		{@const from = DateTime.fromISO(item.from).setLocale(lang)}
		{@const to =
			typeof item.to === 'string' ? DateTime.fromISO(item.to).setLocale(lang) : misc.present}
		<li
			class="animate not-last:after:bg-gold-600 relative flex items-center justify-between after:absolute after:top-[calc(100%+0.35rem)] after:left-5.5 after:h-5 after:w-px after:-translate-x-1/2"
		>
			<div class={['flex w-full items-center gap-4', !item.imgUrl && 'pl-14']}>
				{#if item.imgUrl}
					<span
						class="bg-gold-100 outline-gold-400 flex aspect-square w-12 items-center justify-center rounded-full p-2 outline"
					>
						<img src={item.imgUrl} alt={item.title} width="48" height="48" />
					</span>
				{/if}

				<div class="flex w-full flex-wrap-reverse items-center justify-between gap-8 gap-y-0">
					<div class="flex flex-col gap-0">
						<p class="text-xl font-bold">{item.title}</p>
						<span class="text-gold-700 text-sm">{item.description}</span>
					</div>

					<div>
						<p
							class={[
								'text-gold-500 flex items-center gap-1 text-sm',
								!item.to &&
									'after:ml-1 after:h-1.5 after:w-1.5 after:rounded-full after:bg-green-600'
							]}
						>
							<time datetime={from.toISO()}>{from.toFormat(YearMonthFormat)}</time>
							-
							{#if to instanceof DateTime}
								<time datetime={to.toISO()}>{to.toFormat(YearMonthFormat)}</time>
							{:else}
								<time datetime={date.today.setLocale(lang).toISO()}>{to}</time>
							{/if}
						</p>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ol>

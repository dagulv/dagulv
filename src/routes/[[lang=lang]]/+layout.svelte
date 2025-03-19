<script lang="ts">
	let { children } = $props();

	// onMount(() => {
	// 	const animates = document.querySelectorAll<HTMLElement>('.animate');
	// 	for (let i = 0; i < animates.length; i++) {
	// 		animates[i].style.setProperty('--stagger', String(i));
	// 	}
	// });
</script>

<!-- <svelte:head>
	<title>{`Dag Ulvsbäck${data.page.title ? ' - ' + data.page.title : ''}`}</title>
	<meta name="description" content={data.page.description} />
</svelte:head> -->

{@render children()}

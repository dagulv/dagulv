<script>
	import Footer from '$components/Footer.svelte';
	import { setLangContext, setMiscContext } from '$lib/contexts';
	import '../../app.css';
	import '@fontsource-variable/inter';

	let { data, children } = $props();

	setMiscContext(data.misc);
	setLangContext(data.lang);
</script>

<div class="flex flex-1 justify-center">
	{@render children()}
</div>

<Footer />

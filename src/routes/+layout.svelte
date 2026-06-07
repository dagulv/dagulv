<script>
	import '../app.css';
	import '@fontsource-variable/inter/wght.css';
	import { defaultLang } from '$lib/constants';
	import { setLangContext, setMiscContext } from '$lib/contexts';
	import Footer from '$components/Footer.svelte';

	let { data, children } = $props();

	// svelte-ignore state_referenced_locally
	setMiscContext(data.misc);
	// svelte-ignore state_referenced_locally
	setLangContext(data.lang ?? defaultLang);
</script>

<div class="flex flex-1 justify-center">
	{@render children()}
</div>

<Footer />

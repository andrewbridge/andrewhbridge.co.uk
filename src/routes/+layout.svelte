<script>
	import SiteHeader from "$lib/components/SiteHeader.svelte";

</script>
<svelte:head>
    <link rel="stylesheet" href="/style.css" />
</svelte:head>

<SiteHeader />
<main>
    <slot />
</main>
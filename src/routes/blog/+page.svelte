<script>
	import ExternalLinkIcon from '$lib/components/ExternalLinkIcon.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<style>
    .metadata {
        font-size: 0.9em;
        margin-bottom: 0.5em;
        font-style: italic;
    }
    
    .entry {
        position: relative;
    }

    .entries .entry:first-child a, .entries .entry:first-child p {
        font-size: 1.5em;
    }
  </style>

<svelte:head>
    <title>Andrew Bridge | Blog</title>
</svelte:head>

<div class="entries">
    {#each data.posts as post}
        <div class="entry">
            <a class="overlay-link" href={post.url}>{post.title}{#if post.source !== 'local'}&nbsp;<ExternalLinkIcon size={12} />{/if}</a>
            <p class="metadata">{#if post.source !== 'local'}{post.source} · {/if}{new Date(post.created).toDateString()}</p>
            <p>{post.excerpt}</p>
        </div>
    {/each}
</div>
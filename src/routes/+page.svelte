<script>
	import AboutBlurb from "$lib/components/AboutBlurb.svelte";
	import AvatarSticker from "$lib/components/AvatarSticker.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<style>
    h2 {
      font-size: 70px;
      line-height: 72px;
      letter-spacing: -5px;
    }
  
    h3 {
      font-size: 50px;
      line-height: 52px;
      letter-spacing: -3px;
    }

    .metadata {
        font-size: 0.9em;
        margin-bottom: 0.5em;
        font-style: italic;
    }
  
    @media (min-width: 768px) {
        .latest {
            display: grid;
            grid-template: repeat(2, auto) / repeat(3, 1fr);
            row-gap: 10px;
            column-gap: 30px;
        }
        .latest h2 {
            margin-bottom: .25em;
        }
        .latest .blog {
            grid-area: 1 / 1 / 2 / 3;
        }
        .latest .blog .entries {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .latest .blog .entries .entry {
            width: 47.5%;
            position: relative;
        }
        .latest .blog .entries .entry:first-child {
            width: 100%;
            margin-bottom: 1em;
        }
        .latest .blog .entries .entry:first-child a, .latest .blog .entries .entry:first-child p {
            font-size: 1.2em;
        }
        .latest .feed {
            grid-area: 1 / 3 / 3 / 4;
        }

        .latest .feed .entry:nth-child(2) ~ .entry {
            display: none;
        }
    }
  
    aside {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2em;
    }

    aside .blurb {
        margin-left: 3em;
    }
  </style>

<svelte:head>
    <!-- <title>Andrew Bridge | Latest</title> -->
    <title>Andrew Bridge</title>
</svelte:head>

<div class="latest">
    <div class="blog">
        <h2>Blog</h2>
        <div class="entries">
            {#each data.latest.posts as post}
                <div class="entry">
                    <a class="overlay-link" href={post.url}>{post.title}</a>
                    <p class="metadata">{#if post.source !== 'local'}{post.source} · {/if}{new Date(post.created).toDateString()}</p>
                    <p>{post.excerpt}</p>
                </div>
            {/each}
        </div>
    </div>
    <div class="feed">
        <h2>Feed</h2>
        <div class="entries">
            {#each data.latest.feed as post}
                <div class="entry">
                    <p class="metadata">{new Date(post.created).toDateString()}</p>
                    <p>{@html post.content}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<hr />

<aside>
  <AvatarSticker />
  <div class="blurb">
    <AboutBlurb />
  </div>
</aside>

<SocialLinks />
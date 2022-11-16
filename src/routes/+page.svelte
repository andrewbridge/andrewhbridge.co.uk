<script>
	import AboutBlurb from "$lib/components/AboutBlurb.svelte";
	import AvatarSticker from "$lib/components/AvatarSticker.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";

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
        .latest :global(.blog) {
            grid-area: 1 / 1 / 2 / 3;
        }
        .latest :global(.blog .entries) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .latest :global(.blog .entries .entry) {
            width: 47.5%;
        }
        .latest :global(.blog .entries .entry):first-child {
            width: 100%;
            margin-bottom: 1em;
        }
        .latest :global(.blog .entries .entry:first-child a), .latest :global(.blog .entries .entry:first-child p) {
            font-size: 1.2em;
        }
        .latest :global(.elsewhere) {
            grid-area: 2 / 1 / 3 / 3;
        }
        .latest :global(.elsewhere .entries .entry):first-child {
            width: 100%;
            margin-bottom: 1em;
        }
        .latest :global(.elsewhere .entries .entry:first-child a), .latest :global(.elsewhere .entries .entry:first-child p) {
            font-size: 1.2em;
        }
        .latest :global(.feed) {
            grid-area: 1 / 3 / 3 / 4;
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

<!-- <hr /> -->

<aside>
  <AvatarSticker />
  <div class="blurb">
    <AboutBlurb />
  </div>
</aside>

<SocialLinks />
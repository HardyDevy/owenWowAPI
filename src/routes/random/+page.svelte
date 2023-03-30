<script>
  export let data;
  const {artworks} = data;

 function handleRefreshClick() {location.reload();}
</script>

<h1>Characters</h1>

<!-- <button on:click={handleRefreshClick}>New Characters!</button> -->

<article class="bottomgrid">
  <p></p>
  <button on:click={handleRefreshClick}>New Characters!</button>
  <p></p>
  {#each artworks as { name, imageUrl, tvShows, films}}
  <figure>
    <img src="{imageUrl}" alt="">
    <figcaption><strong>{name}</strong> <p>Appears in: {tvShows[0]}, {films[0]}</p> </figcaption>
  </figure>
  {/each}
</article>


  <style>
    img {height: 13rem;}

    .bottomgrid{
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}
  </style>
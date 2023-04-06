<script>
  export let data;
  const {artworks} = data;

 function handleRefreshClick() {location.reload();}

</script>

<h1>Random Characters</h1>


<button on:click={handleRefreshClick}>New Characters!</button>

<article class="bottomgrid">
  {#each artworks as { name, imageUrl, tvShows, films}}
  <figure>
    <img src="{imageUrl}" alt="">
    <figcaption><strong>{name}</strong> <p>Appears in: {films} {tvShows}</p> </figcaption>
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
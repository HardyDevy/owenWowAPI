<script>
  export let data;
  const {artworks} = data;
</script>

<h1>Cool Data</h1>

<!-- <article>
  {#each wows as { movie, year, character, poster}}
  <figure>
    <figcaption> <strong>{movie}</strong>{year} <br> Character: {character} <br> | {poster}</figcaption>
  </figure>
  {/each}
</article> -->

<article class="bottomgrid">
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
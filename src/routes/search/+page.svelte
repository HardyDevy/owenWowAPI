<script>
  let srch = "search"

  const handleInput = (e) => {
   srch = e.target.value;
 };

  export let data;
  const {artworks} = data;
</script>

<!-- <h1>Hello {srch}!</h1> -->

<h1>Character Search</h1>

<input type="text" id="searching" on:input={handleInput} placeholder="Search for a Character...">

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

    input{max-width: 20rem; margin-bottom: 1.5rem;}

    .bottomgrid{
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    }
  </style>
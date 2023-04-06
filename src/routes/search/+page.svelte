
<script>
  import { iWant } from './stores.js';

  const handleInput = (e) => {
   iWant.set(e.target.value);
   console.log({$iWant});
 };

  const changeSearch = (e2) => {
    document.getElementById("searching").value = e2.target.text;
  }

  export let data;
  const {artworks} = data;
</script>

<h1>Character Search</h1>

<input type="text" id="searching" on:input={handleInput} placeholder="Search for a Character...">


<div class="container">

<article class="bottomgrid">
  {#each artworks as { name, imageUrl, tvShows, films, shortFilms}}
  <figure>
    <img src="{imageUrl}" alt="">
    <figcaption><strong>{name}</strong> <p>Appears in: {tvShows} {films} {shortFilms}</p> </figcaption>
  </figure>
  {/each}
</article>

<aside class="examplesearches">
<h4>Example Searches</h4>
<hr>
<a href="/search" on:click={changeSearch}>Mickey Mouse</a>
<a href="/search" on:click={changeSearch}>Goofy</a>
<a href="/search" on:click={changeSearch}>Stitch</a>
<a href="/search" on:click={changeSearch}>Santa</a>
<a href="/search" on:click={changeSearch}>Dog</a>
<a href="/search" on:click={changeSearch}>Jeff</a>
<a href="/search" on:click={changeSearch}>Tim</a>
<a href="/search" on:click={changeSearch}>Donald</a>
<a href="/search" on:click={changeSearch}>Hank</a>
</aside>

</div>


  <style>
    aside {
    background-color: #1f3d5e;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 20rem;
    }
    .examplesearches{
      align-items: center;
    }
    a{
      color: #ababab;
      margin-bottom: .55rem;
    }

    h4{
      margin-bottom: .5rem;
    }
    
    img {height: 13rem;}

    input{max-width: 20rem; margin-bottom: 1.5rem;}

    .bottomgrid{
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    }
  </style>
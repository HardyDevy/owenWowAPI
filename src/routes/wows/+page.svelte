<script>
  export let data;
  const {wows} = data;
</script>

<h1>Wow</h1>
<article>
  {#each wows as { movie, year, character, poster}}
  <figure>
    <figcaption> <strong>{movie}</strong>{year} <br> Character: {character} <br> | {poster}</figcaption>
  </figure>
  {/each}
</article>


  <style>
    
  </style>
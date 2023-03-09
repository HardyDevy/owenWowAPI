<script>
    export let data;
  </script>

<div class="container">
    <article>
      <h1>Posts</h1>
      <p>Meeeeooowwww! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow!</p>
      <p>Meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow!</p>
    </article>
    <aside>
      <h2>All Posts</h2>
      <nav class="sidebar">
        {#each data.summaries as {slug, title}}
          <a href="/posts/{slug}">{title}</a>
        {/each}
      </nav>
    </aside>
  </div>

  <style>
    
  </style>
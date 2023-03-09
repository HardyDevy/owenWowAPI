<script>
  import '../global.css';
</script>

<nav class="main-nav">
  <a href="/">Home</a>
  <a href="/posts">Posts</a>
  <a href="/favs">Favs</a>
  <a href="/info">Info</a>
  <a href="/about">About</a>
  <a href="/donate">Donate</a>
</nav>

<main>
  <slot />
</main>

<footer>
  <a href="/">&copy;2023 Devon Hardy!</a>
</footer>

<style>
  nav, footer {
    display: flex;
    justify-content: space-evenly;
    padding: .5em;
    background-color:honeydew;
    color: seagreen;
  }
  nav {
    font-weight: 900;
    text-transform: uppercase;
  }
  main {
    grid-row: 2;
    padding: 0 2rem;
    background-color: rgba(255,255,255,.05);
  }
  footer {
    font-size: 75%;
    grid-row: 3;
    bottom: 0;
  }
</style>
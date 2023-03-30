<script>
  import '../global.css';
</script>

<nav class="main-nav">
  <a href="/">Home</a>
  <a href="/search">Search</a>
  <a href="/random">Random</a>
  <a href="/about">About</a>
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
    background-color: #2A628F;
    color: #e9f2ff;
  }
  nav {
    font-weight: 900;
    text-transform: uppercase;
  }
  main {
    grid-row: 2;
    padding: 0 2rem;
    background-color: #16324F;
  }
  footer {
    font-size: 75%;
    grid-row: 3;
    bottom: 0;
  }
</style>
<script>
  import '../global.css';
</script>

<nav class="main-nav">
  <a href="/">Home</a>
  <a href="/wows">Wows</a>
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
    background-color: #691E06;
    color: #fbba72;
  }
  nav {
    font-weight: 900;
    text-transform: uppercase;
  }
  main {
    grid-row: 2;
    padding: 0 2rem;
    background-color: #8F250C;
  }
  footer {
    font-size: 75%;
    grid-row: 3;
    bottom: 0;
  }
</style>
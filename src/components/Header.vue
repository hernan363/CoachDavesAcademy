<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/app">Financial App</router-link>
      <router-link to="/tips">Tips & Tricks</router-link>
      <router-link to="/presentations">Presentations</router-link>
      <router-link to="/contact">Contact Coach Dave</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    background: transparent;
    padding: 1.5rem 0; /* Increased padding for height */
    color: black;
  }

  .header nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .header nav a {
    color: black;
    text-decoration: none;
    transition: all 0.5s ease; /* Slower transition might reduce flicker */
    font-weight: normal;
    padding: 0.5rem 1rem; /* Increase clickable area */
    border-radius: 5px; /* For a subtle button-like effect */
  }

  .header nav a:hover {
    text-decoration: underline;
    font-weight: bold;
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.1); /* Very subtle highlight on hover */
  }
</style>
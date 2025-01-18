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
  color: white;
  text-decoration: none;
  transition: all 0.5s ease;
  font-weight: normal;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: -1px 0 rgb(0, 42, 255), 0 1px rgb(0, 42, 255), 1px 0 rgb(0, 42, 255), 0 -1px rgb(0, 42, 255);
}

.header nav a:hover {
  color: rgb(0, 42, 255);
  text-shadow: none;
  font-weight: bolder;
  transform: translateY(-2px);
}
</style>
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
  /* Remove the background */
  background: transparent;
  padding: 1rem 0;
  color: black; /* Set text color to black */
}

.header nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.header nav a {
  color: black; /* Black text for links */
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: normal;
}

.header nav a:hover {
  text-decoration: underline;
  font-weight: bold;
  transform: translateY(-2px);
}
</style>
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
  padding: 1rem 0; /* Add some space inside the header */
  color: white; /* Text color for contrast against dark backgrounds */
}

.header nav {
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center the nav items */
  gap: 2rem; /* Space between items */
}

.header nav a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  font-weight: normal; /* Default font weight */
}

.header nav a:hover {
  text-decoration: underline;
  font-weight: bold; /* Makes the text "pop out" */
  transform: translateY(-2px); /* Slight upward movement for a pop effect */
}
</style>
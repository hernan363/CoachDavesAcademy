<template>
  <header class="header">
    <nav>
      <router-link to="/"><i class="material-icons">home</i> Home</router-link>
      <router-link to="/tips"><i class="material-icons">lightbulb_outline</i> Tips & Tricks</router-link>
      <router-link to="/presentations"><i class="material-icons">bar_chart</i> Presentations</router-link>
      <router-link to="/app"><i class="material-icons">apps</i> Financial App</router-link>
      <router-link to="/about"><i class="material-icons">info</i> About</router-link>
      <router-link to="/contact"><i class="material-icons">email</i> Contact Coach Dave</router-link>
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
  padding: 1.5rem 0;
}

.header nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.header nav a {
  color: rgb(0, 42, 255); /* Default text color now blue */
  text-decoration: none;
  transition: all 0.5s ease;
  font-weight: normal;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: none; /* No shadow by default */
  display: flex;
  align-items: center;
}

.header nav a:hover {
  font-weight: bolder;
  transform: translateY(-2px);
  letter-spacing: 3px; /* Increased letter-spacing on hover */
}

.material-icons {
  font-size: 20px; /* Adjust size as needed */
  vertical-align: middle; /* To align with text */
  margin-right: 0.5rem; /* Space between icon and text */
}
</style>
<template>
  <footer class="footer">
    <p>© 2025 Coach Dave's Academy. All rights reserved.</p>
    <p><router-link to="/contact">Contact Us</router-link> | <a href="#">Privacy Policy</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  /* Transparent background */
  background: transparent;
  color: black; /* Black text */
  text-align: center;
  padding: 1rem;
}

.footer a {
  color: black; /* Black links */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
<template>
  <footer class="footer">
    <p>&copy; 2025 Coach Dave's Academy. All rights reserved.</p>
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
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}
.footer a {
  color: white;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
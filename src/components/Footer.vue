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
    background: transparent;
    color: black;
    text-align: center;
    padding: 1rem 0; /* Ensure enough vertical padding */
    margin-top: auto; /* This will push the footer to the bottom */
  }

  .footer a {
    color: black;
    text-decoration: none;
  }

  .footer a:hover {
    text-decoration: underline;
  }
</style>
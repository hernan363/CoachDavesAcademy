<template>
  <div class="presentations">
    <h2>Coach Dave's Financial Presentations</h2>
    <a href="your-prezi-link-here" target="_blank">Understanding the Stock Market</a>
    <a href="another-prezi-link" target="_blank">Mastering Personal Loans</a>
    <!-- Add more links to your Prezi presentations -->
  </div>
</template>

<script>
export default {
  name: 'Presentations'
}
</script>

<style scoped>
.presentations {
  padding: 2rem;
}
.presentations a {
  display: block;
  margin-bottom: 1rem;
  color: #007BFF;
  text-decoration: none;
}
.presentations a:hover {
  text-decoration: underline;
}
</style>
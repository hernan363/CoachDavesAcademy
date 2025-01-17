<template>
  <div class="financial-app">
    <h2>Financial Planning App</h2>
    <p>Download our app to start your journey towards financial freedom:</p>
    <a href="#" class="btn">Download Now</a>
    <!-- Add video or screenshot here -->
    <!-- <img src="../assets/app-screenshot.png" alt="App screenshot" /> -->
  </div>
</template>

<script>
export default {
  name: 'FinancialApp'
}
</script>

<style scoped>
.financial-app {
  text-align: center;
  padding: 2rem;
}
.btn {
  display: inline-block;
  background-color: #007BFF;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background-color: #0056b3;
}
</style>
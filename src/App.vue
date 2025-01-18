<template>
  <div id="app" class="main-background">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.main-background {
  background-image: url('./images/piggyBank.jpg'); /* Replace with your actual image path */
  background-size: cover;
  background-attachment: fixed; /* Optional: keeps background fixed while scrolling */
  background-position: center;
  min-height: 100vh; /* Ensures the background covers at least the full viewport height */
}
</style>
<template>
  <div id="app" class="main-background">
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <Header />
    <main class="content">
      <router-view></router-view>
    </main>
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
  background-image: url('./images/piggyBank.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: black;
}

.content {
  flex: 1; /* This will make the content area take up all available space */
}

.standout-text {
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: -1px 0 rgb(0, 42, 255), 0 1px rgb(0, 42, 255), 1px 0 rgb(0, 42, 255), 0 -1px rgb(0, 42, 255);
}
</style>
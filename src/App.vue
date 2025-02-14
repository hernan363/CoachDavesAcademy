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
  },
  head: {
    title: {
      inner: "Dave's Academy"
    },
    link: [
      { rel: 'icon', href: require('./assets/logos/coachDavesLogo.png') } // Adjust path to your logo
    ]
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
  width: calc(100% - 200px); /* Static width for content area */
}

.standout-text {
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: -1px 0 rgb(0, 42, 255), 0 1px rgb(0, 42, 255), 1px 0 rgb(0, 42, 255), 0 -1px rgb(0, 42, 255);
}

/* Material Design shadow */
.material-shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
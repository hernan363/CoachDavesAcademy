<template>
  <div class="home">
    <h1 
      class="animated-title" 
      @mouseover="startTitleAnimation" 
      @mouseleave="stopTitleAnimation"
    >
      Welcome to Coach Dave's Academy
    </h1>
    <p class="interactive-element" @click="showMoreInfo">
      Get your pencil and a notepad because you're about to get schooled. This site is a place for me to keep all the tools and knowledge I have for financial success. I hope others can learn a thing or two from this and get ahead for themselves.
    </p>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Home',
  data() {
    return {
      titleAnimation: null
    };
  },
  methods: {
    startTitleAnimation() {
      if (!this.titleAnimation) {
        this.titleAnimation = gsap.to('.animated-title', {
          y: -5,
          scale: 1.1,
          duration: 0.5,
          ease: 'power2.out',
          yoyo: true,
          repeat: -1
        });
      }
    },
    stopTitleAnimation() {
      if (this.titleAnimation) {
        this.titleAnimation.kill();
        this.titleAnimation = null;
        gsap.set('.animated-title', { y: 0, scale: 1 });
      }
    },
    showMoreInfo() {
      // Example interaction, you can expand this with more functionality
      alert("Here's some more information about Coach Dave's Academy!");
    }
  }
}
</script>

<style scoped>
/* Import shared styles */
@import '../assets/sharedStyles.css';

.home {
  padding: 2rem;
  text-align: center;
}

p {
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Override or add specific styles for Home component if needed */
</style>
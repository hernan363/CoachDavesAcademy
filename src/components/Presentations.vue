<template>
  <div class="presentations">
    <h2 
      class="animated-title" 
      @mouseover="startTitleAnimation" 
      @mouseleave="stopTitleAnimation"
    >
      Financial Prezies
    </h2>
    <ul class="presentation-list">
      <li 
        v-for="(presentation, index) in presentations" 
        :key="index" 
        class="presentation-item"
        @mouseover="hoverEffect($event)"
        @mouseleave="resetEffect($event)"
      >
        <a :href="presentation.link" target="_blank">
          <span class="icon">📊</span>
          {{ presentation.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

export default {
  name: 'Presentations',
  data() {
    return {
      presentations: [
        { title: 'Basic Financial Understanding', link: 'https://prezi.com/view/QZrtQKnw2Rjrmztu0IRL/' },
        { title: 'Basic Crypto Understanding', link: 'https://prezi.com/view/91RX0d9wcLpHQPcu02cO/' },
        // Add more presentations here
      ],
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
    hoverEffect(e) {
      const state = Flip.getState(e.target);
      e.target.classList.add('active');
      Flip.from(state, {
        duration: 0.3,
        ease: 'power1.out'
      });
    },
    resetEffect(e) {
      e.target.classList.remove('active');
    }
  }
}
</script>

<style scoped>
.presentations {
  padding: 2rem;
  text-align: center;
}

.animated-title {
  color: #007BFF;
  display: inline-block;
  transition: all 0.3s ease;
}

.presentation-list {
  list-style: none;
  padding: 0;
}

.presentation-item {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.presentation-item a {
  color: #007BFF;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(0, 123, 255, 0.1);
  transition: background 0.3s ease, transform 0.3s ease;
}

.presentation-item a:hover {
  background: rgba(0, 123, 255, 0.2);
  transform: scale(1.05);
}

.presentation-item .icon {
  margin-right: 10px;
}

.presentation-item.active {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div class="tips-and-tricks">
    <div :class="['sidebar', { 'expanded': isSidebarExpanded }]" :style="{ height: sidebarHeight }">
      <button class="toggle-sidebar" @click="toggleSidebar">
        <span class="arrow" :class="{'outward': isSidebarExpanded}">◀</span>
        <span class="arrow" :class="{'outward': isSidebarExpanded}">◀</span>
      </button>
      <ul v-if="isSidebarExpanded">
        <li 
          v-for="topic in topics" 
          :key="topic.id" 
          :class="{'active': topic.id === currentTopicId}" 
          @click="changeTopic(topic.id)"
        >
          {{ topic.title }}
        </li>
      </ul>
    </div>
    <div class="content-container">
      <transition name="fade" mode="out-in">
        <component 
          :is="currentComponent" 
          :key="currentTopicId"
          v-if="currentTopicId"
        ></component>
      </transition>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import Tip1 from './Tips/Costco.vue';
import Tip2 from './Tips/GiftCards.vue';
import Tip3 from './Tips/OnlineMarkets.vue';
import Tip4 from './Tips/SplittingApp.vue'; // Add more as needed

export default {
  components: {
    Tip1,
    Tip2,
    Tip3,
    Tip4
  },
  data() {
    return {
      topics: [
        { id: 'tip1', title: 'Costco Savings', component: 'Tip1' },
        { id: 'tip2', title: 'Using Gift Cards', component: 'Tip2' },
        { id: 'tip3', title: 'Online Market Tips', component: 'Tip3' },
        { id: 'tip4', title: 'Splitting Apps', component: 'Tip4' },
        // Add more topics here
      ],
      currentTopicId: null,
      currentComponent: null,
      isSidebarExpanded: true,
      sidebarHeight: '100vh' // Initial height to match viewport
    };
  },
  methods: {
    changeTopic(id) {
      const topic = this.topics.find(t => t.id === id);
      if (topic) {
        gsap.to('.content-container', { opacity: 0, duration: 0.3, onComplete: () => {
          this.currentTopicId = id;
          this.currentComponent = topic.component;
          gsap.to('.content-container', { opacity: 1, duration: 0.3, delay: 0.1 });
        }});
      }
    },
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
      // Adjust the sidebar height to match the content container when expanded
      if (this.isSidebarExpanded) {
        const contentHeight = document.querySelector('.content-container').offsetHeight;
        this.sidebarHeight = `${contentHeight}px`;
      } else {
        this.sidebarHeight = 'auto'; // Reset height when collapsed
      }
    }
  },
  mounted() {
    this.changeTopic('tip1'); // Set initial topic
    // Force a re-evaluation of sidebar height on mount if needed
    this.toggleSidebar();
    this.toggleSidebar();
  },
  updated() {
    // This ensures the sidebar height matches the content height if content changes
    if (this.isSidebarExpanded) {
      const contentHeight = document.querySelector('.content-container').offsetHeight;
      this.sidebarHeight = `${contentHeight}px`;
    }
  }
}
</script>

<style scoped>
.tips-and-tricks {
  display: flex;
  height: 100vh; /* Full height of the viewport */
}

.sidebar {
  width: 200px; /* Default width when expanded */
  background-color: #f0f0f0;
  transition: width 0.3s ease, height 0.3s ease;
  overflow: hidden;
}

.sidebar:not(.expanded) {
  width: 30px; /* Width when collapsed */
}

.toggle-sidebar {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 0;
  text-align: right; /* Align arrows to the right */
}

.arrow {
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-block;
}

.arrow.outward {
  transform: rotate(180deg);
}

.toggle-sidebar:hover .arrow {
  font-weight: bolder;
  transform: translateY(-2px) rotate(0deg); /* Reset rotation for outward arrow on hover */
}

.toggle-sidebar:hover .arrow.outward {
  transform: translateY(-2px) rotate(180deg); /* Maintain rotation for outward arrow on hover */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

li:hover, li.active {
  background-color: #e0e0e0;
}

.content-container {
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 100vh; /* Match the viewport height */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
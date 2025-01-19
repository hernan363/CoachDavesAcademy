<template>
  <div class="tips-and-tricks">
    <div :class="['sidebar', { 'expanded': isSidebarExpanded }]">
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
    <div class="content">
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
import Costco from './Tips/Costco.vue';
import GiftCards from './Tips/GiftCards.vue';
import OnlineMarkets from './Tips/OnlineMarkets.vue'; // Add more as needed

export default {
  components: {
    Costco,
    GiftCards,
    OnlineMarkets
  },
  data() {
    return {
      topics: [
        { id: 'tip1', title: 'Costco Savings', component: 'Costco' },
        { id: 'tip2', title: 'Using Gift Cards', component: 'GiftCards' },
        { id: 'tip3', title: 'Online Market Tips', component: 'OnlineMarkets' },
        // Add more topics here
      ],
      currentTopicId: null,
      currentComponent: null,
      isSidebarExpanded: true // Start with sidebar expanded
    };
  },
  methods: {
    changeTopic(id) {
      const topic = this.topics.find(t => t.id === id);
      if (topic) {
        // Only content fades, not the sidebar
        gsap.to('.content', { opacity: 0, duration: 0.3, onComplete: () => {
          this.currentTopicId = id;
          this.currentComponent = topic.component;
          gsap.to('.content', { opacity: 1, duration: 0.3, delay: 0.1 });
        }});
      }
    },
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    }
  },
  mounted() {
    // Set initial topic if needed
    this.changeTopic('tip1');
  }
}
</script>

<style scoped>
.tips-and-tricks {
  display: flex;
  height: 100vh; /* Adjust based on your layout */
}

.sidebar {
  width: 200px; /* Default width when expanded */
  background-color: #f0f0f0;
  transition: width 0.3s ease;
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

.content {
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  opacity: 1; /* Ensure content starts visible */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
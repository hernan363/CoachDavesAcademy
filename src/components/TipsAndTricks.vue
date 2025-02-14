<template>
  <div class="tips-and-tricks">
    <div class="sidebar">
      <div class="filter">
        <input type="text" v-model="searchQuery" placeholder="Search tips..." />
      </div>
      <ul>
        <li class="category" @click="toggleCategory('savingMoney')">
          <i class="material-icons">savings</i> Saving Money
          <i class="material-icons toggle-icon">{{ isSavingMoneyExpanded ? 'expand_less' : 'expand_more' }}</i>
        </li>
        <ul v-if="isSavingMoneyExpanded">
          <li 
            v-for="topic in filteredSavingMoneyTopics" 
            :key="topic.id" 
            :class="{'active': topic.id === currentTopicId}" 
            @click="changeTopic(topic.id)"
          >
            {{ topic.title }}
          </li>
        </ul>
        <li class="category" @click="toggleCategory('negotiating')">
          <i class="material-icons">handshake</i> Negotiating
          <i class="material-icons toggle-icon">{{ isNegotiatingExpanded ? 'expand_less' : 'expand_more' }}</i>
        </li>
        <ul v-if="isNegotiatingExpanded">
          <li 
            v-for="topic in filteredNegotiatingTopics" 
            :key="topic.id" 
            :class="{'active': topic.id === currentTopicId}" 
            @click="changeTopic(topic.id)"
          >
            {{ topic.title }}
          </li>
        </ul>
        <li class="category" @click="toggleCategory('banking')">
          <i class="material-icons">account_balance</i> Banking
          <i class="material-icons toggle-icon">{{ isBankingExpanded ? 'expand_less' : 'expand_more' }}</i>
        </li>
        <ul v-if="isBankingExpanded">
          <li 
            v-for="topic in filteredBankingTopics" 
            :key="topic.id" 
            :class="{'active': topic.id === currentTopicId}" 
            @click="changeTopic(topic.id)"
          >
            {{ topic.title }}
          </li>
        </ul>
        <li class="category" @click="toggleCategory('investing')">
          <i class="material-icons">trending_up</i> Investing
          <i class="material-icons toggle-icon">{{ isInvestingExpanded ? 'expand_less' : 'expand_more' }}</i>
        </li>
        <ul v-if="isInvestingExpanded">
          <li 
            v-for="topic in filteredInvestingTopics" 
            :key="topic.id" 
            :class="{'active': topic.id === currentTopicId}" 
            @click="changeTopic(topic.id)"
          >
            {{ topic.title }}
          </li>
        </ul>
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
      searchQuery: '',
      savingMoneyTopics: [
        { id: 'tip1', title: 'Costco Savings', component: 'Tip1' },
        { id: 'tip2', title: 'Using Gift Cards', component: 'Tip2' },
        { id: 'tip3', title: 'Online Market Tips', component: 'Tip3' },
        { id: 'tip4', title: 'Splitting Apps', component: 'Tip4' },
        // Add more topics here
      ],
      negotiatingTopics: [
        // Add negotiating topics here
      ],
      bankingTopics: [
        // Add banking topics here
      ],
      investingTopics: [
        // Add investing topics here
      ],
      currentTopicId: null,
      currentComponent: null,
      isSavingMoneyExpanded: true,
      isNegotiatingExpanded: true,
      isBankingExpanded: true,
      isInvestingExpanded: true
    };
  },
  computed: {
    filteredSavingMoneyTopics() {
      return this.savingMoneyTopics.filter(topic => 
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredNegotiatingTopics() {
      return this.negotiatingTopics.filter(topic => 
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredBankingTopics() {
      return this.bankingTopics.filter(topic => 
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredInvestingTopics() {
      return this.investingTopics.filter(topic => 
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  watch: {
    searchQuery() {
      this.isSavingMoneyExpanded = this.filteredSavingMoneyTopics.length > 0;
      this.isNegotiatingExpanded = this.filteredNegotiatingTopics.length > 0;
      this.isBankingExpanded = this.filteredBankingTopics.length > 0;
      this.isInvestingExpanded = this.filteredInvestingTopics.length > 0;
    }
  },
  methods: {
    changeTopic(id) {
      const topic = [...this.savingMoneyTopics, ...this.negotiatingTopics, ...this.bankingTopics, ...this.investingTopics].find(t => t.id === id);
      if (topic) {
        gsap.to('.content-container', { opacity: 0, duration: 0.3, onComplete: () => {
          this.currentTopicId = id;
          this.currentComponent = topic.component;
          gsap.to('.content-container', { opacity: 1, duration: 0.3, delay: 0.1 });
        }});
      }
    },
    toggleCategory(category) {
      this[`is${category.charAt(0).toUpperCase() + category.slice(1)}Expanded`] = !this[`is${category.charAt(0).toUpperCase() + category.slice(1)}Expanded`];
    }
  },
  mounted() {
    this.changeTopic('tip1'); // Set initial topic
  }
}
</script>

<style scoped>
.tips-and-tricks {
  display: flex;
  height: 100vh; /* Full height of the viewport */
}

.sidebar {
  width: 250px; /* Fixed width */
  background-color: #f0f0f0;
  overflow-y: auto; /* Allow scrolling if content overflows */
  height: 100vh; /* Fixed height */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Material Design shadow */
  padding: 10px;
}

.filter {
  margin-bottom: 20px;
}

.filter input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
}

.material-icons {
  font-size: 24px;
  vertical-align: middle;
  margin-right: 10px;
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

.category {
  font-weight: bold;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add space between category name and toggle icon */
}

.toggle-icon {
  cursor: pointer;
}

.content-container {
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100vh; /* Fixed height */
  width: calc(100% - 250px); /* Adjust width to account for sidebar */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
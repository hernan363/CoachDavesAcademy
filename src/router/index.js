import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import FinancialApp from '../components/FinancialApp.vue'
import TipsAndTricks from '../components/TipsAndTricks.vue'
import Presentations from '../components/Presentations.vue'
import Contact from '../components/Contact.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/app', component: FinancialApp },
  { path: '/tips', component: TipsAndTricks },
  { path: '/presentations', component: Presentations },
  { path: '/contact', component: Contact },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
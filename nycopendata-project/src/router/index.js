import { createRouter, createWebHistory } from 'vue-router'
import BarChart from '../views/BarChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BarChart
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/PieChart.vue')
    }
  ]
})

export default router

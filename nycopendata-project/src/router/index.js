import { createRouter, createWebHistory } from 'vue-router'
import RawData from '../views/RawData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/BarChart.vue')
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/PieChart.vue')
    },
    {
      path: '/',
      name: 'rawdata',
      component: RawData
    }
  ]
})

export default router

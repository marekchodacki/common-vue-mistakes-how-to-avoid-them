import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/key-on-v-for',
      name: 'key-on-v-for',
      component: () => import('../views/KeyOnVFor.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'key-on-v-for',
      component: () => import('../views/KeyOnVFor.vue'),
    },
  ],
})

export default router

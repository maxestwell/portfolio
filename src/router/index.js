import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/project/:projectId',
      name: 'project',
      component: () => import('../views/Project.vue'),
      props: true,
    },
  ],
})

export default router

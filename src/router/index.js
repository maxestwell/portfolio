import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // Use history mode for clean URLs
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/project/:projectId',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      props: true,
    },
  ],
})

export default router

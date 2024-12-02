import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      props: true,
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/MusicView.vue'),
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      props: true,
    },
  ],
})

export default router

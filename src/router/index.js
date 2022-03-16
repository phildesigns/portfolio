import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/project/:id(\\d+)',
    name: 'project',
    component: ProjectView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

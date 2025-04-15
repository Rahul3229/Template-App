import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from "../views/Landing.vue"
import Input from "../views/Input.vue"
import Template from "../views/Template.vue"

import NewTemplate from "../views/NewTemplate.vue"

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },

{
  path:'/Input',
  name:'Input',
  component: Input
},


{
  path:'/Template',
  name:'Template',
  component: Template
},


{
  path:'/NewTemplate',
  name:'NewTemplate',
  component: NewTemplate
},

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

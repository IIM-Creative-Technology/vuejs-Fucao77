import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'
import BlogAdmin from '../views/BlogAdmin.vue'
import CreatePage from '../components/CreatePage.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'BlogAdmin',
    component: BlogAdmin
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },




  /*{
    path: '/'
  }*/


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

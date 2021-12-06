import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import HomePage from '../views/product/HomePage.vue'
import addProduct from '../views/product/addProduct.vue'
import userDetails from '../views/user/userDetails.vue'
import DeleteProduct from '../views/product/DeleteProduct.vue'
import createOrders from '../views/orders/CreateOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',      
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/addproduct',
    name: 'addProduct',
    component: addProduct
  },
  {
    path: '/deleteproduct',
    name: 'DeleteProduct',
    component: DeleteProduct
  },
  {
  path: '/user',
  name: 'userDetails',      
  component: userDetails
  },
  {
    path: '/createorder',
    name: 'createOrders',      
    component: createOrders
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

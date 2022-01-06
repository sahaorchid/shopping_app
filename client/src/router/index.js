import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import HomePage from '../views/product/HomePage.vue'
import addProduct from '../views/product/addProduct.vue'
import userDetails from '../views/user/userDetails.vue'
import DeleteProduct from '../views/product/DeleteProduct.vue'
import createOrders from '../views/orders/CreateOrders.vue'
import Contact from '../views/contact/Contact.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',      
    name: 'HomePage',
    component: HomePage,
    meta:{requiresAuth: true}
  },
  {
    path: '/addproduct',
    name: 'addProduct',
    component: addProduct,
    meta:{requiresAuth: true}
  },
  {
    path: '/deleteproduct',
    name: 'DeleteProduct',
    component: DeleteProduct,
    meta:{requiresAuth: true}
  },
  {
  path: '/user',
  name: 'userDetails',      
  component: userDetails,
  meta:{requiresAuth: true}
  },
  {
    path: '/createorder',
    name: 'createOrders',      
    component: createOrders,
    meta:{requiresAuth: true}
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

router.beforeEach((to,from,next) =>{
  console.log(store.state.userData)
  if(to.meta.requiresAuth){
    if(Object.keys(store.state.userData).length == 0){
      next('/')
    }else{
      next()
    }
    }else{
    next()
  }
})

export default router

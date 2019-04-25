import Vue from 'vue'
import Router from 'vue-router'
import Restaurant from './views/Restaurant.vue'
import Delivery from './views/Delivery.vue'
import Dinner from './views/Dinner.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/dinner',
      name: 'Dinner',
      component: Dinner
    },
    
    
  ]
})

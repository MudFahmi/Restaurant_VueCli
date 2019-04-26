import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Restaurant from './views/Restaurant.vue'
import Delivery from './views/Delivery.vue'
import Dinner from './views/Dinner.vue'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home,
      
      meta:{
        title:'Home',
        sidebar:false,

      }
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant,
      meta:{
        title:'Restaurant',
        sidebar:true,

      }
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery,
      meta:{
        title:'Delivery',
        sidebar:true,

      }
    },
    {
      path: '/dinner',
      name: 'Dinner',
      component: Dinner,
      meta:{
        title:'Dinner',
        sidebar:true,

      }
    },
    
    
  ]
})

router.beforeEach((to, from, next) => {

  to.matched.some(record => document.title = record.meta.title);

  store.dispatch('sideBar',to.meta.sidebar).then(response => {
  next()
  })
})


export default router;
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import RouterView from '../components/RouterView'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/router',
      name: 'RouterView',
      component: RouterView
    },
  ]
})
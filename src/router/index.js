import Vue from 'vue'
import Router from 'vue-router'
import Context from '@/components/Context'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Context
    }
  ]
})

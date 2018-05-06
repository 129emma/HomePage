import Vue from 'vue'
import Router from 'vue-router'
import Context from '@/components/Content'

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

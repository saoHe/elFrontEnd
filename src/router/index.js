import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import NewFile from '@/pages/index/new_file'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', //默认初始化页面路径
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newfile',
      name: 'newfile',
      component: () => import('@/pages/index/new_file')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index/index')
    }

  ]
})

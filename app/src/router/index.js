import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Studentinfo from '@/components/Studentinfo'
import Uploadfile from '@/components/Uploadfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'Studentinfo',
          name: 'Studentinfo',
          component: Studentinfo
        },
        {
          path: 'Uploadfile',
          name: 'Uploadfile',
          component: Uploadfile
        }
      ]
    }
  ]
})

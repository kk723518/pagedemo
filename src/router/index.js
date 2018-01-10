import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Content from '../components/Content'
import Home from '../components/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

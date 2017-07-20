import Vue from 'vue'
import Router from 'vue-router'

import shopping from '@/components/shopping/shopping'
import my from '@/components/my/my'
import community from '@/components/community/community'
import cart from '@/components/cart/cart'
import pay from '@/components/cart/pay'
import order from '@/components/cart/pay/order'
import payHome from '@/components/cart/pay/payHome'
import shopAddr from '@/components/cart/pay/shopAddr'
import editAddr from '@/components/cart/pay/editAddr'
import reviseAddr from '@/components/cart/pay/reviseAddr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopping',
      component: shopping,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay,
      children: [
      		{ path: '/pay/', component: payHome,name: 'payHome'},
      		{ path: '/pay/order', component: order, name: 'order'},
      		{ path: '/pay/shopAddr', component: shopAddr, name: 'shopAddr'},
      		{ path: '/pay/editAddr', component: editAddr, name: 'editAddr'},
      		{ path: '/pay/reviseAddr', component: reviseAddr, name: 'reviseAddr'}
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
  ]
})

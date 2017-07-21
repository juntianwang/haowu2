import Vue from 'vue'
import Router from 'vue-router'

import shopping from '@/components/shopping/shopping'
import my from '@/components/my/my'
import community from '@/components/community/community'
import cart from '@/components/cart/cart'

import goodsDetails from '@/components/common/goodsDetails';

import entrance from '@/components/entrance/entrance'

//注册
import login from '@/components/login/login'
import login1 from '@/components/login/loginchild/login1'
import register from '@/components/login/loginchild/register'
import deal from '@/components/login/loginchild/deal'
import pass from '@/components/login/loginchild/password'
import debark from '@/components/login/loginchild/debark'

//my
import mychild from '@/components/my/mychild/mychild'

import setting from '@/components/my/mychild/setting'
import setserve from '@/components/my/mychild/setserve'
import me from '@/components/my/mychild/me'
import idea from '@/components/my/mychild/idea'
import changingname from '@/components/my/mychild/changingname'



import pay from '@/components/cart/pay'
import order from '@/components/cart/pay/order'
import payHome from '@/components/cart/pay/payHome'
import shopAddr from '@/components/cart/pay/shopAddr'
import editAddr from '@/components/cart/pay/editAddr'
import reviseAddr from '@/components/cart/pay/reviseAddr'


import myOrder from '@/components/my/mychild/myOrder'
import mywallet from '@/components/my/mychild/mywallet'
import commonP from '@/components/my/mychild/commonP'
import mywithdrawal from '@/components/my/mychild/mywithdrawal'
import mybookeddetails from '@/components/my/mychild/mybookeddetails'
import mystrategy from '@/components/my/mychild/mystrategy'


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
      component: my,
      children: [
      		{ path: "/my/", component: mychild },
            { path: "/mychild/setting",name:"setting",component:setting },
            { path: "/mychild/setserve",name:"setserve",component:setserve },
            { path: "/mychild/me",name:"me",component:me },
            { path: "/mychild/idea",name:"idea",component:idea },
            { path: "/mychild/changingname",name:"changingname",component:changingname },
            {
					path: "/my/mychild/myOrder",
					name: "myOrder",
					component: myOrder
				},
				{
					path: "/my/mychild/mywallet",
					name: "mywalletr",
					component: mywallet,
				},
				{
					path: "/my/mychild/commonP",
					name: "commonP",
					component: commonP,
				},
				{
					path: "/my/mychild/mywithdrawal",
					name: "mywithdrawal",
					component: mywithdrawal,
				},
				{
					path: "/my/mychild/mybookeddetails",
					name: "mybookeddetails",
					component: mybookeddetails,
				},
				{
					path: "/my/mychild/mystrategy",
					name: "mystrategy",
					component: mystrategy,
				}
            
            
        ]
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: entrance
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
      		{ path: "/login/", component: login1 },
            { path: "/login/register",name:"register",component: register },
            { path: "/login/deal",name:"deal",component: deal },
            { path: "/login/password",name:"password",component: pass },
            {path: "/login/debark",name:"debark",component: debark}  
        ]
    },
    {
			path: '/goodsDetails',
			name: 'goodsDetails',
			component: goodsDetails
		}
  ]
})


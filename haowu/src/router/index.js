import Vue from 'vue'
import Router from 'vue-router'

import shopping from '@/components/shopping/shopping'
import my from '@/components/my/my'
import community from '@/components/community/community'
import cart from '@/components/cart/cart'
import goodsDetails from '@/components/common/goodsDetails'
import carDetail from '@/components/shopping/carDetail'
import moreDetail from '@/components/shopping/moreDetail'
import communitydetail from '@/components/community/communitydetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopping',
      component: shopping
//    children: [{
//    	path:'/goodsDetails',
//    	name: 'goodsDetails',
//    	component: goodsDetails
//    }]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
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
    {
    		path:'/goodsDetails',
      	name: 'goodsDetails',
      	component: goodsDetails
    },
    {
    		path:'/carDetail',
      	name: 'carDetail',
      	component: carDetail
    },
    {
    		path:'/moreDetail',
      	name: 'moreDetail',
      	component: moreDetail
    },
    {
		path: "/communitydetail",
		name: "communitydetail",
		component: communitydetail
	}
  ]
})

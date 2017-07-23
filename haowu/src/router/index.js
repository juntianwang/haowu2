import Vue from 'vue'
import Router from 'vue-router'

import shopping from '@/components/shopping/shopping'
import my from '@/components/my/my'
import community from '@/components/community/community'
import cart from '@/components/cart/cart'
import communitydetail from '@/components/community/communitydetail'
import solicitation from '@/components/community/communitySolicitation'
import communityhot from '@/components/community/communityhot'
import communitylast from '@/components/community/communitylast'
Vue.use(Router)

export default new Router({
	routes: [{
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
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/community',
			name: 'community',
			component: community,
			children: [{
				path: "/communitydetail",
				name: "communitydetail",
				component: communitydetail
			}]
		},
		{
			path: '/solicitation',
			name: 'solicitation',
			component: solicitation,
			children: [{
				path: "/communitylast",
				name: "communitylast",
				component: communitylast
			}
			]
		}
	]
})
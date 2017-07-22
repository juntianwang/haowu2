//引入需要用到的模块

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

//初始化对象
var mock = new MockAdapter(axios);

//如何拦截ajax的请求
//.onGet("拦截的地址").reply(200,json数据)
mock.onGet('/cart/pic').reply(200, {
	'swiperBanner': [
		"static/img/list1.png",
		"static/img/list2.png",
		"static/img/list3.png"
	]
});
/*******************/
//商城页
import new1 from '../static/shopping/new1.png';
import kill1 from '../static/shopping/kill1.png';
import show1 from '../static/shopping/show1.jpg';
import showHead from '../static/shopping/headImg.jpg';
import otherBanner from '../static/shopping/otherBanner.png';
import otherList from '../static/shopping/otherList.png';
mock.onGet('/api/shop').reply(200, {
	//新品
	//pic 图片 money 价格 name ：名字  detail 详情
	newList: [
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'}
	],
	// 限时秒杀
	killList: [
		{pic:kill1,name:'羽丝绒枕',money:49,moneyO:89}
	],
	
	//达人show
	showList: [
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心'},
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心'},
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心'},
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心'}
	],
	//家饰
	// index 就写1  title 就写decoration    banner 顶部图片  list 商品列表
	decoration: {
		index: 1,
		title: 'decoration',
		banner:otherBanner,
		list:[
			{pic:otherList,name:'厨房系列柠檬画大',money:28},
			{pic:otherList,name:'厨房系列柠檬画中',money:28},
			{pic:otherList,name:'厨房系列柠檬画小',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
	},
	//收纳
	accept: {
		index: 2,
		title: 'accept',
		banner:otherBanner,
		list:[
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
	},
	//餐厨
	kitchen: {
		index: 3,
		title: 'kitchen',
		banner:otherBanner,
		list:[
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
	},
	//家纺
	textiles: {
		index: 4,
		title: 'textiles',
		banner:otherBanner,
		list:[
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
	}
});
	// 推荐  和上面一样 这里用comment 
	//推荐中的 猜你喜欢商品列表   
mock.onGet('/api/shop/list',{ params: { begin: 0 ,num: 5} }).reply(200, {
	shopList: [
		{pic: [show1,show1],name: '小清新客厅套大',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}}
	]
});
mock.onGet('/api/shop/list',{ params: { begin: 5 ,num: 5} }).reply(200, {
	shopList: [
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}}
	]
});
mock.onGet('/api/shop/other',{ params: {shopClass: 'decoration',begin: 10 ,num: 10} }).reply(200, {
	list:[
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
});
mock.onGet('/api/shop/other',{ params: {shopClass: 'decoration',begin: 20 ,num: 10} }).reply(200, {
	list:[
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
});
mock.onGet('/api/shop/other',{ params: {shopClass: 'accept',begin: 10 ,num: 10} }).reply(200, {
	list:[
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28},
			{pic:otherList,name:'厨房系列柠檬画',money:28}
		]
});
	//商品详情 detail：{}
mock.onGet('/api/shop/detail').reply(function(req) {
	var list = {
					title: "Hook 铁艺五头挂钩",
					price:"76",
					select_tip:[{
						title:"磨砂黑色",
						num:"11"
					},{
						title:"磨砂白色",
						num:"3"
					},{
						title:"磨砂青色",
						num:"0"
					},{
						title:"磨砂蓝色",
						num:"8"
					}],
					src: [
						show1,
						show1,
						show1,
						show1
					],
					content: [
							kill1,
							kill1,
							kill1,
							kill1,
							kill1,
							kill1,
							kill1,
							kill1,
							kill1
					]
				}
	if (req.params.search == '厨房系列柠檬画' || req.params.search == '羽丝绒枕' ) {
		console.log(list)
		return [200,{list:list}]
	}
})
/********************/
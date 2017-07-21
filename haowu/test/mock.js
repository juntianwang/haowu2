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
	newList: [
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'},
		{pic:new1,money:20,name:'真皮墙面挂钩两件套'}
	],
	killList: [
		{pic:kill1,name:'羽丝绒枕',money:49,moneyO:89}
	],
	showList: [
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心'},
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心'},
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心'},
		{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead,txt:'小清新，小倾心'}
	],
	decoration: {
		index: 1,
		title: 'decoration',
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
mock.onGet('/api/shop/list',{ params: { begin: 0 ,num: 5} }).reply(200, {
	shopList: [
		{pic: [show1,show1],name: '小清新客厅套',money: 200,txt: '用自然的元素点缀，简雅秀气，随处可见心思',list: {content: [show1,show1],pagination: '.swiper-pagination'}},
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
			{pic:otherList,name:'厨房系列柠檬画',money:28},
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

/********************/
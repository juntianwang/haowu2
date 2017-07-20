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
	]
});



/********************/
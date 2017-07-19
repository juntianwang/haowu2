//引入需要用到的模块

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

//初始化对象
var mock = new MockAdapter(axios);

//如何拦截ajax的请求
//.onGet("拦截的地址").reply(200,json数据)
mock.onGet('/cart/pic').reply(200, {
//	'cartpic': [
//		{}
//	]
	'swiperBanner': [
		"static/img/list1.png",
		"static/img/list2.png",
		"static/img/list3.png"
	]
});
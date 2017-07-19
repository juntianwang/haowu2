//引入需要用到的模块

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

//初始化对象
var mock = new MockAdapter(axios);

//如何拦截ajax的请求
//.onGet("拦截的地址").reply(200,json数据)
mock.onGet('/cart/pic').reply(200, {
	'cartpic': [
		{"showpic":"../../../static/cart_img/cart_1.png","goods":"Hint 抽象系列装饰画","price":199},
		{"showpic":"../../../static/cart_img/cart_2.png","goods":"Hint 抽象系列装饰画","price":199},
		{"showpic":"../../../static/cart_img/cart_3.png","goods":"Hint 抽象系列装饰画","price":199},
		{"showpic":"../../../static/cart_img/cart_4.png","goods":"Hint 抽象系列装饰画","price":199},
		{"showpic":"../../../static/cart_img/cart_5.png","goods":"Hint 抽象系列装饰画","price":199},
		{"showpic":"../../../static/cart_img/cart_6.png","goods":"Hint 抽象系列装饰画","price":199}
	]
});
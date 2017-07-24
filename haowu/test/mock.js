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
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num:4,
		begin:0
	}
}).reply(200, {
	recommend: {
		//征集
		collect: [{
				title: "#晒晒家中的装饰画#",
				head: "../static/community/test1.png"
			},
			{
				title: "#晒晒家中的纸巾盒#",
				head: "../static/community/test1.png"
			},
			{
				title: "#晒晒载慢温柔回忆的物件#",
				head: "../static/community/test1.png"
			},
			{
				title: "#拿新品 HOOK铁艺五头挂钩#",
				head: "../static/community/test1.png"
			},
			{
				title: "#拿新品Domain铁艺收纳罐#",
				head: "../static/community/test1.png"
			},
			{
				title: "#拿新品Domain铁艺收纳篮#",
				head: "../static/community/test1.png"
			},
			{
				title: "#拿 THRome 城景水泥花盆#",
				head: "../static/community/test1.png"
			},
			{
				title: "#拿新品 Keep 竹制方碗套装#",
				head: "../static/community/test1.png"
			},
			{
				title: "#拿新品 Sower 意点陶瓷餐具#",
				head: "../static/community/test1.png"
			},
		],
		//推荐
		elect: [{
				head: "../static/community/people.png", //头像
				name: "Cristal", //名字
				goods: ["../static/community/test2.png", "../static/community/test3.png", "../static/community/test2.png", "../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
					{
						name: "yun",
						head: "../static/community/user3.png",
						mes: "这个想法真好",
						time: "2017/6/22",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
			},
			{
				head: "../static/community/people.png", //头像
				name: "风起云淡", //名字
				goods: ["../static/community/test2.png", "../static/community/test3.png", "../static/community/test2.png", "../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
			},
			{
				head: "../static/community/people.png", //头像
				name: "万物归宗", //名字
				goods: ["../static/community/test2.png", "../static/community/test3.png", "../static/community/test2.png", "../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
					{
						name: "yun",
						head: "../static/community/user3.png",
						mes: "这个想法真好",
						time: "2017/6/22",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。#晒晒家中的装饰画#"
			},
			{
				head: "../static/community/people.png", //头像
				name: "bryant", //名字
				goods: ["../static/community/test2.png", "../static/community/test3.png", "../static/community/test2.png", "../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
					{
						name: "yun",
						head: "../static/community/user3.png",
						mes: "这个想法真好",
						time: "2017/6/22",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
			},
			
		],
	}
})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num:4,
		begin:4
	}
}).reply(200,{
	recommend:{
		elect: [{
				head: "../static/community/people.png", //头像
				name: "vnient", //名字
				goods: ["../static/community/test2.png", "../static/community/test3.png", "../static/community/test2.png", "../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
			},
			{
				head: "../static/community/people.png", //头像
				name: "vnient", //名字
				goods: ["../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
			},
			{
				head: "../static/community/people.png", //头像
				name: "vnient", //名字
				goods: ["../static/community/test3.png"], //轮播图片
				good: [{
					name: "Mark",
					head: "../static/community/user1.png"
				}, {
					name: "Amy",
					head: "../static/community/user1.png"
				}, {
					name: "Linda",
					head: "../static/community/user1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "james",
						head: "../static/community/user2.png",
						mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
						time: "2017/6/25",
					},
				],
				mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
			}]
	}
	
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin:0,
		num:6
	}
}).reply(200, {
	newest: [{
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new1.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new2.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new3.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new4.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new5.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new6.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}
	]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin:6,
		num:6
	}
}).reply(200, {
	newest: [{
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new7.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new8.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new6.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new5.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new4.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user4.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/new3.png", "../static/community/test5.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user2.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num:4,
		begin:0
	}
}).reply(200, {
	decoration: [{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num:4,
		begin:4
	}
}).reply(200,{
	decoration:[{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},{
			head: "../static/community/user2.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test4.png", "../static/community/test5.png", "../static/community/test4.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/people.png"
			}, {
				name: "Amy",
				head: "../static/community/people.png"
			}, {
				name: "Linda",
				head: "../static/community/people.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}]
})
//收纳
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num:4,
		begin:0
	}
}).reply(200, {
	accept: [{
			head: "../static/community/user3.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test5.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test5.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user3.png", //头像
			name: "mark", //名字
			goods: ["../static/community/test5.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test5.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user3.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test5.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test5.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user3.png", //头像
			name: "vnient", //名字
			goods: ["../static/community/test5.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test5.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, 
	]
})
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num:4,
		begin:4
	}
}).reply(200, {
	accept: [
	{
			head: "../static/community/user3.png", //头像
			name: "james", //名字
			goods: ["../static/community/test5.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test5.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}, {
			head: "../static/community/user3.png", //头像
			name: "在水一方", //名字
			goods: ["../static/community/test5.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test5.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}]
	})
//餐厨
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num:4,
		begin:0
	}
}).reply(200, {
	meal: [{
			head: "../static/community/user1.png", //头像
			name: "张三", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "lerom", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "古奇", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "张三", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		

	]
})
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num:4,
		begin:4
	}
}).reply(200, {
	meal: [
	{
			head: "../static/community/user1.png", //头像
			name: "张三", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "张三", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
	]
	})
//家纺
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num:4,
		begin:0
	}
}).reply(200, {
	textiles: [{
			head: "../static/community/user4.png", //头像
			name: "wisliam", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "杰克", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "武峰", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "混沌", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "天涯", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user4.png", //头像
			name: "slowfet", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test7.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}
	]

})
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num:4,
		begin:4
	}
}).reply(200,{
	textiles: [{
			head: "../static/community/user1.png", //头像
			name: "益丰", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "轩炀", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}]
})
//最热
mock.onGet('/community/solicitation-hot', {
	params: {
		classes: "solicitation-hot",
		num:4,
	}
}).reply(200,{
	hot:[
	{
			head: "../static/community/user1.png", //头像
			name: "益丰", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "轩炀", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},{
			head: "../static/community/user1.png", //头像
			name: "益丰", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "轩炀", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}
	]
})
mock.onGet('/community/solicitation-last', {
	params: {
		classes: "solicitation-last",
		num:4,
	}
}).reply(200,{
	last:[
	{
			head: "../static/community/user3.png", //头像
			name: "益丰", //名字
			goods: ["../static/community/test7.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user3.png", //头像
			name: "轩炀", //名字
			goods: ["../static/community/test3.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},{
			head: "../static/community/user1.png", //头像
			name: "益丰", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		},
		{
			head: "../static/community/user1.png", //头像
			name: "轩炀", //名字
			goods: ["../static/community/test6.png", "../static/community/test3.png", "../static/community/test4.png", "../static/community/test6.png"], //轮播图片
			good: [{
				name: "Mark",
				head: "../static/community/user2.png"
			}, {
				name: "Amy",
				head: "../static/community/user2.png"
			}, {
				name: "Linda",
				head: "../static/community/user2.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "james",
					head: "../static/community/user3.png",
					mes: "1左:hm home洗碗巾 2.右:自己设计的年历  3.右:宜家相框装的西西弗买的mini 拼图 已经不指望中奖😂借着活动推荐合适的小物件",
					time: "2017/6/25",
				},
			],
			mes: "用红色的单品点缀客厅,撒上一整年喜气,点滴处可见心思。",time:"2017/07/02",
		}
	]

})


//引入需要用到的模块

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

//初始化对象
var mock = new MockAdapter(axios);

//如何拦截ajax的请求
//.onGet("拦截的地址").reply(200,json数据)
mock.onGet('/cart/pic').reply(200, {
	'cartpic': [{
			"showpic": "../../../static/cart_img/cart_1.png",
			"goods": "Hint 抽象系列装饰画",
			"price": 199
		},
		{
			"showpic": "../../../static/cart_img/cart_2.png",
			"goods": "Hint 抽象系列装饰画",
			"price": 199
		},
		{
			"showpic": "../../../static/cart_img/cart_3.png",
			"goods": "Hint 抽象系列装饰画",
			"price": 199
		},
		{
			"showpic": "../../../static/cart_img/cart_4.png",
			"goods": "Hint 抽象系列装饰画",
			"price": 199
		},
		{
			"showpic": "../../../static/cart_img/cart_5.png",
			"goods": "Hint 抽象系列装饰画",
			"price": 199
		},
		{
			"showpic": "../../../static/cart_img/cart_6.png",
			"goods": "Hint 抽象系列装饰画",
			"price": 199
		}
	]
});
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 0
	}
}).reply(200, {
	recommend: {
		//征集
		collect: [{
				head: "../static/community/communityimg//head/1.png",
				content:["近期好物上新了一大波的装饰画~~颜色极度小清新，很适合做夏日的装饰~~你家中的装饰画是什么样子呢？不管是油画、书法，还是自己创作的有趣的画，都来晒晒吧~","奖项设置：","1.点赞数第一名将获得Hook 真皮墙面挂钩两件套","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张","参与方式：点击下方相机按钮，参与晒单",
				"活动时间：7.19-7.25",]
			},
			{
				head: "../static/community/communityimg/head/2.png",
				content:["小小的身影虽很不起眼~但是又是居家中不可或缺的一道小风景~你家的纸巾盒都是什么样子？摆在哪里呢？本周就来晒晒家中常备的纸巾盒吧~",
				"上周的好物晒单中，三好生“Juniorchen2012”点赞数最多！好物君将尽快为你寄出奖品：Panorama 榉木相框套装！参与晒单符合要求的三好生们好物君会为你们发放包邮券哦~",
				"本周奖项设置：","1.点赞数第一名将获得Domain 铁艺纸巾盒 茄子紫（小号+大号","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张","参与方式：点击下方相机按钮，参与晒单","活动时间：7.12-7.18"]
			},
			{
				head: "../static/community/communityimg/head/3.png",
				content:["家里总会有些物件满载了回忆，不管是花了两个晚上做的手工艺品，还是结婚时收到的诚意满满的礼物~分享下家中那件载满温柔回忆的物件吧~",
				"奖项设置：","1.点赞数第一名将获得Panorama 榉木相框","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：7.5-7.11"]
			},
			{
				head: "../static/community/communityimg/head/4.png",
				content:["家中的东西如果都安置在地面上，墙面却空空的不免会觉得拥挤和不协调，墙上收纳不仅可以实用性的放置物品，也可以放些装饰物避免墙上空荡荡的感觉，这周就来晒晒家中的墙上收纳是如何利用的吧~","奖项设置：","1.点赞数第一名将获得新品Hook 铁艺五头挂钩","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：6.28-7.4"]
			},
			{
				head: "../static/community/communityimg/head/5.png",
				content:["金属材质乍看起来有些冷艳，但也会因伴有独特光泽使其别具温柔，你有没有给家中置办一些金属元素的装饰或物品呢？找到你家的金属元素来晒晒吧~","奖项设置：","1.点赞数第一名将获得新品Domain 六边形铁艺收纳罐（黄铜色/高款） ","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：6.21-6.27"]
			},
			{
				head: "../static/community/communityimg/head/6.png",
				content:["一个家聚集爱最多的地方应该就是餐桌了，人们总是期待着和爱的人享受美好的用餐时光，本周就来晒晒你元气满满的餐桌吧~","奖项设置：","1.点赞数第一名将获得 本周新品Domain 铁艺长条收纳篮","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：6.15-6.20"]
			},
			{
				head: "../static/community/communityimg/head/7.png",
				content:["最近上新的好物与象上合作款——欢乐颂同款杯子~三好生们还喜欢吗~？满足你们晒一晒更健康的心愿~快来晒晒你颜值爆表的杯子吧~","奖项设置：","1.点赞数第一名将获得明星商品—仿佛置身于纪念硅谷梦境中的Throne 城景水泥花盆","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：6.7-6.13"]
			},
			{
				head: "../static/community/communityimg/head/8.png",
				content:["钥匙放在哪里才有归属感？随手用的东西放哪里美观又方便？化妆品怎么放才有逼格？生活中少不了为小物件寻个家~来晒晒你的小物件收纳处吧~","奖项设置：","1.点赞数第一名将获得新品—Keep 竹制方碗丁香紫色套装","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：5.31—6.6"]
			},
			{
				head: "../static/community/communityimg/head/9.png",
				content:["生活中的仪式感是一份小热爱与小认真~忙碌了一天，回到家尝试为晚餐精心的摆盘，和大家分享下你有滋有味的生活吧~~","奖项设置：","1.点赞数第一名将获得新品—Sower 意点陶瓷餐具套装（整套哦~！）","2.带三张图以上＋20字以上晒单，即获得好物商城全场包邮券一张！","参与方式：点击下方相机按钮，参与晒单","活动时间：5.24—5.30"]
			},
		],
		//推荐
		elect: [{
				head: "../static/community/communityimg/1/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
					"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/1/head/1.png"
				}, {
					head: "../static/community/communityimg/1/head/2.png"
				}, {
					head: "../static/community/communityimg/1/head/3.png"
				}, {
					head: "../static/community/communityimg/1/head/4.png"
				}, {
					head: "../static/community/communityimg/1/head/5.png"
				}, {
					head: "../static/community/communityimg/1/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
				time: "2017-07-23",
			},
			{
				head: "../static/community/communityimg/2/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
					"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/2/head/1.png"
					}, {
						head: "../static/community/communityimg/2/head/2.png"
					}, {
						head: "../static/community/communityimg/2/head/3.png"
					}, {
						head: "../static/community/communityimg/2/head/4.png"
					}, {
						head: "../static/community/communityimg/2/head/5.png"
					}, {
						head: "../static/community/communityimg/2/head/6.png"
					},
					{
						head: "../static/community/communityimg/2/head/7.png"
					},
					{
						head: "../static/community/communityimg/2/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "北爸",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "椅子不错👍，求介绍",
						time: "2017-07-22",
					}
				],
				mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
				time: "2017-07-22",
			},
			{
				head: "../static/community/communityimg/3/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/3/head/1.png"
					}, {
						head: "../static/community/communityimg/3/head/2.png"
					}, {
						head: "../static/community/communityimg/3/head/3.png"
					}, {
						head: "../static/community/communityimg/3/head/4.png"
					}, {
						head: "../static/community/communityimg/3/head/5.png"
					}, {
						head: "../static/community/communityimg/3/head/6.png"
					},
					{
						head: "../static/community/communityimg/3/head/7.png"
					},
					{
						head: "../static/community/communityimg/3/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "上不上天管你屁事",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
						time: "2017-07-22",
					}
				],
				mes: "减肥~",
				time: "2017-07-21",
			},
			{
				head: "../static/community/communityimg/4/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/4/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/4/head/1.png"
					}, {
						head: "../static/community/communityimg/4/head/2.png"
					}, {
						head: "../static/community/communityimg/4/head/3.png"
					}, {
						head: "../static/community/communityimg/4/head/4.png"
					}, {
						head: "../static/community/communityimg/4/head/5.png"
					}, {
						head: "../static/community/communityimg/4/head/6.png"
					},
					{
						head: "../static/community/communityimg/4/head/7.png"
					},
					{
						head: "../static/community/communityimg/4/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "角落",
				time: "2017-07-20",
			}

		],
	}
})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 4
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/5/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/5/banner/1.png", "../static/community/communityimg/5/banner/2.png",
					"../static/community/communityimg/5/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/5/head/1.png"
					}, {
						head: "../static/community/communityimg/5/head/2.png"
					}, {
						head: "../static/community/communityimg/5/head/3.png"
					}, {
						head: "../static/community/communityimg/5/head/4.png"
					}, {
						head: "../static/community/communityimg/5/head/5.png"
					}, {
						head: "../static/community/communityimg/5/head/6.png"
					},
					{
						head: "../static/community/communityimg/5/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "有一位会艺术造诣很高的闺蜜是什么体验？ 当然是灰常灰常开心吖。不仅可以获赠很多装饰画而且自己的艺术品味都提高了八度哈哈哈哈 好物手工地毯五星好评",
				time: "2017-06-18",
			},
			{
				head: "../static/community/communityimg/6/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/6/banner/1.png", "../static/community/communityimg/6/banner/2.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/6/head/1.png"
					}, {
						head: "../static/community/communityimg/6/head/2.png"
					}, {
						head: "../static/community/communityimg/6/head/3.png"
					}, {
						head: "../static/community/communityimg/6/head/4.png"
					}, {
						head: "../static/community/communityimg/6/head/5.png"
					}, {
						head: "../static/community/communityimg/6/head/6.png"
					},
					{
						head: "../static/community/communityimg/6/head/7.png"
					},
					{
						head: "../static/community/communityimg/6/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "满满的少女心💗",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/7/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/7/banner/1.png", "../static/community/communityimg/7/banner/2.png", "../static/community/communityimg/7/banner/3.png",
					"../static/community/communityimg/7/banner/4.png", "../static/community/communityimg/7/banner/5.png",
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/7/head/1.png"
					}, {
						head: "../static/community/communityimg/7/head/2.png"
					}, {
						head: "../static/community/communityimg/7/head/3.png"
					}, {
						head: "../static/community/communityimg/7/head/4.png"
					}, {
						head: "../static/community/communityimg/7/head/5.png"
					}, {
						head: "../static/community/communityimg/7/head/6.png"
					},
					{
						head: "../static/community/communityimg/7/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "热烈的梦境，亲切而柔美的红，伴随夜晚的宁静起伏时分。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/8/author.png", //头像
				name: "李玲文", //名字
				goods: ["../static/community/communityimg/8/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/8/head/1.png"
				}, {
					head: "../static/community/communityimg/8/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "❤️",
				time: "2017-06-21",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 8
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/9/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/9/banner/1.png", "../static/community/communityimg/9/banner/2.png",
					"../static/community/communityimg/9/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/9/head/1.png"
					}, {
						head: "../static/community/communityimg/9/head/2.png"
					}, {
						head: "../static/community/communityimg/9/head/3.png"
					}, {
						head: "../static/community/communityimg/9/head/4.png"
					}, {
						head: "../static/community/communityimg/9/head/5.png"
					}, {
						head: "../static/community/communityimg/9/head/6.png"
					},
					{
						head: "../static/community/communityimg/9/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "做花艺师有三年了 一直都喜欢自然花艺 自从开始做挂毯 也一直都不想做常规的 喜欢自由的 喜欢一切自然生长的东西 我也相信 一定有和我志同道合的朋友 和我一样 喜欢着同样喜欢的东西",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/10/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/10/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/10/head/1.png"
				}, {
					head: "../static/community/communityimg/10/head/2.png"
				}, {
					head: "../static/community/communityimg/10/head/3.png"
				}, {
					head: "../static/community/communityimg/10/head/4.png"
				}, {
					head: "../static/community/communityimg/10/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "家的样子",
				time: "2017-07-10",
			},
			{
				head: "../static/community/communityimg/11/author.png", //头像
				name: "乌拉爱白果", //名字
				goods: ["../static/community/communityimg/11/banner/1.png", "../static/community/communityimg/11/banner/2.png", "../static/community/communityimg/11/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/11/head/1.png"
				}, {
					head: "../static/community/communityimg/11/head/2.png"
				}, {
					head: "../static/community/communityimg/11/head/3.png"
				}, {
					head: "../static/community/communityimg/11/head/4.png"
				}, {
					head: "../static/community/communityimg/11/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "不想当捕梦网的挂毯不是好隔板+_+ 好物家隔板品质超级让人安心哦，屯了好多……😝",
				time: "2017-06-20",
			},
			{
				head: "../static/community/communityimg/12/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/12/banner/1.png", "../static/community/communityimg/12/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/12/head/1.png"
				}, {
					head: "../static/community/communityimg/12/head/2.png"
				}, {
					head: "../static/community/communityimg/12/head/3.png"
				}, {
					head: "../static/community/communityimg/12/head/4.png"
				}, {
					head: "../static/community/communityimg/12/head/5.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "河童Coo",
					head: "../static/community/communityimg/12/talk/5.png",
					mes: "日式简约纯色夏凉被水洗棉夏被纯棉可水洗空调被】，点击链接再选择浏览器打开http://c.b1yt.com/h.NmuMe1?cv=R6Ph00BsY79&sm=c65b37 ，或复制这条信息￥R6Ph00BsY79￥后打开👉手机淘宝👈",
					time: "2017-07-19"
				}, ],
				mes: "夏天是水绿的️",
				time: "2017-07-19",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 12
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/14/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/14/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/14/head/1.png"
				}, {
					head: "../static/community/communityimg/14/head/2.png"
				}, {
					head: "../static/community/communityimg/14/head/3.png"
				}, {
					head: "../static/community/communityimg/14/head/4.png"
				}, {
					head: "../static/community/communityimg/14/head/5.png"
				}, {
					head: "../static/community/communityimg/14/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/14/talk/1.png",
					mes: "好看",
					time: "2017-06-11"
				}, {
					name: "Milk-Olivia",
					head: "../static/community/communityimg/14/talk/2.png",
					mes: "冰咖啡，好凉爽",
					time: "2017-06-10"
				}],
				mes: "好饿，睡觉",
				time: "2017-06-10",
			},
			{
				head: "../static/community/communityimg/15/author.png", //头像
				name: "小草青青", //名字
				goods: ["../static/community/communityimg/15/banner/1.png", "../static/community/communityimg/15/banner/2.png", "../static/community/communityimg/15/banner/3.png",
					"../static/community/communityimg/15/banner/4.png", "../static/community/communityimg/15/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/15/head/1.png"
				}, {
					head: "../static/community/communityimg/15/head/2.png"
				}, {
					head: "../static/community/communityimg/15/head/3.png"
				}, {
					head: "../static/community/communityimg/15/head/4.png"
				}, {
					head: "../static/community/communityimg/15/head/5.png"
				}, {
					head: "../static/community/communityimg/15/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "会一直做下去。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/16/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/16/banner/1.png", "../static/community/communityimg/16/banner/2.png", "../static/community/communityimg/16/banner/3.png",
					"../static/community/communityimg/16/banner/4.png", "../static/community/communityimg/16/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/16/head/1.png"
					}, {
						head: "../static/community/communityimg/16/head/2.png"
					}, {
						head: "../static/community/communityimg/16/head/3.png"
					}, {
						head: "../static/community/communityimg/16/head/4.png"
					}, {
						head: "../static/community/communityimg/16/head/5.png"
					},
					{
						head: "../static/community/communityimg/16/head/6.png"
					},
					{
						head: "../static/community/communityimg/16/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "kB5tUM4RAg",
					head: "../static/community/communityimg/16/talk/1.png",
					mes: "两个窗户之间的点缀有链接吗？求链接",
					time: "2017-07-18"
				}, ],
				mes: "用红色的单品点缀客厅，撒上一整年喜气，点滴处可见心思。️",
				time: "2017-07-18",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 16
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/17/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/17/banner/1.png", "../static/community/communityimg/17/banner/2.png", "../static/community/communityimg/17/banner/3.png",
					"../static/community/communityimg/17/banner/4.png", "../static/community/communityimg/17/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/17/head/1.png"
				}, {
					head: "../static/community/communityimg/17/head/2.png"
				}, {
					head: "../static/community/communityimg/17/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "满满的时光。 有太多的信任和支持。 会一直做下去。 我喜欢挂毯 每次做完 上墙的瞬间 带给我的是满满的暖意 希望把这份温暖也传给你",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/18/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/18/banner/1.png", "../static/community/communityimg/18/banner/2.png", "../static/community/communityimg/18/banner/3.png",
					"../static/community/communityimg/18/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/18/head/1.png"
				}, {
					head: "../static/community/communityimg/18/head/2.png"
				}, {
					head: "../static/community/communityimg/18/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/18/talk/1.png",
					mes: "这个好有趣吖",
					time: "2017-06-25"
				}],
				mes: "绿色挂毯，既可以当花器，也可以装饰。",
				time: "2017-06-25",
			},
			{
				head: "../static/community/communityimg/19/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/19/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/19/head/1.png"
				}, {
					head: "../static/community/communityimg/19/head/2.png"
				}, {
					head: "../static/community/communityimg/19/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "珍品",
				time: "2017-06-28",
			},
			{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 20
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/22/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/22/banner/1.png", "../static/community/communityimg/22/banner/2.png", "../static/community/communityimg/22/banner/3.png",
					"../static/community/communityimg/22/banner/4.png", "../static/community/communityimg/22/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/22/head/1.png"
					}, {
						head: "../static/community/communityimg/22/head/2.png"
					}, {
						head: "../static/community/communityimg/22/head/3.png"
					}, {
						head: "../static/community/communityimg/22/head/4.png"
					}, {
						head: "../static/community/communityimg/22/head/5.png"
					}, {
						head: "../static/community/communityimg/22/head/6.png"
					},
					{
						head: "../static/community/communityimg/22/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/22/talk/1.png",
					mes: "第一张的台灯太好看",
					time: "2017-07-05"
				}],
				mes: "白底黑字，极简唯美的线性字体，足以爱到不行。",
				time: "2017-07-04",
			},
			{
				head: "../static/community/communityimg/23/author.png", //头像
				name: "b6JbftxbfB", //名字
				goods: ["../static/community/communityimg/23/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/23/head/1.png"
				}, {
					head: "../static/community/communityimg/23/head/2.png"
				}, {
					head: "../static/community/communityimg/23/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "大神们。吸顶花洒是好还是坏",
				time: "2017-07-19",
			},
			{
				head: "../static/community/communityimg/24/author.png", //头像
				name: "我想吃1个小孩", //名字
				goods: ["../static/community/communityimg/24/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/24/head/1.png"
				}, {
					head: "../static/community/communityimg/24/head/2.png"
				}, {
					head: "../static/community/communityimg/24/head/3.png"
				}, {
					head: "../static/community/communityimg/24/head/4.png"
				}, {
					head: "../static/community/communityimg/24/head/5.png"
				}, {
					head: "../static/community/communityimg/24/head/6.png"
				}, {
					head: "../static/community/communityimg/24/head/7.png"
				}, {
					head: "../static/community/communityimg/24/head/8.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/24/talk/1.png",
					mes: "赞创新！！！可以有，要看什么木啦！我可能喜欢保持原味！",
					time: "2017-07-19"
				}],
				mes: "木头遇到丙烯",
				time: "2017-07-19",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 24
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/25/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/25/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/25/head/1.png"
				}, {
					head: "../static/community/communityimg/25/head/2.png"
				}, {
					head: "../static/community/communityimg/25/head/3.png"
				}, {
					head: "../static/community/communityimg/25/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/25/talk/1.png",
					mes: "反而有复古的味道",
					time: "2017-07-07"
				}],
				mes: "黑胡桃木色并不会显的家里很暗，反而有种高雅的风范，一直担心的颜色问题根本就不是问题啦！关键在搭配！",
				time: "2017-07-06",
			},
			{
				head: "../static/community/communityimg/26/author.png", //头像
				name: "DAISYLEE", //名字
				goods: ["../static/community/communityimg/26/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/26/head/1.png"
				}, {
					head: "../static/community/communityimg/26/head/2.png"
				}, {
					head: "../static/community/communityimg/26/head/3.png"
				}, {
					head: "../static/community/communityimg/26/head/4.png"
				}, {
					head: "../static/community/communityimg/26/head/5.png"
				}, {
					head: "../static/community/communityimg/26/head/6.png"
				}, {
					head: "../static/community/communityimg/26/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "T7",
					head: "../static/community/communityimg/26/talk/1.png",
					mes: "求链接",
					time: "2017-07-10"
				}],
				mes: "这种沙发哪里可以买到",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/27/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/27/banner/1.png", "../static/community/communityimg/27/banner/2.png", "../static/community/communityimg/27/banner/3.png",
					"../static/community/communityimg/27/banner/4.png", "../static/community/communityimg/27/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/27/head/1.png"
				}, {
					head: "../static/community/communityimg/27/head/2.png"
				}, {
					head: "../static/community/communityimg/27/head/3.png"
				}, {
					head: "../static/community/communityimg/27/head/4.png"
				}, {
					head: "../static/community/communityimg/27/head/5.png"
				}, {
					head: "../static/community/communityimg/27/head/6.png"
				}, {
					head: "../static/community/communityimg/27/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "T7",
						head: "../static/community/communityimg/27/talk/1.png",
						mes: "求链接",
						time: "2017-07-10"

					}
				],
				mes: "Muuto The Dots，秀气而雅致的它，用简约清新的设计从小处改变家的气质。",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/28/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/28/head/1.png"
				}, {
					head: "../static/community/communityimg/28/head/2.png"
				}, {
					head: "../static/community/communityimg/28/head/3.png"
				}, {
					head: "../static/community/communityimg/28/head/4.png"
				}, {
					head: "../static/community/communityimg/28/head/5.png"
				}, {
					head: "../static/community/communityimg/28/head/6.png"
				}, {
					head: "../static/community/communityimg/28/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "颜小抠",
					head: "../static/community/communityimg/28/talk/1.png",
					mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
					time: "2017-07-22"
				}],
				mes: "夏天，不仅仅是吃这么简单了",
				time: "2017-07-22",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 28
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},
			{
				head: "../static/community/communityimg/30/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/30/banner/1.png", "../static/community/communityimg/30/banner/2.png", "../static/community/communityimg/30/banner/3.png",
					"../static/community/communityimg/30/banner/4.png", "../static/community/communityimg/30/banner/5.png", "../static/community/communityimg/30/banner/6.png",
					"../static/community/communityimg/30/banner/7.png", "../static/community/communityimg/30/banner/8.png", "../static/community/communityimg/30/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/30/head/1.png"
				}, {
					head: "../static/community/communityimg/30/head/2.png"
				}, {
					head: "../static/community/communityimg/30/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "分享一些chic家居小物 生活中的小小仪式感，有时候一个不起眼的小物件，就能让你的幸福感up up up ！ 地垫和水洗牛皮纸收纳袋是原创家居用品，希望你天天都有好心情。 相信用心做的事情总会有人看的见。",
				time: "2017-07-14",
			},
			{
				head: "../static/community/communityimg/31/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/31/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/31/head/1.png"
				}, {
					head: "../static/community/communityimg/31/head/2.png"
				}, {
					head: "../static/community/communityimg/31/head/3.png"
				}, {
					head: "../static/community/communityimg/31/head/4.png"
				}, {
					head: "../static/community/communityimg/31/head/5.png"
				}, {
					head: "../static/community/communityimg/31/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "河童Coo",
						head: "../static/community/communityimg/31/talk/1.png",
						mes: "【日式水洗棉麻四件套纯色格子床单被套床笠】，点击链接再选择浏览器打开http://c.b1yt.com/h.Nblkv5?cv=oPB100QxXBE&sm=f0b52d ，或复制这条信息￥oPB100QxXBE￥后打开👉手机淘宝👈",
						time: "2017-07-16"

					}
				],
				mes: "无印风的床品",
				time: "2017-07-16",
			},
			{
				head: "../static/community/communityimg/32/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
					"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/32/head/1.png"
				}, {
					head: "../static/community/communityimg/32/head/2.png"
				}, {
					head: "../static/community/communityimg/32/head/3.png"
				}, {
					head: "../static/community/communityimg/32/head/4.png"
				}, {
					head: "../static/community/communityimg/32/head/5.png"
				}, {
					head: "../static/community/communityimg/32/head/6.png"
				}, {
					head: "../static/community/communityimg/32/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
				time: "2017-07-23",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 32
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/33/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/33/banner/1.png", "../static/community/communityimg/33/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/33/head/1.png"
				}, {
					head: "../static/community/communityimg/33/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天拍了一些新的照片，总结了一条经验，一本书足够了😂",
				time: "2017-07-20",
			},
			{
				head: "../static/community/communityimg/34/author.png", //头像
				name: "临冬城的二丫", //名字
				goods: ["../static/community/communityimg/34/banner/1.png", "../static/community/communityimg/34/banner/2.png", "../static/community/communityimg/34/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/34/head/1.png"
				}, {
					head: "../static/community/communityimg/34/head/2.png"
				}, {
					head: "../static/community/communityimg/34/head/3.png"
				}, {
					head: "../static/community/communityimg/34/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "正午",
				time: "2017-07-18",
			},
			{
				head: "../static/community/communityimg/35/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/35/banner/1.png", "../static/community/communityimg/35/banner/2.png", "../static/community/communityimg/35/banner/3.png",
					"../static/community/communityimg/35/banner/4.png", "../static/community/communityimg/35/banner/5.png", "../static/community/communityimg/35/banner/6.png",
					"../static/community/communityimg/35/banner/7.png", "../static/community/communityimg/35/banner/8.png", "../static/community/communityimg/35/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/35/head/1.png"
				}, {
					head: "../static/community/communityimg/35/head/2.png"
				}, {
					head: "../static/community/communityimg/35/head/3.png"
				}, {
					head: "../static/community/communityimg/35/head/4.png"
				}, {
					head: "../static/community/communityimg/35/head/5.png"
				}, {
					head: "../static/community/communityimg/35/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "通灵",
						head: "../static/community/communityimg/35/talk/1.png",
						mes: "买家秀如此走心，个人感觉比卖家秀还专业，大手一挥买了！😂",
						time: "2017-07-18"

					}
				],
				mes: "#晒单# 对于家居品挑选，我和先生一直以来偏好更有质感本真的家居品。用身体阅读材质带给我们的触感和岁月记忆。纯色亚麻床品在instagram上已经是众网红博主追捧的对象，除了照片带给人的慵懒和优雅感，其实舒适度和强大的功用性才是亚麻床品成为网红单品的最主要原因。",
				time: "2017-07-18",
			},
			{
				head: "../static/community/communityimg/36/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/36/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/36/head/1.png"
				}, {
					head: "../static/community/communityimg/36/head/2.png"
				}, {
					head: "../static/community/communityimg/36/head/3.png"
				}, {
					head: "../static/community/communityimg/36/head/4.png"
				}, {
					head: "../static/community/communityimg/36/head/5.png"
				}, {
					head: "../static/community/communityimg/36/head/6.png"
				}, {
					head: "../static/community/communityimg/36/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Glenn🌱",
					head: "../static/community/communityimg/36/talk/1.png",
					mes: "头上一片草原",
					time: "2017-07-17"
				}],
				mes: "打算挂在床头 绿植装饰画跟白床好配 哈哈",
				time: "2017-07-17",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 36
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},
			{
				head: "../static/community/communityimg/38/author.png", //头像
				name: "BOstudio独立设计师", //名字
				goods: ["../static/community/communityimg/38/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/38/head/1.png"
				}, {
					head: "../static/community/communityimg/38/head/2.png"
				}, {
					head: "../static/community/communityimg/38/head/3.png"
				}, {
					head: "../static/community/communityimg/38/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/38/talk/1.png",
					mes: "我喜欢",
					time: "2017-07-15"
				}],
				mes: "作品样片",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/39/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/39/banner/1.png", "../static/community/communityimg/39/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/39/head/1.png"
				}, {
					head: "../static/community/communityimg/39/head/2.png"
				}, {
					head: "../static/community/communityimg/39/head/3.png"
				}, {
					head: "../static/community/communityimg/39/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "好物君",
						head: "../static/community/communityimg/39/talk/1.png",
						mes: "有幸认识你❤️",
						time: "2017-07-11"

					}
				],
				mes: "今年的幸事是有缘结交了不少爱生活，爱家的同道人。",
				time: "2017-07-11",
			},
			{
				head: "../static/community/communityimg/40/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/40/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/40/head/1.png"
				}, {
					head: "../static/community/communityimg/40/head/2.png"
				}, {
					head: "../static/community/communityimg/40/head/3.png"
				}, {
					head: "../static/community/communityimg/40/head/4.png"
				}, {
					head: "../static/community/communityimg/40/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "一眼就相中的装饰画 色彩很治愈”",
				time: "2017-07-10",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 40
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/41/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/41/banner/1.png", "../static/community/communityimg/41/banner/2.png", "../static/community/communityimg/41/banner/3.png",
					"../static/community/communityimg/41/banner/4.png", "../static/community/communityimg/41/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/41/head/1.png"
				}, {
					head: "../static/community/communityimg/41/head/2.png"
				}, {
					head: "../static/community/communityimg/41/head/3.png"
				}, {
					head: "../static/community/communityimg/41/head/4.png"
				}, {
					head: "../static/community/communityimg/41/head/5.png"
				}, {
					head: "../static/community/communityimg/41/head/6.png"
				}, {
					head: "../static/community/communityimg/41/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "为卧室配上一盏质地坚硬的铜灯，仿佛柔软世界里守护的一抹坚强。",
				time: "2017-07-17",
			},
			{
				head: "../static/community/communityimg/42/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/42/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/42/head/1.png"
				}, {
					head: "../static/community/communityimg/42/head/2.png"
				}, {
					head: "../static/community/communityimg/42/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "最近真的很爱它，黑胡桃+黄铜，各种合适",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/43/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/43/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/43/head/1.png"
				}, {
					head: "../static/community/communityimg/43/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "NSstyle",
				time: "2017-07-01",
			},
			{
				head: "../static/community/communityimg/44/author.png", //头像
				name: "Hooooooray", //名字
				goods: ["../static/community/communityimg/44/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/44/head/1.png"
				}, {
					head: "../static/community/communityimg/44/head/2.png"
				}, {
					head: "../static/community/communityimg/44/head/3.png"
				}, {
					head: "../static/community/communityimg/44/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "很有质感，就是小贵啊",
				time: "2017-07-19",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 44
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/45/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/45/banner/1.png", "../static/community/communityimg/45/banner/2.png", "../static/community/communityimg/45/banner/3.png",
					"../static/community/communityimg/45/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/45/head/1.png"
				}, {
					head: "../static/community/communityimg/45/head/2.png"
				}, {
					head: "../static/community/communityimg/45/head/3.png"
				}, {
					head: "../static/community/communityimg/45/head/4.png"
				}, {
					head: "../static/community/communityimg/45/head/5.png"
				}, {
					head: "../static/community/communityimg/45/head/6.png"
				}, {
					head: "../static/community/communityimg/45/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "我家的纸巾盒都是好物的，三角镂空铁艺纸巾盒和黑白格纹纸巾盒，大爱😘精致到无可挑剔❤️",
				time: "2017-07-07",
			},
			{
				head: "../static/community/communityimg/46/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/46/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/46/head/1.png"
				}, {
					head: "../static/community/communityimg/46/head/2.png"
				}, {
					head: "../static/community/communityimg/46/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "周五啦周五啦周五啦！！",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/47/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/47/banner/1.png", "../static/community/communityimg/47/banner/2.png",
					"../static/community/communityimg/47/banner/3.png", "../static/community/communityimg/47/banner/4.png", "../static/community/communityimg/47/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/47/head/1.png"
				}, {
					head: "../static/community/communityimg/47/head/2.png"
				}, {
					head: "../static/community/communityimg/47/head/3.png"
				}, {
					head: "../static/community/communityimg/47/head/4.png"
				}, {
					head: "../static/community/communityimg/47/head/5.png"
				}, {
					head: "../static/community/communityimg/47/head/6.png"
				}, {
					head: "../static/community/communityimg/47/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "巧用小物，打造利落且实用的玄关，营造小而美的舒适环境。",
				time: "2017-07-06",
			},
			{
				head: "../static/community/communityimg/48/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/48/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/48/head/1.png"
				}, {
					head: "../static/community/communityimg/48/head/2.png"
				}, {
					head: "../static/community/communityimg/48/head/3.png"
				}, {
					head: "../static/community/communityimg/48/head/4.png"
				}, {
					head: "../static/community/communityimg/48/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "点亮生活",
				time: "2017-07-16",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 48
	}
}).reply(200, {
	recommend: {
		elect: [{
				head: "../static/community/communityimg/49/author.png", //头像
				name: "肉松姑娘", //名字
				goods: ["../static/community/communityimg/49/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/49/head/1.png"
				}, {
					head: "../static/community/communityimg/49/head/2.png"
				}, {
					head: "../static/community/communityimg/49/head/3.png"
				}, {
					head: "../static/community/communityimg/49/head/4.png"
				}, {
					head: "../static/community/communityimg/49/head/5.png"
				}, {
					head: "../static/community/communityimg/49/head/6.png"
				}, {
					head: "../static/community/communityimg/49/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "喜欢哑光质感️",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/50/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/50/banner/1.png", "../static/community/communityimg/50/banner/2.png", "../static/community/communityimg/50/banner/3.png", "../static/community/communityimg/50/banner/4.png", "../static/community/communityimg/50/banner/5.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/50/head/1.png"
				}, {
					head: "../static/community/communityimg/50/head/2.png"
				}, {
					head: "../static/community/communityimg/50/head/3.png"
				}, {
					head: "../static/community/communityimg/50/head/4.png"
				}, {
					head: "../static/community/communityimg/50/head/5.png"
				}, {
					head: "../static/community/communityimg/50/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "zhangjunlin",
					head: "../static/community/communityimg/50/talk/1.png",
					mes: "急需瘦十斤 哈哈",
					time: "2017-07-13"
				}, {
					name: "hope.s",
					head: "../static/community/communityimg/50/talk/2.png",
					mes: "不敢点，……️",
					time: "2017-07-13"
				}],
				mes: "我家纸巾盒，好物的占据大部分，简洁美观超百搭。点赞的都瘦十斤😂",
				time: "2017-07-13",
			},
			{
				head: "../static/community/communityimg/51/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/51/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/51/head/1.png"
				}, {
					head: "../static/community/communityimg/51/head/2.png"
				}, {
					head: "../static/community/communityimg/51/head/3.png"
				}, {
					head: "../static/community/communityimg/51/head/4.png"
				}, {
					head: "../static/community/communityimg/51/head/5.png"
				}, {
					head: "../static/community/communityimg/51/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/51/talk/6.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, ],
				mes: "实木家具搭配灰色沙发 简约不简单 喜欢",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/52/author.png", //头像
				name: "zhangjunlin", //名字
				goods: ["../static/community/communityimg/52/banner/1.png", "../static/community/communityimg/52/banner/2.png", "../static/community/communityimg/52/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/52/head/1.png"
				}, {
					head: "../static/community/communityimg/52/head/2.png"
				}, {
					head: "../static/community/communityimg/52/head/3.png"
				}, {
					head: "../static/community/communityimg/52/head/4.png"
				}, {
					head: "../static/community/communityimg/52/head/5.png"
				}, {
					head: "../static/community/communityimg/52/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "蜜拉兔",
					head: "../static/community/communityimg/52/talk/2.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, {
					name: "通灵",
					head: "../static/community/communityimg/52/talk/3.png",
					mes: "你咋不上天呢！😂",
					time: "2017-07-15"
				}],
				mes: "一共买过五款纸巾盒 图一毛毡 内部空间挺大的 大小纸巾都能使用 图二海草编 这是还没有放纸巾的时候拍的 图三大理石花纹 最喜欢的一款 放床头用 还有一款竹制的 竹乡安吉玩的时候买的 以后放茶室会比较适合 第五个就是好物绿色那款啦 还在等待中 想过啦 要是能中就去微博抽奖造福利",
				time: "2017-07-15",
			}
		]
	}

})
mock.onGet('/community/recommend', {
	params: {
		classes: "recommend",
		num: 4,
		begin: 52
	}
}).reply(200, {
	recommend: {
		elect: [{
			head: "../static/community/communityimg/53/author.png", //头像
			name: "金爷", //名字
			goods: ["../static/community/communityimg/53/banner/1.png"], //轮播图片
			good: [{
				head: "../static/community/communityimg/53/head/1.png"
			}, {
				head: "../static/community/communityimg/53/head/2.png"
			}, {
				head: "../static/community/communityimg/53/head/3.png"
			}, {
				head: "../static/community/communityimg/53/head/4.png"
			}, {
				head: "../static/community/communityimg/53/head/5.png"
			}, {
				head: "../static/community/communityimg/53/head/6.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [{
				name: "hope.s",
				head: "../static/community/communityimg/52/talk/2.png",
				mes: "晒娃不露痕迹",
				time: "2017-07-19"
			}, ],
			mes: "我只是在拍盘子😂️",
			time: "2017-07-19",
		}]
	}

})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 0,
		num: 6
	}
}).reply(200, {
	newest: [{
			head: "../static/community/communityimg/1/author.png", //头像
			name: "好物君", //名字
			goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
				"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
			], //轮播图片
			good: [{
				head: "../static/community/communityimg/1/head/1.png"
			}, {
				head: "../static/community/communityimg/1/head/2.png"
			}, {
				head: "../static/community/communityimg/1/head/3.png"
			}, {
				head: "../static/community/communityimg/1/head/4.png"
			}, {
				head: "../static/community/communityimg/1/head/5.png"
			}, {
				head: "../static/community/communityimg/1/head/6.png"
			}, ], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "艾哇",
					head: "../static/community/communityimg/1/talk/1.png",
					mes: "请问小餐桌哪里有得买？有链接么？",
					time: "2017-07-24",
				}
			],
			mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
			time: "2017-07-23",
		},
		{
			head: "../static/community/communityimg/32/author.png", //头像
			name: "好物君", //名字
			goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
				"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
			], //轮播图片
			good: [{
				head: "../static/community/communityimg/32/head/1.png"
			}, {
				head: "../static/community/communityimg/32/head/2.png"
			}, {
				head: "../static/community/communityimg/32/head/3.png"
			}, {
				head: "../static/community/communityimg/32/head/4.png"
			}, {
				head: "../static/community/communityimg/32/head/5.png"
			}, {
				head: "../static/community/communityimg/32/head/6.png"
			}, {
				head: "../static/community/communityimg/32/head/7.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [],
			mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
			time: "2017-07-23",
		}, {
			head: "../static/community/communityimg/2/author.png", //头像
			name: "Milk-Olivia", //名字
			goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
				"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
			], //轮播图片
			good: [{
					head: "../static/community/communityimg/2/head/1.png"
				}, {
					head: "../static/community/communityimg/2/head/2.png"
				}, {
					head: "../static/community/communityimg/2/head/3.png"
				}, {
					head: "../static/community/communityimg/2/head/4.png"
				}, {
					head: "../static/community/communityimg/2/head/5.png"
				}, {
					head: "../static/community/communityimg/2/head/6.png"
				},
				{
					head: "../static/community/communityimg/2/head/7.png"
				},
				{
					head: "../static/community/communityimg/2/head/8.png"
				}
			], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "北爸",
					head: "../static/community/communityimg/2/talk/1.png",
					mes: "椅子不错👍，求介绍",
					time: "2017-07-22",
				}
			],
			mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
			time: "2017-07-22",
		}, {
			head: "../static/community/communityimg/28/author.png", //头像
			name: "rNJNHFeUDu", //名字
			goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
			good: [{
				head: "../static/community/communityimg/28/head/1.png"
			}, {
				head: "../static/community/communityimg/28/head/2.png"
			}, {
				head: "../static/community/communityimg/28/head/3.png"
			}, {
				head: "../static/community/communityimg/28/head/4.png"
			}, {
				head: "../static/community/communityimg/28/head/5.png"
			}, {
				head: "../static/community/communityimg/28/head/6.png"
			}, {
				head: "../static/community/communityimg/28/head/7.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [{
				name: "颜小抠",
				head: "../static/community/communityimg/28/talk/1.png",
				mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
				time: "2017-07-22"
			}],
			mes: "夏天，不仅仅是吃这么简单了",
			time: "2017-07-22",
		}, {
			head: "../static/community/communityimg/3/author.png", //头像
			name: "蜜拉兔", //名字
			goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
			good: [{
					head: "../static/community/communityimg/3/head/1.png"
				}, {
					head: "../static/community/communityimg/3/head/2.png"
				}, {
					head: "../static/community/communityimg/3/head/3.png"
				}, {
					head: "../static/community/communityimg/3/head/4.png"
				}, {
					head: "../static/community/communityimg/3/head/5.png"
				}, {
					head: "../static/community/communityimg/3/head/6.png"
				},
				{
					head: "../static/community/communityimg/3/head/7.png"
				},
				{
					head: "../static/community/communityimg/3/head/8.png"
				}
			], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "上不上天管你屁事",
					head: "../static/community/communityimg/2/talk/1.png",
					mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
					time: "2017-07-22",
				}
			],
			mes: "减肥~",
			time: "2017-07-21",
		},{
				head: "../static/community/communityimg/4/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/4/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/4/head/1.png"
					}, {
						head: "../static/community/communityimg/4/head/2.png"
					}, {
						head: "../static/community/communityimg/4/head/3.png"
					}, {
						head: "../static/community/communityimg/4/head/4.png"
					}, {
						head: "../static/community/communityimg/4/head/5.png"
					}, {
						head: "../static/community/communityimg/4/head/6.png"
					},
					{
						head: "../static/community/communityimg/4/head/7.png"
					},
					{
						head: "../static/community/communityimg/4/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "角落",
				time: "2017-07-20",
			}
	]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 6,
		num: 6
	}
}).reply(200, {
	newest: [{
				head: "../static/community/communityimg/33/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/33/banner/1.png", "../static/community/communityimg/33/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/33/head/1.png"
				}, {
					head: "../static/community/communityimg/33/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天拍了一些新的照片，总结了一条经验，一本书足够了😂",
				time: "2017-07-20",
			},{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},{
				head: "../static/community/communityimg/12/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/12/banner/1.png", "../static/community/communityimg/12/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/12/head/1.png"
				}, {
					head: "../static/community/communityimg/12/head/2.png"
				}, {
					head: "../static/community/communityimg/12/head/3.png"
				}, {
					head: "../static/community/communityimg/12/head/4.png"
				}, {
					head: "../static/community/communityimg/12/head/5.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "河童Coo",
					head: "../static/community/communityimg/12/talk/5.png",
					mes: "日式简约纯色夏凉被水洗棉夏被纯棉可水洗空调被】，点击链接再选择浏览器打开http://c.b1yt.com/h.NmuMe1?cv=R6Ph00BsY79&sm=c65b37 ，或复制这条信息￥R6Ph00BsY79￥后打开👉手机淘宝👈",
					time: "2017-07-19"
				}, ],
				mes: "夏天是水绿的️",
				time: "2017-07-19",
			},{
				head: "../static/community/communityimg/23/author.png", //头像
				name: "b6JbftxbfB", //名字
				goods: ["../static/community/communityimg/23/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/23/head/1.png"
				}, {
					head: "../static/community/communityimg/23/head/2.png"
				}, {
					head: "../static/community/communityimg/23/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "大神们。吸顶花洒是好还是坏",
				time: "2017-07-19",
			},{
				head: "../static/community/communityimg/24/author.png", //头像
				name: "我想吃1个小孩", //名字
				goods: ["../static/community/communityimg/24/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/24/head/1.png"
				}, {
					head: "../static/community/communityimg/24/head/2.png"
				}, {
					head: "../static/community/communityimg/24/head/3.png"
				}, {
					head: "../static/community/communityimg/24/head/4.png"
				}, {
					head: "../static/community/communityimg/24/head/5.png"
				}, {
					head: "../static/community/communityimg/24/head/6.png"
				}, {
					head: "../static/community/communityimg/24/head/7.png"
				}, {
					head: "../static/community/communityimg/24/head/8.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/24/talk/1.png",
					mes: "赞创新！！！可以有，要看什么木啦！我可能喜欢保持原味！",
					time: "2017-07-19"
				}],
				mes: "木头遇到丙烯",
				time: "2017-07-19",
			},{
				head: "../static/community/communityimg/44/author.png", //头像
				name: "Hooooooray", //名字
				goods: ["../static/community/communityimg/44/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/44/head/1.png"
				}, {
					head: "../static/community/communityimg/44/head/2.png"
				}, {
					head: "../static/community/communityimg/44/head/3.png"
				}, {
					head: "../static/community/communityimg/44/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "很有质感，就是小贵啊",
				time: "2017-07-19",
			},
	]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 12,
		num: 6
	}
}).reply(200, {
	newest: [{
			head: "../static/community/communityimg/53/author.png", //头像
			name: "金爷", //名字
			goods: ["../static/community/communityimg/53/banner/1.png"], //轮播图片
			good: [{
				head: "../static/community/communityimg/53/head/1.png"
			}, {
				head: "../static/community/communityimg/53/head/2.png"
			}, {
				head: "../static/community/communityimg/53/head/3.png"
			}, {
				head: "../static/community/communityimg/53/head/4.png"
			}, {
				head: "../static/community/communityimg/53/head/5.png"
			}, {
				head: "../static/community/communityimg/53/head/6.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [{
				name: "hope.s",
				head: "../static/community/communityimg/52/talk/2.png",
				mes: "晒娃不露痕迹",
				time: "2017-07-19"
			}, ],
			mes: "我只是在拍盘子😂️",
			time: "2017-07-19",
		},{
				head: "../static/community/communityimg/16/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/16/banner/1.png", "../static/community/communityimg/16/banner/2.png", "../static/community/communityimg/16/banner/3.png",
					"../static/community/communityimg/16/banner/4.png", "../static/community/communityimg/16/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/16/head/1.png"
					}, {
						head: "../static/community/communityimg/16/head/2.png"
					}, {
						head: "../static/community/communityimg/16/head/3.png"
					}, {
						head: "../static/community/communityimg/16/head/4.png"
					}, {
						head: "../static/community/communityimg/16/head/5.png"
					},
					{
						head: "../static/community/communityimg/16/head/6.png"
					},
					{
						head: "../static/community/communityimg/16/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "kB5tUM4RAg",
					head: "../static/community/communityimg/16/talk/1.png",
					mes: "两个窗户之间的点缀有链接吗？求链接",
					time: "2017-07-18"
				}, ],
				mes: "用红色的单品点缀客厅，撒上一整年喜气，点滴处可见心思。️",
				time: "2017-07-18",
			},{
				head: "../static/community/communityimg/35/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/35/banner/1.png", "../static/community/communityimg/35/banner/2.png", "../static/community/communityimg/35/banner/3.png",
					"../static/community/communityimg/35/banner/4.png", "../static/community/communityimg/35/banner/5.png", "../static/community/communityimg/35/banner/6.png",
					"../static/community/communityimg/35/banner/7.png", "../static/community/communityimg/35/banner/8.png", "../static/community/communityimg/35/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/35/head/1.png"
				}, {
					head: "../static/community/communityimg/35/head/2.png"
				}, {
					head: "../static/community/communityimg/35/head/3.png"
				}, {
					head: "../static/community/communityimg/35/head/4.png"
				}, {
					head: "../static/community/communityimg/35/head/5.png"
				}, {
					head: "../static/community/communityimg/35/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "通灵",
						head: "../static/community/communityimg/35/talk/1.png",
						mes: "买家秀如此走心，个人感觉比卖家秀还专业，大手一挥买了！😂",
						time: "2017-07-18"

					}
				],
				mes: "#晒单# 对于家居品挑选，我和先生一直以来偏好更有质感本真的家居品。用身体阅读材质带给我们的触感和岁月记忆。纯色亚麻床品在instagram上已经是众网红博主追捧的对象，除了照片带给人的慵懒和优雅感，其实舒适度和强大的功用性才是亚麻床品成为网红单品的最主要原因。",
				time: "2017-07-18",
			},{
				head: "../static/community/communityimg/34/author.png", //头像
				name: "临冬城的二丫", //名字
				goods: ["../static/community/communityimg/34/banner/1.png", "../static/community/communityimg/34/banner/2.png", "../static/community/communityimg/34/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/34/head/1.png"
				}, {
					head: "../static/community/communityimg/34/head/2.png"
				}, {
					head: "../static/community/communityimg/34/head/3.png"
				}, {
					head: "../static/community/communityimg/34/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "正午",
				time: "2017-07-18",
			},{
				head: "../static/community/communityimg/36/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/36/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/36/head/1.png"
				}, {
					head: "../static/community/communityimg/36/head/2.png"
				}, {
					head: "../static/community/communityimg/36/head/3.png"
				}, {
					head: "../static/community/communityimg/36/head/4.png"
				}, {
					head: "../static/community/communityimg/36/head/5.png"
				}, {
					head: "../static/community/communityimg/36/head/6.png"
				}, {
					head: "../static/community/communityimg/36/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Glenn🌱",
					head: "../static/community/communityimg/36/talk/1.png",
					mes: "头上一片草原",
					time: "2017-07-17"
				}],
				mes: "打算挂在床头 绿植装饰画跟白床好配 哈哈",
				time: "2017-07-17",
			},{
				head: "../static/community/communityimg/41/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/41/banner/1.png", "../static/community/communityimg/41/banner/2.png", "../static/community/communityimg/41/banner/3.png",
					"../static/community/communityimg/41/banner/4.png", "../static/community/communityimg/41/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/41/head/1.png"
				}, {
					head: "../static/community/communityimg/41/head/2.png"
				}, {
					head: "../static/community/communityimg/41/head/3.png"
				}, {
					head: "../static/community/communityimg/41/head/4.png"
				}, {
					head: "../static/community/communityimg/41/head/5.png"
				}, {
					head: "../static/community/communityimg/41/head/6.png"
				}, {
					head: "../static/community/communityimg/41/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "为卧室配上一盏质地坚硬的铜灯，仿佛柔软世界里守护的一抹坚强。",
				time: "2017-07-17",
			}]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 18,
		num: 6
	}
}).reply(200, {
	newest: [{
				head: "../static/community/communityimg/36/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/36/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/36/head/1.png"
				}, {
					head: "../static/community/communityimg/36/head/2.png"
				}, {
					head: "../static/community/communityimg/36/head/3.png"
				}, {
					head: "../static/community/communityimg/36/head/4.png"
				}, {
					head: "../static/community/communityimg/36/head/5.png"
				}, {
					head: "../static/community/communityimg/36/head/6.png"
				}, {
					head: "../static/community/communityimg/36/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Glenn🌱",
					head: "../static/community/communityimg/36/talk/1.png",
					mes: "头上一片草原",
					time: "2017-07-17"
				}],
				mes: "打算挂在床头 绿植装饰画跟白床好配 哈哈",
				time: "2017-07-17",
			},{
				head: "../static/community/communityimg/31/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/31/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/31/head/1.png"
				}, {
					head: "../static/community/communityimg/31/head/2.png"
				}, {
					head: "../static/community/communityimg/31/head/3.png"
				}, {
					head: "../static/community/communityimg/31/head/4.png"
				}, {
					head: "../static/community/communityimg/31/head/5.png"
				}, {
					head: "../static/community/communityimg/31/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "河童Coo",
						head: "../static/community/communityimg/31/talk/1.png",
						mes: "【日式水洗棉麻四件套纯色格子床单被套床笠】，点击链接再选择浏览器打开http://c.b1yt.com/h.Nblkv5?cv=oPB100QxXBE&sm=f0b52d ，或复制这条信息￥oPB100QxXBE￥后打开👉手机淘宝👈",
						time: "2017-07-16"

					}
				],
				mes: "无印风的床品",
				time: "2017-07-16",
			},{
				head: "../static/community/communityimg/48/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/48/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/48/head/1.png"
				}, {
					head: "../static/community/communityimg/48/head/2.png"
				}, {
					head: "../static/community/communityimg/48/head/3.png"
				}, {
					head: "../static/community/communityimg/48/head/4.png"
				}, {
					head: "../static/community/communityimg/48/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "点亮生活",
				time: "2017-07-16",
			},{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},{
				head: "../static/community/communityimg/38/author.png", //头像
				name: "BOstudio独立设计师", //名字
				goods: ["../static/community/communityimg/38/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/38/head/1.png"
				}, {
					head: "../static/community/communityimg/38/head/2.png"
				}, {
					head: "../static/community/communityimg/38/head/3.png"
				}, {
					head: "../static/community/communityimg/38/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/38/talk/1.png",
					mes: "我喜欢",
					time: "2017-07-15"
				}],
				mes: "作品样片",
				time: "2017-07-15",
			},{
				head: "../static/community/communityimg/52/author.png", //头像
				name: "zhangjunlin", //名字
				goods: ["../static/community/communityimg/52/banner/1.png", "../static/community/communityimg/52/banner/2.png", "../static/community/communityimg/52/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/52/head/1.png"
				}, {
					head: "../static/community/communityimg/52/head/2.png"
				}, {
					head: "../static/community/communityimg/52/head/3.png"
				}, {
					head: "../static/community/communityimg/52/head/4.png"
				}, {
					head: "../static/community/communityimg/52/head/5.png"
				}, {
					head: "../static/community/communityimg/52/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "蜜拉兔",
					head: "../static/community/communityimg/52/talk/2.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, {
					name: "通灵",
					head: "../static/community/communityimg/52/talk/3.png",
					mes: "你咋不上天呢！😂",
					time: "2017-07-15"
				}],
				mes: "一共买过五款纸巾盒 图一毛毡 内部空间挺大的 大小纸巾都能使用 图二海草编 这是还没有放纸巾的时候拍的 图三大理石花纹 最喜欢的一款 放床头用 还有一款竹制的 竹乡安吉玩的时候买的 以后放茶室会比较适合 第五个就是好物绿色那款啦 还在等待中 想过啦 要是能中就去微博抽奖造福利",
				time: "2017-07-15",
			},]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 24,
		num: 6
	}
}).reply(200, {
	newest: [{
				head: "../static/community/communityimg/30/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/30/banner/1.png", "../static/community/communityimg/30/banner/2.png", "../static/community/communityimg/30/banner/3.png",
					"../static/community/communityimg/30/banner/4.png", "../static/community/communityimg/30/banner/5.png", "../static/community/communityimg/30/banner/6.png",
					"../static/community/communityimg/30/banner/7.png", "../static/community/communityimg/30/banner/8.png", "../static/community/communityimg/30/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/30/head/1.png"
				}, {
					head: "../static/community/communityimg/30/head/2.png"
				}, {
					head: "../static/community/communityimg/30/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "分享一些chic家居小物 生活中的小小仪式感，有时候一个不起眼的小物件，就能让你的幸福感up up up ！ 地垫和水洗牛皮纸收纳袋是原创家居用品，希望你天天都有好心情。 相信用心做的事情总会有人看的见。",
				time: "2017-07-14",
			},{
				head: "../static/community/communityimg/50/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/50/banner/1.png", "../static/community/communityimg/50/banner/2.png", "../static/community/communityimg/50/banner/3.png", "../static/community/communityimg/50/banner/4.png", "../static/community/communityimg/50/banner/5.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/50/head/1.png"
				}, {
					head: "../static/community/communityimg/50/head/2.png"
				}, {
					head: "../static/community/communityimg/50/head/3.png"
				}, {
					head: "../static/community/communityimg/50/head/4.png"
				}, {
					head: "../static/community/communityimg/50/head/5.png"
				}, {
					head: "../static/community/communityimg/50/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "zhangjunlin",
					head: "../static/community/communityimg/50/talk/1.png",
					mes: "急需瘦十斤 哈哈",
					time: "2017-07-13"
				}, {
					name: "hope.s",
					head: "../static/community/communityimg/50/talk/2.png",
					mes: "不敢点，……️",
					time: "2017-07-13"
				}],
				mes: "我家纸巾盒，好物的占据大部分，简洁美观超百搭。点赞的都瘦十斤😂",
				time: "2017-07-13",
			},
	{
				head: "../static/community/communityimg/6/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/6/banner/1.png", "../static/community/communityimg/6/banner/2.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/6/head/1.png"
					}, {
						head: "../static/community/communityimg/6/head/2.png"
					}, {
						head: "../static/community/communityimg/6/head/3.png"
					}, {
						head: "../static/community/communityimg/6/head/4.png"
					}, {
						head: "../static/community/communityimg/6/head/5.png"
					}, {
						head: "../static/community/communityimg/6/head/6.png"
					},
					{
						head: "../static/community/communityimg/6/head/7.png"
					},
					{
						head: "../static/community/communityimg/6/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "满满的少女心💗",
				time: "2017-07-12",
			},{
				head: "../static/community/communityimg/9/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/9/banner/1.png", "../static/community/communityimg/9/banner/2.png",
					"../static/community/communityimg/9/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/9/head/1.png"
					}, {
						head: "../static/community/communityimg/9/head/2.png"
					}, {
						head: "../static/community/communityimg/9/head/3.png"
					}, {
						head: "../static/community/communityimg/9/head/4.png"
					}, {
						head: "../static/community/communityimg/9/head/5.png"
					}, {
						head: "../static/community/communityimg/9/head/6.png"
					},
					{
						head: "../static/community/communityimg/9/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "做花艺师有三年了 一直都喜欢自然花艺 自从开始做挂毯 也一直都不想做常规的 喜欢自由的 喜欢一切自然生长的东西 我也相信 一定有和我志同道合的朋友 和我一样 喜欢着同样喜欢的东西",
				time: "2017-07-12",
			},{
				head: "../static/community/communityimg/39/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/39/banner/1.png", "../static/community/communityimg/39/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/39/head/1.png"
				}, {
					head: "../static/community/communityimg/39/head/2.png"
				}, {
					head: "../static/community/communityimg/39/head/3.png"
				}, {
					head: "../static/community/communityimg/39/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "好物君",
						head: "../static/community/communityimg/39/talk/1.png",
						mes: "有幸认识你❤️",
						time: "2017-07-11"

					}
				],
				mes: "今年的幸事是有缘结交了不少爱生活，爱家的同道人。",
				time: "2017-07-11",
			},{
				head: "../static/community/communityimg/10/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/10/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/10/head/1.png"
				}, {
					head: "../static/community/communityimg/10/head/2.png"
				}, {
					head: "../static/community/communityimg/10/head/3.png"
				}, {
					head: "../static/community/communityimg/10/head/4.png"
				}, {
					head: "../static/community/communityimg/10/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "家的样子",
				time: "2017-07-10",
			}]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 30,
		num: 6
	}
}).reply(200, {
	newest: [{
				head: "../static/community/communityimg/26/author.png", //头像
				name: "DAISYLEE", //名字
				goods: ["../static/community/communityimg/26/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/26/head/1.png"
				}, {
					head: "../static/community/communityimg/26/head/2.png"
				}, {
					head: "../static/community/communityimg/26/head/3.png"
				}, {
					head: "../static/community/communityimg/26/head/4.png"
				}, {
					head: "../static/community/communityimg/26/head/5.png"
				}, {
					head: "../static/community/communityimg/26/head/6.png"
				}, {
					head: "../static/community/communityimg/26/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "T7",
					head: "../static/community/communityimg/26/talk/1.png",
					mes: "求链接",
					time: "2017-07-10"
				}],
				mes: "这种沙发哪里可以买到",
				time: "2017-07-10",
			},{
				head: "../static/community/communityimg/27/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/27/banner/1.png", "../static/community/communityimg/27/banner/2.png", "../static/community/communityimg/27/banner/3.png",
					"../static/community/communityimg/27/banner/4.png", "../static/community/communityimg/27/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/27/head/1.png"
				}, {
					head: "../static/community/communityimg/27/head/2.png"
				}, {
					head: "../static/community/communityimg/27/head/3.png"
				}, {
					head: "../static/community/communityimg/27/head/4.png"
				}, {
					head: "../static/community/communityimg/27/head/5.png"
				}, {
					head: "../static/community/communityimg/27/head/6.png"
				}, {
					head: "../static/community/communityimg/27/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "T7",
						head: "../static/community/communityimg/27/talk/1.png",
						mes: "求链接",
						time: "2017-07-10"

					}
				],
				mes: "Muuto The Dots，秀气而雅致的它，用简约清新的设计从小处改变家的气质。",
				time: "2017-07-10",
			},{
				head: "../static/community/communityimg/40/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/40/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/40/head/1.png"
				}, {
					head: "../static/community/communityimg/40/head/2.png"
				}, {
					head: "../static/community/communityimg/40/head/3.png"
				}, {
					head: "../static/community/communityimg/40/head/4.png"
				}, {
					head: "../static/community/communityimg/40/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "一眼就相中的装饰画 色彩很治愈”",
				time: "2017-07-10",
			},{
				head: "../static/community/communityimg/17/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/17/banner/1.png", "../static/community/communityimg/17/banner/2.png", "../static/community/communityimg/17/banner/3.png",
					"../static/community/communityimg/17/banner/4.png", "../static/community/communityimg/17/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/17/head/1.png"
				}, {
					head: "../static/community/communityimg/17/head/2.png"
				}, {
					head: "../static/community/communityimg/17/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "满满的时光。 有太多的信任和支持。 会一直做下去。 我喜欢挂毯 每次做完 上墙的瞬间 带给我的是满满的暖意 希望把这份温暖也传给你",
				time: "2017-07-09",
			},{
				head: "../static/community/communityimg/46/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/46/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/46/head/1.png"
				}, {
					head: "../static/community/communityimg/46/head/2.png"
				}, {
					head: "../static/community/communityimg/46/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "周五啦周五啦周五啦！！",
				time: "2017-07-09",
			},{
				head: "../static/community/communityimg/49/author.png", //头像
				name: "肉松姑娘", //名字
				goods: ["../static/community/communityimg/49/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/49/head/1.png"
				}, {
					head: "../static/community/communityimg/49/head/2.png"
				}, {
					head: "../static/community/communityimg/49/head/3.png"
				}, {
					head: "../static/community/communityimg/49/head/4.png"
				}, {
					head: "../static/community/communityimg/49/head/5.png"
				}, {
					head: "../static/community/communityimg/49/head/6.png"
				}, {
					head: "../static/community/communityimg/49/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "喜欢哑光质感️",
				time: "2017-07-09",
			}]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 42,
		num: 6
	}
}).reply(200, {
	newest: [{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},{
				head: "../static/community/communityimg/45/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/45/banner/1.png", "../static/community/communityimg/45/banner/2.png", "../static/community/communityimg/45/banner/3.png",
					"../static/community/communityimg/45/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/45/head/1.png"
				}, {
					head: "../static/community/communityimg/45/head/2.png"
				}, {
					head: "../static/community/communityimg/45/head/3.png"
				}, {
					head: "../static/community/communityimg/45/head/4.png"
				}, {
					head: "../static/community/communityimg/45/head/5.png"
				}, {
					head: "../static/community/communityimg/45/head/6.png"
				}, {
					head: "../static/community/communityimg/45/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "我家的纸巾盒都是好物的，三角镂空铁艺纸巾盒和黑白格纹纸巾盒，大爱😘精致到无可挑剔❤️",
				time: "6",
			},{
				head: "../static/community/communityimg/25/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/25/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/25/head/1.png"
				}, {
					head: "../static/community/communityimg/25/head/2.png"
				}, {
					head: "../static/community/communityimg/25/head/3.png"
				}, {
					head: "../static/community/communityimg/25/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/25/talk/1.png",
					mes: "反而有复古的味道",
					time: "2017-07-07"
				}],
				mes: "黑胡桃木色并不会显的家里很暗，反而有种高雅的风范，一直担心的颜色问题根本就不是问题啦！关键在搭配！",
				time: "2017-07-06",
			},{
				head: "../static/community/communityimg/47/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/47/banner/1.png", "../static/community/communityimg/47/banner/2.png",
					"../static/community/communityimg/47/banner/3.png", "../static/community/communityimg/47/banner/4.png", "../static/community/communityimg/47/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/47/head/1.png"
				}, {
					head: "../static/community/communityimg/47/head/2.png"
				}, {
					head: "../static/community/communityimg/47/head/3.png"
				}, {
					head: "../static/community/communityimg/47/head/4.png"
				}, {
					head: "../static/community/communityimg/47/head/5.png"
				}, {
					head: "../static/community/communityimg/47/head/6.png"
				}, {
					head: "../static/community/communityimg/47/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "巧用小物，打造利落且实用的玄关，营造小而美的舒适环境。",
				time: "2017-07-06",
			},{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			},{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			}
			,{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			}]
})
//最新
mock.onGet('/community/newest', {
	params: {
		classes: "newest",
		begin: 48,
		num: 6
	}
}).reply(200, {
	newest: [{
				head: "../static/community/communityimg/22/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/22/banner/1.png", "../static/community/communityimg/22/banner/2.png", "../static/community/communityimg/22/banner/3.png",
					"../static/community/communityimg/22/banner/4.png", "../static/community/communityimg/22/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/22/head/1.png"
					}, {
						head: "../static/community/communityimg/22/head/2.png"
					}, {
						head: "../static/community/communityimg/22/head/3.png"
					}, {
						head: "../static/community/communityimg/22/head/4.png"
					}, {
						head: "../static/community/communityimg/22/head/5.png"
					}, {
						head: "../static/community/communityimg/22/head/6.png"
					},
					{
						head: "../static/community/communityimg/22/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/22/talk/1.png",
					mes: "第一张的台灯太好看",
					time: "2017-07-05"
				}],
				mes: "白底黑字，极简唯美的线性字体，足以爱到不行。",
				time: "2017-07-04",
			},{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			},{
				head: "../static/community/communityimg/42/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/42/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/42/head/1.png"
				}, {
					head: "../static/community/communityimg/42/head/2.png"
				}, {
					head: "../static/community/communityimg/42/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "最近真的很爱它，黑胡桃+黄铜，各种合适",
				time: "2017-07-02",
			},{
				head: "../static/community/communityimg/43/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/43/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/43/head/1.png"
				}, {
					head: "../static/community/communityimg/43/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "NSstyle",
				time: "2017-07-01",
			}]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 0
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},
			{
				head: "../static/community/communityimg/30/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/30/banner/1.png", "../static/community/communityimg/30/banner/2.png", "../static/community/communityimg/30/banner/3.png",
					"../static/community/communityimg/30/banner/4.png", "../static/community/communityimg/30/banner/5.png", "../static/community/communityimg/30/banner/6.png",
					"../static/community/communityimg/30/banner/7.png", "../static/community/communityimg/30/banner/8.png", "../static/community/communityimg/30/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/30/head/1.png"
				}, {
					head: "../static/community/communityimg/30/head/2.png"
				}, {
					head: "../static/community/communityimg/30/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "分享一些chic家居小物 生活中的小小仪式感，有时候一个不起眼的小物件，就能让你的幸福感up up up ！ 地垫和水洗牛皮纸收纳袋是原创家居用品，希望你天天都有好心情。 相信用心做的事情总会有人看的见。",
				time: "2017-07-14",
			},
			{
				head: "../static/community/communityimg/31/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/31/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/31/head/1.png"
				}, {
					head: "../static/community/communityimg/31/head/2.png"
				}, {
					head: "../static/community/communityimg/31/head/3.png"
				}, {
					head: "../static/community/communityimg/31/head/4.png"
				}, {
					head: "../static/community/communityimg/31/head/5.png"
				}, {
					head: "../static/community/communityimg/31/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "河童Coo",
						head: "../static/community/communityimg/31/talk/1.png",
						mes: "【日式水洗棉麻四件套纯色格子床单被套床笠】，点击链接再选择浏览器打开http://c.b1yt.com/h.Nblkv5?cv=oPB100QxXBE&sm=f0b52d ，或复制这条信息￥oPB100QxXBE￥后打开👉手机淘宝👈",
						time: "2017-07-16"

					}
				],
				mes: "无印风的床品",
				time: "2017-07-16",
			},
			{
				head: "../static/community/communityimg/32/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
					"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/32/head/1.png"
				}, {
					head: "../static/community/communityimg/32/head/2.png"
				}, {
					head: "../static/community/communityimg/32/head/3.png"
				}, {
					head: "../static/community/communityimg/32/head/4.png"
				}, {
					head: "../static/community/communityimg/32/head/5.png"
				}, {
					head: "../static/community/communityimg/32/head/6.png"
				}, {
					head: "../static/community/communityimg/32/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
				time: "2017-07-23",
			}
	]
})

//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 4
	}
}).reply(200, {
	decoration: [{
				head: "../static/community/communityimg/9/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/9/banner/1.png", "../static/community/communityimg/9/banner/2.png",
					"../static/community/communityimg/9/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/9/head/1.png"
					}, {
						head: "../static/community/communityimg/9/head/2.png"
					}, {
						head: "../static/community/communityimg/9/head/3.png"
					}, {
						head: "../static/community/communityimg/9/head/4.png"
					}, {
						head: "../static/community/communityimg/9/head/5.png"
					}, {
						head: "../static/community/communityimg/9/head/6.png"
					},
					{
						head: "../static/community/communityimg/9/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "做花艺师有三年了 一直都喜欢自然花艺 自从开始做挂毯 也一直都不想做常规的 喜欢自由的 喜欢一切自然生长的东西 我也相信 一定有和我志同道合的朋友 和我一样 喜欢着同样喜欢的东西",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/10/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/10/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/10/head/1.png"
				}, {
					head: "../static/community/communityimg/10/head/2.png"
				}, {
					head: "../static/community/communityimg/10/head/3.png"
				}, {
					head: "../static/community/communityimg/10/head/4.png"
				}, {
					head: "../static/community/communityimg/10/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "家的样子",
				time: "2017-07-10",
			},
			{
				head: "../static/community/communityimg/11/author.png", //头像
				name: "乌拉爱白果", //名字
				goods: ["../static/community/communityimg/11/banner/1.png", "../static/community/communityimg/11/banner/2.png", "../static/community/communityimg/11/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/11/head/1.png"
				}, {
					head: "../static/community/communityimg/11/head/2.png"
				}, {
					head: "../static/community/communityimg/11/head/3.png"
				}, {
					head: "../static/community/communityimg/11/head/4.png"
				}, {
					head: "../static/community/communityimg/11/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "不想当捕梦网的挂毯不是好隔板+_+ 好物家隔板品质超级让人安心哦，屯了好多……😝",
				time: "2017-06-20",
			},
			{
				head: "../static/community/communityimg/12/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/12/banner/1.png", "../static/community/communityimg/12/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/12/head/1.png"
				}, {
					head: "../static/community/communityimg/12/head/2.png"
				}, {
					head: "../static/community/communityimg/12/head/3.png"
				}, {
					head: "../static/community/communityimg/12/head/4.png"
				}, {
					head: "../static/community/communityimg/12/head/5.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "河童Coo",
					head: "../static/community/communityimg/12/talk/5.png",
					mes: "日式简约纯色夏凉被水洗棉夏被纯棉可水洗空调被】，点击链接再选择浏览器打开http://c.b1yt.com/h.NmuMe1?cv=R6Ph00BsY79&sm=c65b37 ，或复制这条信息￥R6Ph00BsY79￥后打开👉手机淘宝👈",
					time: "2017-07-19"
				}, ],
				mes: "夏天是水绿的️",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 8
	}
}).reply(200, {
	decoration: [{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/22/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/22/banner/1.png", "../static/community/communityimg/22/banner/2.png", "../static/community/communityimg/22/banner/3.png",
					"../static/community/communityimg/22/banner/4.png", "../static/community/communityimg/22/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/22/head/1.png"
					}, {
						head: "../static/community/communityimg/22/head/2.png"
					}, {
						head: "../static/community/communityimg/22/head/3.png"
					}, {
						head: "../static/community/communityimg/22/head/4.png"
					}, {
						head: "../static/community/communityimg/22/head/5.png"
					}, {
						head: "../static/community/communityimg/22/head/6.png"
					},
					{
						head: "../static/community/communityimg/22/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/22/talk/1.png",
					mes: "第一张的台灯太好看",
					time: "2017-07-05"
				}],
				mes: "白底黑字，极简唯美的线性字体，足以爱到不行。",
				time: "2017-07-04",
			},
			{
				head: "../static/community/communityimg/23/author.png", //头像
				name: "b6JbftxbfB", //名字
				goods: ["../static/community/communityimg/23/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/23/head/1.png"
				}, {
					head: "../static/community/communityimg/23/head/2.png"
				}, {
					head: "../static/community/communityimg/23/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "大神们。吸顶花洒是好还是坏",
				time: "2017-07-19",
			},
			{
				head: "../static/community/communityimg/24/author.png", //头像
				name: "我想吃1个小孩", //名字
				goods: ["../static/community/communityimg/24/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/24/head/1.png"
				}, {
					head: "../static/community/communityimg/24/head/2.png"
				}, {
					head: "../static/community/communityimg/24/head/3.png"
				}, {
					head: "../static/community/communityimg/24/head/4.png"
				}, {
					head: "../static/community/communityimg/24/head/5.png"
				}, {
					head: "../static/community/communityimg/24/head/6.png"
				}, {
					head: "../static/community/communityimg/24/head/7.png"
				}, {
					head: "../static/community/communityimg/24/head/8.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/24/talk/1.png",
					mes: "赞创新！！！可以有，要看什么木啦！我可能喜欢保持原味！",
					time: "2017-07-19"
				}],
				mes: "木头遇到丙烯",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 12
	}
}).reply(200, {
	decoration: [{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/14/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/14/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/14/head/1.png"
				}, {
					head: "../static/community/communityimg/14/head/2.png"
				}, {
					head: "../static/community/communityimg/14/head/3.png"
				}, {
					head: "../static/community/communityimg/14/head/4.png"
				}, {
					head: "../static/community/communityimg/14/head/5.png"
				}, {
					head: "../static/community/communityimg/14/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/14/talk/1.png",
					mes: "好看",
					time: "2017-06-11"
				}, {
					name: "Milk-Olivia",
					head: "../static/community/communityimg/14/talk/2.png",
					mes: "冰咖啡，好凉爽",
					time: "2017-06-10"
				}],
				mes: "好饿，睡觉",
				time: "2017-06-10",
			},
			{
				head: "../static/community/communityimg/15/author.png", //头像
				name: "小草青青", //名字
				goods: ["../static/community/communityimg/15/banner/1.png", "../static/community/communityimg/15/banner/2.png", "../static/community/communityimg/15/banner/3.png",
					"../static/community/communityimg/15/banner/4.png", "../static/community/communityimg/15/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/15/head/1.png"
				}, {
					head: "../static/community/communityimg/15/head/2.png"
				}, {
					head: "../static/community/communityimg/15/head/3.png"
				}, {
					head: "../static/community/communityimg/15/head/4.png"
				}, {
					head: "../static/community/communityimg/15/head/5.png"
				}, {
					head: "../static/community/communityimg/15/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "会一直做下去。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/16/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/16/banner/1.png", "../static/community/communityimg/16/banner/2.png", "../static/community/communityimg/16/banner/3.png",
					"../static/community/communityimg/16/banner/4.png", "../static/community/communityimg/16/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/16/head/1.png"
					}, {
						head: "../static/community/communityimg/16/head/2.png"
					}, {
						head: "../static/community/communityimg/16/head/3.png"
					}, {
						head: "../static/community/communityimg/16/head/4.png"
					}, {
						head: "../static/community/communityimg/16/head/5.png"
					},
					{
						head: "../static/community/communityimg/16/head/6.png"
					},
					{
						head: "../static/community/communityimg/16/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "kB5tUM4RAg",
					head: "../static/community/communityimg/16/talk/1.png",
					mes: "两个窗户之间的点缀有链接吗？求链接",
					time: "2017-07-18"
				}, ],
				mes: "用红色的单品点缀客厅，撒上一整年喜气，点滴处可见心思。️",
				time: "2017-07-18",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 16
	}
}).reply(200, {
	decoration: [{
				head: "../static/community/communityimg/5/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/5/banner/1.png", "../static/community/communityimg/5/banner/2.png",
					"../static/community/communityimg/5/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/5/head/1.png"
					}, {
						head: "../static/community/communityimg/5/head/2.png"
					}, {
						head: "../static/community/communityimg/5/head/3.png"
					}, {
						head: "../static/community/communityimg/5/head/4.png"
					}, {
						head: "../static/community/communityimg/5/head/5.png"
					}, {
						head: "../static/community/communityimg/5/head/6.png"
					},
					{
						head: "../static/community/communityimg/5/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "有一位会艺术造诣很高的闺蜜是什么体验？ 当然是灰常灰常开心吖。不仅可以获赠很多装饰画而且自己的艺术品味都提高了八度哈哈哈哈 好物手工地毯五星好评",
				time: "2017-06-18",
			},
			{
				head: "../static/community/communityimg/6/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/6/banner/1.png", "../static/community/communityimg/6/banner/2.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/6/head/1.png"
					}, {
						head: "../static/community/communityimg/6/head/2.png"
					}, {
						head: "../static/community/communityimg/6/head/3.png"
					}, {
						head: "../static/community/communityimg/6/head/4.png"
					}, {
						head: "../static/community/communityimg/6/head/5.png"
					}, {
						head: "../static/community/communityimg/6/head/6.png"
					},
					{
						head: "../static/community/communityimg/6/head/7.png"
					},
					{
						head: "../static/community/communityimg/6/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "满满的少女心💗",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/7/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/7/banner/1.png", "../static/community/communityimg/7/banner/2.png", "../static/community/communityimg/7/banner/3.png",
					"../static/community/communityimg/7/banner/4.png", "../static/community/communityimg/7/banner/5.png",
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/7/head/1.png"
					}, {
						head: "../static/community/communityimg/7/head/2.png"
					}, {
						head: "../static/community/communityimg/7/head/3.png"
					}, {
						head: "../static/community/communityimg/7/head/4.png"
					}, {
						head: "../static/community/communityimg/7/head/5.png"
					}, {
						head: "../static/community/communityimg/7/head/6.png"
					},
					{
						head: "../static/community/communityimg/7/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "热烈的梦境，亲切而柔美的红，伴随夜晚的宁静起伏时分。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/8/author.png", //头像
				name: "李玲文", //名字
				goods: ["../static/community/communityimg/8/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/8/head/1.png"
				}, {
					head: "../static/community/communityimg/8/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "❤️",
				time: "2017-06-21",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 20
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/1/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
					"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/1/head/1.png"
				}, {
					head: "../static/community/communityimg/1/head/2.png"
				}, {
					head: "../static/community/communityimg/1/head/3.png"
				}, {
					head: "../static/community/communityimg/1/head/4.png"
				}, {
					head: "../static/community/communityimg/1/head/5.png"
				}, {
					head: "../static/community/communityimg/1/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
				time: "2017-07-23",
			},
			{
				head: "../static/community/communityimg/2/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
					"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/2/head/1.png"
					}, {
						head: "../static/community/communityimg/2/head/2.png"
					}, {
						head: "../static/community/communityimg/2/head/3.png"
					}, {
						head: "../static/community/communityimg/2/head/4.png"
					}, {
						head: "../static/community/communityimg/2/head/5.png"
					}, {
						head: "../static/community/communityimg/2/head/6.png"
					},
					{
						head: "../static/community/communityimg/2/head/7.png"
					},
					{
						head: "../static/community/communityimg/2/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "北爸",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "椅子不错👍，求介绍",
						time: "2017-07-22",
					}
				],
				mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
				time: "2017-07-22",
			},
			{
				head: "../static/community/communityimg/3/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/3/head/1.png"
					}, {
						head: "../static/community/communityimg/3/head/2.png"
					}, {
						head: "../static/community/communityimg/3/head/3.png"
					}, {
						head: "../static/community/communityimg/3/head/4.png"
					}, {
						head: "../static/community/communityimg/3/head/5.png"
					}, {
						head: "../static/community/communityimg/3/head/6.png"
					},
					{
						head: "../static/community/communityimg/3/head/7.png"
					},
					{
						head: "../static/community/communityimg/3/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "上不上天管你屁事",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
						time: "2017-07-22",
					}
				],
				mes: "减肥~",
				time: "2017-07-21",
			},
			{
				head: "../static/community/communityimg/4/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/4/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/4/head/1.png"
					}, {
						head: "../static/community/communityimg/4/head/2.png"
					}, {
						head: "../static/community/communityimg/4/head/3.png"
					}, {
						head: "../static/community/communityimg/4/head/4.png"
					}, {
						head: "../static/community/communityimg/4/head/5.png"
					}, {
						head: "../static/community/communityimg/4/head/6.png"
					},
					{
						head: "../static/community/communityimg/4/head/7.png"
					},
					{
						head: "../static/community/communityimg/4/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "角落",
				time: "2017-07-20",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 24
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/41/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/41/banner/1.png", "../static/community/communityimg/41/banner/2.png", "../static/community/communityimg/41/banner/3.png",
					"../static/community/communityimg/41/banner/4.png", "../static/community/communityimg/41/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/41/head/1.png"
				}, {
					head: "../static/community/communityimg/41/head/2.png"
				}, {
					head: "../static/community/communityimg/41/head/3.png"
				}, {
					head: "../static/community/communityimg/41/head/4.png"
				}, {
					head: "../static/community/communityimg/41/head/5.png"
				}, {
					head: "../static/community/communityimg/41/head/6.png"
				}, {
					head: "../static/community/communityimg/41/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "为卧室配上一盏质地坚硬的铜灯，仿佛柔软世界里守护的一抹坚强。",
				time: "2017-07-17",
			},
			{
				head: "../static/community/communityimg/42/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/42/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/42/head/1.png"
				}, {
					head: "../static/community/communityimg/42/head/2.png"
				}, {
					head: "../static/community/communityimg/42/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "最近真的很爱它，黑胡桃+黄铜，各种合适",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/43/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/43/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/43/head/1.png"
				}, {
					head: "../static/community/communityimg/43/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "NSstyle",
				time: "2017-07-01",
			},
			{
				head: "../static/community/communityimg/44/author.png", //头像
				name: "Hooooooray", //名字
				goods: ["../static/community/communityimg/44/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/44/head/1.png"
				}, {
					head: "../static/community/communityimg/44/head/2.png"
				}, {
					head: "../static/community/communityimg/44/head/3.png"
				}, {
					head: "../static/community/communityimg/44/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "很有质感，就是小贵啊",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 28
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/49/author.png", //头像
				name: "肉松姑娘", //名字
				goods: ["../static/community/communityimg/49/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/49/head/1.png"
				}, {
					head: "../static/community/communityimg/49/head/2.png"
				}, {
					head: "../static/community/communityimg/49/head/3.png"
				}, {
					head: "../static/community/communityimg/49/head/4.png"
				}, {
					head: "../static/community/communityimg/49/head/5.png"
				}, {
					head: "../static/community/communityimg/49/head/6.png"
				}, {
					head: "../static/community/communityimg/49/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "喜欢哑光质感️",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/50/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/50/banner/1.png", "../static/community/communityimg/50/banner/2.png", "../static/community/communityimg/50/banner/3.png", "../static/community/communityimg/50/banner/4.png", "../static/community/communityimg/50/banner/5.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/50/head/1.png"
				}, {
					head: "../static/community/communityimg/50/head/2.png"
				}, {
					head: "../static/community/communityimg/50/head/3.png"
				}, {
					head: "../static/community/communityimg/50/head/4.png"
				}, {
					head: "../static/community/communityimg/50/head/5.png"
				}, {
					head: "../static/community/communityimg/50/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "zhangjunlin",
					head: "../static/community/communityimg/50/talk/1.png",
					mes: "急需瘦十斤 哈哈",
					time: "2017-07-13"
				}, {
					name: "hope.s",
					head: "../static/community/communityimg/50/talk/2.png",
					mes: "不敢点，……️",
					time: "2017-07-13"
				}],
				mes: "我家纸巾盒，好物的占据大部分，简洁美观超百搭。点赞的都瘦十斤😂",
				time: "2017-07-13",
			},
			{
				head: "../static/community/communityimg/51/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/51/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/51/head/1.png"
				}, {
					head: "../static/community/communityimg/51/head/2.png"
				}, {
					head: "../static/community/communityimg/51/head/3.png"
				}, {
					head: "../static/community/communityimg/51/head/4.png"
				}, {
					head: "../static/community/communityimg/51/head/5.png"
				}, {
					head: "../static/community/communityimg/51/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/51/talk/6.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, ],
				mes: "实木家具搭配灰色沙发 简约不简单 喜欢",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/52/author.png", //头像
				name: "zhangjunlin", //名字
				goods: ["../static/community/communityimg/52/banner/1.png", "../static/community/communityimg/52/banner/2.png", "../static/community/communityimg/52/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/52/head/1.png"
				}, {
					head: "../static/community/communityimg/52/head/2.png"
				}, {
					head: "../static/community/communityimg/52/head/3.png"
				}, {
					head: "../static/community/communityimg/52/head/4.png"
				}, {
					head: "../static/community/communityimg/52/head/5.png"
				}, {
					head: "../static/community/communityimg/52/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "蜜拉兔",
					head: "../static/community/communityimg/52/talk/2.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, {
					name: "通灵",
					head: "../static/community/communityimg/52/talk/3.png",
					mes: "你咋不上天呢！😂",
					time: "2017-07-15"
				}],
				mes: "一共买过五款纸巾盒 图一毛毡 内部空间挺大的 大小纸巾都能使用 图二海草编 这是还没有放纸巾的时候拍的 图三大理石花纹 最喜欢的一款 放床头用 还有一款竹制的 竹乡安吉玩的时候买的 以后放茶室会比较适合 第五个就是好物绿色那款啦 还在等待中 想过啦 要是能中就去微博抽奖造福利",
				time: "2017-07-15",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 32
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},
			{
				head: "../static/community/communityimg/38/author.png", //头像
				name: "BOstudio独立设计师", //名字
				goods: ["../static/community/communityimg/38/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/38/head/1.png"
				}, {
					head: "../static/community/communityimg/38/head/2.png"
				}, {
					head: "../static/community/communityimg/38/head/3.png"
				}, {
					head: "../static/community/communityimg/38/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/38/talk/1.png",
					mes: "我喜欢",
					time: "2017-07-15"
				}],
				mes: "作品样片",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/39/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/39/banner/1.png", "../static/community/communityimg/39/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/39/head/1.png"
				}, {
					head: "../static/community/communityimg/39/head/2.png"
				}, {
					head: "../static/community/communityimg/39/head/3.png"
				}, {
					head: "../static/community/communityimg/39/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "好物君",
						head: "../static/community/communityimg/39/talk/1.png",
						mes: "有幸认识你❤️",
						time: "2017-07-11"

					}
				],
				mes: "今年的幸事是有缘结交了不少爱生活，爱家的同道人。",
				time: "2017-07-11",
			},
			{
				head: "../static/community/communityimg/40/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/40/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/40/head/1.png"
				}, {
					head: "../static/community/communityimg/40/head/2.png"
				}, {
					head: "../static/community/communityimg/40/head/3.png"
				}, {
					head: "../static/community/communityimg/40/head/4.png"
				}, {
					head: "../static/community/communityimg/40/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "一眼就相中的装饰画 色彩很治愈”",
				time: "2017-07-10",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 36
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/17/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/17/banner/1.png", "../static/community/communityimg/17/banner/2.png", "../static/community/communityimg/17/banner/3.png",
					"../static/community/communityimg/17/banner/4.png", "../static/community/communityimg/17/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/17/head/1.png"
				}, {
					head: "../static/community/communityimg/17/head/2.png"
				}, {
					head: "../static/community/communityimg/17/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "满满的时光。 有太多的信任和支持。 会一直做下去。 我喜欢挂毯 每次做完 上墙的瞬间 带给我的是满满的暖意 希望把这份温暖也传给你",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/18/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/18/banner/1.png", "../static/community/communityimg/18/banner/2.png", "../static/community/communityimg/18/banner/3.png",
					"../static/community/communityimg/18/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/18/head/1.png"
				}, {
					head: "../static/community/communityimg/18/head/2.png"
				}, {
					head: "../static/community/communityimg/18/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/18/talk/1.png",
					mes: "这个好有趣吖",
					time: "2017-06-25"
				}],
				mes: "绿色挂毯，既可以当花器，也可以装饰。",
				time: "2017-06-25",
			},
			{
				head: "../static/community/communityimg/19/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/19/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/19/head/1.png"
				}, {
					head: "../static/community/communityimg/19/head/2.png"
				}, {
					head: "../static/community/communityimg/19/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "珍品",
				time: "2017-06-28",
			},
			{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			}
	]
})
//家饰
mock.onGet('/community/decoration', {
	params: {
		classes: "decoration",
		num: 4,
		begin: 40
	}
}).reply(200, {
	decoration: [
	{
				head: "../static/community/communityimg/25/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/25/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/25/head/1.png"
				}, {
					head: "../static/community/communityimg/25/head/2.png"
				}, {
					head: "../static/community/communityimg/25/head/3.png"
				}, {
					head: "../static/community/communityimg/25/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/25/talk/1.png",
					mes: "反而有复古的味道",
					time: "2017-07-07"
				}],
				mes: "黑胡桃木色并不会显的家里很暗，反而有种高雅的风范，一直担心的颜色问题根本就不是问题啦！关键在搭配！",
				time: "2017-07-06",
			},
			{
				head: "../static/community/communityimg/26/author.png", //头像
				name: "DAISYLEE", //名字
				goods: ["../static/community/communityimg/26/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/26/head/1.png"
				}, {
					head: "../static/community/communityimg/26/head/2.png"
				}, {
					head: "../static/community/communityimg/26/head/3.png"
				}, {
					head: "../static/community/communityimg/26/head/4.png"
				}, {
					head: "../static/community/communityimg/26/head/5.png"
				}, {
					head: "../static/community/communityimg/26/head/6.png"
				}, {
					head: "../static/community/communityimg/26/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "T7",
					head: "../static/community/communityimg/26/talk/1.png",
					mes: "求链接",
					time: "2017-07-10"
				}],
				mes: "这种沙发哪里可以买到",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/27/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/27/banner/1.png", "../static/community/communityimg/27/banner/2.png", "../static/community/communityimg/27/banner/3.png",
					"../static/community/communityimg/27/banner/4.png", "../static/community/communityimg/27/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/27/head/1.png"
				}, {
					head: "../static/community/communityimg/27/head/2.png"
				}, {
					head: "../static/community/communityimg/27/head/3.png"
				}, {
					head: "../static/community/communityimg/27/head/4.png"
				}, {
					head: "../static/community/communityimg/27/head/5.png"
				}, {
					head: "../static/community/communityimg/27/head/6.png"
				}, {
					head: "../static/community/communityimg/27/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "T7",
						head: "../static/community/communityimg/27/talk/1.png",
						mes: "求链接",
						time: "2017-07-10"

					}
				],
				mes: "Muuto The Dots，秀气而雅致的它，用简约清新的设计从小处改变家的气质。",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/28/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/28/head/1.png"
				}, {
					head: "../static/community/communityimg/28/head/2.png"
				}, {
					head: "../static/community/communityimg/28/head/3.png"
				}, {
					head: "../static/community/communityimg/28/head/4.png"
				}, {
					head: "../static/community/communityimg/28/head/5.png"
				}, {
					head: "../static/community/communityimg/28/head/6.png"
				}, {
					head: "../static/community/communityimg/28/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "颜小抠",
					head: "../static/community/communityimg/28/talk/1.png",
					mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
					time: "2017-07-22"
				}],
				mes: "夏天，不仅仅是吃这么简单了",
				time: "2017-07-22",
			}
	]
})
//收纳
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 20
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},
			{
				head: "../static/community/communityimg/30/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/30/banner/1.png", "../static/community/communityimg/30/banner/2.png", "../static/community/communityimg/30/banner/3.png",
					"../static/community/communityimg/30/banner/4.png", "../static/community/communityimg/30/banner/5.png", "../static/community/communityimg/30/banner/6.png",
					"../static/community/communityimg/30/banner/7.png", "../static/community/communityimg/30/banner/8.png", "../static/community/communityimg/30/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/30/head/1.png"
				}, {
					head: "../static/community/communityimg/30/head/2.png"
				}, {
					head: "../static/community/communityimg/30/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "分享一些chic家居小物 生活中的小小仪式感，有时候一个不起眼的小物件，就能让你的幸福感up up up ！ 地垫和水洗牛皮纸收纳袋是原创家居用品，希望你天天都有好心情。 相信用心做的事情总会有人看的见。",
				time: "2017-07-14",
			},
			{
				head: "../static/community/communityimg/31/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/31/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/31/head/1.png"
				}, {
					head: "../static/community/communityimg/31/head/2.png"
				}, {
					head: "../static/community/communityimg/31/head/3.png"
				}, {
					head: "../static/community/communityimg/31/head/4.png"
				}, {
					head: "../static/community/communityimg/31/head/5.png"
				}, {
					head: "../static/community/communityimg/31/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "河童Coo",
						head: "../static/community/communityimg/31/talk/1.png",
						mes: "【日式水洗棉麻四件套纯色格子床单被套床笠】，点击链接再选择浏览器打开http://c.b1yt.com/h.Nblkv5?cv=oPB100QxXBE&sm=f0b52d ，或复制这条信息￥oPB100QxXBE￥后打开👉手机淘宝👈",
						time: "2017-07-16"

					}
				],
				mes: "无印风的床品",
				time: "2017-07-16",
			},
			{
				head: "../static/community/communityimg/32/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
					"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/32/head/1.png"
				}, {
					head: "../static/community/communityimg/32/head/2.png"
				}, {
					head: "../static/community/communityimg/32/head/3.png"
				}, {
					head: "../static/community/communityimg/32/head/4.png"
				}, {
					head: "../static/community/communityimg/32/head/5.png"
				}, {
					head: "../static/community/communityimg/32/head/6.png"
				}, {
					head: "../static/community/communityimg/32/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
				time: "2017-07-23",
			}
	]
})

//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 0
	}
}).reply(200, {
	accept: [{
				head: "../static/community/communityimg/9/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/9/banner/1.png", "../static/community/communityimg/9/banner/2.png",
					"../static/community/communityimg/9/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/9/head/1.png"
					}, {
						head: "../static/community/communityimg/9/head/2.png"
					}, {
						head: "../static/community/communityimg/9/head/3.png"
					}, {
						head: "../static/community/communityimg/9/head/4.png"
					}, {
						head: "../static/community/communityimg/9/head/5.png"
					}, {
						head: "../static/community/communityimg/9/head/6.png"
					},
					{
						head: "../static/community/communityimg/9/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "做花艺师有三年了 一直都喜欢自然花艺 自从开始做挂毯 也一直都不想做常规的 喜欢自由的 喜欢一切自然生长的东西 我也相信 一定有和我志同道合的朋友 和我一样 喜欢着同样喜欢的东西",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/10/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/10/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/10/head/1.png"
				}, {
					head: "../static/community/communityimg/10/head/2.png"
				}, {
					head: "../static/community/communityimg/10/head/3.png"
				}, {
					head: "../static/community/communityimg/10/head/4.png"
				}, {
					head: "../static/community/communityimg/10/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "家的样子",
				time: "2017-07-10",
			},
			{
				head: "../static/community/communityimg/11/author.png", //头像
				name: "乌拉爱白果", //名字
				goods: ["../static/community/communityimg/11/banner/1.png", "../static/community/communityimg/11/banner/2.png", "../static/community/communityimg/11/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/11/head/1.png"
				}, {
					head: "../static/community/communityimg/11/head/2.png"
				}, {
					head: "../static/community/communityimg/11/head/3.png"
				}, {
					head: "../static/community/communityimg/11/head/4.png"
				}, {
					head: "../static/community/communityimg/11/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "不想当捕梦网的挂毯不是好隔板+_+ 好物家隔板品质超级让人安心哦，屯了好多……😝",
				time: "2017-06-20",
			},
			{
				head: "../static/community/communityimg/12/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/12/banner/1.png", "../static/community/communityimg/12/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/12/head/1.png"
				}, {
					head: "../static/community/communityimg/12/head/2.png"
				}, {
					head: "../static/community/communityimg/12/head/3.png"
				}, {
					head: "../static/community/communityimg/12/head/4.png"
				}, {
					head: "../static/community/communityimg/12/head/5.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "河童Coo",
					head: "../static/community/communityimg/12/talk/5.png",
					mes: "日式简约纯色夏凉被水洗棉夏被纯棉可水洗空调被】，点击链接再选择浏览器打开http://c.b1yt.com/h.NmuMe1?cv=R6Ph00BsY79&sm=c65b37 ，或复制这条信息￥R6Ph00BsY79￥后打开👉手机淘宝👈",
					time: "2017-07-19"
				}, ],
				mes: "夏天是水绿的️",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 16
	}
}).reply(200, {
	accept: [{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/22/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/22/banner/1.png", "../static/community/communityimg/22/banner/2.png", "../static/community/communityimg/22/banner/3.png",
					"../static/community/communityimg/22/banner/4.png", "../static/community/communityimg/22/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/22/head/1.png"
					}, {
						head: "../static/community/communityimg/22/head/2.png"
					}, {
						head: "../static/community/communityimg/22/head/3.png"
					}, {
						head: "../static/community/communityimg/22/head/4.png"
					}, {
						head: "../static/community/communityimg/22/head/5.png"
					}, {
						head: "../static/community/communityimg/22/head/6.png"
					},
					{
						head: "../static/community/communityimg/22/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/22/talk/1.png",
					mes: "第一张的台灯太好看",
					time: "2017-07-05"
				}],
				mes: "白底黑字，极简唯美的线性字体，足以爱到不行。",
				time: "2017-07-04",
			},
			{
				head: "../static/community/communityimg/23/author.png", //头像
				name: "b6JbftxbfB", //名字
				goods: ["../static/community/communityimg/23/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/23/head/1.png"
				}, {
					head: "../static/community/communityimg/23/head/2.png"
				}, {
					head: "../static/community/communityimg/23/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "大神们。吸顶花洒是好还是坏",
				time: "2017-07-19",
			},
			{
				head: "../static/community/communityimg/24/author.png", //头像
				name: "我想吃1个小孩", //名字
				goods: ["../static/community/communityimg/24/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/24/head/1.png"
				}, {
					head: "../static/community/communityimg/24/head/2.png"
				}, {
					head: "../static/community/communityimg/24/head/3.png"
				}, {
					head: "../static/community/communityimg/24/head/4.png"
				}, {
					head: "../static/community/communityimg/24/head/5.png"
				}, {
					head: "../static/community/communityimg/24/head/6.png"
				}, {
					head: "../static/community/communityimg/24/head/7.png"
				}, {
					head: "../static/community/communityimg/24/head/8.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/24/talk/1.png",
					mes: "赞创新！！！可以有，要看什么木啦！我可能喜欢保持原味！",
					time: "2017-07-19"
				}],
				mes: "木头遇到丙烯",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 44
	}
}).reply(200, {
	accept: [{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/14/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/14/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/14/head/1.png"
				}, {
					head: "../static/community/communityimg/14/head/2.png"
				}, {
					head: "../static/community/communityimg/14/head/3.png"
				}, {
					head: "../static/community/communityimg/14/head/4.png"
				}, {
					head: "../static/community/communityimg/14/head/5.png"
				}, {
					head: "../static/community/communityimg/14/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/14/talk/1.png",
					mes: "好看",
					time: "2017-06-11"
				}, {
					name: "Milk-Olivia",
					head: "../static/community/communityimg/14/talk/2.png",
					mes: "冰咖啡，好凉爽",
					time: "2017-06-10"
				}],
				mes: "好饿，睡觉",
				time: "2017-06-10",
			},
			{
				head: "../static/community/communityimg/15/author.png", //头像
				name: "小草青青", //名字
				goods: ["../static/community/communityimg/15/banner/1.png", "../static/community/communityimg/15/banner/2.png", "../static/community/communityimg/15/banner/3.png",
					"../static/community/communityimg/15/banner/4.png", "../static/community/communityimg/15/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/15/head/1.png"
				}, {
					head: "../static/community/communityimg/15/head/2.png"
				}, {
					head: "../static/community/communityimg/15/head/3.png"
				}, {
					head: "../static/community/communityimg/15/head/4.png"
				}, {
					head: "../static/community/communityimg/15/head/5.png"
				}, {
					head: "../static/community/communityimg/15/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "会一直做下去。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/16/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/16/banner/1.png", "../static/community/communityimg/16/banner/2.png", "../static/community/communityimg/16/banner/3.png",
					"../static/community/communityimg/16/banner/4.png", "../static/community/communityimg/16/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/16/head/1.png"
					}, {
						head: "../static/community/communityimg/16/head/2.png"
					}, {
						head: "../static/community/communityimg/16/head/3.png"
					}, {
						head: "../static/community/communityimg/16/head/4.png"
					}, {
						head: "../static/community/communityimg/16/head/5.png"
					},
					{
						head: "../static/community/communityimg/16/head/6.png"
					},
					{
						head: "../static/community/communityimg/16/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "kB5tUM4RAg",
					head: "../static/community/communityimg/16/talk/1.png",
					mes: "两个窗户之间的点缀有链接吗？求链接",
					time: "2017-07-18"
				}, ],
				mes: "用红色的单品点缀客厅，撒上一整年喜气，点滴处可见心思。️",
				time: "2017-07-18",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 24
	}
}).reply(200, {
	accept: [{
				head: "../static/community/communityimg/5/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/5/banner/1.png", "../static/community/communityimg/5/banner/2.png",
					"../static/community/communityimg/5/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/5/head/1.png"
					}, {
						head: "../static/community/communityimg/5/head/2.png"
					}, {
						head: "../static/community/communityimg/5/head/3.png"
					}, {
						head: "../static/community/communityimg/5/head/4.png"
					}, {
						head: "../static/community/communityimg/5/head/5.png"
					}, {
						head: "../static/community/communityimg/5/head/6.png"
					},
					{
						head: "../static/community/communityimg/5/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "有一位会艺术造诣很高的闺蜜是什么体验？ 当然是灰常灰常开心吖。不仅可以获赠很多装饰画而且自己的艺术品味都提高了八度哈哈哈哈 好物手工地毯五星好评",
				time: "2017-06-18",
			},
			{
				head: "../static/community/communityimg/6/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/6/banner/1.png", "../static/community/communityimg/6/banner/2.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/6/head/1.png"
					}, {
						head: "../static/community/communityimg/6/head/2.png"
					}, {
						head: "../static/community/communityimg/6/head/3.png"
					}, {
						head: "../static/community/communityimg/6/head/4.png"
					}, {
						head: "../static/community/communityimg/6/head/5.png"
					}, {
						head: "../static/community/communityimg/6/head/6.png"
					},
					{
						head: "../static/community/communityimg/6/head/7.png"
					},
					{
						head: "../static/community/communityimg/6/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "满满的少女心💗",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/7/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/7/banner/1.png", "../static/community/communityimg/7/banner/2.png", "../static/community/communityimg/7/banner/3.png",
					"../static/community/communityimg/7/banner/4.png", "../static/community/communityimg/7/banner/5.png",
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/7/head/1.png"
					}, {
						head: "../static/community/communityimg/7/head/2.png"
					}, {
						head: "../static/community/communityimg/7/head/3.png"
					}, {
						head: "../static/community/communityimg/7/head/4.png"
					}, {
						head: "../static/community/communityimg/7/head/5.png"
					}, {
						head: "../static/community/communityimg/7/head/6.png"
					},
					{
						head: "../static/community/communityimg/7/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "热烈的梦境，亲切而柔美的红，伴随夜晚的宁静起伏时分。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/8/author.png", //头像
				name: "李玲文", //名字
				goods: ["../static/community/communityimg/8/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/8/head/1.png"
				}, {
					head: "../static/community/communityimg/8/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "❤️",
				time: "2017-06-21",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 32
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/1/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
					"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/1/head/1.png"
				}, {
					head: "../static/community/communityimg/1/head/2.png"
				}, {
					head: "../static/community/communityimg/1/head/3.png"
				}, {
					head: "../static/community/communityimg/1/head/4.png"
				}, {
					head: "../static/community/communityimg/1/head/5.png"
				}, {
					head: "../static/community/communityimg/1/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
				time: "2017-07-23",
			},
			{
				head: "../static/community/communityimg/2/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
					"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/2/head/1.png"
					}, {
						head: "../static/community/communityimg/2/head/2.png"
					}, {
						head: "../static/community/communityimg/2/head/3.png"
					}, {
						head: "../static/community/communityimg/2/head/4.png"
					}, {
						head: "../static/community/communityimg/2/head/5.png"
					}, {
						head: "../static/community/communityimg/2/head/6.png"
					},
					{
						head: "../static/community/communityimg/2/head/7.png"
					},
					{
						head: "../static/community/communityimg/2/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "北爸",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "椅子不错👍，求介绍",
						time: "2017-07-22",
					}
				],
				mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
				time: "2017-07-22",
			},
			{
				head: "../static/community/communityimg/3/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/3/head/1.png"
					}, {
						head: "../static/community/communityimg/3/head/2.png"
					}, {
						head: "../static/community/communityimg/3/head/3.png"
					}, {
						head: "../static/community/communityimg/3/head/4.png"
					}, {
						head: "../static/community/communityimg/3/head/5.png"
					}, {
						head: "../static/community/communityimg/3/head/6.png"
					},
					{
						head: "../static/community/communityimg/3/head/7.png"
					},
					{
						head: "../static/community/communityimg/3/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "上不上天管你屁事",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
						time: "2017-07-22",
					}
				],
				mes: "减肥~",
				time: "2017-07-21",
			},
			{
				head: "../static/community/communityimg/4/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/4/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/4/head/1.png"
					}, {
						head: "../static/community/communityimg/4/head/2.png"
					}, {
						head: "../static/community/communityimg/4/head/3.png"
					}, {
						head: "../static/community/communityimg/4/head/4.png"
					}, {
						head: "../static/community/communityimg/4/head/5.png"
					}, {
						head: "../static/community/communityimg/4/head/6.png"
					},
					{
						head: "../static/community/communityimg/4/head/7.png"
					},
					{
						head: "../static/community/communityimg/4/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "角落",
				time: "2017-07-20",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 40
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/41/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/41/banner/1.png", "../static/community/communityimg/41/banner/2.png", "../static/community/communityimg/41/banner/3.png",
					"../static/community/communityimg/41/banner/4.png", "../static/community/communityimg/41/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/41/head/1.png"
				}, {
					head: "../static/community/communityimg/41/head/2.png"
				}, {
					head: "../static/community/communityimg/41/head/3.png"
				}, {
					head: "../static/community/communityimg/41/head/4.png"
				}, {
					head: "../static/community/communityimg/41/head/5.png"
				}, {
					head: "../static/community/communityimg/41/head/6.png"
				}, {
					head: "../static/community/communityimg/41/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "为卧室配上一盏质地坚硬的铜灯，仿佛柔软世界里守护的一抹坚强。",
				time: "2017-07-17",
			},
			{
				head: "../static/community/communityimg/42/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/42/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/42/head/1.png"
				}, {
					head: "../static/community/communityimg/42/head/2.png"
				}, {
					head: "../static/community/communityimg/42/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "最近真的很爱它，黑胡桃+黄铜，各种合适",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/43/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/43/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/43/head/1.png"
				}, {
					head: "../static/community/communityimg/43/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "NSstyle",
				time: "2017-07-01",
			},
			{
				head: "../static/community/communityimg/44/author.png", //头像
				name: "Hooooooray", //名字
				goods: ["../static/community/communityimg/44/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/44/head/1.png"
				}, {
					head: "../static/community/communityimg/44/head/2.png"
				}, {
					head: "../static/community/communityimg/44/head/3.png"
				}, {
					head: "../static/community/communityimg/44/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "很有质感，就是小贵啊",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 12
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/49/author.png", //头像
				name: "肉松姑娘", //名字
				goods: ["../static/community/communityimg/49/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/49/head/1.png"
				}, {
					head: "../static/community/communityimg/49/head/2.png"
				}, {
					head: "../static/community/communityimg/49/head/3.png"
				}, {
					head: "../static/community/communityimg/49/head/4.png"
				}, {
					head: "../static/community/communityimg/49/head/5.png"
				}, {
					head: "../static/community/communityimg/49/head/6.png"
				}, {
					head: "../static/community/communityimg/49/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "喜欢哑光质感️",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/50/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/50/banner/1.png", "../static/community/communityimg/50/banner/2.png", "../static/community/communityimg/50/banner/3.png", "../static/community/communityimg/50/banner/4.png", "../static/community/communityimg/50/banner/5.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/50/head/1.png"
				}, {
					head: "../static/community/communityimg/50/head/2.png"
				}, {
					head: "../static/community/communityimg/50/head/3.png"
				}, {
					head: "../static/community/communityimg/50/head/4.png"
				}, {
					head: "../static/community/communityimg/50/head/5.png"
				}, {
					head: "../static/community/communityimg/50/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "zhangjunlin",
					head: "../static/community/communityimg/50/talk/1.png",
					mes: "急需瘦十斤 哈哈",
					time: "2017-07-13"
				}, {
					name: "hope.s",
					head: "../static/community/communityimg/50/talk/2.png",
					mes: "不敢点，……️",
					time: "2017-07-13"
				}],
				mes: "我家纸巾盒，好物的占据大部分，简洁美观超百搭。点赞的都瘦十斤😂",
				time: "2017-07-13",
			},
			{
				head: "../static/community/communityimg/51/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/51/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/51/head/1.png"
				}, {
					head: "../static/community/communityimg/51/head/2.png"
				}, {
					head: "../static/community/communityimg/51/head/3.png"
				}, {
					head: "../static/community/communityimg/51/head/4.png"
				}, {
					head: "../static/community/communityimg/51/head/5.png"
				}, {
					head: "../static/community/communityimg/51/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/51/talk/6.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, ],
				mes: "实木家具搭配灰色沙发 简约不简单 喜欢",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/52/author.png", //头像
				name: "zhangjunlin", //名字
				goods: ["../static/community/communityimg/52/banner/1.png", "../static/community/communityimg/52/banner/2.png", "../static/community/communityimg/52/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/52/head/1.png"
				}, {
					head: "../static/community/communityimg/52/head/2.png"
				}, {
					head: "../static/community/communityimg/52/head/3.png"
				}, {
					head: "../static/community/communityimg/52/head/4.png"
				}, {
					head: "../static/community/communityimg/52/head/5.png"
				}, {
					head: "../static/community/communityimg/52/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "蜜拉兔",
					head: "../static/community/communityimg/52/talk/2.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, {
					name: "通灵",
					head: "../static/community/communityimg/52/talk/3.png",
					mes: "你咋不上天呢！😂",
					time: "2017-07-15"
				}],
				mes: "一共买过五款纸巾盒 图一毛毡 内部空间挺大的 大小纸巾都能使用 图二海草编 这是还没有放纸巾的时候拍的 图三大理石花纹 最喜欢的一款 放床头用 还有一款竹制的 竹乡安吉玩的时候买的 以后放茶室会比较适合 第五个就是好物绿色那款啦 还在等待中 想过啦 要是能中就去微博抽奖造福利",
				time: "2017-07-15",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 8
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},
			{
				head: "../static/community/communityimg/38/author.png", //头像
				name: "BOstudio独立设计师", //名字
				goods: ["../static/community/communityimg/38/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/38/head/1.png"
				}, {
					head: "../static/community/communityimg/38/head/2.png"
				}, {
					head: "../static/community/communityimg/38/head/3.png"
				}, {
					head: "../static/community/communityimg/38/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/38/talk/1.png",
					mes: "我喜欢",
					time: "2017-07-15"
				}],
				mes: "作品样片",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/39/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/39/banner/1.png", "../static/community/communityimg/39/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/39/head/1.png"
				}, {
					head: "../static/community/communityimg/39/head/2.png"
				}, {
					head: "../static/community/communityimg/39/head/3.png"
				}, {
					head: "../static/community/communityimg/39/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "好物君",
						head: "../static/community/communityimg/39/talk/1.png",
						mes: "有幸认识你❤️",
						time: "2017-07-11"

					}
				],
				mes: "今年的幸事是有缘结交了不少爱生活，爱家的同道人。",
				time: "2017-07-11",
			},
			{
				head: "../static/community/communityimg/40/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/40/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/40/head/1.png"
				}, {
					head: "../static/community/communityimg/40/head/2.png"
				}, {
					head: "../static/community/communityimg/40/head/3.png"
				}, {
					head: "../static/community/communityimg/40/head/4.png"
				}, {
					head: "../static/community/communityimg/40/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "一眼就相中的装饰画 色彩很治愈”",
				time: "2017-07-10",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 4
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/17/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/17/banner/1.png", "../static/community/communityimg/17/banner/2.png", "../static/community/communityimg/17/banner/3.png",
					"../static/community/communityimg/17/banner/4.png", "../static/community/communityimg/17/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/17/head/1.png"
				}, {
					head: "../static/community/communityimg/17/head/2.png"
				}, {
					head: "../static/community/communityimg/17/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "满满的时光。 有太多的信任和支持。 会一直做下去。 我喜欢挂毯 每次做完 上墙的瞬间 带给我的是满满的暖意 希望把这份温暖也传给你",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/18/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/18/banner/1.png", "../static/community/communityimg/18/banner/2.png", "../static/community/communityimg/18/banner/3.png",
					"../static/community/communityimg/18/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/18/head/1.png"
				}, {
					head: "../static/community/communityimg/18/head/2.png"
				}, {
					head: "../static/community/communityimg/18/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/18/talk/1.png",
					mes: "这个好有趣吖",
					time: "2017-06-25"
				}],
				mes: "绿色挂毯，既可以当花器，也可以装饰。",
				time: "2017-06-25",
			},
			{
				head: "../static/community/communityimg/19/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/19/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/19/head/1.png"
				}, {
					head: "../static/community/communityimg/19/head/2.png"
				}, {
					head: "../static/community/communityimg/19/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "珍品",
				time: "2017-06-28",
			},
			{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			}
	]
})
//家饰
mock.onGet('/community/accept', {
	params: {
		classes: "accept",
		num: 4,
		begin: 28
	}
}).reply(200, {
	accept: [
	{
				head: "../static/community/communityimg/25/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/25/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/25/head/1.png"
				}, {
					head: "../static/community/communityimg/25/head/2.png"
				}, {
					head: "../static/community/communityimg/25/head/3.png"
				}, {
					head: "../static/community/communityimg/25/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/25/talk/1.png",
					mes: "反而有复古的味道",
					time: "2017-07-07"
				}],
				mes: "黑胡桃木色并不会显的家里很暗，反而有种高雅的风范，一直担心的颜色问题根本就不是问题啦！关键在搭配！",
				time: "2017-07-06",
			},
			{
				head: "../static/community/communityimg/26/author.png", //头像
				name: "DAISYLEE", //名字
				goods: ["../static/community/communityimg/26/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/26/head/1.png"
				}, {
					head: "../static/community/communityimg/26/head/2.png"
				}, {
					head: "../static/community/communityimg/26/head/3.png"
				}, {
					head: "../static/community/communityimg/26/head/4.png"
				}, {
					head: "../static/community/communityimg/26/head/5.png"
				}, {
					head: "../static/community/communityimg/26/head/6.png"
				}, {
					head: "../static/community/communityimg/26/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "T7",
					head: "../static/community/communityimg/26/talk/1.png",
					mes: "求链接",
					time: "2017-07-10"
				}],
				mes: "这种沙发哪里可以买到",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/27/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/27/banner/1.png", "../static/community/communityimg/27/banner/2.png", "../static/community/communityimg/27/banner/3.png",
					"../static/community/communityimg/27/banner/4.png", "../static/community/communityimg/27/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/27/head/1.png"
				}, {
					head: "../static/community/communityimg/27/head/2.png"
				}, {
					head: "../static/community/communityimg/27/head/3.png"
				}, {
					head: "../static/community/communityimg/27/head/4.png"
				}, {
					head: "../static/community/communityimg/27/head/5.png"
				}, {
					head: "../static/community/communityimg/27/head/6.png"
				}, {
					head: "../static/community/communityimg/27/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "T7",
						head: "../static/community/communityimg/27/talk/1.png",
						mes: "求链接",
						time: "2017-07-10"

					}
				],
				mes: "Muuto The Dots，秀气而雅致的它，用简约清新的设计从小处改变家的气质。",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/28/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/28/head/1.png"
				}, {
					head: "../static/community/communityimg/28/head/2.png"
				}, {
					head: "../static/community/communityimg/28/head/3.png"
				}, {
					head: "../static/community/communityimg/28/head/4.png"
				}, {
					head: "../static/community/communityimg/28/head/5.png"
				}, {
					head: "../static/community/communityimg/28/head/6.png"
				}, {
					head: "../static/community/communityimg/28/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "颜小抠",
					head: "../static/community/communityimg/28/talk/1.png",
					mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
					time: "2017-07-22"
				}],
				mes: "夏天，不仅仅是吃这么简单了",
				time: "2017-07-22",
			}
	]
})
//餐厨
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 16
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},
			{
				head: "../static/community/communityimg/30/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/30/banner/1.png", "../static/community/communityimg/30/banner/2.png", "../static/community/communityimg/30/banner/3.png",
					"../static/community/communityimg/30/banner/4.png", "../static/community/communityimg/30/banner/5.png", "../static/community/communityimg/30/banner/6.png",
					"../static/community/communityimg/30/banner/7.png", "../static/community/communityimg/30/banner/8.png", "../static/community/communityimg/30/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/30/head/1.png"
				}, {
					head: "../static/community/communityimg/30/head/2.png"
				}, {
					head: "../static/community/communityimg/30/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "分享一些chic家居小物 生活中的小小仪式感，有时候一个不起眼的小物件，就能让你的幸福感up up up ！ 地垫和水洗牛皮纸收纳袋是原创家居用品，希望你天天都有好心情。 相信用心做的事情总会有人看的见。",
				time: "2017-07-14",
			},
			{
				head: "../static/community/communityimg/31/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/31/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/31/head/1.png"
				}, {
					head: "../static/community/communityimg/31/head/2.png"
				}, {
					head: "../static/community/communityimg/31/head/3.png"
				}, {
					head: "../static/community/communityimg/31/head/4.png"
				}, {
					head: "../static/community/communityimg/31/head/5.png"
				}, {
					head: "../static/community/communityimg/31/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "河童Coo",
						head: "../static/community/communityimg/31/talk/1.png",
						mes: "【日式水洗棉麻四件套纯色格子床单被套床笠】，点击链接再选择浏览器打开http://c.b1yt.com/h.Nblkv5?cv=oPB100QxXBE&sm=f0b52d ，或复制这条信息￥oPB100QxXBE￥后打开👉手机淘宝👈",
						time: "2017-07-16"

					}
				],
				mes: "无印风的床品",
				time: "2017-07-16",
			},
			{
				head: "../static/community/communityimg/32/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
					"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/32/head/1.png"
				}, {
					head: "../static/community/communityimg/32/head/2.png"
				}, {
					head: "../static/community/communityimg/32/head/3.png"
				}, {
					head: "../static/community/communityimg/32/head/4.png"
				}, {
					head: "../static/community/communityimg/32/head/5.png"
				}, {
					head: "../static/community/communityimg/32/head/6.png"
				}, {
					head: "../static/community/communityimg/32/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
				time: "2017-07-23",
			}
	]
})

//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 20
	}
}).reply(200, {
	meal: [{
				head: "../static/community/communityimg/9/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/9/banner/1.png", "../static/community/communityimg/9/banner/2.png",
					"../static/community/communityimg/9/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/9/head/1.png"
					}, {
						head: "../static/community/communityimg/9/head/2.png"
					}, {
						head: "../static/community/communityimg/9/head/3.png"
					}, {
						head: "../static/community/communityimg/9/head/4.png"
					}, {
						head: "../static/community/communityimg/9/head/5.png"
					}, {
						head: "../static/community/communityimg/9/head/6.png"
					},
					{
						head: "../static/community/communityimg/9/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "做花艺师有三年了 一直都喜欢自然花艺 自从开始做挂毯 也一直都不想做常规的 喜欢自由的 喜欢一切自然生长的东西 我也相信 一定有和我志同道合的朋友 和我一样 喜欢着同样喜欢的东西",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/10/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/10/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/10/head/1.png"
				}, {
					head: "../static/community/communityimg/10/head/2.png"
				}, {
					head: "../static/community/communityimg/10/head/3.png"
				}, {
					head: "../static/community/communityimg/10/head/4.png"
				}, {
					head: "../static/community/communityimg/10/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "家的样子",
				time: "2017-07-10",
			},
			{
				head: "../static/community/communityimg/11/author.png", //头像
				name: "乌拉爱白果", //名字
				goods: ["../static/community/communityimg/11/banner/1.png", "../static/community/communityimg/11/banner/2.png", "../static/community/communityimg/11/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/11/head/1.png"
				}, {
					head: "../static/community/communityimg/11/head/2.png"
				}, {
					head: "../static/community/communityimg/11/head/3.png"
				}, {
					head: "../static/community/communityimg/11/head/4.png"
				}, {
					head: "../static/community/communityimg/11/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "不想当捕梦网的挂毯不是好隔板+_+ 好物家隔板品质超级让人安心哦，屯了好多……😝",
				time: "2017-06-20",
			},
			{
				head: "../static/community/communityimg/12/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/12/banner/1.png", "../static/community/communityimg/12/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/12/head/1.png"
				}, {
					head: "../static/community/communityimg/12/head/2.png"
				}, {
					head: "../static/community/communityimg/12/head/3.png"
				}, {
					head: "../static/community/communityimg/12/head/4.png"
				}, {
					head: "../static/community/communityimg/12/head/5.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "河童Coo",
					head: "../static/community/communityimg/12/talk/5.png",
					mes: "日式简约纯色夏凉被水洗棉夏被纯棉可水洗空调被】，点击链接再选择浏览器打开http://c.b1yt.com/h.NmuMe1?cv=R6Ph00BsY79&sm=c65b37 ，或复制这条信息￥R6Ph00BsY79￥后打开👉手机淘宝👈",
					time: "2017-07-19"
				}, ],
				mes: "夏天是水绿的️",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 36
	}
}).reply(200, {
	meal: [{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/22/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/22/banner/1.png", "../static/community/communityimg/22/banner/2.png", "../static/community/communityimg/22/banner/3.png",
					"../static/community/communityimg/22/banner/4.png", "../static/community/communityimg/22/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/22/head/1.png"
					}, {
						head: "../static/community/communityimg/22/head/2.png"
					}, {
						head: "../static/community/communityimg/22/head/3.png"
					}, {
						head: "../static/community/communityimg/22/head/4.png"
					}, {
						head: "../static/community/communityimg/22/head/5.png"
					}, {
						head: "../static/community/communityimg/22/head/6.png"
					},
					{
						head: "../static/community/communityimg/22/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/22/talk/1.png",
					mes: "第一张的台灯太好看",
					time: "2017-07-05"
				}],
				mes: "白底黑字，极简唯美的线性字体，足以爱到不行。",
				time: "2017-07-04",
			},
			{
				head: "../static/community/communityimg/23/author.png", //头像
				name: "b6JbftxbfB", //名字
				goods: ["../static/community/communityimg/23/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/23/head/1.png"
				}, {
					head: "../static/community/communityimg/23/head/2.png"
				}, {
					head: "../static/community/communityimg/23/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "大神们。吸顶花洒是好还是坏",
				time: "2017-07-19",
			},
			{
				head: "../static/community/communityimg/24/author.png", //头像
				name: "我想吃1个小孩", //名字
				goods: ["../static/community/communityimg/24/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/24/head/1.png"
				}, {
					head: "../static/community/communityimg/24/head/2.png"
				}, {
					head: "../static/community/communityimg/24/head/3.png"
				}, {
					head: "../static/community/communityimg/24/head/4.png"
				}, {
					head: "../static/community/communityimg/24/head/5.png"
				}, {
					head: "../static/community/communityimg/24/head/6.png"
				}, {
					head: "../static/community/communityimg/24/head/7.png"
				}, {
					head: "../static/community/communityimg/24/head/8.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/24/talk/1.png",
					mes: "赞创新！！！可以有，要看什么木啦！我可能喜欢保持原味！",
					time: "2017-07-19"
				}],
				mes: "木头遇到丙烯",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 32
	}
}).reply(200, {
	meal: [{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/14/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/14/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/14/head/1.png"
				}, {
					head: "../static/community/communityimg/14/head/2.png"
				}, {
					head: "../static/community/communityimg/14/head/3.png"
				}, {
					head: "../static/community/communityimg/14/head/4.png"
				}, {
					head: "../static/community/communityimg/14/head/5.png"
				}, {
					head: "../static/community/communityimg/14/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/14/talk/1.png",
					mes: "好看",
					time: "2017-06-11"
				}, {
					name: "Milk-Olivia",
					head: "../static/community/communityimg/14/talk/2.png",
					mes: "冰咖啡，好凉爽",
					time: "2017-06-10"
				}],
				mes: "好饿，睡觉",
				time: "2017-06-10",
			},
			{
				head: "../static/community/communityimg/15/author.png", //头像
				name: "小草青青", //名字
				goods: ["../static/community/communityimg/15/banner/1.png", "../static/community/communityimg/15/banner/2.png", "../static/community/communityimg/15/banner/3.png",
					"../static/community/communityimg/15/banner/4.png", "../static/community/communityimg/15/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/15/head/1.png"
				}, {
					head: "../static/community/communityimg/15/head/2.png"
				}, {
					head: "../static/community/communityimg/15/head/3.png"
				}, {
					head: "../static/community/communityimg/15/head/4.png"
				}, {
					head: "../static/community/communityimg/15/head/5.png"
				}, {
					head: "../static/community/communityimg/15/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "会一直做下去。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/16/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/16/banner/1.png", "../static/community/communityimg/16/banner/2.png", "../static/community/communityimg/16/banner/3.png",
					"../static/community/communityimg/16/banner/4.png", "../static/community/communityimg/16/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/16/head/1.png"
					}, {
						head: "../static/community/communityimg/16/head/2.png"
					}, {
						head: "../static/community/communityimg/16/head/3.png"
					}, {
						head: "../static/community/communityimg/16/head/4.png"
					}, {
						head: "../static/community/communityimg/16/head/5.png"
					},
					{
						head: "../static/community/communityimg/16/head/6.png"
					},
					{
						head: "../static/community/communityimg/16/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "kB5tUM4RAg",
					head: "../static/community/communityimg/16/talk/1.png",
					mes: "两个窗户之间的点缀有链接吗？求链接",
					time: "2017-07-18"
				}, ],
				mes: "用红色的单品点缀客厅，撒上一整年喜气，点滴处可见心思。️",
				time: "2017-07-18",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 44
	}
}).reply(200, {
	meal: [{
				head: "../static/community/communityimg/5/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/5/banner/1.png", "../static/community/communityimg/5/banner/2.png",
					"../static/community/communityimg/5/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/5/head/1.png"
					}, {
						head: "../static/community/communityimg/5/head/2.png"
					}, {
						head: "../static/community/communityimg/5/head/3.png"
					}, {
						head: "../static/community/communityimg/5/head/4.png"
					}, {
						head: "../static/community/communityimg/5/head/5.png"
					}, {
						head: "../static/community/communityimg/5/head/6.png"
					},
					{
						head: "../static/community/communityimg/5/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "有一位会艺术造诣很高的闺蜜是什么体验？ 当然是灰常灰常开心吖。不仅可以获赠很多装饰画而且自己的艺术品味都提高了八度哈哈哈哈 好物手工地毯五星好评",
				time: "2017-06-18",
			},
			{
				head: "../static/community/communityimg/6/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/6/banner/1.png", "../static/community/communityimg/6/banner/2.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/6/head/1.png"
					}, {
						head: "../static/community/communityimg/6/head/2.png"
					}, {
						head: "../static/community/communityimg/6/head/3.png"
					}, {
						head: "../static/community/communityimg/6/head/4.png"
					}, {
						head: "../static/community/communityimg/6/head/5.png"
					}, {
						head: "../static/community/communityimg/6/head/6.png"
					},
					{
						head: "../static/community/communityimg/6/head/7.png"
					},
					{
						head: "../static/community/communityimg/6/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "满满的少女心💗",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/7/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/7/banner/1.png", "../static/community/communityimg/7/banner/2.png", "../static/community/communityimg/7/banner/3.png",
					"../static/community/communityimg/7/banner/4.png", "../static/community/communityimg/7/banner/5.png",
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/7/head/1.png"
					}, {
						head: "../static/community/communityimg/7/head/2.png"
					}, {
						head: "../static/community/communityimg/7/head/3.png"
					}, {
						head: "../static/community/communityimg/7/head/4.png"
					}, {
						head: "../static/community/communityimg/7/head/5.png"
					}, {
						head: "../static/community/communityimg/7/head/6.png"
					},
					{
						head: "../static/community/communityimg/7/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "热烈的梦境，亲切而柔美的红，伴随夜晚的宁静起伏时分。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/8/author.png", //头像
				name: "李玲文", //名字
				goods: ["../static/community/communityimg/8/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/8/head/1.png"
				}, {
					head: "../static/community/communityimg/8/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "❤️",
				time: "2017-06-21",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 8
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/1/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
					"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/1/head/1.png"
				}, {
					head: "../static/community/communityimg/1/head/2.png"
				}, {
					head: "../static/community/communityimg/1/head/3.png"
				}, {
					head: "../static/community/communityimg/1/head/4.png"
				}, {
					head: "../static/community/communityimg/1/head/5.png"
				}, {
					head: "../static/community/communityimg/1/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
				time: "2017-07-23",
			},
			{
				head: "../static/community/communityimg/2/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
					"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/2/head/1.png"
					}, {
						head: "../static/community/communityimg/2/head/2.png"
					}, {
						head: "../static/community/communityimg/2/head/3.png"
					}, {
						head: "../static/community/communityimg/2/head/4.png"
					}, {
						head: "../static/community/communityimg/2/head/5.png"
					}, {
						head: "../static/community/communityimg/2/head/6.png"
					},
					{
						head: "../static/community/communityimg/2/head/7.png"
					},
					{
						head: "../static/community/communityimg/2/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "北爸",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "椅子不错👍，求介绍",
						time: "2017-07-22",
					}
				],
				mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
				time: "2017-07-22",
			},
			{
				head: "../static/community/communityimg/3/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/3/head/1.png"
					}, {
						head: "../static/community/communityimg/3/head/2.png"
					}, {
						head: "../static/community/communityimg/3/head/3.png"
					}, {
						head: "../static/community/communityimg/3/head/4.png"
					}, {
						head: "../static/community/communityimg/3/head/5.png"
					}, {
						head: "../static/community/communityimg/3/head/6.png"
					},
					{
						head: "../static/community/communityimg/3/head/7.png"
					},
					{
						head: "../static/community/communityimg/3/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "上不上天管你屁事",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
						time: "2017-07-22",
					}
				],
				mes: "减肥~",
				time: "2017-07-21",
			},
			{
				head: "../static/community/communityimg/4/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/4/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/4/head/1.png"
					}, {
						head: "../static/community/communityimg/4/head/2.png"
					}, {
						head: "../static/community/communityimg/4/head/3.png"
					}, {
						head: "../static/community/communityimg/4/head/4.png"
					}, {
						head: "../static/community/communityimg/4/head/5.png"
					}, {
						head: "../static/community/communityimg/4/head/6.png"
					},
					{
						head: "../static/community/communityimg/4/head/7.png"
					},
					{
						head: "../static/community/communityimg/4/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "角落",
				time: "2017-07-20",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 40
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/41/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/41/banner/1.png", "../static/community/communityimg/41/banner/2.png", "../static/community/communityimg/41/banner/3.png",
					"../static/community/communityimg/41/banner/4.png", "../static/community/communityimg/41/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/41/head/1.png"
				}, {
					head: "../static/community/communityimg/41/head/2.png"
				}, {
					head: "../static/community/communityimg/41/head/3.png"
				}, {
					head: "../static/community/communityimg/41/head/4.png"
				}, {
					head: "../static/community/communityimg/41/head/5.png"
				}, {
					head: "../static/community/communityimg/41/head/6.png"
				}, {
					head: "../static/community/communityimg/41/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "为卧室配上一盏质地坚硬的铜灯，仿佛柔软世界里守护的一抹坚强。",
				time: "2017-07-17",
			},
			{
				head: "../static/community/communityimg/42/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/42/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/42/head/1.png"
				}, {
					head: "../static/community/communityimg/42/head/2.png"
				}, {
					head: "../static/community/communityimg/42/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "最近真的很爱它，黑胡桃+黄铜，各种合适",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/43/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/43/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/43/head/1.png"
				}, {
					head: "../static/community/communityimg/43/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "NSstyle",
				time: "2017-07-01",
			},
			{
				head: "../static/community/communityimg/44/author.png", //头像
				name: "Hooooooray", //名字
				goods: ["../static/community/communityimg/44/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/44/head/1.png"
				}, {
					head: "../static/community/communityimg/44/head/2.png"
				}, {
					head: "../static/community/communityimg/44/head/3.png"
				}, {
					head: "../static/community/communityimg/44/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "很有质感，就是小贵啊",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 12
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/49/author.png", //头像
				name: "肉松姑娘", //名字
				goods: ["../static/community/communityimg/49/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/49/head/1.png"
				}, {
					head: "../static/community/communityimg/49/head/2.png"
				}, {
					head: "../static/community/communityimg/49/head/3.png"
				}, {
					head: "../static/community/communityimg/49/head/4.png"
				}, {
					head: "../static/community/communityimg/49/head/5.png"
				}, {
					head: "../static/community/communityimg/49/head/6.png"
				}, {
					head: "../static/community/communityimg/49/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "喜欢哑光质感️",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/50/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/50/banner/1.png", "../static/community/communityimg/50/banner/2.png", "../static/community/communityimg/50/banner/3.png", "../static/community/communityimg/50/banner/4.png", "../static/community/communityimg/50/banner/5.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/50/head/1.png"
				}, {
					head: "../static/community/communityimg/50/head/2.png"
				}, {
					head: "../static/community/communityimg/50/head/3.png"
				}, {
					head: "../static/community/communityimg/50/head/4.png"
				}, {
					head: "../static/community/communityimg/50/head/5.png"
				}, {
					head: "../static/community/communityimg/50/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "zhangjunlin",
					head: "../static/community/communityimg/50/talk/1.png",
					mes: "急需瘦十斤 哈哈",
					time: "2017-07-13"
				}, {
					name: "hope.s",
					head: "../static/community/communityimg/50/talk/2.png",
					mes: "不敢点，……️",
					time: "2017-07-13"
				}],
				mes: "我家纸巾盒，好物的占据大部分，简洁美观超百搭。点赞的都瘦十斤😂",
				time: "2017-07-13",
			},
			{
				head: "../static/community/communityimg/51/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/51/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/51/head/1.png"
				}, {
					head: "../static/community/communityimg/51/head/2.png"
				}, {
					head: "../static/community/communityimg/51/head/3.png"
				}, {
					head: "../static/community/communityimg/51/head/4.png"
				}, {
					head: "../static/community/communityimg/51/head/5.png"
				}, {
					head: "../static/community/communityimg/51/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/51/talk/6.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, ],
				mes: "实木家具搭配灰色沙发 简约不简单 喜欢",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/52/author.png", //头像
				name: "zhangjunlin", //名字
				goods: ["../static/community/communityimg/52/banner/1.png", "../static/community/communityimg/52/banner/2.png", "../static/community/communityimg/52/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/52/head/1.png"
				}, {
					head: "../static/community/communityimg/52/head/2.png"
				}, {
					head: "../static/community/communityimg/52/head/3.png"
				}, {
					head: "../static/community/communityimg/52/head/4.png"
				}, {
					head: "../static/community/communityimg/52/head/5.png"
				}, {
					head: "../static/community/communityimg/52/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "蜜拉兔",
					head: "../static/community/communityimg/52/talk/2.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, {
					name: "通灵",
					head: "../static/community/communityimg/52/talk/3.png",
					mes: "你咋不上天呢！😂",
					time: "2017-07-15"
				}],
				mes: "一共买过五款纸巾盒 图一毛毡 内部空间挺大的 大小纸巾都能使用 图二海草编 这是还没有放纸巾的时候拍的 图三大理石花纹 最喜欢的一款 放床头用 还有一款竹制的 竹乡安吉玩的时候买的 以后放茶室会比较适合 第五个就是好物绿色那款啦 还在等待中 想过啦 要是能中就去微博抽奖造福利",
				time: "2017-07-15",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 4
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},
			{
				head: "../static/community/communityimg/38/author.png", //头像
				name: "BOstudio独立设计师", //名字
				goods: ["../static/community/communityimg/38/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/38/head/1.png"
				}, {
					head: "../static/community/communityimg/38/head/2.png"
				}, {
					head: "../static/community/communityimg/38/head/3.png"
				}, {
					head: "../static/community/communityimg/38/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/38/talk/1.png",
					mes: "我喜欢",
					time: "2017-07-15"
				}],
				mes: "作品样片",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/39/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/39/banner/1.png", "../static/community/communityimg/39/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/39/head/1.png"
				}, {
					head: "../static/community/communityimg/39/head/2.png"
				}, {
					head: "../static/community/communityimg/39/head/3.png"
				}, {
					head: "../static/community/communityimg/39/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "好物君",
						head: "../static/community/communityimg/39/talk/1.png",
						mes: "有幸认识你❤️",
						time: "2017-07-11"

					}
				],
				mes: "今年的幸事是有缘结交了不少爱生活，爱家的同道人。",
				time: "2017-07-11",
			},
			{
				head: "../static/community/communityimg/40/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/40/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/40/head/1.png"
				}, {
					head: "../static/community/communityimg/40/head/2.png"
				}, {
					head: "../static/community/communityimg/40/head/3.png"
				}, {
					head: "../static/community/communityimg/40/head/4.png"
				}, {
					head: "../static/community/communityimg/40/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "一眼就相中的装饰画 色彩很治愈”",
				time: "2017-07-10",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 0
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/17/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/17/banner/1.png", "../static/community/communityimg/17/banner/2.png", "../static/community/communityimg/17/banner/3.png",
					"../static/community/communityimg/17/banner/4.png", "../static/community/communityimg/17/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/17/head/1.png"
				}, {
					head: "../static/community/communityimg/17/head/2.png"
				}, {
					head: "../static/community/communityimg/17/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "满满的时光。 有太多的信任和支持。 会一直做下去。 我喜欢挂毯 每次做完 上墙的瞬间 带给我的是满满的暖意 希望把这份温暖也传给你",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/18/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/18/banner/1.png", "../static/community/communityimg/18/banner/2.png", "../static/community/communityimg/18/banner/3.png",
					"../static/community/communityimg/18/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/18/head/1.png"
				}, {
					head: "../static/community/communityimg/18/head/2.png"
				}, {
					head: "../static/community/communityimg/18/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/18/talk/1.png",
					mes: "这个好有趣吖",
					time: "2017-06-25"
				}],
				mes: "绿色挂毯，既可以当花器，也可以装饰。",
				time: "2017-06-25",
			},
			{
				head: "../static/community/communityimg/19/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/19/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/19/head/1.png"
				}, {
					head: "../static/community/communityimg/19/head/2.png"
				}, {
					head: "../static/community/communityimg/19/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "珍品",
				time: "2017-06-28",
			},
			{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			}
	]
})
//家饰
mock.onGet('/community/meal', {
	params: {
		classes: "meal",
		num: 4,
		begin: 24
	}
}).reply(200, {
	meal: [
	{
				head: "../static/community/communityimg/25/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/25/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/25/head/1.png"
				}, {
					head: "../static/community/communityimg/25/head/2.png"
				}, {
					head: "../static/community/communityimg/25/head/3.png"
				}, {
					head: "../static/community/communityimg/25/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/25/talk/1.png",
					mes: "反而有复古的味道",
					time: "2017-07-07"
				}],
				mes: "黑胡桃木色并不会显的家里很暗，反而有种高雅的风范，一直担心的颜色问题根本就不是问题啦！关键在搭配！",
				time: "2017-07-06",
			},
			{
				head: "../static/community/communityimg/26/author.png", //头像
				name: "DAISYLEE", //名字
				goods: ["../static/community/communityimg/26/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/26/head/1.png"
				}, {
					head: "../static/community/communityimg/26/head/2.png"
				}, {
					head: "../static/community/communityimg/26/head/3.png"
				}, {
					head: "../static/community/communityimg/26/head/4.png"
				}, {
					head: "../static/community/communityimg/26/head/5.png"
				}, {
					head: "../static/community/communityimg/26/head/6.png"
				}, {
					head: "../static/community/communityimg/26/head/7.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "T7",
					head: "../static/community/communityimg/26/talk/1.png",
					mes: "求链接",
					time: "2017-07-10"
				}],
				mes: "这种沙发哪里可以买到",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/27/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/27/banner/1.png", "../static/community/communityimg/27/banner/2.png", "../static/community/communityimg/27/banner/3.png",
					"../static/community/communityimg/27/banner/4.png", "../static/community/communityimg/27/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/27/head/1.png"
				}, {
					head: "../static/community/communityimg/27/head/2.png"
				}, {
					head: "../static/community/communityimg/27/head/3.png"
				}, {
					head: "../static/community/communityimg/27/head/4.png"
				}, {
					head: "../static/community/communityimg/27/head/5.png"
				}, {
					head: "../static/community/communityimg/27/head/6.png"
				}, {
					head: "../static/community/communityimg/27/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "T7",
						head: "../static/community/communityimg/27/talk/1.png",
						mes: "求链接",
						time: "2017-07-10"

					}
				],
				mes: "Muuto The Dots，秀气而雅致的它，用简约清新的设计从小处改变家的气质。",
				time: "2017-07-10",
			}, {
				head: "../static/community/communityimg/28/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/28/head/1.png"
				}, {
					head: "../static/community/communityimg/28/head/2.png"
				}, {
					head: "../static/community/communityimg/28/head/3.png"
				}, {
					head: "../static/community/communityimg/28/head/4.png"
				}, {
					head: "../static/community/communityimg/28/head/5.png"
				}, {
					head: "../static/community/communityimg/28/head/6.png"
				}, {
					head: "../static/community/communityimg/28/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "颜小抠",
					head: "../static/community/communityimg/28/talk/1.png",
					mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
					time: "2017-07-22"
				}],
				mes: "夏天，不仅仅是吃这么简单了",
				time: "2017-07-22",
			}
	]
})
//家纺
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 12
	}
}).reply(200, {
	textiles: [
	{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},
			{
				head: "../static/community/communityimg/30/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/30/banner/1.png", "../static/community/communityimg/30/banner/2.png", "../static/community/communityimg/30/banner/3.png",
					"../static/community/communityimg/30/banner/4.png", "../static/community/communityimg/30/banner/5.png", "../static/community/communityimg/30/banner/6.png",
					"../static/community/communityimg/30/banner/7.png", "../static/community/communityimg/30/banner/8.png", "../static/community/communityimg/30/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/30/head/1.png"
				}, {
					head: "../static/community/communityimg/30/head/2.png"
				}, {
					head: "../static/community/communityimg/30/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "分享一些chic家居小物 生活中的小小仪式感，有时候一个不起眼的小物件，就能让你的幸福感up up up ！ 地垫和水洗牛皮纸收纳袋是原创家居用品，希望你天天都有好心情。 相信用心做的事情总会有人看的见。",
				time: "2017-07-14",
			},
			{
				head: "../static/community/communityimg/31/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/31/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/31/head/1.png"
				}, {
					head: "../static/community/communityimg/31/head/2.png"
				}, {
					head: "../static/community/communityimg/31/head/3.png"
				}, {
					head: "../static/community/communityimg/31/head/4.png"
				}, {
					head: "../static/community/communityimg/31/head/5.png"
				}, {
					head: "../static/community/communityimg/31/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "河童Coo",
						head: "../static/community/communityimg/31/talk/1.png",
						mes: "【日式水洗棉麻四件套纯色格子床单被套床笠】，点击链接再选择浏览器打开http://c.b1yt.com/h.Nblkv5?cv=oPB100QxXBE&sm=f0b52d ，或复制这条信息￥oPB100QxXBE￥后打开👉手机淘宝👈",
						time: "2017-07-16"

					}
				],
				mes: "无印风的床品",
				time: "2017-07-16",
			},
			{
				head: "../static/community/communityimg/32/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
					"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/32/head/1.png"
				}, {
					head: "../static/community/communityimg/32/head/2.png"
				}, {
					head: "../static/community/communityimg/32/head/3.png"
				}, {
					head: "../static/community/communityimg/32/head/4.png"
				}, {
					head: "../static/community/communityimg/32/head/5.png"
				}, {
					head: "../static/community/communityimg/32/head/6.png"
				}, {
					head: "../static/community/communityimg/32/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
				time: "2017-07-23",
			}
	]
})

//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 8
	}
}).reply(200, {
	textiles: [{
				head: "../static/community/communityimg/9/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/9/banner/1.png", "../static/community/communityimg/9/banner/2.png",
					"../static/community/communityimg/9/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/9/head/1.png"
					}, {
						head: "../static/community/communityimg/9/head/2.png"
					}, {
						head: "../static/community/communityimg/9/head/3.png"
					}, {
						head: "../static/community/communityimg/9/head/4.png"
					}, {
						head: "../static/community/communityimg/9/head/5.png"
					}, {
						head: "../static/community/communityimg/9/head/6.png"
					},
					{
						head: "../static/community/communityimg/9/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "做花艺师有三年了 一直都喜欢自然花艺 自从开始做挂毯 也一直都不想做常规的 喜欢自由的 喜欢一切自然生长的东西 我也相信 一定有和我志同道合的朋友 和我一样 喜欢着同样喜欢的东西",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/10/author.png", //头像
				name: "NORTH MINT", //名字
				goods: ["../static/community/communityimg/10/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/10/head/1.png"
				}, {
					head: "../static/community/communityimg/10/head/2.png"
				}, {
					head: "../static/community/communityimg/10/head/3.png"
				}, {
					head: "../static/community/communityimg/10/head/4.png"
				}, {
					head: "../static/community/communityimg/10/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "家的样子",
				time: "2017-07-10",
			},
			{
				head: "../static/community/communityimg/11/author.png", //头像
				name: "乌拉爱白果", //名字
				goods: ["../static/community/communityimg/11/banner/1.png", "../static/community/communityimg/11/banner/2.png", "../static/community/communityimg/11/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/11/head/1.png"
				}, {
					head: "../static/community/communityimg/11/head/2.png"
				}, {
					head: "../static/community/communityimg/11/head/3.png"
				}, {
					head: "../static/community/communityimg/11/head/4.png"
				}, {
					head: "../static/community/communityimg/11/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "不想当捕梦网的挂毯不是好隔板+_+ 好物家隔板品质超级让人安心哦，屯了好多……😝",
				time: "2017-06-20",
			},
			{
				head: "../static/community/communityimg/12/author.png", //头像
				name: "河童Coo", //名字
				goods: ["../static/community/communityimg/12/banner/1.png", "../static/community/communityimg/12/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/12/head/1.png"
				}, {
					head: "../static/community/communityimg/12/head/2.png"
				}, {
					head: "../static/community/communityimg/12/head/3.png"
				}, {
					head: "../static/community/communityimg/12/head/4.png"
				}, {
					head: "../static/community/communityimg/12/head/5.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "河童Coo",
					head: "../static/community/communityimg/12/talk/5.png",
					mes: "日式简约纯色夏凉被水洗棉夏被纯棉可水洗空调被】，点击链接再选择浏览器打开http://c.b1yt.com/h.NmuMe1?cv=R6Ph00BsY79&sm=c65b37 ，或复制这条信息￥R6Ph00BsY79￥后打开👉手机淘宝👈",
					time: "2017-07-19"
				}, ],
				mes: "夏天是水绿的️",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 20
	}
}).reply(200, {
	textiles: [{
				head: "../static/community/communityimg/21/author.png", //头像
				name: "rNJNHFeUDu", //名字
				goods: ["../static/community/communityimg/21/banner/1.png", "../static/community/communityimg/21/banner/2.png", "../static/community/communityimg/21/banner/3.png",
					"../static/community/communityimg/21/banner/4.png", "../static/community/communityimg/21/banner/5.png", "../static/community/communityimg/21/banner/6.png",
					"../static/community/communityimg/21/banner/7.png", "../static/community/communityimg/21/banner/8.png", "../static/community/communityimg/21/banner/9.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/21/head/1.png"
				}, {
					head: "../static/community/communityimg/21/head/2.png"
				}, {
					head: "../static/community/communityimg/21/head/3.png"
				}, {
					head: "../static/community/communityimg/21/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "好物君",
					head: "../static/community/communityimg/21/talk/1.png",
					mes: "是你的卧室吗",
					time: "2017-07-02"
				}],
				mes: "完全北欧风的卧室，一张斯堪的纳维亚的挂画，一个黄铜制品，或者一个木质梯子衣帽架",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/22/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/22/banner/1.png", "../static/community/communityimg/22/banner/2.png", "../static/community/communityimg/22/banner/3.png",
					"../static/community/communityimg/22/banner/4.png", "../static/community/communityimg/22/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/22/head/1.png"
					}, {
						head: "../static/community/communityimg/22/head/2.png"
					}, {
						head: "../static/community/communityimg/22/head/3.png"
					}, {
						head: "../static/community/communityimg/22/head/4.png"
					}, {
						head: "../static/community/communityimg/22/head/5.png"
					}, {
						head: "../static/community/communityimg/22/head/6.png"
					},
					{
						head: "../static/community/communityimg/22/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/22/talk/1.png",
					mes: "第一张的台灯太好看",
					time: "2017-07-05"
				}],
				mes: "白底黑字，极简唯美的线性字体，足以爱到不行。",
				time: "2017-07-04",
			},
			{
				head: "../static/community/communityimg/23/author.png", //头像
				name: "b6JbftxbfB", //名字
				goods: ["../static/community/communityimg/23/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/23/head/1.png"
				}, {
					head: "../static/community/communityimg/23/head/2.png"
				}, {
					head: "../static/community/communityimg/23/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "大神们。吸顶花洒是好还是坏",
				time: "2017-07-19",
			},
			{
				head: "../static/community/communityimg/24/author.png", //头像
				name: "我想吃1个小孩", //名字
				goods: ["../static/community/communityimg/24/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/24/head/1.png"
				}, {
					head: "../static/community/communityimg/24/head/2.png"
				}, {
					head: "../static/community/communityimg/24/head/3.png"
				}, {
					head: "../static/community/communityimg/24/head/4.png"
				}, {
					head: "../static/community/communityimg/24/head/5.png"
				}, {
					head: "../static/community/communityimg/24/head/6.png"
				}, {
					head: "../static/community/communityimg/24/head/7.png"
				}, {
					head: "../static/community/communityimg/24/head/8.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/24/talk/1.png",
					mes: "赞创新！！！可以有，要看什么木啦！我可能喜欢保持原味！",
					time: "2017-07-19"
				}],
				mes: "木头遇到丙烯",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 36
	}
}).reply(200, {
	textiles: [{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/14/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/14/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/14/head/1.png"
				}, {
					head: "../static/community/communityimg/14/head/2.png"
				}, {
					head: "../static/community/communityimg/14/head/3.png"
				}, {
					head: "../static/community/communityimg/14/head/4.png"
				}, {
					head: "../static/community/communityimg/14/head/5.png"
				}, {
					head: "../static/community/communityimg/14/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/14/talk/1.png",
					mes: "好看",
					time: "2017-06-11"
				}, {
					name: "Milk-Olivia",
					head: "../static/community/communityimg/14/talk/2.png",
					mes: "冰咖啡，好凉爽",
					time: "2017-06-10"
				}],
				mes: "好饿，睡觉",
				time: "2017-06-10",
			},
			{
				head: "../static/community/communityimg/15/author.png", //头像
				name: "小草青青", //名字
				goods: ["../static/community/communityimg/15/banner/1.png", "../static/community/communityimg/15/banner/2.png", "../static/community/communityimg/15/banner/3.png",
					"../static/community/communityimg/15/banner/4.png", "../static/community/communityimg/15/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/15/head/1.png"
				}, {
					head: "../static/community/communityimg/15/head/2.png"
				}, {
					head: "../static/community/communityimg/15/head/3.png"
				}, {
					head: "../static/community/communityimg/15/head/4.png"
				}, {
					head: "../static/community/communityimg/15/head/5.png"
				}, {
					head: "../static/community/communityimg/15/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "会一直做下去。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/16/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/16/banner/1.png", "../static/community/communityimg/16/banner/2.png", "../static/community/communityimg/16/banner/3.png",
					"../static/community/communityimg/16/banner/4.png", "../static/community/communityimg/16/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/16/head/1.png"
					}, {
						head: "../static/community/communityimg/16/head/2.png"
					}, {
						head: "../static/community/communityimg/16/head/3.png"
					}, {
						head: "../static/community/communityimg/16/head/4.png"
					}, {
						head: "../static/community/communityimg/16/head/5.png"
					},
					{
						head: "../static/community/communityimg/16/head/6.png"
					},
					{
						head: "../static/community/communityimg/16/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "kB5tUM4RAg",
					head: "../static/community/communityimg/16/talk/1.png",
					mes: "两个窗户之间的点缀有链接吗？求链接",
					time: "2017-07-18"
				}, ],
				mes: "用红色的单品点缀客厅，撒上一整年喜气，点滴处可见心思。️",
				time: "2017-07-18",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 40
	}
}).reply(200, {
	textiles: [{
				head: "../static/community/communityimg/5/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/5/banner/1.png", "../static/community/communityimg/5/banner/2.png",
					"../static/community/communityimg/5/banner/3.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/5/head/1.png"
					}, {
						head: "../static/community/communityimg/5/head/2.png"
					}, {
						head: "../static/community/communityimg/5/head/3.png"
					}, {
						head: "../static/community/communityimg/5/head/4.png"
					}, {
						head: "../static/community/communityimg/5/head/5.png"
					}, {
						head: "../static/community/communityimg/5/head/6.png"
					},
					{
						head: "../static/community/communityimg/5/head/7.png"
					},
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "有一位会艺术造诣很高的闺蜜是什么体验？ 当然是灰常灰常开心吖。不仅可以获赠很多装饰画而且自己的艺术品味都提高了八度哈哈哈哈 好物手工地毯五星好评",
				time: "2017-06-18",
			},
			{
				head: "../static/community/communityimg/6/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/6/banner/1.png", "../static/community/communityimg/6/banner/2.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/6/head/1.png"
					}, {
						head: "../static/community/communityimg/6/head/2.png"
					}, {
						head: "../static/community/communityimg/6/head/3.png"
					}, {
						head: "../static/community/communityimg/6/head/4.png"
					}, {
						head: "../static/community/communityimg/6/head/5.png"
					}, {
						head: "../static/community/communityimg/6/head/6.png"
					},
					{
						head: "../static/community/communityimg/6/head/7.png"
					},
					{
						head: "../static/community/communityimg/6/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "满满的少女心💗",
				time: "2017-07-12",
			},
			{
				head: "../static/community/communityimg/7/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/7/banner/1.png", "../static/community/communityimg/7/banner/2.png", "../static/community/communityimg/7/banner/3.png",
					"../static/community/communityimg/7/banner/4.png", "../static/community/communityimg/7/banner/5.png",
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/7/head/1.png"
					}, {
						head: "../static/community/communityimg/7/head/2.png"
					}, {
						head: "../static/community/communityimg/7/head/3.png"
					}, {
						head: "../static/community/communityimg/7/head/4.png"
					}, {
						head: "../static/community/communityimg/7/head/5.png"
					}, {
						head: "../static/community/communityimg/7/head/6.png"
					},
					{
						head: "../static/community/communityimg/7/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "热烈的梦境，亲切而柔美的红，伴随夜晚的宁静起伏时分。",
				time: "2017-06-21",
			},
			{
				head: "../static/community/communityimg/8/author.png", //头像
				name: "李玲文", //名字
				goods: ["../static/community/communityimg/8/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/8/head/1.png"
				}, {
					head: "../static/community/communityimg/8/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "❤️",
				time: "2017-06-21",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 0
	}
}).reply(200, {
	textiles: [
	{
				head: "../static/community/communityimg/1/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
					"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/1/head/1.png"
				}, {
					head: "../static/community/communityimg/1/head/2.png"
				}, {
					head: "../static/community/communityimg/1/head/3.png"
				}, {
					head: "../static/community/communityimg/1/head/4.png"
				}, {
					head: "../static/community/communityimg/1/head/5.png"
				}, {
					head: "../static/community/communityimg/1/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "艾哇",
						head: "../static/community/communityimg/1/talk/1.png",
						mes: "请问小餐桌哪里有得买？有链接么？",
						time: "2017-07-24",
					}
				],
				mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
				time: "2017-07-23",
			},
			{
				head: "../static/community/communityimg/2/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
					"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
				], //轮播图片
				good: [{
						head: "../static/community/communityimg/2/head/1.png"
					}, {
						head: "../static/community/communityimg/2/head/2.png"
					}, {
						head: "../static/community/communityimg/2/head/3.png"
					}, {
						head: "../static/community/communityimg/2/head/4.png"
					}, {
						head: "../static/community/communityimg/2/head/5.png"
					}, {
						head: "../static/community/communityimg/2/head/6.png"
					},
					{
						head: "../static/community/communityimg/2/head/7.png"
					},
					{
						head: "../static/community/communityimg/2/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "北爸",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "椅子不错👍，求介绍",
						time: "2017-07-22",
					}
				],
				mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
				time: "2017-07-22",
			},
			{
				head: "../static/community/communityimg/3/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/3/head/1.png"
					}, {
						head: "../static/community/communityimg/3/head/2.png"
					}, {
						head: "../static/community/communityimg/3/head/3.png"
					}, {
						head: "../static/community/communityimg/3/head/4.png"
					}, {
						head: "../static/community/communityimg/3/head/5.png"
					}, {
						head: "../static/community/communityimg/3/head/6.png"
					},
					{
						head: "../static/community/communityimg/3/head/7.png"
					},
					{
						head: "../static/community/communityimg/3/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{
						name: "上不上天管你屁事",
						head: "../static/community/communityimg/2/talk/1.png",
						mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
						time: "2017-07-22",
					}
				],
				mes: "减肥~",
				time: "2017-07-21",
			},
			{
				head: "../static/community/communityimg/4/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/4/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/4/head/1.png"
					}, {
						head: "../static/community/communityimg/4/head/2.png"
					}, {
						head: "../static/community/communityimg/4/head/3.png"
					}, {
						head: "../static/community/communityimg/4/head/4.png"
					}, {
						head: "../static/community/communityimg/4/head/5.png"
					}, {
						head: "../static/community/communityimg/4/head/6.png"
					},
					{
						head: "../static/community/communityimg/4/head/7.png"
					},
					{
						head: "../static/community/communityimg/4/head/8.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "角落",
				time: "2017-07-20",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin:32
	}
}).reply(200, {
	textiles: [
	{
				head: "../static/community/communityimg/41/author.png", //头像
				name: "好物君", //名字
				goods: ["../static/community/communityimg/41/banner/1.png", "../static/community/communityimg/41/banner/2.png", "../static/community/communityimg/41/banner/3.png",
					"../static/community/communityimg/41/banner/4.png", "../static/community/communityimg/41/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/41/head/1.png"
				}, {
					head: "../static/community/communityimg/41/head/2.png"
				}, {
					head: "../static/community/communityimg/41/head/3.png"
				}, {
					head: "../static/community/communityimg/41/head/4.png"
				}, {
					head: "../static/community/communityimg/41/head/5.png"
				}, {
					head: "../static/community/communityimg/41/head/6.png"
				}, {
					head: "../static/community/communityimg/41/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "为卧室配上一盏质地坚硬的铜灯，仿佛柔软世界里守护的一抹坚强。",
				time: "2017-07-17",
			},
			{
				head: "../static/community/communityimg/42/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/42/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/42/head/1.png"
				}, {
					head: "../static/community/communityimg/42/head/2.png"
				}, {
					head: "../static/community/communityimg/42/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "最近真的很爱它，黑胡桃+黄铜，各种合适",
				time: "2017-07-02",
			},
			{
				head: "../static/community/communityimg/43/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/43/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/43/head/1.png"
				}, {
					head: "../static/community/communityimg/43/head/2.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "NSstyle",
				time: "2017-07-01",
			},
			{
				head: "../static/community/communityimg/44/author.png", //头像
				name: "Hooooooray", //名字
				goods: ["../static/community/communityimg/44/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/44/head/1.png"
				}, {
					head: "../static/community/communityimg/44/head/2.png"
				}, {
					head: "../static/community/communityimg/44/head/3.png"
				}, {
					head: "../static/community/communityimg/44/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "很有质感，就是小贵啊",
				time: "2017-07-19",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin: 16
	}
}).reply(200, {
	textiles: [
	{
				head: "../static/community/communityimg/49/author.png", //头像
				name: "肉松姑娘", //名字
				goods: ["../static/community/communityimg/49/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/49/head/1.png"
				}, {
					head: "../static/community/communityimg/49/head/2.png"
				}, {
					head: "../static/community/communityimg/49/head/3.png"
				}, {
					head: "../static/community/communityimg/49/head/4.png"
				}, {
					head: "../static/community/communityimg/49/head/5.png"
				}, {
					head: "../static/community/communityimg/49/head/6.png"
				}, {
					head: "../static/community/communityimg/49/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "喜欢哑光质感️",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/50/author.png", //头像
				name: "蜜拉兔", //名字
				goods: ["../static/community/communityimg/50/banner/1.png", "../static/community/communityimg/50/banner/2.png", "../static/community/communityimg/50/banner/3.png", "../static/community/communityimg/50/banner/4.png", "../static/community/communityimg/50/banner/5.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/50/head/1.png"
				}, {
					head: "../static/community/communityimg/50/head/2.png"
				}, {
					head: "../static/community/communityimg/50/head/3.png"
				}, {
					head: "../static/community/communityimg/50/head/4.png"
				}, {
					head: "../static/community/communityimg/50/head/5.png"
				}, {
					head: "../static/community/communityimg/50/head/6.png"
				}, ], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "zhangjunlin",
					head: "../static/community/communityimg/50/talk/1.png",
					mes: "急需瘦十斤 哈哈",
					time: "2017-07-13"
				}, {
					name: "hope.s",
					head: "../static/community/communityimg/50/talk/2.png",
					mes: "不敢点，……️",
					time: "2017-07-13"
				}],
				mes: "我家纸巾盒，好物的占据大部分，简洁美观超百搭。点赞的都瘦十斤😂",
				time: "2017-07-13",
			},
			{
				head: "../static/community/communityimg/51/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/51/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/51/head/1.png"
				}, {
					head: "../static/community/communityimg/51/head/2.png"
				}, {
					head: "../static/community/communityimg/51/head/3.png"
				}, {
					head: "../static/community/communityimg/51/head/4.png"
				}, {
					head: "../static/community/communityimg/51/head/5.png"
				}, {
					head: "../static/community/communityimg/51/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/51/talk/6.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, ],
				mes: "实木家具搭配灰色沙发 简约不简单 喜欢",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/52/author.png", //头像
				name: "zhangjunlin", //名字
				goods: ["../static/community/communityimg/52/banner/1.png", "../static/community/communityimg/52/banner/2.png", "../static/community/communityimg/52/banner/3.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/52/head/1.png"
				}, {
					head: "../static/community/communityimg/52/head/2.png"
				}, {
					head: "../static/community/communityimg/52/head/3.png"
				}, {
					head: "../static/community/communityimg/52/head/4.png"
				}, {
					head: "../static/community/communityimg/52/head/5.png"
				}, {
					head: "../static/community/communityimg/52/head/6.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "蜜拉兔",
					head: "../static/community/communityimg/52/talk/2.png",
					mes: "我喜欢这风格",
					time: "2017-07-15"
				}, {
					name: "通灵",
					head: "../static/community/communityimg/52/talk/3.png",
					mes: "你咋不上天呢！😂",
					time: "2017-07-15"
				}],
				mes: "一共买过五款纸巾盒 图一毛毡 内部空间挺大的 大小纸巾都能使用 图二海草编 这是还没有放纸巾的时候拍的 图三大理石花纹 最喜欢的一款 放床头用 还有一款竹制的 竹乡安吉玩的时候买的 以后放茶室会比较适合 第五个就是好物绿色那款啦 还在等待中 想过啦 要是能中就去微博抽奖造福利",
				time: "2017-07-15",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin:24
	}
}).reply(200, {
	textiles: [
	{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},
			{
				head: "../static/community/communityimg/38/author.png", //头像
				name: "BOstudio独立设计师", //名字
				goods: ["../static/community/communityimg/38/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/38/head/1.png"
				}, {
					head: "../static/community/communityimg/38/head/2.png"
				}, {
					head: "../static/community/communityimg/38/head/3.png"
				}, {
					head: "../static/community/communityimg/38/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "君风悦",
					head: "../static/community/communityimg/38/talk/1.png",
					mes: "我喜欢",
					time: "2017-07-15"
				}],
				mes: "作品样片",
				time: "2017-07-15",
			},
			{
				head: "../static/community/communityimg/39/author.png", //头像
				name: "Kenyaespresso", //名字
				goods: ["../static/community/communityimg/39/banner/1.png", "../static/community/communityimg/39/banner/2.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/39/head/1.png"
				}, {
					head: "../static/community/communityimg/39/head/2.png"
				}, {
					head: "../static/community/communityimg/39/head/3.png"
				}, {
					head: "../static/community/communityimg/39/head/4.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
					{

						name: "好物君",
						head: "../static/community/communityimg/39/talk/1.png",
						mes: "有幸认识你❤️",
						time: "2017-07-11"

					}
				],
				mes: "今年的幸事是有缘结交了不少爱生活，爱家的同道人。",
				time: "2017-07-11",
			},
			{
				head: "../static/community/communityimg/40/author.png", //头像
				name: "素色静语", //名字
				goods: ["../static/community/communityimg/40/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/40/head/1.png"
				}, {
					head: "../static/community/communityimg/40/head/2.png"
				}, {
					head: "../static/community/communityimg/40/head/3.png"
				}, {
					head: "../static/community/communityimg/40/head/4.png"
				}, {
					head: "../static/community/communityimg/40/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "一眼就相中的装饰画 色彩很治愈”",
				time: "2017-07-10",
			}
	]
})
//家饰
mock.onGet('/community/textiles', {
	params: {
		classes: "textiles",
		num: 4,
		begin:28
	}
}).reply(200, {
	textiles: [
	{
				head: "../static/community/communityimg/17/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/17/banner/1.png", "../static/community/communityimg/17/banner/2.png", "../static/community/communityimg/17/banner/3.png",
					"../static/community/communityimg/17/banner/4.png", "../static/community/communityimg/17/banner/5.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/17/head/1.png"
				}, {
					head: "../static/community/communityimg/17/head/2.png"
				}, {
					head: "../static/community/communityimg/17/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "满满的时光。 有太多的信任和支持。 会一直做下去。 我喜欢挂毯 每次做完 上墙的瞬间 带给我的是满满的暖意 希望把这份温暖也传给你",
				time: "2017-07-09",
			},
			{
				head: "../static/community/communityimg/18/author.png", //头像
				name: "车车可可", //名字
				goods: ["../static/community/communityimg/18/banner/1.png", "../static/community/communityimg/18/banner/2.png", "../static/community/communityimg/18/banner/3.png",
					"../static/community/communityimg/18/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/18/head/1.png"
				}, {
					head: "../static/community/communityimg/18/head/2.png"
				}, {
					head: "../static/community/communityimg/18/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "Milk-Olivia",
					head: "../static/community/communityimg/18/talk/1.png",
					mes: "这个好有趣吖",
					time: "2017-06-25"
				}],
				mes: "绿色挂毯，既可以当花器，也可以装饰。",
				time: "2017-06-25",
			},
			{
				head: "../static/community/communityimg/19/author.png", //头像
				name: "胖掌柜", //名字
				goods: ["../static/community/communityimg/19/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/19/head/1.png"
				}, {
					head: "../static/community/communityimg/19/head/2.png"
				}, {
					head: "../static/community/communityimg/19/head/3.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [ //评论
				],
				mes: "珍品",
				time: "2017-06-28",
			},
			{
				head: "../static/community/communityimg/20/author.png", //头像
				name: "金爷", //名字
				goods: ["../static/community/communityimg/20/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/20/head/1.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [],
				mes: "今天做了基础费南雪，龟背竹真的是最佳陪衬绿植️",
				time: "2017-07-05",
			}
	]
})

//最热
mock.onGet('/community/solicitation-hot', {
	params: {
		classes: "solicitation-hot",
		num: 4,
	}
}).reply(200, {
	hot: [{
				head: "../static/community/communityimg/37/author.png", //头像
				name: "Milk-Olivia", //名字
				goods: ["../static/community/communityimg/37/banner/1.png"], //轮播图片
				good: [{
					head: "../static/community/communityimg/37/head/1.png"
				}, {
					head: "../static/community/communityimg/37/head/2.png"
				}, {
					head: "../static/community/communityimg/37/head/3.png"
				}, {
					head: "../static/community/communityimg/37/head/4.png"
				}, {
					head: "../static/community/communityimg/37/head/5.png"
				}, {
					head: "../static/community/communityimg/37/head/6.png"
				}, {
					head: "../static/community/communityimg/37/head/7.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/37/talk/1.png",
					mes: "你们 都是来炫技的……",
					time: "2017-07-20"
				}],
				mes: "美食与纸巾是每天必备。纸巾盒是多么重要的存在。 月亮，在人类的眼中，没有一丁点的矿石味，就像卡尔维诺在《月亮的距离》中写道，一碰到月亮，粗糙的双手立刻变得柔软起来。",
				time: "2017-07-20",
			},{
				head: "../static/community/communityimg/13/author.png", //头像
				name: "食尚菇凉杭七七", //名字
				goods: ["../static/community/communityimg/13/banner/1.png"], //轮播图片
				good: [{
						head: "../static/community/communityimg/13/head/1.png"
					}, {
						head: "../static/community/communityimg/13/head/2.png"
					}, {
						head: "../static/community/communityimg/13/head/3.png"
					}, {
						head: "../static/community/communityimg/13/head/4.png"
					}, {
						head: "../static/community/communityimg/13/head/5.png"
					}, {
						head: "../static/community/communityimg/13/head/6.png"
					},
					{
						head: "../static/community/communityimg/13/head/7.png"
					}
				], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
					name: "hope.s",
					head: "../static/community/communityimg/13/talk/1.png",
					mes: "咸的布丁？",
					time: "2017-07-15"
				}],
				mes: "西红柿鸡胸布丁～奶萃～",
				time: "2017-07-15",
			},{
				head: "../static/community/communityimg/29/author.png", //头像
				name: "橙子6", //名字
				goods: ["../static/community/communityimg/29/banner/1.png", "../static/community/communityimg/29/banner/2.png", "../static/community/communityimg/29/banner/3.png",
					"../static/community/communityimg/29/banner/4.png"
				], //轮播图片
				good: [{
					head: "../static/community/communityimg/29/head/1.png"
				}, {
					head: "../static/community/communityimg/29/head/2.png"
				}, {
					head: "../static/community/communityimg/29/head/3.png"
				}, {
					head: "../static/community/communityimg/29/head/4.png"
				}, {
					head: "../static/community/communityimg/29/head/5.png"
				}], //点赞人数
				goodbol: false, //是否已点赞
				collect: false, //是否已收藏
				talk: [{
						name: "Milk-Olivia",
						head: "../static/community/communityimg/29/talk/1.png",
						mes: "他家桌布也特别好用",
						time: "2017-07-09"
					},
					{
						name: "好物君",
						head: "../static/community/communityimg/29/talk/2.png",
						mes: "买了那么多！",
						time: "2017-07-08"
					},
					{
						name: "肉松姑娘",
						head: "../static/community/communityimg/29/talk/3.png",
						mes: "我看他家淘宝杂志架是20号有货！",
						time: "2017-07-08"
					}
				],
				mes: "我懒……不写了……↑",
				time: "2017-07-08",
			},{
			head: "../static/community/communityimg/28/author.png", //头像
			name: "rNJNHFeUDu", //名字
			goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
			good: [{
				head: "../static/community/communityimg/28/head/1.png"
			}, {
				head: "../static/community/communityimg/28/head/2.png"
			}, {
				head: "../static/community/communityimg/28/head/3.png"
			}, {
				head: "../static/community/communityimg/28/head/4.png"
			}, {
				head: "../static/community/communityimg/28/head/5.png"
			}, {
				head: "../static/community/communityimg/28/head/6.png"
			}, {
				head: "../static/community/communityimg/28/head/7.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [{
				name: "颜小抠",
				head: "../static/community/communityimg/28/talk/1.png",
				mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
				time: "2017-07-22"
			}],
			mes: "夏天，不仅仅是吃这么简单了",
			time: "2017-07-22",
		}, {
			head: "../static/community/communityimg/3/author.png", //头像
			name: "蜜拉兔", //名字
			goods: ["../static/community/communityimg/3/banner/1.png"], //轮播图片
			good: [{
					head: "../static/community/communityimg/3/head/1.png"
				}, {
					head: "../static/community/communityimg/3/head/2.png"
				}, {
					head: "../static/community/communityimg/3/head/3.png"
				}, {
					head: "../static/community/communityimg/3/head/4.png"
				}, {
					head: "../static/community/communityimg/3/head/5.png"
				}, {
					head: "../static/community/communityimg/3/head/6.png"
				},
				{
					head: "../static/community/communityimg/3/head/7.png"
				},
				{
					head: "../static/community/communityimg/3/head/8.png"
				}
			], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "上不上天管你屁事",
					head: "../static/community/communityimg/2/talk/1.png",
					mes: "你这是减肥的样子嘛 明明就是找借口吃好吃的",
					time: "2017-07-22",
				}
			],
			mes: "减肥~",
			time: "2017-07-21",
		}
			
	]
})
mock.onGet('/community/solicitation-last', {
	params: {
		classes: "solicitation-last",
		num: 4,
	}
}).reply(200, {
	last: [{
			head: "../static/community/communityimg/1/author.png", //头像
			name: "好物君", //名字
			goods: ["../static/community/communityimg/1/banner/1.png", "../static/community/communityimg/1/banner/2.png",
				"../static/community/communityimg/1/banner/3.png", "../static/community/communityimg/1/banner/4.png", "../static/community/communityimg/1/banner/5.png"
			], //轮播图片
			good: [{
				head: "../static/community/communityimg/1/head/1.png"
			}, {
				head: "../static/community/communityimg/1/head/2.png"
			}, {
				head: "../static/community/communityimg/1/head/3.png"
			}, {
				head: "../static/community/communityimg/1/head/4.png"
			}, {
				head: "../static/community/communityimg/1/head/5.png"
			}, {
				head: "../static/community/communityimg/1/head/6.png"
			}, ], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "艾哇",
					head: "../static/community/communityimg/1/talk/1.png",
					mes: "请问小餐桌哪里有得买？有链接么？",
					time: "2017-07-24",
				}
			],
			mes: "愈加亲近的相处时光，与美食、爱人相伴，记住点点滴滴小美好。",
			time: "2017-07-23",
		},
		{
			head: "../static/community/communityimg/32/author.png", //头像
			name: "好物君", //名字
			goods: ["../static/community/communityimg/32/banner/1.png", "../static/community/communityimg/32/banner/2.png", "../static/community/communityimg/32/banner/3.png",
				"../static/community/communityimg/32/banner/4.png", "../static/community/communityimg/32/banner/5.png"
			], //轮播图片
			good: [{
				head: "../static/community/communityimg/32/head/1.png"
			}, {
				head: "../static/community/communityimg/32/head/2.png"
			}, {
				head: "../static/community/communityimg/32/head/3.png"
			}, {
				head: "../static/community/communityimg/32/head/4.png"
			}, {
				head: "../static/community/communityimg/32/head/5.png"
			}, {
				head: "../static/community/communityimg/32/head/6.png"
			}, {
				head: "../static/community/communityimg/32/head/7.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [],
			mes: "告别冰冷的塑料或金属材质，用自然的草编元素，犒劳和安抚自己劳累的身心。",
			time: "2017-07-23",
		}, {
			head: "../static/community/communityimg/2/author.png", //头像
			name: "Milk-Olivia", //名字
			goods: ["../static/community/communityimg/2/banner/1.png", "../static/community/communityimg/2/banner/2.png",
				"../static/community/communityimg/2/banner/3.png", "../static/community/communityimg/2/banner/4.png", "../static/community/communityimg/2/banner/5.png"
			], //轮播图片
			good: [{
					head: "../static/community/communityimg/2/head/1.png"
				}, {
					head: "../static/community/communityimg/2/head/2.png"
				}, {
					head: "../static/community/communityimg/2/head/3.png"
				}, {
					head: "../static/community/communityimg/2/head/4.png"
				}, {
					head: "../static/community/communityimg/2/head/5.png"
				}, {
					head: "../static/community/communityimg/2/head/6.png"
				},
				{
					head: "../static/community/communityimg/2/head/7.png"
				},
				{
					head: "../static/community/communityimg/2/head/8.png"
				}
			], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [ //评论
				{
					name: "北爸",
					head: "../static/community/communityimg/2/talk/1.png",
					mes: "椅子不错👍，求介绍",
					time: "2017-07-22",
				}
			],
			mes: "在愉快的美食餐桌享受节日氛围，眼望来年，憧憬新年美运。",
			time: "2017-07-22",
		}, {
			head: "../static/community/communityimg/28/author.png", //头像
			name: "rNJNHFeUDu", //名字
			goods: ["../static/community/communityimg/28/banner/1.png"], //轮播图片
			good: [{
				head: "../static/community/communityimg/28/head/1.png"
			}, {
				head: "../static/community/communityimg/28/head/2.png"
			}, {
				head: "../static/community/communityimg/28/head/3.png"
			}, {
				head: "../static/community/communityimg/28/head/4.png"
			}, {
				head: "../static/community/communityimg/28/head/5.png"
			}, {
				head: "../static/community/communityimg/28/head/6.png"
			}, {
				head: "../static/community/communityimg/28/head/7.png"
			}], //点赞人数
			goodbol: false, //是否已点赞
			collect: false, //是否已收藏
			talk: [{
				name: "颜小抠",
				head: "../static/community/communityimg/28/talk/1.png",
				mes: "仙人掌🌵🌵🌵🌵🌵的盘子哪里有卖?好喜欢",
				time: "2017-07-22"
			}],
			mes: "夏天，不仅仅是吃这么简单了",
			time: "2017-07-22",
		}
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
	newList: [{
			pic: new1,
			money: 20,
			name: '真皮墙面挂钩两件套'
		},
		{
			pic: new1,
			money: 20,
			name: '真皮墙面挂钩两件套'
		},
		{
			pic: new1,
			money: 20,
			name: '真皮墙面挂钩两件套'
		},
		{
			pic: new1,
			money: 20,
			name: '真皮墙面挂钩两件套'
		},
		{
			pic: new1,
			money: 20,
			name: '真皮墙面挂钩两件套'
		},
		{
			pic: new1,
			money: 20,
			name: '真皮墙面挂钩两件套'
		}
	],
	// 限时秒杀
	killList: [{
		pic: kill1,
		name: '羽丝绒枕',
		money: 53,
		moneyO: 89
	}],

	//达人show
	showList: [{
			pic: show1,
			name: '极客',
			like: 49,
			collect: 89,
			say: 1,
			headImg: showHead,
			txt: '小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心,小清新，小倾心'
		},
		{
			pic: show1,
			name: '极客',
			like: 49,
			collect: 89,
			say: 1,
			headImg: showHead,
			txt: '小清新，小倾心'
		},
		{
			pic: show1,
			name: '极客',
			like: 49,
			collect: 89,
			say: 1,
			headImg: showHead,
			txt: '小清新，小倾心'
		},
		{
			pic: show1,
			name: '极客',
			like: 49,
			collect: 89,
			say: 1,
			headImg: showHead,
			txt: '小清新，小倾心'
		}
	],
	//家饰
	// index 就写1  title 就写decoration    banner 顶部图片  list 商品列表
	decoration: {
		index: 1,
		title: 'decoration',
		banner: otherBanner,
		list: [{
				pic: otherList,
				name: '厨房系列柠檬画大',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画中',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画小',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			}
		]
	},
	//收纳
	accept: {
		index: 2,
		title: 'accept',
		banner: otherBanner,
		list: [{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			}
		]
	},
	//餐厨
	kitchen: {
		index: 3,
		title: 'kitchen',
		banner: otherBanner,
		list: [{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			}
		]
	},
	//家纺
	textiles: {
		index: 4,
		title: 'textiles',
		banner: otherBanner,
		list: [{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			},
			{
				pic: otherList,
				name: '厨房系列柠檬画',
				money: 28
			}
		]
	}
});
// 推荐  和上面一样 这里用comment 
//推荐中的 猜你喜欢商品列表   
mock.onGet('/api/shop/list', {
	params: {
		begin: 0,
		num: 5
	}
}).reply(200, {
	shopList: [{
			pic: [show1, show1],
			name: '小清新客厅套大',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		}
	]
});
mock.onGet('/api/shop/list', {
	params: {
		begin: 5,
		num: 5
	}
}).reply(200, {
	shopList: [{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		},
		{
			pic: [show1, show1],
			name: '小清新客厅套',
			money: 200,
			txt: '用自然的元素点缀，简雅秀气，随处可见心思',
			list: {
				content: [show1, show1],
				pagination: '.swiper-pagination'
			}
		}
	]
});
mock.onGet('/api/shop/other', {
	params: {
		shopClass: 'decoration',
		begin: 10,
		num: 10
	}
}).reply(200, {
	list: [{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		}
	]
});
mock.onGet('/api/shop/other', {
	params: {
		shopClass: 'decoration',
		begin: 20,
		num: 10
	}
}).reply(200, {
	list: [{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		}
	]
});
mock.onGet('/api/shop/other', {
	params: {
		shopClass: 'accept',
		begin: 10,
		num: 10
	}
}).reply(200, {
	list: [{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		},
		{
			pic: otherList,
			name: '厨房系列柠檬画',
			money: 28
		}
	]
});
//商品详情 detail：{}
mock.onGet('/api/shop/detail').reply(function(req) {
	var list = {
		title: "Hook 铁艺五头挂钩",
		price: "76",
		select_tip: [{
			title: "磨砂黑色",
			num: "11"
		}, {
			title: "磨砂白色",
			num: "3"
		}, {
			title: "磨砂青色",
			num: "0"
		}, {
			title: "磨砂蓝色",
			num: "8"
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
	if(req.params.search == '厨房系列柠檬画' || req.params.search == '羽丝绒枕') {
		console.log(list)
		return [200, {
			list: list
		}]
	}
})
/********************/
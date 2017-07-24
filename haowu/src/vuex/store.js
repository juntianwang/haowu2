import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		author: 'zhang pei',
		cargoods: [
			{"cartsrc":"../../../static/cart_img/cart_3.png","cartgoods":"绿色系列装饰画","goodssel":"分类","goodsclassify":"组合小盆栽(有框)","num":1,"price":445,"goodsbol":false},
			{"cartsrc":"../../../static/cart_img/cart_2.png","cartgoods":"绿色系列装饰画","goodssel":"分类","goodsclassify":"小组和","num":1,"price":445,"goodsbol":false},
			{"cartsrc":"../../../static/cart_img/cart_1.png","cartgoods":"绿色系列装饰画","goodssel":"分类","goodsclassify":"小组和哈哈哈","num":1,"price":445,"goodsbol":false}
		
		],
		payGoods: [
		
		],
		aa:0,
		showAddr: {"name":"fd","phone":135,"address":"ds"},
		addrArr: [
//			{"name":"zhang","phone":1882335,"address":"北京市"}
		],
		detailcommunity:{},//社区详情数据接收
	  	community_col:false,//社区显示隐藏
	  	selected:0,//选中哪个
	  	me:{
	  		head: "../static/community/people.png", //头像
			name: "cristal", 
	  	},
	  	detailsolicitation:{},//晒晒
	  	hot:[],//最热
	  	last:[],//最新
	  	progress_kill: 1,
		progress_show: 1,
		navBefore: 0,
		shopDetail: {},
		detailBol: false,
		killBil: false,
		onBol: []

	}
})

export default store
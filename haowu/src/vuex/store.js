import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		author: 'zhang pei',
		cargoods: [
			{"cartsrc":"../../../static/cart_img/cart_3.png","cartgoods":"绿色系列装饰画","goodssel":"分类","goodsclassify":"组合小盆栽(有框)","num":1,"price":445,"goodsbol":false},
			{"cartsrc":"../../../static/cart_img/cart_3.png","cartgoods":"绿色系列装饰画","goodssel":"分类","goodsclassify":"组合小盆栽(有框)","num":1,"price":445,"goodsbol":false}
		],
		addrArr: [
			{"name":"zhang","phone":1882335,"address":"北京市"}
		]
	}
})

export default store
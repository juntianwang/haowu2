import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
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
  }
})

export default store
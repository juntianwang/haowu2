import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 定义状态
	state: {
		//主页
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
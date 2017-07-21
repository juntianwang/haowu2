import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 定义状态
	state: {
		progress_kill: 1,
		progress_show: 1,
		navBefore: 0
	}
})

export default store
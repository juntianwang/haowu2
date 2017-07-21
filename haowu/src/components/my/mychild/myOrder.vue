<template>
	<div id="myOrder">
		<header-go></header-go>
		<nav>
			<div v-for="(o,key) in nav_list" @click="tab(key)"><span>{{o}}</span></div>
		</nav>
		<div @touchstart="start" @touchend="end" style="position: absolute; width: 100%;">
			<div id="content_k">
			</div>
			<mt-tab-container v-model="active" :swipeable="true">
				<mt-tab-container-item id="tab-container0">
					<mt-cell v-for="n in nav_listcontent_0" title="tab-container0"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container1">
					<mt-cell v-for="n in nav_listcontent_1" title="tab-container1"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<mt-cell v-for="n in nav_listcontent_2" title="tab-container2"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<mt-cell v-for="n in nav_listcontent_3" title="tab-container3"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container4">
					<mt-cell v-for="n in nav_listcontent_4" title="tab-container4"></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import headerGo from "../../common/header";
	export default {
		data: function() {
			return {
				active: "tab-container0",
				nav_list: ["全部", "待付款", "待发货", "已发货", "已完成"],
				nav_listcontent_0: [1, 2, 3, 4, 5, 1, 4, 1, 34, 14, 1,1, 2, 3, 4, 5, 1, 4, 1, 34, 14, 1],
				nav_listcontent_1: [],
				nav_listcontent_2: [],
				nav_listcontent_3: [],
				nav_listcontent_4: [],
				tab_index: 0,
				x: 0,
				y:0
			}
		},
		components: {
			headerGo,
		},
		mounted() {
			var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
			var content_k = document.getElementById("content_k");
			var s = document.getElementsByClassName("mint-tab-container")[0];
			nav_list[0].setAttribute("class", "active");
			for(var i = 0; i < this.nav_list.length; i++) {
				if(this.nav_list[i] == this.$route.params.name) {
					nav_list[this.tab_index].removeAttribute("class", "active");
					this.tab_index = i;
					nav_list[this.tab_index].setAttribute("class", "active");
					this.active = "tab-container" + this.tab_index;
					if(this["nav_listcontent_" + this.tab_index].length <= 0) {
						s.style.display = "none";
						content_k.innerHTML = '<div class="default-box"><img src="../../../static/cart_img/default_cash_detail 2.png" alt="" /><p>最近一周没有剁手额</p><span @click = "shop">快去商城剁手吧</span>';
					}
				}

			}
		},
		methods: {
			tab(key) {
				var content_k = document.getElementById("content_k");
				var s = document.getElementsByClassName("mint-tab-container")[0];
				if(this["nav_listcontent_" + key].length <= 0) {
					s.style.display = "none";
					content_k.innerHTML = '<div class="default-box"><img src="../../../static/cart_img/default_cash_detail 2.png" alt="" /><p>最近一周没有剁手额</p><span @click = "shop">快去商城剁手吧</span>';
				} else {
					s.style.display = "block";
					content_k.innerHTML = "";
					this.active = "tab-container" + key;
				}
				var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
				nav_list[this.tab_index].removeAttribute("class", "active");
				this.tab_index = key
				nav_list[this.tab_index].setAttribute("class", "active");
			},
			shop() {
				this.$router.push({
					name: "",
					params: {}
				})
			},
			start(e) {
				var x = e.changedTouches[0].clientX;
				var y = e.changedTouches[0].clientY;
				this.x = x;
			},
			end(e) {
				var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
				var x = e.changedTouches[0].clientX;
				var y = e.changedTouches[0].clientY;
				var a = this.x - x;
				var b = this.y - y;
				var s = document.getElementsByClassName("mint-tab-container")[0];
				var t = 0;
				if(a > 60&&(b * -1)>60) {
					nav_list[this.tab_index].removeAttribute("class", "active");
					if(this.tab_index < 4) {
						this.tab_index++;
					}
					

				} else if((a * -1) > 60&&(b * -1) >10) {
					nav_list[this.tab_index].removeAttribute("class", "active");
					if(this.tab_index >= 1) {
						this.tab_index--;
					}
					
				}
				nav_list[this.tab_index].setAttribute("class", "active");
				if(this["nav_listcontent_" + this.tab_index].length <= 0) {
					s.style.display = "none";
					content_k.style.display = "block";
					this.active = "tab-container"+this.tab_index;
					content_k.innerHTML = '<div class="default-box"><img src="../../../static/cart_img/default_cash_detail 2.png" alt="" /><p>最近一周没有剁手额</p><span @click = "shop">快去商城剁手吧</span>';
				} else {
					s.style.display = "block";
					content_k.innerHTML = "";
					content_k.style.display = "none";
					this.active = "tab-container"+this.tab_index;
				}
//				e.preventDefault()
			}
			
		},
		watch: {
			active() {
				console.log(this.active)
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	#myOrder {
		height: 100%;
		position: relative;
	}
	
	nav {
		display: flex;
		text-align: center;
		margin-top: 1.06rem;
		margin-bottom: 0.04rem;
		border: 0.026666rem solid #ededed;
		>div {
			flex: 1;
			height: 0.93rem;
			line-height: 0.93rem;
			>span {
				display: block;
				width: 61%;
				height: 0.93rem;
				margin: 0 auto;
				font-size: 0.4rem;
				color: #818181;
			}
			>.active {
				border-bottom: 0.05rem solid #FFD914;
				color: #484848;
			}
		}
	}
	
	.mint-cell:last-child {
		background-image: none;
	}
	
	.default-box {
		height: 100%;
		text-align: center;
		img {
			display: block;
			width: 2.58rem;
			margin: 0 auto;
			margin-top: 5.33rem;
		}
		>p {
			padding: 0.53rem 0;
			text-align: center;
			font-size: 0.32rem;
			color: #4A4A4A;
		}
		>span {
			display: inline-block;
			margin-top: 0.66rem;
			padding: 0.33rem 0.2rem;
			color: #fdb80d;
			border: 0.04rem solid #fdb80d;
			border-radius: 4px;
		}
	}
</style>
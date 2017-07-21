<template>
	<div @touchstart="start" @touchend="end" id="myOrder">
		<header-go txt="我的订单"></header-go>
		<nav>
			<div v-for="(o,key) in nav_list" @click="tab(key)"><span>{{o}}</span></div>
		</nav>
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
</template>

<script>
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import headerGo from "../common/header";
	export default {
		data: function() {
			return {
				active: "tab-container0",
				nav_list: ["全部", "待付款", "待发货", "已发货", "已完成"],
				nav_listcontent_0: [],
				nav_listcontent_1: [],
				nav_listcontent_2: [],
				nav_listcontent_3: [],
				nav_listcontent_4: [],
				tab_index: 0,
				x: 0
			}
		},
		components: {
			headerGo,
		},
		mounted() {
			var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
			nav_list[0].setAttribute("class", "active");
			if(this.nav_listcontent_0.length <= 0) {
				var content_k = document.getElementById("content_k");
				content_k.innerHTML = '<div class="default-box"><img src="../../../static/cart_img/default_shopping_cart.png" alt="" /><p>最近一周没有剁手额</p><span @click = "shop">快去商城剁手吧</span>';
			}
		},
		methods: {
			tab(key) {
				var content_k = document.getElementById("content_k");
				var s = document.getElementsByClassName("mint-tab-container")[0];
				if(this["nav_listcontent_" + key].length <= 0) {
					s.style.display = "none";
					content_k.innerHTML = '<div class="default-box"><img src="../../../static/cart_img/default_shopping_cart.png" alt="" /><p>最近一周没有剁手额</p><span @click = "shop">快去商城剁手吧</span>';
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
				this.x = x;
				e.preventDefault()
			},
			end(e) {
				var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
				var x = e.changedTouches[0].clientX;
				var a = this.x - x;
				if(a > 30) {
					nav_list[this.tab_index].removeAttribute("class", "active");
					if(this.tab_index < 4) {
						this.tab_index++;
					}

				} else if((a * -1) > 30) {
					nav_list[this.tab_index].removeAttribute("class", "active");
					if(this.tab_index > 0) {
						this.tab_index--;
					}
				}
				nav_list[this.tab_index].setAttribute("class", "active");
				return false;

			}
		},
		watch: {
			active() {
				var rex = /\d/;
				var num = this.active.match(rex);
				var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
				nav_list[this.tab_index].removeAttribute("class", "active");
				this.tab_index = num[0]
				nav_list[this.tab_index].setAttribute("class", "active");
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	#myOrder {
		height: 100%;
	}
	
	nav {
		display: flex;
		text-align: center;
		margin-bottom: 0.04rem;
		border: 0.026666rem solid #ededed;
		>div {
			flex: 1;
			height: 0.93rem;
			line-height: 0.93rem;
			>span {
				display: block;
				width: 60%;
				height: 0.93rem;
				margin: 0 auto;
			}
			>.active {
				border-bottom: 0.05rem solid #FFD914;
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
			margin-top: 3.54rem;
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
<template>
	<div>
		<header-go></header-go>
		<div class="tip">
			<div>
				<span>0</span>
				<p>我的积分</p>
			</div>
		</div>
		<nav>
			<div v-for="(o,key) in nav_list" @click="tab(key)"><span>{{o}}</span></div>
		</nav>
		<div style="position: absolute; width: 100%;">
			<div id="content_k">
			</div>
			<mt-tab-container v-model="active">
				<mt-tab-container-item id="tab-container0">
					<mt-cell v-for="n in nav_listcontent_0" title="tab-container0"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container1">
					<mt-cell v-for="n in nav_listcontent_1" title="tab-container1"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<mt-cell v-for="n in nav_listcontent_2" title="tab-container2"></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import headerGo from "../../common/header";
	import { TabContainer, TabContainerItem } from 'mint-ui';
	export default {
		data() {
			return {
				tab_index: 0,
				active: "tab-container0",
				nav_list: ["兑换优惠券", "我的兑换记录", "获取更高积分"],
				nav_listcontent_0: [],
				nav_listcontent_1: [],
				nav_listcontent_2: [],
			}
		},
		methods: {
			tab(key) {
				var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
				var content_k = document.getElementById("content_k");
				var s = document.getElementsByClassName("mint-tab-container")[0];
				for(var i = 0; i < this.nav_list.length; i++) {
					if(this["nav_listcontent_" + this.tab_index].length <= 0) {
						s.style.display = "none";
						content_k.style.display = "block";
						if(key==0){
							content_k.innerHTML = '<div><img style=" width:2.13rem;" src="../../../static/cart_img/default_exchange_coupon2.png" alt=""/><p style="padding: 0.53rem 0;text-align: center;font-size: 0.32rem;color: #4A4A4A;">正在绞尽脑汁，给你想福利呢！</p>';
						}else if(key==1){
							content_k.innerHTML = '<div><img style=" width:2.13rem;" src="../../../static/cart_img/default_exchange_coupon_record2.png" alt="" /><p style="padding: 0.53rem 0;text-align: center;font-size: 0.32rem;color: #4A4A4A;">你不兑换，哪来的记录！</p>';
						}else if(key==2){
							content_k.innerHTML="";
						}
					} else {
						s.style.display = "block";
						content_k.style.display = "none";
						content_k.innerHTML = "";
					}
					nav_list[this.tab_index].removeAttribute("class", "active");
					this.tab_index = key;
					nav_list[this.tab_index].setAttribute("class", "active");
					this.active = "tab-container" + this.tab_index;

				}
			}
		},
		mounted() {
			var content_k = document.getElementById("content_k");
			var nav_list = document.getElementsByTagName("nav")[0].getElementsByTagName("span");
			if(this["nav_listcontent_" + this.tab_index].length <= 0) {
				content_k.style.display = "block";
				content_k.innerHTML = '<div><img <img style=" width:2.13rem;" src="../../../static/cart_img/default_exchange_coupon2.png" alt="" /><p>正在绞尽脑汁，给你想福利呢！</p>';
			}else{
				content_k.style.display = "none";
			}
			nav_list[0].setAttribute("class", "active");
		},
		components: {
			headerGo,
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	a:hover {
		text-decoration: none;
	}
	
	.tip {
		margin-top: 1.06rem;
		width: 100%;
		height: 5.57rem;
		background: url(../../../../static/my/activity_integral_one2.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
		>div {
			display: inline-block;
			width: 6rem;
			height: 4.13rem;
			background: url(../../../../static/my/activity_integral_two2.png) no-repeat center;
			background-size: 100% 100%;
			margin-top: 0.77rem;
			position: relative;
			>span:nth-child(1) {
				display: block;
				font-size: 0.8rem;
				margin-top: 1.3rem;
				padding: 0.56rem 0;
				color: #4a494b;
			}
			>p {
				font-size: 0.4rem;
				color: #2c292a;
			}
		}
		>div:nth-of-type(1):after {
			position: absolute;
			content: "";
			display: block;
			background: url(../../../../static/my/activity_integral_three2.png) no-repeat center;
			background-size: 100% 100%;
			width: 1.73rem;
			height: 1.3rem;
			top: 0;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
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
				width: 73%;
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
	#content_k{
		text-align: center;
		margin-top: 2.4rem;
	}
	
	.mint-tab-container {
		min-height: 8.98rem;
	}
	
	.mint-cell-wrapper {
		background-image: none;
	}
</style>
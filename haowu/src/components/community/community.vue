<template>
	<div class="wrap">
		<!--头部-->
		<div class="head">
			<!--头部搜索-->
			<app-header></app-header>
			<!--头部导航-->
			<ul class="nav">
				<li v-for="(item,index) in nav" v-on:click="select(index)" :class="selected==index?'selected':''">{{item.name}}</li>
				<li class="slider"><span></span></li>
			</ul>
		</div>
		<!--页面-->
		<mt-tab-container v-model="active" :swipeable="true" class="content" >
			<!--推荐-->
			<mt-tab-container-item id="recommend">
				<recommend></recommend>
			</mt-tab-container-item>
			<!--最新-->
			<mt-tab-container-item id="newest">
				<newest></newest>
			</mt-tab-container-item>
			<!--家饰-->
			<mt-tab-container-item id="decoration">
				<decoration></decoration>
			</mt-tab-container-item>
			<!--收纳-->
			<mt-tab-container-item id="accept">
				<accept></accept>
			</mt-tab-container-item>
			<!--餐厨-->
			<mt-tab-container-item id="meal">
				<meal></meal>
			</mt-tab-container-item>
			<!--家纺-->
			<mt-tab-container-item id="textiles">
				<textiles></textiles>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import axios from 'axios'; //引入模块
	import { TabContainer, TabContainerItem } from 'mint-ui'//左右切换
	import AppHeader from "./communityHeader"
	import Recommend from "./communityRecommend"//推荐
	import Newest from "./communityNewest"//最新
	import Decoration from "./communityDecoration"//家饰
	import Accept from "./communityAccept"//收纳
	import Meal from "./communityMeal"//餐厨
	import Textiles from "./communityTextiles"//家纺
	export default {
		components: {
			AppHeader,
			Recommend,
			Newest,
			Decoration,
			Accept,
			Meal,
			Textiles
		},
		data: function() {
			return {
				active: "recommend",
				selected: 0, //选中字体样式
				nav: [{
						url: "recommend",
						name: "推荐"
					},
					{
						url: "newest",
						name: "最新"
					},
					{
						url: "decoration",
						name: "家饰"
					},
					{
						url: "accept",
						name: "收纳"
					},
					{
						url: "meal",
						name: "餐厨"
					},
					{
						url: "textiles",
						name: "家纺"
					}
				],
				arr: ["recommend", "newest", "decoration", "accept", "meal", "textiles"],
			}
		},
		methods: {
			select(index) {
				this.active = this.nav[index].url;
			},
			//计算角度
			angle (start, end) {
			    var _X = end.X - start.X,
			      _Y = end.Y - start.Y
			    //返回角度 /Math.atan()返回数字的反正切值
			    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
 			}
		},
		watch: {
			//滑动监听
			active: function(val, old) {
				var oSlider = document.querySelector(".slider"); //slider
				var oNav = document.querySelector(".nav"); //ul
				var aLi = oNav.querySelectorAll("li");
				var index = 0;
				for(let i = 0; i < this.arr.length; i++) {
					if(this.arr[i] === val) {
						index = i
						this.selected = i
					}
				}
				var timer = null;
				var t = 0;
				var b = oSlider.offsetLeft;
				var end = aLi[index].offsetLeft;
				var c = end - b;
				var d = 10;
				clearInterval(timer);
				timer = setInterval(function() {
					t++;
					if(t >= d) {
						clearInterval(timer);
					}
					oSlider.style.left = Tween.Cubic.easeOut(t, b, c, d) + "px";
				}, 30)
			}
		},
		mounted: function() {
//			document.addEventListener("touchstart",function(ev){
//				var ev = ev || window.event;
//				var startX = ev.touches[0].clientX;
//				var startY = ev.touches[0].clientY;
//				document.addEventListener("touchmove",function(e){
//					var e = e || window.event;
//					var touchMoveX = e.touches[0].clientX;//滑动变化坐标
//					var touchMoveY = e.touches[0].clientY;//滑动变化坐标
//					//获取滑动角度
//					var angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
//					var distance = Math.abs(touchMoveX-startX);
//					if (Math.abs(angle) < 30 && distance>50) {
//						that.swiperbol = true;
//						console.log(that.swiperbol)
//						e.preventDefault()
//					}else{
//						  e.returnValue = true;
//					}
//				})
//			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	$font-color:#adadad;
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.clear:after {
		content: "";
		display: block;
		clear: both;
	}
	.wrap {
		width: 100%;
	}
	/*头部*/
	.head{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 21;
		background: white;
	}
	/*导航*/
	.nav {
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 0.36rem;
		color: $font-color;
		position: relative;
		border-bottom: 0.066666rem solid #ededed;
		li {
			width: 1.666666rem;
			text-align: center;
			line-height: 1rem;
		}
		.selected {
			color: #0a0a0a;
		}
		.slider {
			width: 1.666666rem;
			border-bottom: 0.066666rem solid #ffcf18;
			text-align: center;
			position: absolute;
			bottom: -0.06rem;
			left: 0;
		}
	}
	/*中间内容*/
	.content {
		width: 100%;
		margin-top: 2.93rem;
	}
</style>
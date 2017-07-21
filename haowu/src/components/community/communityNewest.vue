<template>
	<div class="newest">
		<div class="newest-content clear">
			<ul class="waterfall fl">
				<li v-for="(item,index) in newest_initial_one" class="newest-content-li">
					<div class="newest-content-img"><img :src="item.goods[0]"/></div>
					<div class="newest-content-mes">
						<p>{{item.mes}}</p>
					</div>
					<ul class="newest-content-foot">
						<li class="newest-content-head">
							<div><img :src="item.head" /></div>
							<p>{{item.name}}</p>
						</li>
						<li class="newest-content-good ">
							<div><img :src="item.goodbol?good[1]:good[0]" /></div>
							<p>{{item.good.length}}</p>
						</li>
					</ul>	
				</li>
			</ul>
			<ul class="waterfall fl">
				<li v-for="(item,index) in newest_initial_two" class="newest-content-li">
					<div class="newest-content-img"><img :src="item.goods[0]"/></div>
					<div class="newest-content-mes">
						<p>{{item.mes}}</p>
					</div>
					<ul class="newest-content-foot">
						<li class="newest-content-head">
							<div><img :src="item.head" /></div>
							<p>{{item.name}}</p>
						</li>
						<li class="newest-content-good ">
							<div><img :src="item.goodbol?good[1]:good[0]" /></div>
							<p>{{item.good.length}}</p>
						</li>
					</ul>	
				</li>
			</ul>
			
		</div>

	</div>

	</div>
</template>
<script>
	import axios from 'axios'; //引入模块
	import { InfiniteScroll } from 'mint-ui' //上拉加载
	import AppSwiper from "./communitySwiper"
	import Waterfall from 'vue-waterfall/lib/waterfall' //瀑布流
	import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot' //瀑布流
	export default {
		components: {
			AppSwiper,
			Waterfall,
			WaterfallSlot
		},
		data: function() {
			return {
				good: ["../../../static/community/good.png", "../../../static/community/good-s.png"], //点赞
				enshrine: ["../../../static/community/collect.png", "../../../static/community/collect-s.png"], //收集
				nomore: false,
				count:0,
				newest:[],
				newest_initial_one:[],
				newest_initial_two:[]
			}
		},
		methods: {
			clientH(){     		//获取窗口高度与滑动高度
				return window.innerHeight||document.documentElement.clientHeight;
			},
			scollY(){
				return document.body.scrollTop||document.documentElement.scrollTop;
			},	
			minHeightUlIndex() { // 找最小高度下标
				var oUl = document.getElementsByClassName("waterfall");
				var arr = [];
				function getStyle(obj, attr) {
					return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]) || 0;
				}
				for (var i = 0; i < oUl.length; i++) {
					var h = getStyle(oUl[i], "height");
					arr.push(h);
				}
					return arr.indexOf(Math.min.apply(null, arr));
			}
		},
		mounted:function(){
			var that = this
			//最新				
				axios.get('/community/newest', {
				params: {
					classes: "newest",
					begin:that.count,
					num:6
				}
			}).then(function(res) {
				that.newest = res.data.newest;
				for(let i=0;i<3;i++){
					that.newest_initial_one.push(that.newest[i]);
					that.newest_initial_two.push(that.newest[i+3])
				}
				that.count+=6;
				}).catch(function(error) {
				console.log(error)
			});
			var oUl = document.getElementsByClassName("waterfall");
			//滑动窗口自动创建
			window.onscroll=function(){
				var index= that.minHeightUlIndex();
				var minHeightUl=oUl[index];
				var windowHeight=that.clientH()+that.scollY();
				var UlHeight=minHeightUl.offsetHeight+minHeightUl.offsetTop;
				if (UlHeight<=windowHeight) {
					if(that.count>6){
						that.count = 0
					}
					if(index==0){
					//最新				
						axios.get('/community/newest', {
						params: {
							classes: "newest",
							begin:that.count,
							num:6
						}
					}).then(function(res) {
							for(let i=0;i<3;i++){
								that.newest_initial_one.push(that.newest[i]);
								that.newest_initial_two.push(that.newest[i+3])
							}
							
						}).catch(function(error) {
						console.log(error)
					});
					}else{
							axios.get('/community/newest', {
							params: {
								classes: "newest",
							}
						}).then(function(res) {
							for(let i=0;i<3;i++){
								that.newest_initial_two.push(that.newest[i]);
								that.newest_initial_one.push(that.newest[i+3])
							}
							}).catch(function(error) {
							console.log(error)
						});
					}
					that.count+=6
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
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
	/*清除滚轮*/
	
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		display: none;
	}
	.waterfall:nth-child(1){
		margin-right: 0.26rem;
	}
	.newest {
		padding: 0.133333rem 0.2rem 1.36rem;
		background: #f2f2f2;
		.newest-content-li {
			margin-top: 0.26rem;
			width: 4.66rem;
			background: white;
			border-radius: 0.2rem;
			.newest-content-img {
				width: 100%;
				img {
					width: 100%;
				}
			}
		}
		.newest-content-mes {
			margin-top: 0.2rem;
			padding: 0 0.2rem;
			font-size: 0.3rem;
			color: #424242;
			line-height: 0.44rem;
		}
		.newest-content-foot {
			padding: 0 0.2rem;
			margin-top: 0.26rem;
			margin-bottom: 0.33rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.newest-content-head {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				img {
					width: 0.73rem;
					height: 0.73rem;
					border-radius: 50%;
					margin-right: 0.13rem;
				}
				p {
					font-size: 0.32rem;
					color: #787878;
				}
			}
		}
		.newest-content-good {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img {
				width: 0.53rem;
				height: 0.53rem;
				margin-right: 0.13rem;
			}
			p {
				color: #adadad;
				font-size: 0.3rem
			}
		}
	}
	/*暂无更多商家*/
	
	.nomore {
		text-align: center;
		overflow: hidden;
		padding: 0.3rem;
	}
	
	.nomore .text {
		padding: 10px 20px;
		position: relative;
		font-size: 0.34rem;
		line-height: 0.4rem;
		color: gray;
	}
	
	.nomore .text::before,
	.nomore .text::after {
		position: absolute;
		top: 50%;
		border-top: 1px solid gray;
		content: '';
		height: 0;
		width: 2.933333rem;
	}
	
	.nomore .text::before {
		right: 100%;
	}
	
	.nomore .text::after {
		left: 100%;
	}
</style>
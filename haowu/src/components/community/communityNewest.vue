<template>
	<div class="newest">
		<div class="newest-content clear">
			<ul class="waterfall fl">
				<li v-for="(item,index) in newest_initial_one" class="newest-content-li" v-on:click="detail_one(index)">
					<div class="newest-content-img"><img :src="item.goods[0]" /></div>
					<div class="newest-content-mes">
						<p>{{item.mes}}</p>
					</div>
					<ul class="newest-content-foot">
						<li class="newest-content-head">
							<div><img :src="item.head" /></div>
							<p>{{item.name}}</p>
						</li>
						<li class="newest-content-good">
							<div v-on:click.stop="dogood_one(index)"><img :src="item.goodbol?good[1]:good[0]" /></div>
							<p>{{item.good.length}}</p>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="waterfall fl">
				<li v-for="(item,index) in newest_initial_two" class="newest-content-li" v-on:click="detail_two(index)">
					<div class="newest-content-img"><img :src="item.goods[0]" /></div>
					<div class="newest-content-mes">
						<p>{{item.mes}}</p>
					</div>
					<ul class="newest-content-foot">
						<li class="newest-content-head">
							<div><img :src="item.head" /></div>
							<p>{{item.name}}</p>
						</li>
						<li class="newest-content-good ">
							<div v-on:click.stop="dogood_two(index)"><img :src="item.goodbol?good[1]:good[0]" /></div>
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
	export default {
		components: {
			AppSwiper,
		},
		data: function() {
			return {
				good: ["../../../static/community/good.png", "../../../static/community/good-s.png"], //点赞
				enshrine: ["../../../static/community/collect.png", "../../../static/community/collect-s.png"], //收集
				count: 0,
				newest: [],
				newest_initial_one: [],
				newest_initial_two: [],
			}
		},
		methods: {
			clientH() { //获取窗口高度与滑动高度
				return window.innerHeight || document.documentElement.clientHeight;
			},
			scollY() {
				return document.body.scrollTop || document.documentElement.scrollTop;
			},
			minHeightUlIndex() { // 找最小高度下标
				var oUl = document.getElementsByClassName("waterfall");
				var arr = [];

				function getStyle(obj, attr) {
					return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]) || 0;
				}
				for(var i = 0; i < oUl.length; i++) {
					var h = getStyle(oUl[i], "height");
					arr.push(h);
				}
				return arr.indexOf(Math.min.apply(null, arr));
			},
			detail_one(index) {
				this.$store.state.detailcommunity = this.newest_initial_one[index];
				this.$store.state.community_col = true;
				this.$router.push({
					path: '/communitydetail'
				})
				//				axios.get('/api/shop/detail', {
				//					params: {
				//						search: this.otherContentList[index].name
				//					}
				//				}).then(function(res) {
				//					that.$store.state.shopDetail = res.data.list;
				//					that.$store.state.detailBol = true;
				//					console.log(res.data.list);
				//					that.$router.push({name:"goodsDetails",params:{data:res.data.list}})
				//				}).catch(function(error) {
				//					console.log(error)
				//				});
			},
			detail_two(index) {
				this.$store.state.detailcommunity = this.newest_initial_two[index];
				this.$store.state.community_col = true;
				this.$router.push({
					path: '/communitydetail'
				})
				//				axios.get('/api/shop/detail', {
				//					params: {
				//						search: this.otherContentList[index].name
				//					}
				//				}).then(function(res) {
				//					that.$store.state.shopDetail = res.data.list;
				//					that.$store.state.detailBol = true;
				//					console.log(res.data.list);
				//					that.$router.push({name:"goodsDetails",params:{data:res.data.list}})
				//				}).catch(function(error) {
				//					console.log(error)
				//				});
			},
			dogood_one(index) {
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return
				}
				this.newest_initial_one[index].goodbol = !this.newest_initial_one[index].goodbol;
				if(this.newest_initial_one[index].goodbol) {
					this.newest_initial_one[index].good.push(this.$store.state.me)
				} else {
					this.newest_initial_one[index].good.splice(this.newest_initial_one[index].good.length - 1, 1)
				}
			},
			dogood_two(index) {
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return
				}
				this.newest_initial_two[index].goodbol = !this.newest_initial_two[index].goodbol;
				if(this.newest_initial_two[index].goodbol) {
					this.newest_initial_two[index].good.push(this.$store.state.me)
				} else {
					this.newest_initial_two[index].good.splice(this.newest_initial_two[index].good.length - 1, 1)
				}
			},
		},
		mounted: function() {
			var that = this
			this.$store.state.community_col = false;
			//最新				
			axios.get('/community/newest', {
				params: {
					classes: "newest",
					begin: that.count,
					num: 6
				}
			}).then(function(res) {
				that.newest = res.data.newest;
				for(let i = 0; i < 3; i++) {
					that.newest_initial_one.push(that.newest[i]);
					that.newest_initial_two.push(that.newest[i + 3])
				}
				that.count += 6;
			}).catch(function(error) {
				console.log(error)
			});
			var oUl = document.getElementsByClassName("waterfall");
			//滑动窗口自动创建
			window.onscroll = function() {
				var index = that.minHeightUlIndex();
				var minHeightUl = oUl[index];
				var windowHeight = that.clientH() + that.scollY();
				var UlHeight = minHeightUl.offsetHeight + minHeightUl.offsetTop;
				if(UlHeight <= windowHeight) {
//					if(that.count>48){
//						return
//					}
						axios.get('/community/newest', {
							params: {
								classes: "newest",
								begin: that.count,
								num: 6
							}
						}).then(function(res) {
							if(res.data.newest.length<6){
								for(let i = 0; i < res.data.newest.length; i++) {
									if(i%2==0){
										that.newest_initial_one.push(that.newest[i])
									}else{
										that.newest_initial_two.push(that.newest[i])
									}
									
								}
								return
							}
							that.newest = res.data.newest
							for(let i = 0; i < 3; i++) {
								that.newest_initial_two.push(that.newest[i]);
								that.newest_initial_one.push(that.newest[i + 3])
							}
							that.count += 6
						}).catch(function(error) {
//							console.log(error)
							console.log(that.count)
							
						});
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
	
	.waterfall:nth-child(1) {
		margin-right: 0.26rem;
	}
	
	.newest {
		padding: 0.133333rem 0.2rem 1.36rem;
		background: #f2f2f2;
		.newest-content-li {
			margin-top: 0.26rem;
			width: 4.66rem;
			background: white;
			border-radius: 0.15rem;
			.newest-content-img {
				width: 100%;
				img {
					border-radius: 0.15rem 0.15rem 0 0/0.15rem 0.15rem 0 0;
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
<template>
	<div class="last">
		<div class="last-content clear">
			<ul class="waterfall fl">
				<li v-for="(item,index) in last_initial_one" class="last-content-li" v-on:click="detail_one(index)">
					<div class="last-content-img"><img :src="item.goods[0]" /></div>
					<div class="last-content-mes">
						<p>{{item.mes}}</p>
					</div>
					<ul class="last-content-foot">
						<li class="last-content-head">
							<div><img :src="item.head" /></div>
							<p>{{item.name}}</p>
						</li>
						<li class="last-content-good">
							<div v-on:click.stop="dogood_one(index)"><img :src="item.goodbol?good[1]:good[0]" /></div>
							<p>{{item.good.length}}</p>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="waterfall fl">
				<li v-for="(item,index) in last_initial_two" class="last-content-li" v-on:click="detail_two(index)">
					<div class="last-content-img"><img :src="item.goods[0]" /></div>
					<div class="last-content-mes">
						<p>{{item.mes}}</p>
					</div>
					<ul class="last-content-foot">
						<li class="last-content-head">
							<div><img :src="item.head" /></div>
							<p>{{item.name}}</p>
						</li>
						<li class="last-content-good ">
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
				last: [],
				last_initial_one: [],
				last_initial_two: [],
			}
		},
		methods: {
			detail_one(index) {
				this.$store.state.detailcommunity = this.last_initial_one[index];
				this.$store.state.community_col = true;
				this.$router.push({
					path: '/communitydetail'
				})
				//				axios.get('/api/shop/detail', {
				//					params: {
				//						search: this.otherContentList[index].name
				//					}
				//				}).then(function(res) {
				//					this.$store.state.shopDetail = res.data.list;
				//					this.$store.state.detailBol = true;
				//					console.log(res.data.list);
				//					this.$router.push({name:"goodsDetails",params:{data:res.data.list}})
				//				}).catch(function(error) {
				//					console.log(error)
				//				});
			},
			detail_two(index) {
				this.$store.state.detailcommunity = this.last_initial_two[index];
				this.$store.state.community_col = true;
				this.$router.push({
					path: '/communitydetail'
				})
				//				axios.get('/api/shop/detail', {
				//					params: {
				//						search: this.otherContentList[index].name
				//					}
				//				}).then(function(res) {
				//					this.$store.state.shopDetail = res.data.list;
				//					this.$store.state.detailBol = true;
				//					console.log(res.data.list);
				//					this.$router.push({name:"goodsDetails",params:{data:res.data.list}})
				//				}).catch(function(error) {
				//					console.log(error)
				//				});
			},
			dogood_one(index) {
				this.last_initial_one[index].goodbol = !this.last_initial_one[index].goodbol;
				if(this.last_initial_one[index].goodbol) {
					this.last_initial_one[index].good.push(this.$store.state.me)
				} else {
					this.last_initial_one[index].good.splice(this.last_initial_one[index].good.length - 1, 1)
				}
			},
			dogood_two(index) {
				this.last_initial_two[index].goodbol = !this.last_initial_two[index].goodbol;
				if(this.last_initial_two[index].goodbol) {
					this.last_initial_two[index].good.push(this.$store.state.me)
				} else {
					this.last_initial_two[index].good.splice(this.last_initial_two[index].good.length - 1, 1)
				}
			},
		},
		mounted: function() {
			setTimeout(() => {
				this.last = this.$store.state.last;
				for(let i = 0; i < 2; i++) {
					this.last_initial_one.push(this.last[i]);
					this.last_initial_two.push(this.last[i + 2])
				}
			}, 100)

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
	
	.last {
		padding: 0.133333rem 0.2rem 1.36rem;
		background: #f2f2f2;
		.last-content-li {
			margin-top: 0.26rem;
			width: 4.66rem;
			background: white;
			border-radius: 0.15rem;
			.last-content-img {
				width: 100%;
				img {
					border-radius: 0.15rem 0.15rem 0 0/0.15rem 0.15rem 0 0;
					width: 100%;
				}
			}
		}
		.last-content-mes {
			margin-top: 0.2rem;
			padding: 0 0.2rem;
			font-size: 0.3rem;
			color: #424242;
			line-height: 0.44rem;
		}
		.last-content-foot {
			padding: 0 0.2rem;
			margin-top: 0.26rem;
			margin-bottom: 0.33rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.last-content-head {
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
		.last-content-good {
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
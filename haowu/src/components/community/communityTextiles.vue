<template>
	<div class="textiles">
		<div class="textiles-content">
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li v-for="(item,index) in initial" class="textiles-content-li" v-on:click="detail(index)">
					<div class="textiles-content-head">
						<div><img :src="item.head" /></div>
						<p>{{item.name}}</p>
					</div>
					<app-swiper :swiperSlides="item.goods" class="textiles-content-img"></app-swiper>
					<ul class="clear textiles-content-foot">
						<li class="fl">
							<div v-on:click.stop="dogood(index)"><img :src="item.goodbol?good[1]:good[0]" /></div>
							<p>{{item.good.length}}</p>
						</li>
						<li class="fl">
							<div v-on:click.stop="docollect(index)"><img :src="item.collect?enshrine[1]:enshrine[0]" /></div>
							<p>{{item.collect?"已收藏":"收藏"}}</p>
						</li>
						<li class="fl">
							<div><img src="../../../static/community/talk.png" /></div>
							<p>{{item.talk.length}}</p>
						</li>
					</ul>
					<div class="textiles-content-mes">
						<p>{{item.mes}}</p>
					</div>
				</li>
			</ul>
			<div class="nomore" v-if="nomore">
				<span class="text">暂无更多</span>
			</div>
		</div>
	</div>

	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import axios from 'axios'; //引入模块
	import { InfiniteScroll } from 'mint-ui' //上拉加载
	import AppSwiper from "./communitySwiper"
	import { Toast } from 'mint-ui';
	export default {
		components: {
			AppSwiper
		},
		data: function() {
			return {
				good: ["../../../static/community/good.png", "../../../static/community/good-s.png"], //点赞
				enshrine: ["../../../static/community/collect.png", "../../../static/community/collect-s.png"], //收集
				nomore: false,
				loading: false,
				count: 0,
				textiles: [],
				initial: [],
				num: 0,
				finish: false,
				loading: false
			}
		},
		methods: {
			loadMore() {
				var that = this;
				if(this.loading) {
					return false
				}
				if((this.finish) || (this.$store.state.community_col) || (this.$store.state.selected != 5)) {

					return
				}
				this.loading = true;
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				//有数据时
				axios.get('/community/textiles', {
					params: {
						classes: "textiles",
						num: 4,
						begin: that.count
					}
				}).then(function(res) {
					that.textiles = res.data.textiles;
					setTimeout(() => {
						if(that.textiles.length >= 4) {
							for(let i = 0; i < 4; i++) {
								that.initial.push(that.textiles[i])
							}
							that.count += 4;
						} else {
							for(let i = 0; i < that.textiles.length; i++) {
								that.initial.push(that.textiles[i])
							}
							that.count += that.textiles.length;
						}
						Indicator.close();
						that.loading = false;
					}, 1000)

				}).catch(function(error) {
					setTimeout(() => {
						Indicator.close();
						that.loading = false;
						that.finish = true;
						that.nomore = true;
					}, 1000)
				});
			},
			detail(index) {
				this.$store.state.detailcommunity = this.initial[index];
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
			dogood(index) {
				this.initial[index].goodbol = !this.initial[index].goodbol;
				if(this.initial[index].goodbol) {
					this.initial[index].good.push(this.$store.state.me)
				} else {
					this.initial[index].good.splice(this.initial[index].good.length - 1, 1)
				}
			},
			docollect(index) {
				this.initial[index].collect = !this.initial[index].collect;
				if(this.initial[index].collect) {
					Toast({
						message: '收藏成功',
						iconClass: "mintui mintui-field-success",
						duration: 1000,
						className: "tip"
					});
				} else {
					Toast({
						message: '已取消',
						iconClass: "mintui mintui-field-move",
						duration: 1000,
						className: "tip"
					});
				}
			}
		},
		mounted: function() {
			var that = this;
			this.$store.state.community_col = false;
			//家纺
			axios.get('/community/textiles', {
				params: {
					classes: "textiles",
					begin: that.count,
					num: 4
				}
			}).then(function(res) {
				//家饰
				that.textiles = res.data.textiles;
				//有数据时
				for(let i = 0; i < 4; i++) {
					that.initial.push(that.textiles[i])
				}
				that.count += 4;
			}).catch(function(error) {
				console.log(error)
			});
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
	
	.textiles-content-li {
		margin-top: 0.26rem;
	}
	
	.textiles {
		padding: 0.133333rem 0 1.36rem;
		.textiles-head {
			padding: 0 0.4rem 0.15rem;
			border-bottom: 0.02rem solid #e8e7e7;
			p {
				color: #bdbdbd;
				margin-bottom: 0.133333rem;
				img {
					width: 0.6rem;
					height: 0.6rem;
					vertical-align: middle;
					margin-top: -0.1rem;
				}
			}
			div {
				width: 100%;
				overflow-x: scroll;
				ul {
					width: 40rem;
					display: flex;
					justify-content: space-around;
					flex-wrap: nowrap;
					li {
						width: 4.26rem;
						height: 2.13rem;
						position: relative;
						text-align: center;
						img {
							border-radius: 0.15rem;
							width: 100%;
							height: 100%;
						}
						p {
							width: 100%;
							text-align: center;
							position: absolute;
							top: 44%;
							color: white;
							font-size: 0.28rem
						}
					}
				}
			}
		}
		.textiles-content {
			margin-top: 0.13rem;
			.textiles-content-head {
				padding: 0 0.4rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				img {
					width: 0.73rem;
					height: 0.73rem;
					border-radius: 50%;
				}
				p {
					margin-left: 0.16rem;
					color: #757575;
					font-size: 0.32rem;
				}
			}
			.textiles-content-img {
				padding: 0 0.4rem;
				margin-top: 0.20rem;
			}
			.textiles-content-foot {
				padding: 0 0.4rem;
				margin-top: 0.15rem;
				margin-bottom: 0.15rem;
				li {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-right: 0.66rem;
					color: #adadad;
					font-size: 0.3rem;
					img {
						width: 0.53rem;
						height: 0.53rem;
						margin-right: 0.06rem;
					}
				}
			}
			.textiles-content-mes {
				border-top: 0.02rem solid #e8e7e7;
				border-bottom: 0.13rem solid #dbdada;
				p {
					padding: 0.4rem;
				}
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
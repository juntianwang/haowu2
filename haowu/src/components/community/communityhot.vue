<template>
	<div class="hot">
		<div class="hot-content">
			<ul>
				<li v-for="(item,index) in initial" class="hot-content-li" v-on:click="detail(index)">
					<div class="hot-content-head">
						<div><img :src="item.head" /></div>
						<p>{{item.name}}</p>
					</div>
					<app-swiper :swiperSlides="item.goods" class="hot-content-img"></app-swiper>
					<ul class="clear hot-content-foot">
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
					<div class="hot-content-mes">
						<p>{{item.mes}}</p>
					</div>
				</li>
			</ul>
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
				count: 0,
				hot: [],
				initial: [],
			}
		},
		methods: {
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
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return
				}
				this.initial[index].goodbol = !this.initial[index].goodbol;
				if(this.initial[index].goodbol) {
					this.initial[index].good.push(this.$store.state.me)
				} else {
					this.initial[index].good.splice(this.initial[index].good.length - 1, 1)
				}
			},
			docollect(index) {
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return
				}
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
				setTimeout(()=>{
					this.hot =this.$store.state.hot;
					console.log(this.hot)
					this.initial=this.hot;
				},100)
				
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
	
	.hot-content-li {
		margin-top: 0.26rem;
	}
	
	.hot {
		padding: 0.133333rem 0 1.36rem;
		.hot-head {
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
		.hot-content {
			margin-top: 0.13rem;
			.hot-content-head {
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
			.hot-content-img {
				padding: 0 0.4rem;
				margin-top: 0.20rem;
			}
			.hot-content-foot {
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
			.hot-content-mes {
				border-top: 0.02rem solid #e8e7e7;
				border-bottom: 0.13rem solid #dbdada;
				p {
					padding: 0.4rem;
				}
			}
		}
	}
</style>
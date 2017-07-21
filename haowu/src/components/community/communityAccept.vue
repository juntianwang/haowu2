<template>
	<div class="accept">
		<div class="accept-content">
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li v-for="(item,index) in initial" class="accept-content-li">
					<div class="accept-content-head">
						<div><img :src="item.head" /></div>
						<p>{{item.name}}</p>
					</div>
					<app-swiper :swiperSlides="item.goods" class="accept-content-img"></app-swiper>
					<ul class="clear accept-content-foot">
						<li class="fl">
							<div><img :src="item.goodbol?good[1]:good[0]" /></div>
							<p>{{item.good.length}}</p>
						</li>
						<li class="fl">
							<div><img :src="item.collect?enshrine[1]:enshrine[0]" /></div>
							<p>收藏</p>
						</li>
						<li class="fl">
							<div><img src="../../../static/community/talk.png" /></div>
							<p>{{item.talk.length}}</p>
						</li>
					</ul>
					<div class="accept-content-mes">
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
	import axios from 'axios'; //引入模块
	import { InfiniteScroll } from 'mint-ui' //上拉加载
	import AppSwiper from "./communitySwiper"
	export default {
		components: {
			AppSwiper
		},
		data: function() {
			return {
				good: ["../../../static/community/good.png", "../../../static/community/good-s.png"], //点赞
				enshrine: ["../../../static/community/collect.png", "../../../static/community/collect-s.png"], //收集
				nomore: false,
				count:0,
				accept:[],
				initial:[]
			}
		},
		methods: {
			loadMore() {
				if(!this.accept.length) {
					this.loading = false;
					this.nomore = true;
					return
				}
				this.loading = true;
				if(this.accept.length >= 4) {
					//每次加载4个
					for(let i = 0; i < 4; i++) {
						this.initial.push(this.accept.splice(0, 1)[0])
					}
				} else if(this.accept.length < 4) {
					for(let i = 0; i < this.accept.length; i++) {
						this.initial.push(this.accept.splice(0, 1)[0])
					}
				}
			}
		},
		mounted:function(){
			//收纳
			var that = this;
			axios.get('/community/accept', {
				params: {
					classes: "accept",
					num:4,
					begin:that.count
				}
			}).then(function(res) {
				that.accept = res.data.accept;
				that.initial = that.accept.splice(0,4);
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
	.accept-content-li {
		margin-top: 0.26rem;
	}
	
	.accept {
		padding: 0.133333rem 0 1.36rem;
		.accept-head {
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
		.accept-content {
			margin-top: 0.13rem;
			.accept-content-head {
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
			.accept-content-img {
				padding: 0 0.4rem;
				margin-top: 0.20rem;
			}
			.accept-content-foot {
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
			.accept-content-mes {
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
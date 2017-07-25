<template>
	<div class="solicitation">
		<div clas="solicitation-head">
			<div class="img-head">
				<img :src="detailsolicitation.head" />
			</div>
			<div class="return" v-on:click="back"><img src="../../../static/community/return.png" /></div>
			<div class="load" v-on:click="share"><img src="../../../static/community/load.png" /></div>
		</div>
		<ul class="solicitation-content">
			<li v-for="item in detailsolicitation.content">{{item}}</li>
		</ul>
		<div class="more"><div v-on:click="dropdown"><img :src="drop?more[1]:more[0]"/> {{drop?"收起":"更多"}}</div></div>
		<div class="solicitation-foot">
			<ul class="solicitation-title">
				<li :class="pick==0?'selected':''" v-on:click="selecthot">热门</li>
				<li :class="pick==1?'selected':''" v-on:click="selectlast">最新</li>
				<li class="slider"><span></span></li>
			</ul>
			<community-hot v-show="bol"></community-hot>
			<router-view v-if="!bol"></router-view>
		</div>
		<mt-popup v-model="popupVisible" position="bottom" pop-transition="popup-fade">
				<div class="share">
					<p>请选择分享平台</p>
					<ul>
						<li>
							<a href="http://www.jiathis.com/send/?webid=tsina&url=http://www.urlurl.com&title=微博">
								<div>
									<img src="../../../static/community/weibo.png"/>
								</div>
								<p>新浪微博</p>
							</a>

						</li>
						<li>
							<a href="http://www.jiathis.com/send/?webid=weixin&url=$siteUrl&title=$siteTitle">
								<div><img src="../../../static/community/wechat.png" /></div>
								<p>微信</p>
							</a>
						</li>
						<li>
							<a href="http://www.jiathis.com/send/?webid=qzone&url=$siteUrl&title=$siteTitle">
								<div><img src="../../../static/community/qq.png" /></div>
								<p>QQ</p>
							</a>
						</li>
					</ul>
					<p v-on:click="cancel">取消分享</p>
				</div>
			</mt-popup>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import axios from 'axios'; //引入模块
	import AppSwiper from "./communitySwiper"
	import { Toast } from 'mint-ui';
	import { Popup } from 'mint-ui';
	import CommunityHot from "./communityhot"
	export default {
		components: {
			AppSwiper,
			CommunityHot
		},
		computed: {
			detailsolicitation() {
				return this.$store.state.detailsolicitation
			}
	},
		data: function() {
			return {
				good: ["../../../static/community/good.png", "../../../static/community/good-s.png"], //点赞
				enshrine: ["../../../static/community/collect.png", "../../../static/community/collect-s.png"], //收集
				count: 0,
				solicitation: [],
				initial: [],
				popupVisible: false,
				more:["../../../static/community/pickdown.png","../../../static/community/pickup.png"],
				pick:0,
				drop:false,
				bol:true
			}
		},
		methods: {
			dropdown(){
				var oUl=document.querySelector(".solicitation-content");
				this.drop = !this.drop;
				if(this.drop){
					oUl.style.height = "auto";
				}else{
					oUl.style.height = "2.66rem";
				}
			},
			selecthot(){
				this.pick=0;
				this.bol = true
			},
			selectlast(){
				this.pick=1;
				var that = this;
				axios.get('/community/solicitation-last', {
					params: {
						classes: "solicitation-last",
						num: 4
					}
				}).then(function(res) {
					//热门
					that.$store.state.last = res.data.last;
				}).catch(function(error) {
					console.log(error)
				});
				this.bol = false
				this.$router.push({path:'/communitylast'})	
			},
			detail(index) {
				this.$store.state.detailcommunity = this.initial[index];
				this.$router.push({
					path: '/communitydetail'
				})
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
			},
			back(){
				this.$router.push({
					path: "/community"
				})
				this.$store.state.community_col = false;

			},
			share(){
				this.popupVisible = true;
			},
			cancel(){
				this.popupVisible=false;
			},
		},
		mounted: function() {
			var that = this;
			console.log(this.$store.state.detailsolicitation)
			//家纺
//			axios.get('/community/solicitation-hot', {
//				params: {
//					classes: "solicitation-hot",
//					begin: that.count,
//					num: 4
//				}
//			}).then(function(res) {
//				//家饰
//				that.solicitation = res.data.solicitation;
//				//有数据时
//				for(let i = 0; i < 4; i++) {
//					that.initial.push(that.solicitation[i])
//				}
//				that.count += 4;
//			}).catch(function(error) {
//				console.log(error)
//			});
	},
	watch: {
			//滑动监听
			pick: function(val, old) {
				var oSlider = document.querySelector(".slider"); //slider
				var oNav = document.querySelector(".solicitation-title"); //ul
				var aLi = oNav.querySelectorAll("li");
				var timer = null;
				var t = 0;
				var b = oSlider.offsetLeft;
				var end = aLi[val].offsetLeft;
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
		mounted:function(){
			var that = this;
			axios.get('/community/solicitation-hot', {
				params: {
					classes: "solicitation-hot",
					num: 4
				}
			}).then(function(res) {
				//热门
				that.$store.state.hot = res.data.hot;
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
	.solicitation{
		width: 100%;
	}
	.solicitation-head{
		position:relative;
	}
	.img-head{
		width: 100%;
		overflow: hidden;
	}
	.img-head{
		img{width: 100%;
			height: 100%;
			}
	}
	.solicitation-content{
		padding: 0.4rem;
		padding-bottom: 0;
		font-size:0.37rem;
		color:#7d7d7d;
		height: 2.66rem;
		overflow: hidden;
		li{
			margin-bottom: 0.3rem;
		}
	}
	.more{
		display: flex;
		justify-content: space-around;
		align-items: center;
		color:#979797;
		font-size:0.37rem;
		margin-bottom: 0.26rem;
		margin-top: 0.26rem;
		img{
			width: 0.4rem;
			height: 0.4rem;	
		}
		
	}
	.solicitation-foot{
		width: 100%;
		.solicitation-title{
			border-top: 0.02rem solid lightgray;
			border-bottom: 0.02rem solid lightgray;
			display: flex;
			justify-content: space-around;
			align-items: center;
			position:relative;
			li{
				width: 5rem;
				font-size: 0.4rem;
				text-align: center;
				line-height: 1.06rem;
				color:#8a8a8a;
			}
			.selected{
				color: rgba(0,0,0,0.8);
			}
			.slider{
				width: 4.66rem;
				border-bottom: 0.066666rem solid #ffcf18;
				text-align: center;
				position: absolute;
				bottom: -0.04rem;
				left: 0;
			}
		}
	}
	/*返回*/
	.return {
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
				border: 0.02rem solid white;
				background-color: rgba(0, 0, 0, 0.2);
				position: absolute;
				top: 0.4rem;
				left: 0.33rem;
				z-index: 30;
				display: flex;
				align-items: center;
				justify-content: space-around;
				img {
					width: 0.6rem;
					margin-left: -0.06rem;
				}
			}
			.load {
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
				border: 0.02rem solid white;
				background-color: rgba(0, 0, 0, 0.2);
				position: absolute;
				top: 0.4rem;
				right: 0.33rem;
				z-index: 30;
				display: flex;
				align-items: center;
				justify-content: space-around;
				img {
					width: 0.6rem;
				}
			}
	/*分享*/
	.share {
		width: 10rem;
		background: #eaeff3;
		text-align: center;
		padding-top: 0.4rem;
		p:nth-child(1) {
			font-size: 0.38rem;
			color: #989da1;
		}
		ul {
			margin-top: 0.26rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			li {
				a {
					text-decoration: none;
					div {
						width: 1.2rem;
						height: 1.2rem;
						background: white;
						border-radius: 50%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						img {
							width: 0.7rem;
							height: 0.7rem;
						}
					}
					p {
						margin-top: 0.13rem;
						color: #4a4f53;
					}
				}
			}
		}
		p:nth-child(3) {
			margin-top: 0.26rem;
			font-size: 0.34rem;
			line-height: 0.8rem;
			background: #f6fafd;
			color: #3f4346;
		}
	}
</style>
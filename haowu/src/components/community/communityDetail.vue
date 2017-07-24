<template>
	<!--<transition name="move"  v-if="community_col">-->
		<div class="detail-wrap">
		<div class="detail-head">
			<app-swiper :swiperSlides="del.goods"></app-swiper>
			<div class="return" v-on:click="back"><img src="../../../static/community/return.png" /></div>
			<div class="load"  v-on:click="share"><img src="../../../static/community/load.png" /></div>
		</div>
		<div class="detail-content">
			<ul class="detail-content-head">
				<li>
					<div><img :src="del.head" /></div>
					<p>{{del.name}}</p>
				</li>
				<li><img src="../../../static/community/more.png" /></li>
			</ul>
			<p>{{del.mes}}</p>
			<p>{{del.time}}</p>
			<ul>
				<li v-on:click="dogood" :class="gooded?'selectgood':''"><img :src="gooded?good[1]:good[0]" /></li>
				<li v-on:click="docollect" :class="collected?'selectcollect':''"><img :src="collected?enshrine[1]:enshrine[0]" /></li>
			</ul>
		</div>
		<div class="detail-foot">
			<div class="good">
				<ul class="good_head">
					<li v-for="(item,index) in del.good">
						<img :src="item.head" />
					</li>
				</ul>
				<p>{{del.good.length}}次赞</p>
			</div>
			<div class="talk">
				<div class="talk-head">
					<p>回帖 {{del.talk.length}}</p>
					<div>
						<p :class="selected==1?'talk-select':''" v-on:click="hot">热门</p>
						<p :class="selected==2?'talk-select':''" v-on:click="last">最新</p>
					</div>
				</div>
				<ul class="talk-content">
					<li v-for="(item,index) in del.talk">
							<div>
								<div><img :src="item.head" /></div>
								<p>{{item.name}}</p>
							</div>
							<p>{{item.mes}}</p>
							<p>{{item.time}}</p>
					</li>
				</ul>
			</div>
		</div>
		<mt-popup
		  v-model="popupVisible"
		  position="bottom" pop-transition="popup-fade">
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
							<div><img src="../../../static/community/wechat.png"/></div>
							<p>微信</p>
						</a>
					</li>
					<li>
						<a href="http://www.jiathis.com/send/?webid=qzone&url=$siteUrl&title=$siteTitle">
							<div><img src="../../../static/community/qq.png"/></div>
							<p>QQ</p>
						</a>
					</li>
				</ul>
				<p v-on:click="cancel">取消分享</p>
			</div>
		</mt-popup>
	</div>
	<!--</transition>-->
	
</template>

<script>
	import AppSwiper from "./communitySwiper"
	import { Toast } from 'mint-ui';
	import { Popup } from 'mint-ui';
	export default {
		components: {
			AppSwiper
		},
		computed: {
			del() {
				return this.$store.state.detailcommunity
			},
		   	community_col () {
		     return this.$store.state.community_col
		 	},
		},
		data: function() {
			return {
				good: ["../../../static/community/good.png", "../../../static/community/good-s.png"], //点赞
				enshrine: ["../../../static/community/collect.png", "../../../static/community/collect-s.png"], //收集
				selected:1,
				popupVisible:false,
				gooded:"",//点赞
				collected:"",//收藏
			}
		},
		methods:{
			back(){
				this.$router.push({path:history.go(-1)})
				this.$store.state.community_col=false;
				
			},
			share(){
				this.popupVisible = true;
			},
			hot(){
				this.selected=1;
			},
			last(){
				this.selected=2;
			},
			cancel(){
				this.popupVisible=false;
			},
			dogood(){
				this.gooded = !this.gooded;
			},
			docollect(){
				this.collected = !this.collected;
				if(this.collected){					
					Toast({
					  message: '收藏成功',
					  iconClass:"mintui mintui-field-success",
					  duration: 1000,
					  className:"tip"
					});
				}else{
					Toast({
					  message: '已取消',
					  iconClass:"mintui mintui-field-more",
					  duration: 1000,
					  className:"tip"
					});
				}
				
			}
		},
		mounted:function(){
			if(this.del.goodbol){
				this.gooded = true;
			}else{
				this.gooded = false;
			}
			if(this.del.collect){
				this.collected = true;
			}else{
				this.collected =false;
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.detail-wrap {
		width: 100%;
		background: white;
		.detail-head {
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
		}
		.detail-content{
			padding: 0 0.4rem;
			.detail-content-head {
				width: 100%;
				margin-top: 0.3rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 0.3rem;
				border-bottom: 0.02rem solid #e1dede;
				li:nth-child(1){
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
						color: #202221;					
					}
				}
				li:nth-child(2){
					img{
						width: 0.73rem;
						height: 0.73rem;
					}
				}
				
			}
			p:nth-child(2){
				margin-top: 0.26rem;
				font-size: 0.36rem;
				line-height: 0.66rem;
				color: #626262;
			}
			p:nth-child(3){
				font-size: 0.3rem;
				margin-top: 0.26rem;
				color: #bbbbbb;
				text-align: right;
			}
			ul:nth-child(4){
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 0.26rem;
				li{
					width: 1.26rem;
					height: 1.26rem;
					border: 0.02rem solid rgba(0,0,0,0.5);
					border-radius: 50%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					img{
						width: 1rem;
						height: 1rem;
					}
				}
				.selectgood{
					border: 0.02rem solid #e0d73f;
				}
				.selectcollect{
					border: 0.02rem solid #fb474f;
				}
			}
		}
		.detail-foot{
			width: 100%;
			margin-top: 0.26rem;
			.good{
				padding: 0 0.4rem;
				background: #fff9eb;
				ul{	
					padding-top: 0.4rem;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					li{
						img {	
							width: 0.75rem;
							height: 0.75rem;
							border-radius: 50%;
							margin-right: 0.15rem;
						}
					}
				}
				p{
					width: 100%;
					text-align: center;
					line-height: 1rem;
					font-size: 0.34rem;
					color: #93908b;
				}
			}
			.talk{
				width: 100%;
				.talk-head{
					padding: 0.3rem 0.4rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom:0.02rem solid #eaeaea;
					border-top:0.02rem solid #eaeaea;
					p:nth-child(1){
						color: #868686;
					}
					div:nth-child(2){
						display: flex;
						justify-content: flex-start;
						align-items: center;
						border: 0.05rem solid #9c9c9c;
						border-radius: 0.13rem;
						p{
							width: 1.33rem;
							text-align: center;
							line-height: 0.66rem;
							color: #afafaf;
						}
						.talk-select{
							background: #9c9c9c;
							color: white;
						}
					}
				}
				.talk-content{
					width: 100%;
					background: white;
					li{
						padding: 0.3rem 0.4rem;
						border-bottom: 0.02rem solid #eaeaea;
						div:nth-child(1){
							display: flex;
							justify-content:flex-start;
							align-items: center;
							img{
								width: 0.73rem;
								height: 0.73rem;
								border-radius: 50%;
								margin-right: 0.18rem;
							}
						}
						p:nth-child(2){
							font-size: 0.36rem;
							line-height: 0.6rem;
						}
						p:nth-child(3){
							text-align: right;
							margin-top: 0.26rem;
							font-size: 0.32rem;
							color: #bbbbbb;
						}
					}
					
				}
			}
		}
		.share{
			width: 10rem;
			background: #eaeff3;
			text-align: center;
			padding-top: 0.4rem;
			p:nth-child(1){
				font-size: 0.38rem;
				color: #989da1;
			}
			ul{
				margin-top: 0.26rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				li{
					a{
						text-decoration: none;
						div{
						width: 1.2rem;
						height: 1.2rem;
						background: white;
						border-radius: 50%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						img{
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
			p:nth-child(3){
				margin-top: 0.26rem;
				font-size: 0.34rem;
				line-height: 0.8rem;
				background: #f6fafd;
				color: #3f4346;
			}
		}
	}
	.move-enter-active,.move-leave-active{
		transition: all 0.5s ease-out; 
	}
	.move-enter{
		transform:translateX(10rem);
		opacity: 0;
	}
	.move-leave-active{
		transform:translateX(10rem);
		opacity: 0;
	}
</style>
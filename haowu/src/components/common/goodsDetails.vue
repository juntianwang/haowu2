<template>
	<transition name="goDetail">
	<div id="goodsDetails" v-if="detailBol">
		<div class="title">
			<point-swiper :banner="detailList.pic"></point-swiper>
			<div class="kill" v-if="killBol">
				<img class="fl" :src="detailList.pic[0]" alt="" />
				<p class="fl">限时秒杀,客官可以等一等哦~</p>
			</div>
			<h1>{{detailList.name}}</h1>
			<p>￥&nbsp;{{detailList.money}}</p>
			<div style="margin-bottom: 0.37rem;">
				<div class="icon">
					<img src="../../../static/community/littlegrey.png" alt="" />30天无忧退货
				</div>
				<div class="icon">
					<img src="../../../static/community/littlegrey.png" alt="" />24小时内发货
				</div>
				<div class="icon">
					<img src="../../../static/community/littlegrey.png" alt="" />满88全场包邮
				</div>
			</div>
			<div @click="tip" class="div_tip">
				<p style="width: 93%;margin: 0 auto;">数量规格</p>
			</div>
			<p>推荐理由</p>
			<p> 皮质挂钩，一个装饰性的实用品。从整理内心开始，打造独属于你的舒适生活。 ——《收纳的艺术》</p>
			<div class="tip">
				<div>
					<div>
						<div class="img_box">
							<img :src="classImg" alt="" class="shopimg" />
						</div>
						<div class="price">
							<span>￥&nbsp;{{detailList.selects[onIndex].money}}</span>
							<span>{{stock}}</span>
						</div>
						<div class="icon-close" @click="iconclose">
							<img src="../../../static/community/icon-close.png" alt="" />
						</div>
						<div class="info">
							<p>已选：分类：<span id="txt">{{detailList.selects[onIndex].title}}</span></p>
							<div id="inputnum">
								<span @click="rt"></span>
								<input type="txt" name="number" class="number" value=""  v-model="goodsNum"/>
								<span @click="add()"></span>
							</div>
						</div>
					</div>
					<p style="margin-top: 0.45rem; font-size: 0.4rem; color: #4A4A4A;">分类</p>
					<div class="select_tip">
						<ul>
							<li v-for="(item,index) in detailList.selects" @click="select_list(item,index)" :class="{liOn:liBol[index]}">
								{{item.title}}
							</li>
						</ul>
					</div>

				</div>
			</div>
			<p class="upLoad" @click="up">↑点击查看图文详情</p>
			<div class="content" v-show="upBol" style="width: 100%;">
				<img style="width: 100%;" v-for="src in detailList.content" :src="src" alt="" />
			</div>
		</div>
		<div class="footer">
			<input type="button" name="" id="" value="加入购物车" @click="shopcart" />
			<input type="button" name="" id="" value="立即购买" @click="buy" />
			<div class="carImg">
				<img :src="carSrc"/>
				<div class="carNum">{{carNum}}</div>
			</div>
		</div>
	</div>
	</transition>
</template>

<script>
	import pointSwiper from "./pointSwiper";
	import carSrc from '../../../static/shopping/shopCarList.png';
	import carSrcOn from '../../../static/shopping/shopCarListOn.png';
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				i: 0,
				buyBol: false,
				upBol: false,
				timer: null,
				classImg: null,
				liBol: [],
				onIndex: 0,
				goodsNum : 1,
				buyList: [],
				addBol: false,
				stock: '库存充足',
				carSrc: carSrc
			}
		},
		computed: {
			detailBol() {
				return this.$store.state.detailBol;
			},
			killBol() {
				return this.$store.state.killBol;
			},
			detailList() {	
				for (var i = 0; i < this.$store.state.shopDetail.selects.length; i++) {
					if (i == 0) {
						this.liBol.push(true)
					} else {
						this.liBol.push(false)
					}
				}
				return this.$store.state.shopDetail
			},
			//购物车数量
			carNum() {
				if (this.detailList.selects[this.onIndex].num <= 0) {
					this.goodsNum = 0;
					this.stock = '已售完'
				} else if (this.detailList.selects[this.onIndex].num <= 5) {
					this.stock = '库存紧张'
				} else {
					this.stock = '库存充足'
				}
				if (this.goodsNum >= this.detailList.selects[this.onIndex].num) {
					this.goodsNum = this.detailList.selects[this.onIndex].num;
				}
				if (this.$store.state.carNum != 0) {
					this.carSrc = carSrcOn;
				}
				return this.$store.state.carNum;
			}
		},
		watch: {},
		methods: {
			tip() {
				var tip = document.getElementsByClassName("tip")[0];
				tip.style.opacity = 1;
				tip.style.display = "block";
				this.buyBol = true;
			},
			iconclose() {
				var tip = document.getElementsByClassName("tip")[0];
				tip.style.opacity = 0;
				tip.style.display = "none";

			},
			rt() {
				this.goodsNum -- ;
				if (this.goodsNum <= 0) {
					this.goodsNum = 0;
				}
				this.buyList[this.onIndex] = this.goodsNum;
			},
			add() {
				if (this.addBol) {
					return;
				}
				this.goodsNum ++ ;
				if (this.goodsNum >= this.detailList.selects[this.onIndex].num) {
					this.goodsNum = this.detailList.selects[this.onIndex].num
				}
				this.buyList[this.onIndex] = this.goodsNum;
			},
			select_list(item, index) {
				for (var i = 0; i < this.detailList.selects.length; i++) {
					this.liBol.splice(i,1,false);
				};
				this.liBol.splice(index,1,true);
				this.onIndex = index;
				this.classImg = this.detailList.selects[index].src;
				if (this.detailList.selects[index].num <= 0) {
					this.goodsNum = 0;
					this.addBol = true;
				} else {
					this.goodsNum = this.buyList[index];
					this.addBol = false;
				}
				if (this.detailList.selects[index].num <= 0) {
					this.goodsNum = 0;
					this.stock = '已售完'
				} else if (this.detailList.selects[index].num <= 5) {
					this.stock = '库存紧张'
				} else {
					this.stock = '库存充足'
				}
				console.log(this.buyList[index])
			},
			shopcart() {
				if (!this.buyBol) {
					return;
				}
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return;
				}
				console.log(this.buyList[this.onIndex])
				if (this.detailList.selects[this.onIndex].num <= 0) {
					return;
				}
				this.detailList.selects[this.onIndex].num -= this.buyList[this.onIndex];
				if (this.detailList.selects[this.onIndex].num <= 0) {
					this.detailList.selects[this.onIndex].num = 0;
				}
				this.buyList[this.onIndex] = this.goodsNum;
				this.$store.state.carNum += this.buyList[this.onIndex];
			},
			buy() {
				this.$router.push({
					name: "",
					params: {}
				})
			},
			//
			up() {
				var that = this;
				this.upBol = true;
				setTimeout(() => {
					clearInterval(this.timer);
					this.timer = setInterval(function() {
						var scorl = document.documentElement.scrollTop || document.body.scrollTop;
						var speed = (1200 - scorl) / 8;
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						if(scorl >= 1200) {
							clearInterval(that.timer);
							document.body.scrollTop = document.documentElement.scrollTop = 1200;
						} else {
							document.body.scrollTop = document.documentElement.scrollTop = scorl + speed;
						}
					}, 17)
				}, 50)
			}
		},
		mounted() {
			var that = this;
			this.classImg = this.detailList.selects[0].src;
			this.upBol = false;
			//分类数量
			if (this.detailList.selects[0].num <= 0) {
				this.goodsNum = 0;
				this.stock = '已售完'
			} else if (this.detailList.selects[0].num <= 5) {
				this.stock = '库存紧张'
			} else {
				this.stock = '库存充足'
			}
			
			for (var i = 0; i < this.detailList.selects.length; i++) {
				if (this.detailList.selects[i].num == 0) {
					this.buyList.push(0)
				} else {
					this.buyList.push(1)
				}
			}
			console.log(this.buyList);
		},
		components: {
			pointSwiper
		}
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">
	.liOn {
		background: rgba(0,0,0,0.2);
	}
	.upLoad {
		width: 100%;
		border-bottom: 0.02rem solid lightgrey;
		border-top: 0.02rem solid lightgray;
		text-align: center;
		line-height: 0.64rem;
		color: #5b5b5b;
		margin: 0.26rem 0;
	}
	
	#goodsDetails {
		width: 100%;
		overflow: hidden;
		.title {
			margin-bottom: 2rem;
			>h1 {
				margin-top: 0.37rem;
				margin-left: 0.4rem;
				font-size: 0.48rem;
				margin-bottom: 0.5rem;
				color: #4A4A4A;
			}
			>p:nth-of-type(1) {
				font-size: 0.48rem;
				color: #E75058;
				margin-bottom: 0.33rem;
				margin-left: 0.4rem;
			}
			>p:nth-of-type(2) {
				font-size: 0.4rem;
				padding-top: 0.37rem;
				padding-bottom: 0.37rem;
				padding-left: 0.34rem;
				color: #777777;
			}
			>p:nth-of-type(3) {
				font-size: 0.4rem;
				padding-left: 0.34rem;
				padding-right: 0.34rem;
				line-height: 0.66rem;
				color: #9c9c9c;
				margin-bottom: 0.26rem;
			}
			.icon {
				display: inline-block;
				height: 0.37rem;
				font-size: 0.32rem;
				margin-right: 0.08rem;
				margin-left: 0.4rem;
				color: #9c9c9c;
				img {
					width: 0.37rem;
					height: 0.37rem;
					display: inline-block;
					margin-right: 0.05rem;
					vertical-align: bottom;
				}
			}
			.tip {
				top: 0;
				background: rgba(0, 0, 0, 0.4);
				position: fixed;
				width: 100%;
				height: 100%;
				z-index: 5;
				opacity: 0;
				display: none;
				>div {
					position: relative;
					height: 60%;
					background: #fff;
					margin-top: 60%;
					padding: 0.57rem 0.29rem 0.57rem 0.29rem;
					>div {
						overflow: hidden;
					}
					.img_box {
						float: left;
						width: 2.18rem;
						height: 2.18rem;
						margin-right: 0.24rem;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.price {
						margin-bottom: 0.24rem;
						font-size: 0.4rem;
						>span:nth-of-type(1) {
							color: #E75058;
						}
					}
					.icon-close {
						width: 0.52rem;
						height: 0.52rem;
						position: absolute;
						right: 0.29rem;
						top: 0.57rem;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.select_tip {
						ul {
							overflow: hidden;
							margin-top: 0.36rem;
							li {
								float: left;
								text-align: center;
								width: 30%;
								height: 0.8rem;
								border-radius: 4px;
								line-height: 0.73rem;
								border: 0.03rem solid #9C9C9C;
								margin-right: 0.26rem;
								margin-bottom: 0.66rem;
							}
						}
					}
					.info {
						font-size: 0.4rem;
						>p {
							color: #9C9C9C;
							margin-bottom: 0.26rem;
						}
						>div {
							width: 2.9rem;
							height: 0.80rem;
							border: 0.03rem solid #777;
							float: left;
							>span:nth-of-type(1) {
								float: left;
								display: block;
								width: 0.84rem;
								height: 0.80rem;
								background: url(../../../static/community/icon-sub.png) no-repeat center;
							}
							>input:nth-of-type(1) {
								float: left;
								width: 1.22rem;
								height: 0.79rem;
								vertical-align: middle;
								text-align: center;
								border: none;
							}
							>span:nth-of-type(2) {
								float: right;
								display: block;
								width: 0.84rem;
								height: 0.80rem;
								background: url(../../../static/community/icon-plus.png) no-repeat center;
							}
						}
					}
				}
			}
			.content {
				img {
					display: block;
					margin: 0 auto;
				}
			}
			.div_tip {
				padding: 0.37rem 0.34rem;
				border-bottom: 0.03rem solid #e6e6e6;
				border-top: 0.03rem solid #e6e6e6;
				p {
					font-size: 0.4rem;
					color: #777777;
					position: relative;
				}
				p:after {
					content: "";
					position: absolute;
					right: 0;
					background: url(../../../static/community/icon_follow2.png) no-repeat center;
					width: 0.4rem;
					height: 0.4rem;
				}
			}
		}
		.footer {
			width: 100%;
			height: 1.3rem;
			position: fixed;
			bottom: 0;
			text-align: right;
			line-height: 1.3rem;
			background: #fff;
			z-index: 9999;
			border-top: 0.03rem solid #e6e6e6;
			>input {
				width: 2.61rem;
				height: 0.89rem;
				border-radius: 0.08rem;
			}
			>input:nth-of-type(1) {
				border: 0.03rem solid #777;
				color: #777;
				background: #fff;
			}
			>input:nth-of-type(2) {
				border: 0.03rem solid #FFD914;
				color: #4A4A4A;
				background: #FFD914;
				margin-right: 0.29rem;
				margin-left: 0.26rem;
			}
			
		}
	}
	.carImg {
		position: absolute;
		top: 0;
		left: 0;
		width: 20%;
		height: 1.33rem;
		img {
			width: 0.85rem;
			display: block;
			margin: 0.24rem 0.4rem;
		}
		.carNum {
				width: 0.46rem;
				height: 0.46rem;
				border-radius: 50%;
				background: red;
				color: white;
				text-align: center;
				line-height: 0.46rem;
				position: absolute;
				top: 10%;
				left: 55%;
			}
	}
	.goDetail-enter{
		transform:translateX(10rem);
		opacity: 0;
	}
	.goDetail-leave-active{
		transform:translateX(10rem);
		opacity: 0;
	}
	
	.goDetail-enter-active,.goDetail-leave-active{
		transition: all 0.5s ease-out; 
	}
	.kill {
		width: 100%;
		overflow: hidden;
		background: #D3D3D3;
		img {
			width: 0.66rem;
			height: 0.66rem;
			margin-left: 5%;
		}
		p {
			line-height: 0.66rem;
			margin-left: 10%;
			color: orangered;
		}
	}
	.fl {
		float: left;
	}
</style>
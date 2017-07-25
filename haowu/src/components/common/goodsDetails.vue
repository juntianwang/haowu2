<template>
	<transition name="goDetail">
	<div id="goodsDetails" v-if="detailBol">
		<div v-for="(o,key) in list" class="title" :key="key">
			<point-swiper :banner="o.src"></point-swiper>
			<div class="kill" v-if="killBol">
				<img class="fl" :src="o.src[0]" alt="" />
				<p class="fl">限时秒杀,客官可以等一等哦~</p>
			</div>
			<h1>{{o.title}}</h1>
			<p>{{o.price}}&nbsp;￥</p>
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
			<div @click="tip">
				<p style="width: 93%;margin: 0 auto;">数量规格</p>
			</div>
			<p>推荐理由</p>
			<p> 皮质挂钩，一个装饰性的实用品。从整理内心开始，打造独属于你的舒适生活。 ——《收纳的艺术》</p>
			<div class="tip">
				<div>
					<div>
						<div class="img_box">
							<img :src="o.src[0]" alt="" class="shopimg" />
						</div>
						<div class="price">
							<span>￥&nbsp;{{o.price}}</span>
							<span>(库存充足)</span>
						</div>
						<div class="icon-close" @click="iconclose">
							<img src="../../../static/community/icon-close.png" alt="" />
						</div>
						<div class="info">
							<p>已选：分类：<span id="txt">{{o.select_tip[0].title}}</span></p>
							<div id="inputnum">
								<span @click="rt"></span>
								<input type="txt" name="number" class="number" value="1" />
								<span @click="add(o)"></span>
							</div>
						</div>
					</div>
					<p style="margin-top: 0.45rem; font-size: 0.4rem; color: #4A4A4A;">分类</p>
					<div class="select_tip">
						<ul>
							<li v-for="(o,key) in o.select_tip" @click="select_list(o,key)">
								{{o.title}}
							</li>
						</ul>
					</div>

				</div>
			</div>
			<p class="upLoad" @click="up">↑点击查看图文详情</p>
			<div class="content" v-show="upBol" style="width: 100%;">
				<img style="width: 100%;" v-for="a in o.content" :src="a" alt="" />
			</div>
		</div>
		<div class="footer">
			<input type="button" name="" id="" value="加入购物车" @click="shopcart" />
			<input type="button" name="" id="" value="立即购买" @click="buy" />
		</div>
	</div>
	</transition>
</template>

<script>
	import pointSwiper from "./pointSwiper";
	export default {
		data() {
			return {
				list: [],
				i: 0,
				upBol: false,
				timer: null
			}
		},
		computed: {
			detailBol() {
				return this.$store.state.detailBol;
			},
			killBol() {
				return this.$store.state.killBol;
			}
		},
		watch: {},
		methods: {
			tip() {
				var tip = document.getElementsByClassName("tip")[0];
				tip.style.opacity = 1;
				tip.style.display = "block";
			},
			iconclose() {
				var tip = document.getElementsByClassName("tip")[0];
				tip.style.opacity = 0;
				tip.style.display = "none";

			},
			rt() {
				var num = document.getElementsByClassName("number")[0];
				if(num.value > 0) {
					num.value--
				}
			},
			add(a) {
				var num = document.getElementsByClassName("number")[0];
				if((num.value * 1) < a.select_tip[this.i].num) {
					num.value++
				}
			},
			select_list(a, key) {
				var txt = document.getElementById("txt");
				var num = document.getElementsByClassName("number")[0];
				var inputnum = document.getElementById("inputnum");
				var soldout = document.getElementsByClassName("price")[0].getElementsByTagName("span")[1];
				var shopimg = document.getElementsByClassName("shopimg")[0];
				txt.innerText = a.title;
				this.i = key;
				if(a.num <= 0) {
					inputnum.style.display = "none";
					soldout.innerText = "(已售完)";
					num.value = 0;
				} else if(a.num >= 10) {
					inputnum.style.display = "block";
					soldout.innerText = "(存库充足)";
					num.value = 1;
				} else {
					inputnum.style.display = "block";
					soldout.innerText = "(剩余" + a.num + "件)";
					num.value = 1;
				}
				shopimg.src = this.list[0].src[key];

			},
			shopcart() {
				this.$router.push({
					name: "",
					params: {}
				})
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
			//			this.list.push(this.$route.params.data);
			console.log(this.list)
			this.list.push(this.$store.state.shopDetail);
			this.upBol = false;
		},
		components: {
			pointSwiper
		}
	}
</script>

<style lang="scss" type="text/css">
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
				text-align: center;
				overflow: hidden;
				img {
					display: inline-block;
				}
			}
			>div:nth-of-type(3) {
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
			z-index: 5;
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
	.goDetail-enter{
		transform:translateX(10rem);
		opacity: 0;
	}
	.goDetail-leave-active{
		transform:translateX(10rem);
		opacity: 0;
	}
	
	.goDetail-enter-active,.goDetail-leave-active{
		transition: all 0.3s ease-out; 
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
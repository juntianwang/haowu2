<template>
	<div id="goodsDetails">
		<div v-for="(o,key) in list" class="title">
			<point-swiper :banner="o.src"></point-swiper>
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
				<p>数量规格</p>
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
			<div class="content">
				<img v-for="a in o.content" :src="a" alt="" />
			</div>
		</div>
		<div class="footer">
			<input type="button" name="" id="" value="加入购物车" @click = "shopcart"/>
			<input type="button" name="" id="" value="立即购买" @click = "buy"/>
		</div>
	</div>
</template>

<script>
	import pointSwiper from "./pointSwiper";
	export default {
		data() {
			return {
				list: [],
				i:0
			}
		},
		computed: {},
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
				if((num.value*1) < a.select_tip[this.i].num) {
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
			shopcart () {
				this.$router.push({name:"",params:{}})
			},
			buy () {
				this.$router.push({name:"",params:{}})              
			}

		},
		mounted() {
			this.list.push(this.$route.params.data);
		},
		components: {
			pointSwiper
		}
	}
</script>

<style lang="scss" type="text/css">
	#goodsDetails {
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
</style>
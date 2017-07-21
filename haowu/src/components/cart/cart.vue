<template>
	<div class="cart">
		<div class="cart_head">
			<h6>我的购物车</h6>
			<ul class="u1">
				<li v-for="item in cartArr">
					<img src="../../../static/cart_img/gou.png"/>
					<div>{{item}}</div>
				</li>			
			</ul>
		</div>
		<div v-show="cartbol">
			<img src="../../../static/cart_img/default_shopping_cart.png" alt="" />
			<p>购物车该捕获啦</p>
			<button @click="home">去首页挑选</button>
		</div>
		<div id="cart_goods" v-show="cartbol">
			<p>——————<span>看看这些精品</span>——————</p>
			<ul>
				<li v-for="(item,index) in cartshowpic" @click="toshopcar(index)">
					<!--{{item.showpic}}-->
					<img :src="item.showpic" alt="" />
					<p>{{item.goods}}</p>
					<span>￥{{item.price}}</span>
				</li>
			</ul>
		</div>
		<car-msg v-show="!cartbol"></car-msg>
		
		<app-nav></app-nav>
	</div>
</template>

<script>
	import AppNav from "../common/AppNav"
	import axios from 'axios'
	import carMsg from './carMsg'
	export default {
		data () {
			return {
				cartArr: ["30天无忧退货","24小时快速发货","全场88包邮"],
				cartbol: false,
				cartshowpic: []
			}
		},
		computed: {
			cargoods () {
				return this.$store.state.cargoods
			}
		},
		watch: {
			cargoods () {
				if (this.cargoods.length==0) {
					this.cartbol = true;
				}else{
					this.cartbol = false;
				}
			}
		},
		components: {
			AppNav,
			carMsg	
		},
		methods: {
			home () {
				alert("跳到首页");
				
			},
			toshopcar (k) {
				alert(k);
			}
		},
		mounted: function () {

			axios.get("/cart/pic")
				 .then((response)=>{
//				 	console.log(response.data.cartpic[0]);
//				 	this.cartshowpic = response.data.cartpic;
			});
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
.cart{
	.cart_head{
		height: 2.1rem;
	}
	h6{
		color: rgb(116,117,118);
		position: fixed;
		background-color: white;
		width: 100%;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		font-size: 0.533333rem;
	}
	.cart_head ul:nth-of-type(1){
		position: fixed;
		background-color: white;
		top: 1rem;
		width: 100%;
		border-top: 0.026666rem solid rgb(242,243,242);
		border-bottom: 0.026666rem solid rgb(242,243,242);
		height: 1rem;
		line-height:1rem;
		li{
			width: 33.3%;
			text-align: center;
			font-size: 0.32rem;
			display: inline-block;
			img{
				width: 0.37rem;
				height: 0.39rem;
				margin-top: 0.33rem;
			}
			div{
				display: inline-block;
			}
		}
	}
	
	div:nth-of-type(2){
		text-align: center;
		img{
			width: 40%;
			margin-top: 1.01rem;
		}
		p{
			font-size: 0.42rem;
			height: 0.44rem;
			line-height: 0.44rem;
			margin: 0.62rem 0;
		}
		button{
			width: 2.5rem;
			height: 0.85rem;
			border: 0.02rem solid rgb(252,180,12);
			font-size: 0.44rem;
			background-color: white;
			color: rgb(252,180,12);
			border-radius: 0.15rem;
		}
		
	}
	div:nth-of-type(3){
		margin-top: 1.09rem;
		color: rgb(166,166,166);
		text-align: center;
		span{
			font-size: 0.41rem;
			margin: 0.4rem;
		}
	}
	#cart_goods{
		ul{
			border-top: none;
			border-bottom: none;
			margin-bottom: 1.4rem;
			li{
				display: inline-block;
				width: 50%;
				margin-top: 4%;
				img{
					width: 80%;
				}
				p{
					margin: 0.26rem;
					font-size: 0.35rem;
				}
				span{
					color: red;
					font-size: 0.35rem;
				}
			}
		}
	}
	
	
}



</style>
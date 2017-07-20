<template>
	<div class="cart">
		<div>
			<h6>我的购物车</h6>
			<ul>
				<li v-for="item in cartArr">
					<img src="../../../static/cart_img/gou.png"/>
					<div>{{item}}</div>
				</li>			
			</ul>
		</div>
		
		<div>
			<img src="../../../static/cart_img/default_shopping_cart.png" alt="" />
			<p>购物车该捕获啦</p>
			<button @click="home">去首页挑选</button>
		</div>
		<div>
			<p>——————<span>看看这些精品</span>——————</p>
		</div>
	
		<app-nav></app-nav>
	</div>
</template>

<script>
	import AppNav from "../common/AppNav"
	import axios from 'axios'
	export default {
		data () {
			return {
				cartArr: ["30天无忧退货","24小时快速发货","全场88包邮"]
			}
		},
		methods: {
			home () {
				alert("跳到首页");
			}
		},
		mounted: function () {
			
		},
		components:{
  			AppNav,
  		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
.cart{
	h6{
		width: 100%;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		font-size: 0.533333rem;
	}
	ul:nth-of-type(1){
		width: 100%;
		border-top: 0.026666rem solid gray;
		border-bottom: 0.026666rem solid gray;
		height: 1rem;
		line-height:1rem;
		margin-top: 0.06rem;
		li{
			width: 33.3%;
			text-align: center;
			font-size: 0.32rem;
			display: inline-block;
			img{
				width: 0.293333rem;
				height: 0.293333rem;
			}
			div{
				display: inline-block;
			}
		}
	}
	
	div:nth-of-type(2){
		text-align: center;
		img{
			width: 4rem;
			height: 5rem;
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
	
	
}



</style>
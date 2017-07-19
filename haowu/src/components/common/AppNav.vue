<template>
	<footer>
		<router-link v-for="(item,index) in arr" :key="index" :to="item.url">
			<div v-on:click="skip(index)">
				<img :src="item.bol?item.sel:item.src" />
				<p :class="{red:item.bol}">{{item.name}}</p>
			</div>
		</router-link>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
						"name": "商城",
						url: "/",
						src: "../static/img/shopping.png",
						sel: "../static/img/shopping-s.png",
						bol: true
					},
					{
						"name": "社区",
						url: "/community",
						src: "../static/img/community.png",
						sel: "../static/img/community-s.png",
						bol: false
					},
					{
						"name": "购物车",
						url: "/cart",
						src: "../static/img/cart.png",
						sel: "../static/img/cart-s.png",
						bol: false
					},
					{
						"name": "我的",
						url: "/my",
						src: "../static/img/my.png",
						sel: "../static/img/my-s.png",
						bol: false
					}
				]
			}
		},
		methods: {
			skip(index) {
				for(let i = 0; i < this.arr.length; i++) {
					this.arr[i].bol = false;
				}
				this.arr[index].bol = true;
				this.footer = index;
				localStorage.footer = this.footer;
			}
		},
		mounted: function() {
			var that = this;
			for(let i = 0; i < this.arr.length; i++) {
				this.arr[i].bol = false;
			}
			if(!localStorage.footer) {
				localStorage.footer = 0;
			}
			this.arr[localStorage.footer].bol = true;
		}
	}
</script>

<style scoped>
	
	footer {
		width: 100%;
		height: 1.333333rem;
		position: fixed;
		bottom: 0;
		font-size: 0.34rem;
		display: flex;
		justify-content: space-around;
		text-align: center;
		background:#f9f9f9;
		align-items: center;
		z-index: 100;
		border-top: 0.026666rem solid #ededed;
	}
	
	footer a {
		display: block;
		color: #828282;
		text-decoration: none;
	}
	
	img {
		width: 0.6rem;
	}
	
	.red {
		color: #dbd11f;
	}
	
	p {
		margin-top: 0.133333rem
	}
</style>
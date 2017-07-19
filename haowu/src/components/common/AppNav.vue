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
//						src: "../static/img/home.png",
//						sel: "../static/img/home-s.png",
						bol: true
					},
					{
						"name": "社区",
						url: "/community",
//						src: "../static/img/explore.png",
//						sel: "../static/img/explore-s.png",
						bol: false
					},
					{
						"name": "购物车",
						url: "/cart",
//						src: "../static/img/point.png",
//						sel: "../static/img/point-s.png",
						bol: false
					},
					{
						"name": "我的",
						url: "/my",
//						src: "../static/img/my.png",
//						sel: "../static/img/my-s.png",
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
		height: 100px;
		position: fixed;
		bottom: 0;
		font-size: 30px;
		display: flex;
		justify-content: space-around;
		text-align: center;
		background: #48382b;
		align-items: center;
		z-index: 999;
	}
	
	footer a {
		display: block;
		color: #c3ad88;
		text-decoration: none;
	}
	
	img {
		width: 45px;
	}
	
	.red {
		color: #6bb53a;
	}
	
	p {
		margin-top: 10px;
	}
</style>
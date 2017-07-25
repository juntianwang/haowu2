<template>
	<div>
		<header-go></header-go>
		<div id="inner">
			<div><img src="../../../../static/cart_img/wallet_img.jpg" alt="" /></div>
			<div>
				<div>
					<h2>￥&nbsp;0.00</h2>
					<p>待入账金额</p>
				</div>
				<div>
					<h2>￥&nbsp;0.00</h2>
					<p>可提现金额</p>
				</div>
			</div>
			<ul class="list_select">
				<li v-for=" o in list" @click="to(o.name,o.to)">{{o.name}}</li>
			</ul>
			<button type="button" class="btn">我要提现</button>
			<p class="tip">可提金额超过10元可申请提现</p>
		</div>
	</div>
</template>

<script>
	import headerGo from "../../common/header";
	
	export default {
		data() {
			return {
				list: [{
						name: "入账明细",
						to: "mybookeddetails"
					},
					{
						name: "提现明细",
						to: "mywithdrawal"
					},
					{
						name: "红包攻略",
						to: "mystrategy"
					},
					{
						name: "常见问题",
						to: "commonP"
					}
				]
			}
		},
		methods:{
			to (a,to) {
				this.$router.push({name:to,params:{name:a}})
			}
		},
		components: {
			headerGo,
		},
	}
</script>

<style lang="scss" scoped type="text/css">
	#inner {
		width: 100%;
		margin-top: 1.06rem;
		margin-bottom: 0.93rem;
		>div:nth-of-type(1) {
			width: 100%;
			img {
				width: 100%;
			}
		}
		>div:nth-of-type(2) {
			height: 3.33rem;
			border-bottom: 0.04rem solid #f1f1f1;
			>div {
				float: left;
				width: 49.5%;
				height: 100%;
				position: relative;
				text-align: center;
				>h2 {
					padding: 0.64rem 0;
					font-size: 0.66rem;
					color: #72b73a;
				}
				>p {
					font-size: 0.44rem;
					color: #72b73a;
				}
			}
			>div:nth-of-type(1) {
				margin-right: 1%;
				h2 {
					color: #e35257;
				}
				p {
					color: #e35257;
				}
			}
			>div:nth-of-type(1):after {
				top: 0;
				bottom: 0;
				right: -1%;
				margin: auto 0;
				position: absolute;
				display: block;
				content: "";
				height: 1.22rem;
				width: 0.04rem;
				background: #979797;
			}
		}
		.list_select {
			>li {
				height: 1.96rem;
				line-height: 1.96rem;
				padding-left: 0.6rem;
				border-bottom: 0.04rem solid #f1f1f1;
				font-size:0.41rem;
				color: #7b7b7b;
			}
		}
		.btn {
			display: block;
			width: 4.26rem;
			height: 1.28rem;
			background: #eaeaea;
			color: #fff;
			border: none;
			margin: 0 auto;
			margin-top: 0.56rem;
			font-size: 0.4rem;
			
		}
		.tip{
			font-size: 0.4rem;
			color: #d0d0d0;
			text-align: center;
			margin-top: 0.36rem;
		}
	}
</style>
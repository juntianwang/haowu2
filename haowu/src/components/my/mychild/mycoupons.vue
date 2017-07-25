<template>
	<!--我的优惠券-->
	<div>
		<header-go></header-go>
		<div class="tip">
			<span>使用规则</span>
		</div>
		<div class="vouchers" @click="inputj"><img src="../../../../static/my/activity_coupon_icon2.png" style="width: 0.77rem; height: 0.5rem;" alt="" />输入优惠码兑换优惠券</div>
		<div id="content_k">
			<div class="default-box">
				<img src="../../../../static/my/default_coupon2.png" alt="" />
				<p>翻箱倒柜，也没发现优惠券！</p>
			</div>
		</div>
		<div id="mask">
			<div class="inner">
				<div style="width: 100%; text-align: center; margin-bottom: 0.69rem;"><img style="width: 3.8rem; margin-top: 1.25rem;" src="../../../../static/my/dialog_get_coupon_icon2.png" /></div>
				<input type="text" name="" placeholder="请输入优惠码" @click="input_1" @blur="input_2"/>
				<button>立即兑换</button>
			</div>
			<div style="width: 1.33rem;" id="close" @click="close"><img style="display: block; width: 100%;" src="../../../../static/my/icon_activity_close2.png" /></div>
		</div>
	</div>
</template>

<script>
	import headerGo from "../../common/header";
	export default {
		data() {
			return {
				content: []
			}
		},
		methods: {
			inputj() {
				var mask = document.getElementById("mask");
				mask.style.display = "block";
			},
			input_1 (){
				var close = document.getElementById("close");
				close.style.display = "none";
			},
			input_2 () {
				var close = document.getElementById("close");
				close.style.display = "block";
			},
			close (){
				var mask = document.getElementById("mask");
				mask.style.display = "none";
			}
		},
		mounted() {
			var default_box = document.getElementsByClassName("default-box")[0];
			if(this.content.length == 0) {
				default_box.style.display = "block"
			} else {
				default_box.style.display = "none"
			}
		},
		components: {
			headerGo,
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.default-box {
		height: 100%;
		text-align: center;
		display: none;
		img {
			display: block;
			width: 4.26rem;
			margin: 0 auto;
			margin-top: 5.49rem;
		}
		>p {
			padding-top: 0.53rem;
			line-height: 0.6rem;
			text-align: center;
			font-size: 0.32rem;
			color: #4A4A4A;
		}
	}
	
	.tip {
		position: fixed;
		right: 0.365rem;
		top: 0.3rem;
		z-index: 1001;
		font-size: 0.4rem;
		color: #818181;
		span:after {
			content: "";
			display: block;
			position: absolute;
			width: 0.46rem;
			height: 0.46rem;
			left: -0.50rem;
			top: 0;
			background: url(../../../../static/my/icon_coupon_unknow2.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	
	.vouchers {
		margin-top: 1.06rem;
		height: 1.32rem;
		padding: 0.42rem 0.37rem;
		position: relative;
		box-sizing: border-box;
		>img {
			vertical-align: middle;
			display: inline-block;
			margin-left: 0.26rem;
			margin-right: 0.2rem;
		}
	}
	
	.vouchers:after {
		position: absolute;
		display: block;
		content: "";
		width: 0.34rem;
		height: 0.5rem;
		background: url(../../../../static/my/right.png) no-repeat center;
		background-size: 100% 100%;
		right: 0.44rem;
		top:0.42rem;
	}
	
	#mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		z-index: 1002;
		display: none;
		.inner {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 5.9399999rem;
			height: 9.12rem;
			border-radius: 0.13rem;
			background: #fff;
			padding: 0 0.64rem;
			text-align: center;
			>input{
				width:100%;
				height: 1.26rem;
				border: 0.05rem solid #c1c1c1;
				text-align: center;
				color: #bdbdbd;
			}
			>button{
				width: 5.66rem;
				height: 1.29rem;
				background: #eaeaea;
				color: #8b8b8b;
				border: none;
				margin-top: 0.4rem;
				font-size:0.48rem;
			}
		}
		>div:nth-child(2) {
			position: absolute;
			right: 0;
			left: 0;
			bottom: 1.33rem;
			margin: 0 auto;
		}
	}
</style>
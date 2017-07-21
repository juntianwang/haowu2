<template>
	<!--入账明细-->
	<div>
		<header-go></header-go>
		<div id="content_k">
			<div class="default-box">
				<img src="../../../../static/cart_img/default_cache_amount_detail2.png" alt="" />
				<p>还没有钱入账，穷疯啦！</p>
				<span>快去给好友分享商品吧！</span>
			</div>
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
		mounted() {
			var default_box = document.getElementsByClassName("default-box")[0];
			if(this.content.length == 0) {
				default_box.style.display = "block"
			}else{
				default_box.style.display = "none"
			}
		},
		components: {
			headerGo,
		}
	}
</script>

<style lang="scss" type="text/css">
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
</style>
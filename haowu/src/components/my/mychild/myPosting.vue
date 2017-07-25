<template>
	<!--我的发帖-->
	<div>
		<header-go></header-go>
		<div id="content_k">
			<div class="default-box">
				<img src="../../../../static/my/default_user_release_question2.png" alt="" />
				<p>不发帖，我咋知道你是有品位的</p>
				<span>脱离低级趣味的银呢！</span>
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
			width: 2.26rem;
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
		>span{
			font-size: 0.32rem;
			color: #4A4A4A;
		}
	}
</style>
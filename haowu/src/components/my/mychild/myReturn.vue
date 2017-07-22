<template>
	<!--退货-->
	<div>
		<header-go></header-go>
		<div id="content_k">
			<div class="provide">
				<p>服务时间：9:00-21:00</p>
				<div class="service"><span>在线客服</span><span>电话客服</span></div>
			</div>
			<div class="default-box">
				<img src="../../../../static/my/default_return_record.png" alt="" />
				<p>看对了眼的贴子，就收藏</p>
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

<style lang="scss" scoped type="text/css">
	.provide{
		margin-top: 1.06rem;
		height: 2.46rem;
		border-bottom:0.05rem solid #ededed;
		>p{
			margin-top: 0.33rem;
			display: inline-block;
			width: 100%;
			font-size: 0.32rem;
			margin-left: 0.2rem;
			margin-bottom: 0.2rem;
		}
		.service{
			width: 100%;
			text-align: center;
			>span{
				display: inline-block;
				width: 3.06rem;
				height: 1rem;
				line-height: 1rem;
				border-radius: 0.1rem;
				color: #797979;
				border: 0.05rem solid #8b8b8b;
			}
			>span:nth-child(1){
				margin-right: 0.82rem;
			}
			
		}
	}
	.default-box {
		height: 100%;
		text-align: center;
		display: none;
		margin-top:4.45rem;
		img {
			display: block;
			width: 2.26rem;
			margin: 0 auto;
			
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
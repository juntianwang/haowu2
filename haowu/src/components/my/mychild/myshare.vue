<template>
	<!--我的分享-->
	<div id="inner">
		<div><mt-spinner type="snake" color="#26a2ff" :size="40"></mt-spinner></div>
		<div id="innerContent">
			<header-go></header-go>
			<div><img src="../../../../static/cart_img/wallet_img.jpg" alt="" /></div>
			<div>
				<img src="../../../../static/my/wallettip.jpg"/>
			</div>
		</div>
		<span id="btn" @click="btn">查看钱包</span>
	</div>
	
</template>

<script>
	import headerGo from "../../common/header";
	import { Spinner } from 'mint-ui';
	export default {
		mounted (){
			var inner = document.getElementById("inner").getElementsByTagName("div")[0];
			var innercontent = document.getElementById("innerContent");
			setTimeout(function(){
				inner.style.display = "none";
				innercontent.style.display = "block";
			},1000)
			
		},
		methods :{
			btn () {
				this.$router.push({name:"mywalletr"})
			}
		},
		components: {
			headerGo,
			Spinner,
		}
	}
</script>

<style lang="scss" scoped type="text/css">
#inner{
	>div:nth-child(1){
		width: 100%;
		height:13.33rem;
		display: block;
		>span{
			position: relative;
			left: 45%;
			top: 6.66rem;
		}
	}
}
#innerContent{
	margin-top: 1.06rem;
	display: none;
	margin-bottom: 2rem;
	>div:nth-of-type(2){
		width: 100%;
		>img{
			display: block;
			width: 100%;
		}
	}
	>div:nth-of-type(3){
		width: 100%;
		>img{
			display: block;
			width: 100%;
		}
	}
}
#btn{
	position: fixed;
	width: 4.32rem;
	height: 1.2rem;
	background: #ffd914;
	color: #413b34;
	display: block;
	
	bottom: 0.46rem;
	text-align: center;
	line-height: 1.2rem;
	border-radius:0.1rem;
	left: 0;
	right: 0;
	margin: 0 auto;
}
</style>
<template>
	<!--红包攻略-->
	<div id="inner">
		<div><mt-spinner type="snake" color="#26a2ff" :size="40"></mt-spinner></div>
		<div id="innerContent">
			<header-go></header-go>
			<div><img src="../../../../static/cart_img/wallet_img.jpg" alt="" /></div>
			<div>
				<img src="../../../../static/my/wallettip.jpg"/>
			</div>
		</div>
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
			left: 40%;
			top: 6.66rem;
		}
	}
}
#innerContent{
	margin-top: 1.06rem;
	display: none;
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
</style>
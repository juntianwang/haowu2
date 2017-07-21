<template>
	<!--红包攻略-->
	<div id="inner">
		<header-go></header-go>
		<div><img src="../../../../static/cart_img/wallet_img.jpg" alt="" /></div>
	</div>
	
</template>

<script>
	import headerGo from "../../common/header";
	export default {
		components: {
			headerGo,
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
#inner{
	div:nth-of-type(1){
		width: 100%;
		img{
			width: 100%;
		}
	}
}
</style>
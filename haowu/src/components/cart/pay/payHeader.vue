<template>
		<header>
			<div @click = "goback">
				<img src="../../../../static/cart_img/back.png"/>
				<span id="hah">返回</span>
			</div>
			<span>{{headerMsg}}</span>
		</header>
</template>

<script>
	export default {
		props: ['headerMsg'],
		methods: {
			goback () {
				window.history.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
header{
	height: 1.2rem;
	display: flex;
	/*justify-content: center;水平居中*/
	/*flex-wrap: wrap;里面内容超出自动换行*/
	align-items: center;
	border-bottom: 0.02rem solid rgb(239,240,239);
	div{
		display: inline-block;
		
		img{
			width: 0.5rem;
			height: 0.5rem;
		}
		span{
			font-size: 0.5rem;
			color: rgb(122,123,124);
			margin-left: 0;
		}
	}
	span{
		vertical-align: middle;
		font-size: 0.53rem;
		color: rgb(127,128,129);
		margin-left: 2.4rem;
	}
	
	
}

</style>
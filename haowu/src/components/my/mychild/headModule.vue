<template>
	<div class="top">
		<span @click="goback"></span>
		<p>{{txt}}</p>
	</div>
</template>

<script>
export default {
	props:["txt"];
}
</script>

<style lang="scss" scoped="" type="text/css">
	.top {
		position: relative;
		width: 100%;
		height: 1.2rem;
		border-bottom: 2px solid #eee;
		text-align: center;
		span{
			position: absolute;
			display: block;
			width: 0.853333rem;
			height: 0.853333rem;
			background-color: red;
			background: url(../../../../static/entrance/left_chat.png) no-repeat;
			top: 0.293333rem;
			left: 0.133333rem;
			background-size: 0.613333rem 0.613333rem;
		}
		p{
			line-height: 1.2rem;
			font-size: 0.426666rem;
		}
	}
</style>
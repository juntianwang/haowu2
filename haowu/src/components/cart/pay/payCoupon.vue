<template>
	<div class="coupon">
		<pay-header :headerMsg="title"></pay-header>
		<div class="addnew">
			<p @click="goback">不使用优惠券</p>
		</div>
	</div>
</template>

<script>
	import payHeader from './payHeader'
	export default {
		data () {
			return {
				title: "选择优惠券"
			}
		},
		methods: {
			goback () {
				window.history.go(-1);
			}
		},
		
		components: { payHeader }
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.coupon{
		.addnew{
			text-align: center;
			position: fixed;
			width: 100%;
			bottom: 0;
			height: 1.8rem;
			z-index: 111;
			background-color: white;
			p{
				border: 1px solid orange;
				width: 90%;
				margin: 0 auto;
				height: 1.2rem;
				color: orange;
				line-height: 1.2rem;
				font-size: 0.5rem;
				span{
					margin-right: 0.26rem;
				}
			}
		}
	}
</style>
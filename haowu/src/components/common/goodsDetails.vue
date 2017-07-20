<template>
	<div id="goodsDetails">
		<div v-for="o in list">
			<point-swiper :banner="o.src"></point-swiper>
			<h1>{{o.title}}</h1>
			<p>79&nbsp;￥</p>
			<div style="margin-bottom: 0.37rem;">
				<div class="icon">
					<img src="../../../static/community/littlegrey.png" alt="" />30天无忧退货 
				</div>
				<div class="icon">
					<img src="../../../static/community/littlegrey.png" alt="" />24小时内发货 
				</div>
				<div class="icon">
					<img src="../../../static/community/littlegrey.png" alt="" />满88全场包邮 
				</div>
			</div>
			<div >
				<p>数量规格</p>
			</div>
		</div>
	</div>
</template>

<script>
	import pointSwiper from "./pointSwiper";
	export default {
		data() {
			return {
				list: []
			}
		},
		computed: {},
		watch: {},
		mounted() {
			this.list.push(this.$route.params.data);
		},
		components: {
			pointSwiper
		}
	}
</script>

<style lang="scss" type="text/css">
	#goodsDetails {
		>div {
			>h1 {
				margin-top: 0.37rem;
				margin-left: 0.4rem;
				font-size: 0.48rem;
				margin-bottom: 0.5rem;
				color: #4A4A4A;
			}
			>p {
				font-size: 0.48rem;
				color: #E75058;
				margin-bottom: 0.33rem;
				margin-left: 0.4rem;
			}
			.icon{
				display: inline-block;
				height: 0.37rem;
				font-size: 0.32rem;
				margin-right: 0.08rem;
				margin-left: 0.4rem;
				color: #9c9c9c;
				img{
					width:0.37rem;
					height: 0.37rem;
					display: inline-block;
					margin-right: 0.05rem;
					vertical-align: bottom;
				}
			}
			>div:nth-of-type(3){
				padding: 0.37rem 0.34rem;
				p{
					font-size: 0.4rem;
					color:#777777;
					position: relative;
				}
				p:after{
					content:"";
					position: absolute;
					right: 0;
					background: url(../../../static/community/icon_follow2.png) no-repeat center;
					width: 0.4rem;
					height: 0.34rem;
					
					
				}
			}
		}
	}
</style>

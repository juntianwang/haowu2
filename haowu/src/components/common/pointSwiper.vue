<template>
	<div id="pointSwiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(a,index) in banner" :key="index">
				<img :src="a" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="fallback" @click="btn">
			<img src="../../../static/community/chat_headArrowLeft.png"/>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		props:["banner"],
		data() {
			return {
				swiperOption: {
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: false,
					observeParents: true,
				}
			}
		},
		methods:{
			btn () {
				this.$store.state.killBol = false;
				this.$store.state.detailBol = false;
				this.$router.push({path:history.go(-1)});
			}
		}
		,
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">

#pointSwiper{
	position: relative;
	.swiper-pagination-bullet-active{
		background-color: #FFD914;
	}
	.fallback{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 0.4rem;
		background-color: rgba(0,0,0,0.2);
		position: fixed;
		top: 0.4rem;
		left:0.33rem;
		border: 0.02rem solid white;
		z-index: 3;
		img {
			width: 80%;
			margin: 10% 0 0 10%;
		}
	}
}
#pointSwiper  .swiper-container>div>div>img{
 	width: 100%;
 	height: 100%;
 }
</style>
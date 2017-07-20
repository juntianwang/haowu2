<template>
	<div id="pointSwiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="a in banner">
				<img :src="a" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="fallback" @click="btn">
			
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
				window.history.go(-1);
			}
		}
		,
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="scss" type="text/css">
#pointSwiper{
	position: relative;
	.swiper-pagination-bullet-active{
		background-color: #FFD914;
	}
	.fallback{
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 0.4rem;
		background-color: rgba(0,0,0,0.2);
		position: absolute;
		top: 0.4rem;
		left:0.33rem;
		z-index: 3;
	}
}
#pointSwiper>div:nth-child(2):after{
		content: "";
		display:inline-block;
		width: 0.8rem;
		height: 0.8rem;
		text-align: center;
		background: url(../../../static/community/chat_headArrowLeft.png) no-repeat;
		background-position: center;
		background-size: 75% 75%;
		
	}
#pointSwiper  .swiper-container>div>div>img{
 	width: 100%;
 	height: 100%;
 }
</style>
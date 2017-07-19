<template>
	<div>
		<swiper :options="swiperOption">
			<swiper-slide class="divS" v-for="(slide,index) in swiperSlides" :key="index"><img class="slideImg" :src="slide" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueAwesomeSwiper from 'vue-awesome-swiper';
	Vue.use(VueAwesomeSwiper);
	import { swiper, swiperSlide } from 'vue-awesome-swiper';

	export default {
		props:['swiperSlides'],
		components: {
			swiper,
			swiperSlide
		},
		name: 'carrousel',
		data() {
			return {
				swiperOption: {
					autoplay: 3500,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
					autoplayDisableOnInteraction: false,
					loop: true
				},
			}
		}
	}
</script>

<style>
	/*如果要引入一些css样式，也是通过import引入*/
	
	.slideImg {
		width: 100%;
	}
	
	.divS {
		height: 4rem;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.swiper-pagination-bullet-active {
		background: orange;
	}

</style>
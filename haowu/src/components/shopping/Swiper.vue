<template>
	<div>
		<swiper :options="swiperOption">
			<swiper-slide class="divS" v-for="(slide,index) in swiperSlides.content" :key="index">
				<img class="slideImg" :src="slide" />
			</swiper-slide>
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
					//自动
//					autoplay: 3500,
					setWrapperSize: true,
					//分页器
					pagination: this.pagination,
					//分页器控制
					paginationClickable: true,
					//鼠标滑轮控制
					mousewheelControl: true,
					//将变化应用于父元素
					observeParents: true,
					//手动滑动后自动滑动
					autoplayDisableOnInteraction: false,
					//循环
//					loop: true
				},
			}
		}
	}
</script>

<style scoped="scoped">
	
	.slideImg {
		width: 100%;
	}
	
	.divS {
		/*height: 6rem;*/
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.swiper-pagination-bullet-active {
		background: orange;
	}

</style>
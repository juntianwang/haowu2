<template>
	<div id="pointSwiper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				banner:[{
					href:"",
					src:""
				}],
				swiperOption: {
					autoplay: 3500,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">

</style>
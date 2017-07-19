<template>
	<div>shop456
		<swiper :swiperSlides="swiperSlides"></swiper>
	</div>
	
</template>

<script>
	import axios from 'axios'; //先引入axios数据请求模块
	import Swiper from "./Swiper";
	
	export default {
		data() {
			return {
				swiperSlides: [1,23,4],
			}
		},
		components: {
			Swiper
		}
	}
</script>

<style>
</style>
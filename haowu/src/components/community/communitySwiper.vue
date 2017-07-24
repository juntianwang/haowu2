<template>
	<div class="sorterwrap">
		<swiper :options="swiperOption">
				<swiper-slide class="divS" v-for="(slide,index) in swiperSlides" :key="index" v-if="bol">
					<img class="slideImg" :src="slide"/>	
			</swiper-slide>
			<div class="divS" v-else><img class="slideImg" :src="src"/></div>	
		</swiper>
		<div v-if="bol" class="sorter">{{count}}/{{this.swiperSlides.length}}</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'mint-ui';
	import VueAwesomeSwiper from 'vue-awesome-swiper';
	Vue.use(VueAwesomeSwiper);
	import { swiper, swiperSlide } from 'vue-awesome-swiper';

	export default {
		props:['swiperSlides'],
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					autoplay: false,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
					autoplayDisableOnInteraction: false,
					loop: true,
					onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.count = swiper.realIndex+1;  
                    }  
				},
				bol:"",
				src:"",
				count:1				
			}
		},
		mounted:function(){
			if(this.swiperSlides.length>1){
				this.bol = true;
			}else{
				this.bol = false;
				this.src = this.swiperSlides[0]
			}
		}
	}
</script>

<style>
	/*如果要引入一些css样式，也是通过import引入*/
	.sorterwrap{
		position: relative;
	}
	.slideImg {
		width: 100%;
	}
	
	.divS {
		width: 100%;
		height: 7rem;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.divS img{
		width: 100%;
		border-radius: 0.13rem;
	}
	.sorter{
		position: absolute;
		bottom: 0.3rem;
		right: 0.7rem;
		width: 0.8rem;
		height: 0.8rem;
		background: rgba(0,0,0,0.5);
		border: 0.02rem solid white;
		border-radius: 50%;	
		z-index: 20;
		color: white;
		text-align: center;
		line-height: 0.8rem;
	}
</style>
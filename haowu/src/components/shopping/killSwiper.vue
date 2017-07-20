<template>
	<div id="killSwiper" @touchend="setProgress">
		<swiper :options="swiperOption">
			<swiper-slide class="divS" v-for="(slide,index) in swiperSlides.content" :key="index">
				<div class="imgWrap">
					<img class="slideImg" :src="slide.pic" />
				</div>
				<div class="slideContent">
					<p>{{slide.name}}</p>
					<p>
						<span style="font-size: 0.42rem;color: red;">￥{{slide.money}}</span>
						<span>￥{{slide.moneyO}}</span>
						<span id="line"></span>
					</p>
					<div class="begin">
						<img src="../../../static/shopping/shopCar.png" alt="" /><span>即将开始</span>
					</div>
				</div>
			</swiper-slide>
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
					setWrapperSize: true,
					//将变化应用于父元素
					observeParents: true,
					onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.count = swiper.realIndex + 1;
                        this.$store.state.progress_kill = this.count;
                    }  
				},
				count: 1
			}
		},
		methods: {
			setProgress() {
			}
		}
	}
</script>

<style scoped="scoped">
	#killSwiper{
	}
	.slideImg {
		width: 4.4rem;
		height: 4.4rem;
	}
	
	.divS {
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.imgWrap {
		width: 4.4rem;
		height: 4.4rem;
		overflow: hidden;
		border-radius: 0.2rem;
		margin-left: 0.26rem;
	}
	
	.slideContent {
		width: 4.4rem;
		height: 4.4rem;
		padding-left: 0.4rem;
	}
	.slideContent p:nth-of-type(1){
		padding: 0.66rem 0;
		color: #494949;
		font-size: 0.42rem;
	}
	.slideContent p:nth-of-type(2){
		padding: 0.66rem 0 0.26rem 0;
		color: #5b5b5b;
		position: relative;
		left: 0;
		top: 0;
	}
	#line {
		position: absolute;
		width: 0.45rem;
		height: 0;
		border: 0.02rem solid #494949;
		left: 1.13rem;
		top: 0.86rem
	}
	.begin {
		width: 2.66rem;
		height: 0.66rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.02rem solid gray;
		border-radius: 0.1rem;
		color: #494949;
	}
	.begin img {
		width: 0.32rem;
		padding-right: 0.13rem;
	}
	
</style>
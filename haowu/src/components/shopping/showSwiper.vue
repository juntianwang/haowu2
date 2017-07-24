<template>
	<div id="show">
		<swiper :options="swiperOption">
			<swiper-slide class="divS" v-for="(slide,index) in swiperSlides.content" :key="index">
				<div class="header">
					<img :src="slide.headImg" alt="" /><span class="name">{{slide.name}}</span>
				</div>
				<div class="img">
					<img :src="slide.pic" alt="" />
				</div>
				<div class="comment">
					<div class="fl" @click="tapLike(index)"><img :src="onBol[index].likeBol?pic.goods:pic.good" alt="" /><span>{{slide.like}}</span></div>
					<div class="fl" @click="tapCollect(index)"><img :src="onBol[index].collectBol?pic.collects:pic.collect" alt="" /><span>{{slide.collect}}</span></div>
					<div class="fl" @click="tapSay(index)"><img src="../../../static/community/talk.png" alt="" /><span>{{slide.say}}</span></div>
				</div>
				<p class="txt">{{slide.txt}}</p>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueAwesomeSwiper from 'vue-awesome-swiper';
	Vue.use(VueAwesomeSwiper);
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	//图片
	import good from '../../../static/community/good.png';
	import goods from '../../../static/community/good-s.png';
	import collect from '../../../static/community/collect.png';
	import collects from '../../../static/community/collect-s.png';

	export default {
		props: ['swiperSlides'],
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
                        this.$store.state.progress_show = this.count;
                    } 
				},
				count: 1,
				pic: {
					good: good,
					goods: goods,
					collect: collect,
					collects: collects
				}
			}
		},
		methods: {
			tapLike(index) {
				this.onBol[index].likeBol = true;
			},
			tapCollect(index) {
				this.onBol[index].collectBol = true;
			},
			tapSay(index) {
				
			}
		},
		mounted() {
			console.log(this.onBol)
		},
		computed: {
			onBol () {
				return this.$store.state.onBol
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#show {
		/*padding: 0 0.26rem;*/
		box-sizing: border-box;
		.header {
			overflow: hidden;
			padding-bottom: 0.26rem;
			width: 100%;
			img {
				width: 7%;
				float: left;
				border-radius: 50%;
				margin: 0 0.06rem 0 0.26rem;
			}
			span {
				float: left;
				padding-top: 0.2rem;
			}
		}
		.img {
			width: 93%;
			margin: 0 auto;
		}
		.comment {
			width: 100%;	
			overflow: hidden;
			padding-top: 0.13rem;
			.fl {
				width: 14%;
				display: flex;
				margin-left: 0.26rem;
				align-items: center;
				img {
					width: 40%;
				}
			}
		}
		.txt{
			width: 93%;
			margin: 0 auto;
			padding: 0.26rem 0 0.13rem 0;
			line-height: 0.4rem;
		}
	}
	
	img {
		width: 100%;
	}
	.fl {
		float: left;
	}
	p,span {
		color: #5b5b5b;
	}
	
	.swiper-pagination-bullet-active {
		background: orange;
	}
</style>
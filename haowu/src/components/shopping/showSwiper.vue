<template>
	<div id="show">
		<swiper :options="swiperOption">
			<swiper-slide class="" v-for="(slide,index) in showList" :key="index">
				<div class="header" @click="tapDetail(index)">
					<img :src="slide.headImg" alt="" /><span class="name">{{slide.name}}</span>
				</div>
				<div class="img" @click="tapDetail(index)">
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
	import { Toast } from 'mint-ui';
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
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return
				}
				if (!this.onBol[index].likeBol) {
					this.$store.state.shopShow[index].like += 1;
				}
				this.onBol[index].likeBol = true;
				console.log(this.$store.state.shopShow[index].like)
			},
			tapCollect(index) {
				if (!sessionStorage.user) {
					Toast({
  						message: '请先登陆',
  						position: 'middle',
  						duration: 1000
					});
					return
				}
				if (!this.onBol[index].collectBol) {
					this.$store.state.shopShow[index].collect += 1;
				}
				this.onBol[index].collectBol = true;
			},
			tapSay(index) {
				
			},
			tapDetail(index) {
				console.log(index)
				this.$store.state.detailcommunity = {
					index: index,
					head: this.showList[index].headImg,
					name: this.showList[index].name,
					goods: [this.showList[index].pic],
					good :[
						{
							head: "../static/community/communityimg/36/head/1.png"
						}, {
							head: "../static/community/communityimg/36/head/2.png"
						}, {
							head: "../static/community/communityimg/36/head/3.png"
						}, {
							head: "../static/community/communityimg/36/head/4.png"
						}, {
							head: "../static/community/communityimg/36/head/5.png"
						}, {
							head: "../static/community/communityimg/36/head/6.png"
						}, {
							head: "../static/community/communityimg/36/head/7.png"
						}
					],
					goodbol: this.onBol[index].likeBol ? true : false,
					collect: this.onBol[index].collectBol ? true : false,
					talk: [{
						name: "Glenn🌱",
						head: "../static/community/communityimg/36/talk/1.png",	
						mes: "头上一片草原",
						time: "2017-07-17"
					}],
					mes: this.showList[index].txt,
					time: "2017-07-17"
				}
				this.$store.state.community_col = true;
				this.$router.push({
					path: '/communitydetail'
				})
			}
		},
		mounted() {
			console.log(this.$store.state.shopShow)
		},
		computed: {
			onBol () {
				return this.$store.state.onBol
			},
			showList() {
				return this.$store.state.shopShow;
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
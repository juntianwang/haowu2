<template>
	<div id="shopping">
		<div class="header">
			<search-header></search-header>
		</div>
		<nav>
			<div v-for="(item,index) in nav" @click="tabNav(index)" :class="{navOn:item.bol}">{{item.nav}}</div>
			<div class="nav_tab" :style="{left: tabLeft}"></div>
		</nav>
		<mt-tab-container v-model="active" :swipeable="true">
			<mt-tab-container-item id="tab0">
				<div class="content" v-show="navBol[0]">
					<!---->
					<swiper :swiperSlides="banner" class="banner_swiper"></swiper>
					<div class="notice">
						<img src="../../../static/shopping/notice.png" />
						<span>极客购公告</span>
						<span>关于退换货服务</span>
					</div>
					<!---->
					<div class="foreignCar">
						<p>欧美生活直通车</p>
						<div class="foreignCar_content">
							<div class="foreignImg_wrap">
								<img :src="foreignCar[0].pic" alt="" />
								<p class="forefinCar_content_txt">{{foreignCar[0].txt}}</p>
							</div>
							<div>
								<div class="foreignImg_wrap" style="padding-bottom: 0.11rem;">
									<img :src="foreignCar[1].pic" alt="" />
									<p class="forefinCar_content_txt">{{foreignCar[1].txt}}</p>
								</div>
								<div class="foreignImg_wrap" style="padding-top: 0.11rem;">
									<img :src="foreignCar[2].pic" alt="" />
									<p class="forefinCar_content_txt">{{foreignCar[2].txt}}</p>
								</div>
							</div>
						</div>
					</div>
					<!---->
					<div class="new">
						<p>周一周四-新品首发</p>
						<div class="new_content" @touchmove.stop="move()">
							<div class="new_wrap" v-for="(item,index) in newList">
								<div>
									<img :src="item.pic" alt="" />
								</div>
								<p>{{item.name}}</p>
								<p>￥{{item.money}}</p>
							</div>
						</div>
						<p>查看所有新品 ></p>
					</div>
					<!---->
					<div class="kill">
						<p>周五周日 - 零点秒杀</p>
						<div class="killTime">
							<img :src="killTime.pic" alt="" />
							<span>{{killTime.day}}</span>
							<span>周五</span>
							<span>0:00-0:30</span>
						</div>
						<kill-swiper :swiperSlides="kill" @progress="getProgress"></kill-swiper>
						<div class="progress">
							<div class="proLine"></div>
							<div class="proLine" id="proLine" :style="{width: progress_k + '%',background: killColor}"></div>
						</div>
					</div>
					<!---->
					<div class="show">
						<p>达人SHOW</p>
						<show-swiper :swiperSlides="show"></show-swiper>
						<div class="progress">
							<div class="proLine"></div>
							<div class="proLine" id="proLine" :style="{width: progress_s + '%',background: showColor}"></div>
						</div>
					</div>
					<!---->
					<div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
						<p>猜你喜欢</p>
						<div v-for="(item,inex) in moreList" class="shopList">
							<swiper :swiperSlides="item.list"></swiper>
							<p class="list_name">{{item.name}}</p>
							<p class="list_txt">{{item.txt}}</p>
							<div class="buy">
								<span>￥{{item.money}}</span>
								<div id="buy">购买</div>
							</div>
						</div>
					</div>
					<!---->
					<div class="nomore" v-if="moreBol">
			   			 <span class="text">暂无更多</span>
					</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab1">
				<div class="content" v-show="navBol[1]">
					<shop-other :otherContent="decoration"></shop-other>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab2">
				<div class="content" v-show="navBol[2]">
					<shop-other :otherContent="accept"></shop-other>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab3">
				<div class="content" v-show="navBol[3]">
					<shop-other :otherContent="kitchen"></shop-other>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab4">
				<div class="content" v-show="navBol[4]">
					<shop-other :otherContent="textiles"></shop-other>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>

</template>

<script>
	import axios from 'axios'; //先引入axios数据请求模块
	import Swiper from "./Swiper";
	import searchHeader from "./searchHeader";
	import killSwiper from './killSwiper';
	import showSwiper from './showSwiper';
	import shopOther from './shopOther';
	//引入tab-container和Indicator
	import { Indicator } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';

	//引入图片资源
	import banner from '../../../static/shopping/banner.png';
	import heart from '../../../static/shopping/heart.png';
	import summer from '../../../static/shopping/summer.png';
	import menu from '../../../static/shopping/menu.png';
	import new1 from '../../../static/shopping/new1.png';
	import timeOut from '../../../static/shopping/timeOut.png';
	import kill1 from '../../../static/shopping/kill1.png';
	import show1 from '../../../static/shopping/show1.jpg';
	import showHead from '../../../static/shopping/headImg.jpg';
	import otherBanner from '../../../static/shopping/otherBanner.png';
	import otherList from '../../../static/shopping/otherList.png';
	
	export default {
		data() {
			return {
				navBefore: 0,
				navBol: [true,false,false,false,false],
				//导航栏
				tab: [{
						nav: '推荐',
						tab: 'tab0',
						left: '5%',
						bol: true
					},
					{
						nav: '家饰',
						tab: 'tab1',
						left: '25%',
						bol: false
					},
					{
						nav: '收纳',
						tab: 'tab2',
						left: '45%',
						bol: false
					},
					{
						nav: '餐厨',
						tab: 'tab3',
						left: '65%',
						bol: false
					},
					{
						nav: '家纺',
						tab: 'tab4',
						left: '85%',
						bol: false
					}
				],
				tabLeft: '5%',
				active: "tab0",
				//banner图
				banner: {
					content: [banner],
					pagination: 'null'
				},
				//直通车
				foreignCar: [{
					pic: heart,
					txt: '10款让你怦然心动的佳品'
				}, {
					pic: summer,
					txt: '夏至未至'
				}, {
					pic: menu,
					txt: '最流行'
				}],
				//新品
				newList: [{
					pic: new1,
					name: '真皮墙面挂钩两件套',
					money: 20
				}],
				//秒杀时间
				killTime: {day:'07月21日',pic:timeOut},
				kill: {
					content: [{pic:kill1,name:'羽丝绒枕',money:49,moneyO:89}]
				},
				progress_kill: 0,
				killColor: '#191919',
				//展示
				show: {
					content: [{pic:show1,name:'极客',like:49,collect:89,say:1,headImg:showHead}]
				},
				progress_show: 0,
				showColor: '#191919',
				//商品列表
				begin: 0,
				shopList: [{
					pic: [show1,show1],
					name: '小清新客厅套',
					money: 200,
					txt: '用自然的元素点缀，简雅秀气，随处可见心思',
					list: {
						content: [show1,show1],
						pagination: '.swiper-pagination'
					}
				}],
				loading: false,
				moreShopList: [],
				moreBol : false,
				//其他导航
				decoration: {
					index: 1,
					title: 'decoration',
					banner:otherBanner,
					list:[
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28}
					]
				},
				textiles: {
					index: 4,
					title: 'textiles',
					banner:otherBanner,
					list:[
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28}
					]
				},
				kitchen: {
					index: 3,
					title: 'kitchen',
					banner:otherBanner,
					list:[
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28}
					]
				},
				accept: {
					index: 2,
					title: 'accept',
					banner:otherBanner,
					list:[
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28},
						{pic:otherList,name:'厨房系列柠檬画',money:28}
					]
				}
			}
		},
		components: {
			Swiper,
			searchHeader,
			killSwiper,
			showSwiper,
			shopOther	
		},
		methods: {
			tabNav(index) {
				this.active = this.tab[index].tab;
			},
			//取消默认事件
			move() {},
			//进度条(已废弃)
			getProgress(msg) {},
			//上拉加载
			loadMore() {
				var that = this;		
				if (this.moreBol || this.navBefore != 0) {
					return;
				}
				this.loading = true;
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				axios.get('/api/shop/list', {
					params: {
						begin: this.begin,
						num: 5
					}
				}).then(function(res) {
					that.shopList = res.data.shopList;
					console.log(res)
					that.begin += 5;
					setTimeout(() => {
						Indicator.close();
						that.loading = false;
					}, 1000)
				}).catch(function(error) {
					console.log(error)
					setTimeout(() => {
						Indicator.close();
						that.loading = false;
						that.moreBol = true;
					}, 1000)
				});
			}
		},
		computed: {
			nav() {
				let index = parseInt(this.active.slice(3, 4));
				this.tabLeft = this.tab[index].left;
				this.tab[this.navBefore].bol = false;
				this.navBol[this.navBefore] = false;
				this.navBol[index] = true;
				this.tab[index].bol = true;
				this.navBefore = index;
				this.$store.state.navBefore = this.navBefore;
				return this.tab;
			},
			progress_k() {
				this.progress_kill = (this.$store.state.progress_kill / this.kill.content.length) * 100;
				if (this.progress_kill == 100) {
					this.killColor = '#81dcbd';
				} else {
					this.killColor = '#191919';
				}
				return this.progress_kill;
			},
			progress_s() {
				this.progress_show = (this.$store.state.progress_show / this.show.content.length) * 100;
				if (this.progress_show == 100) {
					this.showColor = '#81dcbd';
				} else {
					this.showColor = '#191919';
				}
				return this.progress_show;
			},
			moreList() {
				this.moreShopList = this.moreShopList.concat(this.shopList);
				return this.moreShopList;
			}
		},
		mounted() {
			var that = this;
			//请求
			axios.get('/api/shop', {
				params: {
					
				}
			}).then(function(res) {
				that.newList = res.data.newList;
				that.kill.content = res.data.killList;
				that.show.content = res.data.showList;
				that.decoration = res.data.decoration;
				that.accept = res.data.accept;
				that.textiles = res.data.textiles;
				that.kitchen = res.data.kitchen;
				console.log(that.accept)
			}).catch(function(error) {
				console.log(error)
			});
			axios.get('/api/shop/list', {
				params: {
					begin: this.begin,
					num: 5
				}
			}).then(function(res) {
				that.shopList = res.data.shopList;
				console.log(res)
				that.begin += 5;
			}).catch(function(error) {
				console.log(error)
			});
			//获取时间
			var nowTime = new Date();
			var day = nowTime.getDate();
			var week = nowTime.getDay();
			nowTime.setDate(day + 7);		
			if (week == 4) {
				nowTime.setDate(day + 7);
			} else if (week > 4) {
				nowTime.setDate(day + 7 - week + 4);
			} else {
				nowTime.setDate(4 - week);
			};
			this.killTime.day = '0' + (nowTime.getMonth()+1) + '月' + nowTime.getDate() + '日';
//			//解决触摸bug
//			this.$el.addEventListener("touchstart",function(e) {
//				var e = e || window.event;
//				var startPoint = e.touches[0];
//				that.$el.addEventListener("touchmove",function(ev) {
//					var ev = ev || window.event;
//					var endPoint = ev.touches[0];
//					var x = endPoint.clientX - startPoint.clientX;
//					var y = endPoint.clientY - startPoint.clientY;
//					if (Math.abs(x) >= 100) {
//						ev.preventDefault();
//					}
//				})
//			})
		},
		created() {
			var that = this;
		}
	}
</script>

<style lang="scss" scoped="scoped">
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		display: none;
	}
	
	/*导航栏*/
	
	nav {
		width: 100%;
		height: 1.06rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		margin-bottom: 0.13rem;
		border-bottom: 2px solid #ededed;
	}
	
	nav div {
		width: 20%;
		text-align: center;
		color: #adadad;
		font-size: 0.36rem;
		transition: 0.3s;
	}
	
	.nav_tab {
		width: 10%;
		height: 0;
		position: absolute;
		bottom: -2px;
		left: 5%;
		border: 3px solid #ffcf18;
		transition: 0.3s;
	}
	
	.navOn {
		color: #0a0a0a;
	}
	/*推荐内容*/
	
	.content {
		width: 100%;
		padding-bottom: 1.33rem;
	}
	
	/*公告*/
	
	.notice {
		width: 100%;
		line-height: 1.2rem;
		background: #fff9eb;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 0.36rem;
		color: #686765;
	}
	
	.notice img {
		width: 0.64rem;
		padding: 0 0.4rem;
	}
	
	.notice span:nth-of-type(1) {
		padding-right: 0.53rem;
	}
	/*外国直通车*/
	
	.foreignCar {
		width: 100%;
		height: 6.66rem;
	}
	
	.foreignCar>p {
		line-height: 1.46rem;
		font-size: 0.42rem;
		text-align: center;
		color: #494949;
	}
	
	.foreignCar img {
		width: 100%;
	}
	
	.foreignCar_content {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.foreignCar_content>div:nth-of-type(1) {
		width: 4.53rem;
		padding-left: 0.2rem;
		border-radius: 0.2rem;
		overflow: hidden;
	}
	
	.foreignCar_content>div:nth-of-type(2) {
		padding-right: 0.2rem;
		width: 4.53rem;
	}
	
	.foreignCar_content>div:nth-of-type(2) div {
		width: 100%;
		border-radius: 0.2rem;
		overflow: hidden;
	}
	
	.foreignImg_wrap {
		position: relative;
		left: 0;
		top: 0;
		p {
			position: absolute;
			font-size: 0.48rem;
			bottom: 0.13rem;
			color: darkgray;
		}
	}
	/*新品*/
	
	.new,.kill,.show {
		background: linear-gradient(#fafafa, #ffffff);
		padding-bottom: 0.4rem;
		width: 100%;
	}
	
	.new img {
		width: 100%;
		height: 3.6rem;
	}
	
	.new>p {
		width: 100%;
		text-align: center;
		color: #494949;
	}
	
	.new>p:nth-of-type(1) {
		padding: 0.6rem 0 0.2rem 0;
		font-size: 0.42rem;
	}
	
	.new>p:nth-of-type(2) {
		color: #5b5b5b;
		padding: 0.2rem 0 0.2rem 0;
	}
	
	.new_content {
		height: 5.46rem;
		width: 94.7%;
		margin: 0 auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		overflow-x: scroll;
	}
	
	.new_wrap {
		width: 38%;
		margin-right: 0.13rem;
	}
	
	.new_wrap p {
		text-align: center;
		padding-top: 0.26rem;
		color: #5b5b5b;
		font-size: 0.34rem;
	}
	
	.new_wrap p:nth-of-type(2) {
		color: red;
	}
	
	.new_wrap div {
		width: 100%;
		height: 3.6rem;
		overflow: hidden;
		border-radius: 0.13rem;
	}
	
	/*秒杀*/
	.kill>p,.show>p,.list>p {
		width: 100%;
		text-align: center;
		color: #494949;
		font-size: 0.42rem;
		padding: 0.4rem 0;
	}
	
	.killTime {
		text-align: center;
		padding-bottom: 0.26rem;
		color: #5b5b5b;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.killTime span {
		padding: 0 0.05rem;
	}
	.killTime img {
		width: 0.32rem;
		padding: 0 0.05rem;
	}
	
	.progress {
		width: 9.06rem;
		margin: 0.26rem auto;
		padding: 0.13rem 0;
		position: relative;
		left: 0;
		top: 0;
		overflow: hidden;
	}
	.proLine {
		width: 100%;
		height: 0.13rem;
		position: absolute;
		left: 0;
		top: 0;
		background: darkgray;
		border-radius: 0.13rem;
	}
	#proLine {
		width: 0;
		background: #191919;
		transition: 0.3s;
	}
	/*猜你喜欢*/
	.list {
		width: 94%;
		margin: 0 auto;
		background: linear-gradient(#fafafa , #ffffff);
		padding-bottom: 0.4rem;
	}
	.shopList {
		margin-bottom: 0.4rem;
	}
	.list_name {
		color: #494949;
		font-size: 0.37rem;
		padding: 0.13rem 0;
	}
	.list_txt {
		color: #5b5b5b;
		padding: 0.13rem;
	}
	.buy {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		height: 0.53rem;
		margin-top: 0.26rem;
	}
	.buy span {
		color: red;
		font-size: 0.37rem;
	}
	#buy {
		font-size: 0.37rem;
		width: 1.6rem;
		line-height: 0.66rem;
		border: 0.02rem solid #494949;
		border-radius: 0.13rem;
		text-align: center;
	}
	
	/*暂无更多*/
	.nomore{
        text-align:center;
        overflow:hidden;
        padding: 0.3rem;
    }
    .nomore .text{
        padding:10px 20px;
        position: relative;
        font-size: 0.34rem;
        line-height: 0.4rem;
        color: gray;
    }
    .nomore .text::before,
    .nomore .text::after{
        position:absolute;
        top:50%;
        border-top:1px solid gray;
        content:'';
        height:0;
        width:2.933333rem;
    }
    .nomore .text::before{
        right:100%;
    }
    .nomore .text::after{
        left:100%;
    }
	
</style>
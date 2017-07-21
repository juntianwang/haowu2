<template>
	<div id="other">
		<div class="otherBanner">
			<img :src="otherContent.banner"/>
		</div>
		<div class="otherList clear" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
			<div class="list fl" v-for="(item,index) in otherContentList">
				<div class="img">
					<img :src="item.pic"/>
				</div>
				<p class="otherList_name">{{item.name}}</p>
				<p class="otherList_money">￥{{item.money}}</p>
			</div>
		</div>
		<div class="nomore" v-if="moreBol">
			<span class="text">暂无更多</span>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import axios from 'axios';
	export default {
		props: ['otherContent'],
		data() {
			return {
				loading: false,
				moreBol: false,
				contentList: [],
				arr: [],
				begin :10
			}
		},
		methods: {
			loadMore() {
				var that = this;
				if (this.moreBol || this.$store.state.navBefore != this.otherContent.index) {
					return;
				}
				this.loading = true;
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				axios.get('/api/shop/other', {
					params: {
						shopClass: this.otherContent.title,
						begin: this.begin,
						num: 10
					}
				}).then(function(res) {
					that.contentList = res.data.list;
					console.log(res)
					that.begin += 10;
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
			otherContentList() {
				this.arr = this.otherContent.list.concat(this.contentList);
//				console.log(this.contentList)
				return this.arr;
			}
		},
		mounted() {
			console.log(this.arr)
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	.fl{
		float: left;
	}
	.img, img {
		width: 100%;
	}
	p {
		text-align: center;
		padding-top: 0.26rem;
		color: #494949;
	}
	.otherList_money {
		color: red;
	}
	
	.list {
		width: 46%;
		margin: 2%;
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
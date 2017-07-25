<template>
	<transition name="move" v-if="detailBol">
	<div class="wrap">
		<div class="header"><img src="../../../static/shopping/otherBanner.png" alt="" /></div>
		<div class="listWrap clear">
			<div class="list fl" v-for="(item,index) in content">
				<div class="img">
					<img :src="item.pic" alt="" />
				</div>
				<p class="name">{{item.name}}</p>
				<p class="money">￥{{item.money}}</p>
			</div>
		</div>
		<div class="fallback" @click="btn">
			<img src="../../../static/community/chat_headArrowLeft.png"/>
		</div>
	</div>
	</transition>
</template>

<script>
	import axios from 'axios';
	import kill1 from '../../../static/jsonimg/shopping/recommend/kill1.jpg';
	export default {
		data() {
			return {
				content: [{pic:kill1,name:'超绝口',money:123},{pic:kill1,name:'超绝口',money:123},
					{pic:kill1,name:'超绝口',money:123},{pic:kill1,name:'超绝口',money:123}
				]
			}
		},
		methods: {
			btn () {
				this.$store.state.detailBol = false;
				this.$router.push({path:history.go(-1)});
			}
		},
		computed: {
			detailBol() {
				return this.$store.state.detailBol;
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.clear:after {
		content: "";
		clear: both;
		display: block;
	}
	.fl {
		float: left;
	}
	.wrap {
		width: 100%;
		padding-bottom: 1.33rem;
	}
	img {
		width: 100%;
	}
	
	.listWrap {
		width: 93%;
		margin: 0 auto;
	}
	.list {
		width: 46%;
		margin: 2%;
		text-align: center;
	}
	.name {
		padding: 0.13rem 0;
	}
	.money {
		color: red;
	}
	.fallback{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 0.4rem;
		background-color: rgba(0,0,0,0.2);
		position: fixed;
		top: 0.4rem;
		left:0.33rem;
		border: 0.02rem solid white;
		z-index: 3;
		img {
			width: 80%;
			margin: 10% 0 0 10%;
		}
	}
	
	.move-enter-active,
	.move-leave-active {
		transition: all 0.5s ease-out;
	}
	
	.move-enter {
		transform: translateX(10rem);
		opacity: 0;
	}
	
	.move-leave-active {
		transform: translateX(10rem);
		opacity: 0;
	}
</style>
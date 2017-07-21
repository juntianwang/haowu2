<template>
	<div id="mychild">
		<div class="my-bg" v-if="loginBol">
			<p>&nbsp;</p>
			<div class="portrait"></div>
			<p class="name">{{ures}}</p>
			<p class="fans">
				<span>{{attention}}关注</span> | <span>{{fans}}粉丝</span>
			</p>
		</div>
		<div class="my-bg1" v-else="loginBol">
			<p>&nbsp;</p>
			<div class="portrait"></div>
			<span @click="login">点击登录</span>
		</div>
		<div class="my-order">
			<p class="my-order-one">
				<span>我的订单</span>
				<span>查看全部订单 &nbsp;&nbsp;&nbsp;</span>
			</p>
			<p class="my-order-two">
				<span v-for="i in order" @click="myOrder(i)">{{i}}</span>
			</p>
		</div>
		<div class="my-list">
			<p v-for="item in list" @click="to(item.to)">	
				{{item.txt}}
				<span></span>
				<em>{{item.span}}</em>
				
			</p>
		</div>
		
	</div>
</template>
<script>
export default {
	data () {
		return {
			list:[
			{txt:'退货 / 售后',span:"",to:"/1"},
			{txt:'商城客服',span:"",to:"/2"},
			{txt:'',span:"",to:""},
			{txt:'我的钱包',span:"￥0.00",to:"/3"},
			{txt:'我的积分',span:"0",to:"/4"},
			{txt:'我的优惠卷',span:"2张",to:"/5"},
			{txt:'',span:"",to:""},
			{txt:'边分享边赚钱',span:"定金金额的5%归你",to:"/6"},
			{txt:'分享赢优惠劵',span:"立减50元",to:"/7"},
			{txt:'',span:"",to:""},
			{txt:'我的收藏',span:"",to:"/8"},
			{txt:'我的草稿箱',span:"",to:"/9"},
			{txt:'我的发帖',span:"",to:"/10"},
			],
			order:['待付款','待发货','已发货','已完成'],
			ures:"尚未取名",
			attention:0,
			fans:0,
			loginBol:true,
		}
	},
	methods:{
		login () {
			this.$router.push({name:'login'})
			
		},
		myOrder (i) {
			console.log(i)
			this.$router.push({name:''})
		},
		to (i) {
			console.log(i)
		}
	},
	mounted (){
		if(window.sessionStorage.ures == undefined){
			this.loginBol = false;
		}
	}
}
</script>

<style lang="scss" scoped="" type="text/css">
#mychild{
	width: 10rem;
	color: #787878;
	.my-list{
		width: 100%;
		padding-bottom: 1.333333rem;
		p{
			text-indent: 1.2rem;
			height: 1.333333rem;
			box-sizing: border-box;
			border-bottom: 0.053333rem solid #f6f6f6;
			line-height: 1.333333rem;
			font-size: 0.373333rem;
			background: url(../../../../static/my/list1.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
			span{
				float: right;
				height: 1.333333rem;
				padding-right: 80px;
				background: url(../../../../static/my/right.png) no-repeat;
				background-size: 0.253333rem 0.426666rem;
				background-position: 0.773333rem 0.4rem;
			}
			em{
				float: right;
			}
		}
		p:nth-child(2){
			background: url(../../../../static/my/list2.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(3){
			height: 0;
			border-bottom: 0.133333rem solid #f6f6f6;
			span{
				height: 0;
			}
		}
		p:nth-child(4){
			background: url(../../../../static/my/list3.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(5){
			background: url(../../../../static/my/list4.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(6){
			background: url(../../../../static/my/list5.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(7){
			height: 0;
			border-bottom: 0.133333rem solid #f6f6f6;
			span{
				height: 0;
			}
		}
		p:nth-child(8){
			background: url(../../../../static/my/list6.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(9){
			background: url(../../../../static/my/list7.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(10){
			height: 0;
			border-bottom: 0.133333rem solid #f6f6f6;
			span{
				height: 0;
			}
		}
		p:nth-child(11){
			background: url(../../../../static/my/list8.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(12){
			background: url(../../../../static/my/list9.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
		p:nth-child(13){
			background: url(../../../../static/my/list10.png) no-repeat;
			background-size: 0.48rem 0.48rem;
			background-position: 0.346666rem 0.4rem;
		}
	}
	.my-order{
		width: 100%;
		border-bottom: 0.053333rem solid #f3f3f3;
		.my-order-one{
			width: 100%;
			height: 0.8rem;
			font-size: 0.346666rem;
			span:nth-child(1){
				float: left;
				margin-top: 0.266666rem;
				margin-left: 0.4rem;
			}
			span:nth-child(2){
				margin-top: 0.266666rem;
				float: right;
				background: url(../../../../static/my/right.png) no-repeat;
				background-position: 2.2rem 0rem;
				background-size: 0.253333rem 0.426666rem;
			}
		}
		.my-order-two{
			display: flex;
			span{
				text-align: center;
				flex: 1;
				font-size: 0.32rem;
				height: 130px;
				line-height: 180px;
			}
			span:nth-child(1){
				background:url(../../../../static/my/order1.png) no-repeat;
				background-position: 55px 20px;
				background-size: 0.933333rem 0.666666rem;
				
			}
			span:nth-child(2){
				background: url(../../../../static/my/order2.png) no-repeat;
				background-position: 55px 20px;
				background-size: 0.933333rem 0.666666rem;
			}
			span:nth-child(3){
				background: url(../../../../static/my/order3.png) no-repeat;
				background-position: 55px 20px;
				background-size: 0.933333rem 0.666666rem;
			}
			span:nth-child(4){
				background: url(../../../../static/my/order4.png) no-repeat;
				background-position: 55px 20px;
				background-size: 0.933333rem 0.666666rem;
			}
		}
	}
	.my-bg1{
		box-sizing: border-box;
		border-bottom: 2px solid #f2f2f2;
		width: 100%;
		height: 6.133333rem;
		text-align: center;
		span{
			display: inline-block;
			width: 3.6rem;
			height: 1.066666rem;
			background-color: #f9cf18;
			margin-top: 50px;
			border-radius: 0.106666rem;
			font-size: 0.346666rem;
			line-height: 1.066666rem;
			color: #44454d;
		}
		.portrait{
			width: 1.866666rem;
			height: 1.866666rem;
			border-radius: 50%;
			background: #eaeaea url(../../../../static/my/name-bg.png) no-repeat;
			background-size: 1.866666rem 1.866666rem;
			margin: 1.333333rem auto 0rem;
		}
	}
	.my-bg{
		width: 100%;
		height: 6.133333rem;
		background: url(../../../../static/my/my-bg.png) no-repeat;
		background-size: 10rem;	
		.portrait{
			width: 1.866666rem;
			height: 1.866666rem;
			border-radius: 50%;
			background: #eaeaea url(../../../../static/my/name-bg.png) no-repeat;
			background-size: 1.866666rem 1.866666rem;
			margin: 1.333333rem auto 0rem;
		}
		.name{
			text-align: center;
			font-size: 0.4rem;
			color: #fff;
			margin-top: 20px;
		}
		.fans{
			font-size: 0.346666rem;
			text-align: center;
			color: #fff;
			margin-top: 10px;
		}
	}
}
</style>
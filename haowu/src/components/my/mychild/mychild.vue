<template>
	<div id="mychild">
		<div class="my-bg" v-if="loginBol">
			<p>&nbsp;</p>
			<div class="portrait">
				<img :src="headsrc"/>
			</div>
			<p class="name">{{ures}}</p>
			<p class="fans">
				<span>{{attention}}关注</span> | <span>{{fans}}粉丝</span>
			</p>
			<div class="setting">
				<span @click="set1"></span>
			</div>
		</div>
		<div class="my-bg1" v-else="loginBol">
			<p>&nbsp;</p>
			<div class="portrait">
				<img src="../../../../static/my/name-bg.png"/>
			</div>
			<span @click="login">点击登录</span>
			<div class="setting1">
				<em @click="set2"></em>
			</div>
		</div>
		<div class="my-order">
			<p class="my-order-one">
				<span>我的订单</span>
				<span>查看全部订单</span>
			</p>
			<p class="my-order-two">
				<span v-for="i in order" @click="myOrder(i)">{{i}}</span>
			</p>
		</div>
		<div class="my-list">
			<p v-for="item in list" @click="to(item.to,item.txt)">	
				{{item.txt}}
				<span></span>
				<em>{{item.span}}</em>
			</p>
		</div>
		<app-nav></app-nav>
	</div>
	
</template>
<script>
import AppNav from "../../common/AppNav"
export default {
	data () {
		return {
			headsrc:"../../../../static/my/name-bg.jpeg",
			list:[
			{txt:'退货 / 售后',span:"",to:"/1"},
			{txt:'商城客服',span:"",to:"/2"},
			{txt:'',span:"",to:""},
			{txt:'我的钱包',span:"￥0.00",to:"mywalletr"},
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
			this.$router.push({name:'myOrder',params:{name:i}})
		},
		to (to,txt) {
			this.$router.push({name:to,params:{name:txt}})
		},
		set1 () {
			this.$router.push({name:'setting',params:{name:'设置'}})
		},
		set2 () {
			this.$router.push({name:'login'})

		}
	},
	mounted (){
		if(window.sessionStorage.ures == undefined){
//			this.loginBol = false;
		}else{
			axios({
			  url: '/',
			  method: 'get',
			}).then((res) => {
	      		this.headsrc == "../../../../static/my/name-bg.jpeg"
			})

		}

		//头部动画
		window.onscroll = () =>{
			if(this.loginBol==false){
				return
			}
			var top = document.body.scrollTop || document.documentElement.scrollTop;
			var set = document.getElementsByClassName("setting")[0]
			var bg = document.getElementsByClassName("my-bg")[0]
			var span = set.getElementsByTagName("span")[0]
			var h = bg.offsetHeight;
			var rgba = top/(h-set.offsetHeight)
			set.style.backgroundColor = "rgba(256,256,256,"+rgba+")"					
			if(rgba > 0.5){
				span.style.backgroundImage = "url(../../../../static/my/setting2.png)"
			}else{
				span.style.backgroundImage = "url(../../../../static/my/setting1.png)"
			}
		}
	},
	components: {
			AppNav,
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
				padding-right: 1.06rem;
				background: url(../../../../static/my/right.png) no-repeat;
				background-size: 0.253333rem 0.426666rem;
				background-position: 0.6rem 0.4rem;
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
				padding-right: 0.86rem;
				background: url(../../../../static/my/right.png) no-repeat;
				background-position: 2.48rem 0rem;
				background-size: 0.253333rem 0.426666rem;
				
			}
		}
		.my-order-two{
			display: flex;
			span{
				text-align: center;
				flex: 1;
				font-size: 0.32rem;
				height: 1.73rem;
				line-height: 2.4rem;
			}
			span:nth-child(1){
				background:url(../../../../static/my/order1.png) no-repeat;
				background-position: 0.73rem 0.26rem;
				background-size: 0.933333rem 0.666666rem;
				
			}
			span:nth-child(2){
				background: url(../../../../static/my/order2.png) no-repeat;
				background-position: 0.73rem 0.26rem;
				background-size: 0.933333rem 0.666666rem;
			}
			span:nth-child(3){
				background: url(../../../../static/my/order3.png) no-repeat;
				background-position: 0.73rem 0.26rem;
				background-size: 0.933333rem 0.666666rem;
			}
			span:nth-child(4){
				background: url(../../../../static/my/order4.png) no-repeat;
				background-position: 0.73rem 0.26rem;
				background-size: 0.933333rem 0.666666rem;
			}
		}
	}
	.my-bg1{
		box-sizing: border-box;
		border-bottom: 0.02rem solid #f2f2f2;
		width: 100%;
		height: 6.133333rem;
		text-align: center;
		.setting1{
			height: 1.33rem;
			width: 100%;
			background: rgba(256,256,256,1);
			position: fixed;
			top: 0;
			em{
				display: block;
				width: 1.33rem;
				height: 1.33rem;
				background: url(../../../../static/my/setting2.png) no-repeat;
				background-size:0.56rem 0.56rem;
				background-position:0.4rem 0.4rem;
			}
		}
		span{
			display: inline-block;
			width: 3.6rem;
			height: 1.066666rem;
			background-color: #f9cf18;
			margin-top: 0.66rem;
			border-radius: 0.106666rem;
			font-size: 0.346666rem;
			line-height: 1.066666rem;
			color: #44454d;
		}
		.portrait{
			width: 1.866666rem;
			height: 1.866666rem;
			border-radius: 50%;
			margin: 1.333333rem auto 0rem;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.my-bg{
		width: 100%;
		height: 6.133333rem;
		background: url(../../../../static/my/my-bg.png) no-repeat;
		background-size: 10rem;
		position: relative;
		.setting{
			height: 1.33rem;
			width: 100%;
			background: rgba(256,256,256,0);
			position: fixed;
			top: 0;
			span{
				display: block;
				width: 1.33rem;
				height: 1.33rem;
				background: url(../../../../static/my/setting1.png) no-repeat;
				background-size:0.56rem 0.56rem;
				background-position:0.4rem 0.4rem;
			}
		}	
		.portrait{
			width: 1.866666rem;
			height: 1.866666rem;
			border-radius: 50%;
			margin: 1.333333rem auto 0rem;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.name{
			text-align: center;
			font-size: 0.4rem;
			color: #fff;
			margin-top: 0.26rem;
		}
		.fans{
			font-size: 0.346666rem;
			text-align: center;
			color: #fff;
			margin-top: 0.13rem;
		}
	}
}
</style>
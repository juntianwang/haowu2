<template>
	<div id="register">
		<div class="top">
			<span @click="goback"></span>
			<p>注册好物</p>
		</div>
		<div class="conten">
			<p>HAVE</p>
		</div>
		<div class="ipt">
			<input type="" onafterpaste="this.value=this.value.replace(/\D/g,'')" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入你的手机号码" @blur="blur"/>
			<p>注册代表您同意 <a @click="deal">用户协议</a></p>
			<span @click="pwd">下一步</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	
methods:{
	goback () {
		window.history.go(-1)
	},
	deal () {
		this.$router.push({name:'deal'})
	},
	blur () {
		var ipt = document.getElementsByTagName("input")[0]
		console.log(ipt.value)
		axios({
			  url: '/register',
			  method: 'post',
			  params:{user:ipt.value}
		}).then((res) => {
      		if(err == 1){
      			
      		}else{
      			
      		}
		})
	},
	pwd () {
		var ipt = document.getElementsByTagName("input")[0]
		if(ipt.value.length == 0){
			return
		}
		this.$router.push({name:'password',params:{txt:ipt.value}})
	}
	
	
	}
}
</script>

<style lang="scss" scoped="" type="text/css">
/*http://localhost:8080/#/login*/
#register{
	width: 10rem;
	height: 17.786666rem;
	background: #FFFFFF;
	position: relative;
	z-index: 999;
	.top{
		position: relative;
		width: 100%;
		height: 1.2rem;
		border-bottom: 2px solid #eee;
		text-align: center;
		span{
			position: absolute;
			display: block;
			width: 0.853333rem;
			height: 0.853333rem;
			background-color: red;
			background: url(../../../../static/entrance/left_chat.png) no-repeat;
			top: 0.293333rem;
			left: 0.133333rem;
			background-size: 0.613333rem 0.613333rem;
		}
		p{
			line-height: 1.2rem;
			font-size: 0.426666rem;
		}
	}
	.conten{
		font-size: 0.746666rem;
		color: #4b4b4b;
		text-align: center;
		margin-top: 0.8rem;
	}
	.ipt{
		margin-top: 0.666666rem;
		text-align: center;
		input{
			height: 1.333333rem;
			line-height: 1.333333rem;
			border: none;
			font-size: 0.4rem;
			border-bottom: 0.053333rem solid #e8e8e8;
			width: 7.733333rem;
			text-indent: 0.666666rem;
			background: url(../../../../static/entrance/head.png) no-repeat;
			background-position: 0rem 0.346666rem;
			background-size: 0.666666rem 0.666666rem;
		}
		p{
			text-align: left;
			font-size: 0.4rem;
			color: #c5c5c5;
			display: inline-block;
			width: 7.733333rem;
			margin-top: 0.266666rem;
			a{
				font-size: 0.426666rem;
				color: #000;
				text-decoration: underline;
			}
		}
		span{
			display: inline-block;
			width: 7.733333rem;
			background-color: #fdda2c;
			height: 1.066666rem;
			border-radius: 0.106666rem;
			line-height: 1.066666rem;
			color: #a48815;
			margin-top: 0.4rem;
			font-size: 0.373333rem;
		}
	}
}
</style>
<template>
	<div id="password">
		<div class="top">
			<span @click="goback"></span>
			<p>设置密码</p>
		</div>
		<div class="conten">
			<p>HAVE</p>
		</div>
		<div class="pwd">
			<p>{{txt}}</p>
			<input type="password" placeholder="请设置密码"/>
			<em>密码长度6-16位，支持数字，字母和符号</em>
			<span @click="accomplish">完成</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			txt:"",
		}
	},
	methods:{
		goback () {
			window.history.go(-1)
		},
		accomplish () {
			
			var ipt = document.getElementsByTagName("input")[0]
			if(ipt.value.length < 6 || ipt.value.length > 16){
				return
			}
			var ptxt = document.getElementsByClassName("pwd")[0].getElementsByTagName("p")[0]
			axios({
			  url: '/password',
			  method: 'post',
			  params:{user:ptxt.innerText,pwd:ipt.value}
			}).then((res) => {
      			
			})
			this.$router.push({name:'shopping'})
		}
	},
	mounted () {
		this.txt = this.$route.params.txt;
	}
}
</script>

<style lang="scss" scoped="" type="text/css">
#password{
	width: 10rem;
	height: 17.786666rem;
	z-index: 999;
	background: #fff;
	position: relative;
	.pwd{
		width: 7.733333rem;
		margin: 0.666666rem auto;
		p{
			text-indent: 0.8rem;
			background: url(../../../../static/entrance/head.png) no-repeat;
			background-position: 0rem 0.24rem;
			background-size: 0.666666rem 0.666666rem;
			line-height: 1.066666rem;
			font-size: 0.346666rem;
			border-bottom:0.026666rem solid #eaeaea;
		}
		input{
			height: 1.333333rem;
			line-height: 1.333333rem;
			border: none;
			font-size: 0.4rem;
			border-bottom: 0.053333rem solid #e8e8e8;
			width: 7.733333rem;
			text-indent: 0.8rem;
			background: url(../../../../static/entrance/pwd.png) no-repeat;
			background-position: 0rem 0.346666rem;
			background-size: 0.666666rem 0.666666rem;
		}
		em{
			font-size: 0.32rem;
			color: #9c9c9c;
			display: inline-block;
			margin-top: 0.333333rem;
		}
		span{
			text-align: center;
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
	.conten{
		font-size: 0.746666rem;
		color: #4b4b4b;
		text-align: center;
		margin-top: 0.8rem;
	}
	.top{
		position: relative;
		width: 100%;
		height: 1.2rem;
		border-bottom: 0.02rem solid #eee;
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
}
</style>
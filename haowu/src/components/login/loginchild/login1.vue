<template>
	<div id="login">
		<img src="../../../../static/entrance/login-bg.jpeg" class="login-bg"/>
		<div class="colse" @click="colse">
			
		</div>
		<div class="login-txt">
			<span>某 某</span>
			<p>家比世界更大</p>
		</div>
		<div class="login-zuce">
			<span >微博登陆</span><span>微信登陆</span>
			<div @click="register">账号注册</div>
			<p @click="debark"> 已有XX账号?</p>
		</div>
	</div>
</template>

<script>
export default {
methods:{
	register () {
		this.$router.push({name:'register'})
	},
	debark () {
		this.$router.push({name:'debark'})
	},
	colse () {
		window.history.go(-1);
	}
	}
}
</script>

<style lang="scss" scoped="" type="text/css">
/*http://localhost:8080/#/login*/
#login{
	position: relative;
	z-index: 1000;
	width: 10rem;
	.login-bg{
		width: 100%;
	}
	.colse{
		width: 0.853333rem;
		height: 0.853333rem;
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		background:url(../../../../static/entrance/crop.png) no-repeat;
		background-size: 0.853333rem 0.853333rem;
		
	}
	.login-txt{
		position: absolute;
		top: 2.133333rem;
		left: 3.533333rem;
		span{
			font-size: 1.146666rem;
		}
		p{
			font-size: 0.453333rem;
			color: #4f4f51;
		}
	}
	.login-zuce{
		position: absolute;
		bottom: 0.8rem;
		left: 1.066666rem;
		text-align: center;
		font-size: 0.32rem;
		span:nth-child(1){
			margin-right: 0.266666rem;
		}
		span{
			display: inline-block;
			width: 3.733333rem;
			height: 1.066666rem;
			line-height: 1.066666rem;
			border-radius:0.106666rem ;
			background-color: #fdda2c;
		}
		div{
			margin-top: 30px;
			box-sizing: border-box;
			width: 7.733333rem;
			border: 4px solid #989898;
			height: 1.066666rem;	
			line-height: 1.066666rem;
			background-color: #fff;
			border-radius:0.106666rem ;
		}
		p{
			margin-top: 0.333333rem;
			color: #fff;
		}
	}
}
</style>
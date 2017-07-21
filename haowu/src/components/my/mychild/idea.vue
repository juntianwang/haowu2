<template>
	<div id="idea">
		<header-d></header-d>
		<textarea  placeholder="请在这里填写你对本页面的意见，我们将不断改进，感谢支持。"></textarea>
		<input type="text" placeholder="请留下手机或微信号码，我们将尽快联系你" onafterpaste="this.value=this.value.replace(/\D/g,'')" onkeyup="this.value=this.value.replace(/\D/g,'')"  />
		<p @click="idea">发送</p>
	</div>
</template>

<script>
import axios from 'axios'
import headerD from "../../common/header"
export default {
	methods:{
		idea () {
			var txt = document.getElementsByTagName("textarea")[0];
			var iphone = document.getElementsByTagName("input")[0];
			console.log(txt.value,iphone.value)
			
				axios({
				  url: '/idea',
				  method: 'post',
				  params:{idea:txt.value,iphone:iphone.value}
				}).then((res) => {
	      			txt.value = "";	
	      			iphone.value = "";
				})
				
				txt.value = "";	
	      		iphone.value = "";	
		}
	},
	components:{
  		headerD
  	}
}
</script>

<style lang="scss" scoped="" type="text/css">
#idea{
	width: 100%;
	height: 15.12rem;
	position: relative;
	background: #fff;
	z-index: 101;
	textarea{
		width: 100%;
		height: 5.73rem;
		border: none;
		border-top: 0.05rem solid #ededed;
		border-bottom: 0.05rem solid #ededed;
		margin-top: 1.06rem;
		padding-left: 0.26rem;
		font-size: 0.37rem;
		line-height: 0.45rem;
		padding-top: 0.13rem;
	}
	input{
		width: 100%;
		height: 1.01rem;
		border: none;
		border-bottom: 0.05rem solid #ededed;
		padding-left: 0.26rem;
		font-size: 0.37rem;
		line-height: 0.45rem;
		padding-top: 0.13rem;
	}
	p{
		position: fixed;
		top: 0.29rem;
		right: 0.53rem;
		font-size:0.42rem;
	}
}
</style>
<template>
	<div id="setting">
		<header-d></header-d>
		<div class="setting">
			<p v-for="(item,i) in list" @click="setto(item.to,item.title,i)">{{item.txt}}<em></em></p>
		</div>
	</div>
</template>

<script>
import headerD from "../../common/header"
export default {
	data () {
		return {
			list:[
			{txt:'头像',to:'dome',title:''},
			{txt:'修改用户名',to:'changingname',title:'修改用户名'},
//			{txt:'更换手机号',to:'setserve',title:'更换手机号'},
			{txt:'意见反馈',to:'idea',title:'意见反馈'},
			{txt:'关于我们',to:'me',title:''},
			{txt:'服务条款及隐私政策',to:'setserve',title:''},
			{txt:'登出',to:'my',title:''},
			]
		}
	},
	methods:{
		setto (to,title,i) {
			if(i == 5){
				window.sessionStorage.removeItem('user')
				this.$router.push({name:to})
				return
			}
			this.$router.push({name:to,params:{name:title}})
			
		}
	},
	mounted () {
		
	},
	components:{
  		headerD
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
#setting{
	position: relative;
	width: 100%;
	height: 17.78rem;
	z-index: 101;
	.setting{
		padding-top: 1.59rem;
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		p:nth-child(6){
			border-top: 0.02rem solid #d7d6d4;
			text-align: center;
			color: #ef535f;
			margin-top: 0.53rem;
			font-size: 0.37rem;
			em{
				height: 0;
			}
		}
		p:nth-child(3){
			margin-bottom: 0.53rem;
		}
		p{
			line-height: 1.14rem;
			font-size: 0.34rem;
			text-indent: 0.48rem;
			background-color: #fff;
			border-bottom: 0.02rem solid #d7d6d4;
			em{
				float: right;
				display: block;
				height:1.14rem;
				width: 0.66rem;
				background:url(../../../../static/my/right.png) no-repeat;
				background-size: 0.25rem 0.42rem;
				background-position: 0.2rem 0.36rem;
			}
		}
	}
}
</style>
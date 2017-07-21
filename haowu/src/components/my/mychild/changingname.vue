<template>
	<div id="changingname">
		<div class="changingname">
			<header-d></header-d>
			<textarea placeholder="修改用户名"></textarea>
			<p @click="changing">发布</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import headerD from "./header"
export default {
	components:{
  		headerD
  	},
  	methods:{
		changing () {
			var txt = document.getElementsByTagName("textarea")[0];
			console.log(txt.value)
				axios({
				  url: '/changing',
				  method: 'post',
				  params:{name:txt.value}
				}).then((res) => {
	      			
				})
				txt.value = "";		
		}
	},
  	mounted () {
		var tex = document.getElementsByTagName("textarea")[0];
		tex.value = "捉米老鼠的哈士奇"
	},
}
</script>

<style lang="scss" scoped="" type="text/css">
.changingname{
	width: 100%;
	background: #f2f2f2;
	height: 1334px;
	position: relative;
	z-index: 101;
	textarea{
		width: 100%;
		height: 5.73rem;
		border: none;
		border-top: 0.05rem solid #ededed;
		border-bottom: 0.05rem solid #ededed;
		margin-top: 1.06rem;
		padding-left: 0.4rem;
		font-size: 0.4rem;
		line-height: 0.45rem;
		padding-top: 0.46rem;
	}
	p{
		position: fixed;
		top: 0.29rem;
		right: 0.53rem;
		font-size:0.42rem;
	}
}
</style>
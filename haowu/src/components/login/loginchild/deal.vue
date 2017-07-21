<template>
	<div id="deal">
		<div class="top">
			<span @click="goback"></span>
		</div>
		<h3>版权说明</h3>
		<div class="txt">
			<p>1. www.wanyicool.com (以下简称“本网站”）和好物 APP （以下简称"本 APP"）由北京纳谷科技有限公司（以下简称"纳谷科技"、"我们"、或"好物"）版权所有，未经授权禁止复制或建立镜像。</p>
			<p>&nbsp;</p>
			<p>2. 本网站及本 APP上刊载的所有内容以及本网站及本 APP用户发表并授权刊载于本网站及本 APP的所有内容，包括但不限于文字、图片、声音、视频、图表、标志、标识、广告、商标、商号、域名、软件、程序、数据、数据文件、发现、发明、作品、设计、技术、方法、流程、计划、公式、专栏目录与名称、内容分类标准、过去、目前和计划的研究开发成果以及任何其他信息或资料，均受中国现行法律法规、规章制度及适用之国际公约中有关着作权、商标权、专利权及（或）其它财产所有权法律的保护，为本公司所有。使用者将本网站及本 APP上刊载的内容与服务用于商业、盈利、广告性目的时，需征得本公司的书面特别授权，注明作者及文章出处并按有关规定支付相应费用。未经本公司的明确书面特别授权，任何人不得为任何目的使用以及向任何自然人或单位提供、披露、复印、复制、出售、出让、许可、营销、出版、宣讲、转让、处置或利用本网站及本 APP上提供的任何内容或服务，或在非本公司所属的服务器上作镜像，否则本公司将依据相关法律法规追究经济赔偿和其它侵权法律责任.</p>
			<p>&nbsp;</p>
			<p>3. 对不遵守本声明或其他违法、恶意使用本网站及本 APP内容者，本公司保留追究其法律责任的权利。</p>
		</div>
	</div>
</template>

<script>
export default {
methods:{
	goback () {
		window.history.go(-1)
	},
	}
}
</script>

<style lang="scss" scoped="" type="text/css">
#deal{
	width: 10rem;
	height: 17.786666rem;
	position: relative;
	z-index: 999;
	background: #fff;
	.top{
		position: fixed;
		top: 0;
		width: 100%;
		height: 1.2rem;
		background: #fff;
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
	}
	h3{
		font-size: 0.8rem;
		margin-top: 1.6rem;
		padding-top: 80px;
		margin-left: 0.933333rem;
		color: #ffcd00;
	}
	.txt{
		width: 7.466666rem;
		margin: 0.4rem auto;
		p{
			color: #4a4a4a;
			font-size: 0.346666rem;
		}
	}
}
</style>
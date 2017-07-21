<template>
	<div id="me">
		<header-d></header-d>
		<div class="me">
		<h3>关于我们</h3>
		<p>
			我们隶属于广州的科技有限公司，是专注于发现提升生活品质的好产品的移动社区。用户在这里搜罗发现全球的好产品，并分享他们购买和使用的真实体验，让大家在一起分享与交流中玩转品质生活！<br /><br />

在这个物质文明已经极度丰富的年代，我们已经不再仅仅关注满足于生活基本需求的东西，更希望找到可以提升生活品质的好产品。面对纷繁的产品列表，我们如何知道怎样的产品是真正适合自己的，是真正值得拥有的呢？<br /><br />

在这里，热爱生活，讲究品质的达人相聚一堂，分享“发现和捣腾好产品的乐趣“，<br /><br />

在这里，大家齐心协力发现和搜罗最新，最好，最值得拥有的产品，<br /><br />

在这里，探讨的是最真实的用户体验，无论是褒奖，还是吐槽，全都源于真实生活。<br /><br />

在这里，我们喜好随心，态度认真，玩转品质生活，彰显生活大智慧。
		</p>
		<h3>关于团队</h3>
		<p>我们团队是一群来自全国各地的学生于2017年1月组建。我们秉承广州创业公司的极客文化、创新文化、分享文化。我们希望做最好的产品，提供最真实的信息，组织最诚信的社区。我们希望在物质文明前所未有地丰富的世界中，帮助人们找到真正有品质，有乐趣的好产品，玩转精致而又够酷的生活。</p>
		</div>
	</div>
</template>

<script>
import headerD from "./header"
export default {
	
	components:{
  		headerD
  	}
}
</script>

<style lang="scss" scoped="" type="text/css">
#me{
	width: 100%;
	position: relative;
	z-index: 101;
	.me{
		padding-top: 1.06rem;
		background-color: #f2f2f2;
		padding-bottom: 1.6rem;
		h3{
			padding-top: 1.6rem;
			font-size: 0.74rem;
			color: #ffcd00;
			padding-left: 0.93rem;
			margin-bottom: 0.4rem;
		}
		p{
			padding-left: 0.93rem;
			width: 8rem;
			font-size: 0.37rem;
			color: #4d4d4d;
			line-height: 0.58rem;
		}
	}
	
}
</style>
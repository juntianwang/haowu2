<template>
	<div id="entrance">
		<div class="entrance-box" style="position: absolute;right: 10px;">
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_one_bg.png"/>
			</div>
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_two_bg.png"/>
			</div>
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_three_bg.png"/>
			</div>
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_four_bg.png"/>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	
	
}
</script>

<style lang="scss" scoped="" type="text/css">
#entrance{
	width: 10rem;
	height: 15.12rem;
	overflow: hidden;
	.entrance-box{
		height: 15.12rem;
		width: 40rem;
		.entrance-img{
			width: 10rem;
			height: 15.12rem;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
}

</style>
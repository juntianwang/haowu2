<template>
	<div>
		<header>
			<div class="go">
				<span>返回</span>
			</div>
			{{txt}}
		</header>
	</div>
</template>

<script>
	export default {
		props:["txt"],
		methods: {
			go() {
				Window.history.go(-1);	
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	header {
		position: relative;
		height: 1.06rem;
		width: 100%;
		text-align: center;
		line-height: 1.06rem;
		color: #4A4A4A;
		font-size: 0.4rem;
		border-bottom:0.026666rem solid #ededed;
		>div:nth-of-type(1) {
			position: absolute;
			top: 0;
			left: 0;
			>span {
				display: inline-block;
				margin-left: 0.73rem;
				position: relative;
			}
			>span:after {
				position: absolute;
				content: "";
				width: 100%;
				height: 100%;
				top: 0;
				left: -90%;
				background: url(../../../static/community/left_chat.png) no-repeat center;
				background-position-y:45%;
				background-size: 55%;
			}
		}
	}
</style>
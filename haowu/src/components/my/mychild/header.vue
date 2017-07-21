<template>
	<div>
		<header>
			<div class="go" @click ="go">
				<span>返回</span>
			</div>
			{{txt}}
		</header>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				txt:""
			}
		},
		mounted () {
			this.txt = this.$route.params.name;
		}
		,
		methods: {
			go() {
				window.history.go(-1);	
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	header {
		position: fixed;
		top: 0;
		height: 1.06rem;
		width: 100%;
		text-align: center;
		line-height: 1.06rem;
		color: #4A4A4A;
		font-size: 0.4rem;
		border-bottom:0.026666rem solid #ededed;
		background: #fff;
		>div:nth-of-type(1) {
			position: absolute;
			top: 0;
			left: 0;
			>span {
				display: inline-block;
				margin-left: 0.73rem;
				position: relative;
				color: #787878;
			}
			>span:after {
				position: absolute;
				content: "";
				width: 100%;
				height: 100%;
				top: 0;
				left: -90%;
				background: url(../../../../static/my/left_chat.png) no-repeat center;
				background-position-y:45%;
				background-size: 55%;
			}
		}
	}
</style>
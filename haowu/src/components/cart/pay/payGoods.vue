<template>
	<div class="paygoods">
		<ul>
			<li class="clear" v-for="item in payGoods">
				<div><img :src="item.img"/></div>
				<div>
					<p>{{item.name}}</p>
					<p><span>分类</span>: <span>{{item.model}}</span></p>
					<p>￥{{item.price}}</p>
				</div>
				<div>
					<span>x  {{item.num}}</span>
				</div>
			</li>
		</ul>
		<footer>
			<div>实际付款：<span>￥{{allprice}}</span></div>
			<button>立即付款</button>
		</footer>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				paygoodsArr: []
			}
		},
		computed: {
			allprice () {
				return this.$store.state.aa
			},
			cargoods () {
				return this.$store.state.cargoods
			},
			payGoods () {
				return this.$store.state.payGoods
			}
		},
		mounted: function () {
			this.paygoodsArr = this.$store.state.cargoods;
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
.paygoods{
	ul{
		margin-bottom: 1.37rem;
		li{
			position: relative;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			border-bottom: 0.02rem solid darkgray;
			div{
				float: left;
			}
			display: flex;
			/*justify-content: center;水平居中*/
			/*flex-wrap: wrap;里面内容超出自动换行*/

			div:nth-child(1){
				margin: 0 0.5rem;
				img{
					width: 2.58rem;
					height: 2.58rem;
				}
			}
			div:nth-child(2){
				margin-left: 0.4rem;
				color: darkgray;
				p{
					margin-top: 0.26rem;
					color: black;
					font-size: 0.4rem;
				}
				p:nth-child(2){
					color: rgb(172,173,174);
					margin: 0.26rem 0 0.4rem;
				}
				div{
					span:nth-child(1){
						font-size: 1rem;
					}
					span{
						width: 0.8rem;
						height: 0.8rem;
						font-size: 0.6rem;
						border: 1px solid darkgray;
						float: left;
						text-align: center;
						line-height: 0.8rem;
					}
				}
			}
			div:nth-child(3){
				position: absolute;
				right:0.53rem;
				padding-top:1.61rem;
				color: darkgray;
				margin-left: 0.6rem;
				vertical-align: bottom;
				font-size: 0.5rem;
				span{
					vertical-align: bottom;
				}
			}
		}
	}
	footer{
		width: 100%;
		height: 1.333333rem;
		position: fixed;
		bottom: 0;
		font-size: 0.34rem;
		display: flex;
		align-items: center;
		background:#f9f9f9;		
		z-index: 111;
		border-top: 0.026666rem solid #ededed;
		div{
			font-size: 0.47rem;
			color:rgb(146,146,147);
			margin-left: 2.3rem;
			span{
				color: red;
			}
		}
		button{
			width: 3.06rem;
			height: 1.06rem;
			background-color: rgb(248,213,19);
			border: none;
			font-size: 0.47rem;
			border-radius: 0.27rem;
			color: rgb(84,84,63);
			margin-left: 0.4rem;
		}
	}
}

</style>
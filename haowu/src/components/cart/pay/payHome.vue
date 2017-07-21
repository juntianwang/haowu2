<template>
	<div class="payhome">
		<pay-header :headerMsg="title"></pay-header>
		<div class="address" v-show="addmsg" @click = "shopaddr">
			<span>收货地址</span>
			<div>
				<span>请填写收货地址</span>
				<img src="../../../../static/cart_img/more.png"/>
			</div>
		</div>
		<div class="coupon" @click="paycoupon">
			<span>选择优惠券</span>
			<div>
				<span>0张可用</span>
				<img src="../../../../static/cart_img/more.png"/>
			</div>
		</div>
		<div class="totalprice">
			<span>商品合计</span>
			<div><span>￥5580</span></div>
		</div>
		<div class="freight">
			<span>运费</span>
			<div>
				<span>满88元免运费</span>
				<span>￥0</span>
			</div>
		</div>
		<pay-goods></pay-goods>
	</div>
</template>

<script>
	import payHeader from './payHeader'
	import payGoods from './payGoods'
	import payCoupon from './payCoupon'
	export default {
		data () {
			return {
			    title: '填写订单',
			    addmsg: true
			}
		
		},
		methods: {
			shopaddr () {
				console.log("aaa")
				this.$router.push({name:"shopAddr"})
			},
			paycoupon () {
				this.$router.push({name:"payCoupon"})
			}
		},
		components: { payHeader,payGoods,payCoupon }
	}
</script>

<style lang="scss" scoped="" type="text/css">
.payhome{
	.address{
		height: 1.4rem;
	    display: flex;
		/*justify-content: center;水平居中*/
		/*flex-wrap: wrap;里面内容超出自动换行*/
		align-items: center;
		border-bottom: 0.1rem solid rgb(240,242,240);
		span{
			color: rgb(137,138,139);
			font-size: 0.4rem;
			margin-left: 0.4rem;
		}
		div{
			margin-left: 4rem;
			display: inline-block;
			img{
			    width: 0.4rem;
				height: 0.4rem;
			}	
		}
	}
	.coupon{
		height: 1.4rem;
	    display: flex;
	    align-items: center;
	    border-bottom: 0.06rem solid rgb(240,242,240);
	    span{
			color: rgb(137,138,139);
			font-size: 0.4rem;
			margin-left: 0.4rem;
		}
		div{
			margin-left: 5rem;
			display: inline-block;
			img{
			    width: 0.4rem;
				height: 0.4rem;
			}	
		}
	}
	.totalprice{
		height: 1.4rem;
		display: flex;
	    align-items: center;
	    border-bottom: 0.06rem solid rgb(240,242,240);
		span{
			color: rgb(137,138,139);
			font-size: 0.4rem;
			margin-left: 0.4rem;
		}
		div{
			margin-left: 5.8rem;
			display: inline-block;
		}
	}
	.freight{
		height: 1.4rem;
		display: flex;
	    align-items: center;
	    border-bottom: 0.06rem solid rgb(240,242,240);
		span{
			color: rgb(137,138,139);
			font-size: 0.4rem;
			margin-left: 0.4rem;
		}
		div{
			margin-left: 4rem;
			display: inline-block;
			span:nth-child(1){
				display: inline-block;
				line-height: 1rem;
				text-align: center;
				width: 2.8rem;
				height: 1rem;
				background-color: rgb(215,216,217);
				border-radius:0.2rem ;
			}
			span:nth-child(2){
				margin-left: 0.37rem;
			}

		}
	}
}

</style>
<template>
	<div class="shopaddr">
		<pay-header :headerMsg="title"></pay-header>
		<img src="../../../../static/cart_img/address_divider.png"/>
		<div class="noaddr" v-show = "haveaddr">
			
			<img src="../../../../static/cart_img/icon_address_list_loading 2.png"/>
	
			<p>您还没有添加收货地址</p>

		</div>
		<addr-arr></addr-arr>
		<div class="addnew">
			<p @click="edit"><span>+</span>添加新地址</p>
		</div>
	</div>
</template>

<script>
	import payHeader from './payHeader'
	import addrArr from './addrArr'
	export default {
		data () {
			return {
				title: '管理地址',
				haveaddr: false
			}
		},
		computed: {
			addrArr () {
				return this.$store.state.addrArr
			}
		},
		methods: {
			edit () {
				this.$router.push({name:"editAddr",query:{data:"新建地址"}});
			}
		},
		components: { payHeader,addrArr }
	}
</script>


<style lang="scss" scoped="" type="text/css">
.shopaddr{
	
	.noaddr{
		text-align: center;

		img:nth-child(2){
			width: 4rem;
			margin: 2.66rem 0 0.66rem;
		}
		p{
			font-size: 0.4rem;
		}

	}
	.addnew{
		text-align: center;
		position: fixed;
		width: 100%;
		bottom: 0;
		height: 1.8rem;
		z-index: 111;
		background-color: white;
		p{
			border: 1px solid orange;
			width: 90%;
			margin: 0 auto;
			height: 1.2rem;
			color: orange;
			line-height: 1.2rem;
			font-size: 0.5rem;
			span{
				margin-right: 0.26rem;
			}
		}
	}

	
}
.shopaddr>img{
	width: 100%;
}

</style>
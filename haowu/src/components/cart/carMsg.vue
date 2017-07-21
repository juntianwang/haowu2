<template>
	<div>
		<ul class="goods">
			<li class="clear" v-for="(item,index) in goodsArr" @click="gotodetail">
				<div @click.stop="select(index)"><p :class="{selected:item.goodsbol}"></p></div>
				<div><img :src="item.cartsrc"/></div>
				<div>
					<p>{{item.cartgoods}}</p>
					<p><span>{{item.goodssel}}</span>: <span>{{item.goodsclassify}}</span></p>
					<div class="clear">
						<span @click.stop="exp(index)">-</span>
						<span>{{item.num}}</span>
						<span @click.stop="add(index)">+</span>
					</div>					
				</div>
				<div>
						<img src="../../../static/cart_img/icon_adapter_address_list_delete 2.png" @click.stop="del(index)"/>
						<p>￥{{item.price}}</p>
				</div>
			</li>
		</ul>
		<div class="buy">
			<div @click.stop="selectAll"><p :class="{selected:allgoodsbol}"></p></div>
			<div>全选</div>
			<div>总计(不含运费)：<span id="ap">￥{{allPrice}}</span></div>
			<button @click="pay">立即下单</button>
		</div>
	</div>	
</template>

<script>
	import pay from './pay'
	export default {
		data () {
			return {
				goodsArr: [],
				allgoodsbol: false,
				countnum: 0,
				allPrice: 0
			}
		},
		components: {pay},
		computed: {
			goods () {
				return this.$store.state.cargoods
			},
			aa () {
				return this.$store.state.aa	
			},
			payGoods () {
				return this.$store.state.payGoods	
			}
				
		},
		watch: {
			goods () {
				this.goodsArr = this.$store.state.cargoods;
//				this.countnum = this.$store.state.cargoods.length;
				console.log(this.countnum)
				
			}
		},
		methods: {
			pay () {
				
				if (this.countnum!=0) {
					this.payGoods.splice(0,this.payGoods.length);
					this.$store.state.aa	 = this.allPrice;
					
					for (var i = 0; i < this.goodsArr.length;i++) {
						if (this.goodsArr[i].goodsbol) {							
							this.payGoods.push(this.goodsArr[i]);						
						}
//						this.goodsArr[i].goodsbol = false;
						
					}
					
					this.$router.push({name:'pay',query:{data:this.allPrice}});
				}else{
					alert("请勾选物品");
				}
				
			},
			gotodetail () {
				alert("进去物品详情页");
			},
			exp (k) {				
				if (this.goodsArr[k].num==1) {
					this.goodsArr[k].num==1;					
					return;
				}
				this.goodsArr[k].num--;
				if (this.goodsArr[k].goodsbol) {
					this.allPrice -= 1*this.goodsArr[k].price;
				}
			},
			add (k) {
				this.goodsArr[k].num++;
				if (this.goodsArr[k].goodsbol) {					
					this.allPrice += 1*this.goodsArr[k].price;
				}
				
			},
			select (k) {
				this.goodsArr[k].goodsbol = !this.goodsArr[k].goodsbol;
				if (this.goodsArr[k].goodsbol) {
					this.allPrice += this.goodsArr[k].price*this.goodsArr[k].num;
					this.countnum++;
					console.log(this.countnum)
					if (this.countnum == this.goodsArr.length) {
						this.allgoodsbol = true;	
					}
//					console.log(this.countnum)
				}else{
					this.countnum--;
					this.allgoodsbol = false;
					this.allPrice -= this.goodsArr[k].price*this.goodsArr[k].num;
				}
			},
			selectAll () {
				this.allPrice = 0;
				this.countnum = this.goodsArr.length;
//				console.log(this.countnum);
				this.allgoodsbol = !this.allgoodsbol;
				if (this.allgoodsbol) {
					for (var i = 0;i<this.goodsArr.length;i++) {
						this.goodsArr[i].goodsbol = true;					
						this.allPrice += this.goodsArr[i].price*this.goodsArr[i].num;
					}
				}else{
					this.countnum = 0;
//					console.log(this.countnum)
					this.allPrice = 0;					
					for (var i = 0;i<this.goodsArr.length;i++) {
						this.goodsArr[i].goodsbol = false;					
					}	

				}
				
			},
			del (k) {
				if (this.goodsArr[k].goodsbol) {
					this.allPrice -= this.goodsArr[k].price*this.goodsArr[k].num;
					this.countnum--;
				}
				console.log(this.countnum)
				this.goodsArr.splice(k,1);
				
				
				console.log(this.goodsArr.length)
				if (this.goodsArr.length==0) {
					this.allgoodsbol = false;	
				}
				if (this.countnum == this.goodsArr.length&&this.goodsArr.length>0) {
					this.allgoodsbol = true;	
				}
				
			}
			
		},
		mounted: function(){
			this.goodsArr = this.$store.state.cargoods;
			for (var i = 0; i < this.goodsArr.length;i++) {
				this.goodsArr[i].goodsbol = false;					
			}
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
.selected{
	background-color: rgb(251,204,5);
}
.clear:after{
	clear: both;
	content: "";
	display: block;
}
.goods{
	li{
		position: relative;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid darkgray;
		div{
			float: left;
		}
		display: flex;
		/*justify-content: center;水平居中*/
		/*flex-wrap: wrap;里面内容超出自动换行*/
		align-items: center;
		div:nth-child(1){	
			margin-left: 0.17rem;		
			width: 0.8rem;
			height: 0.8rem;
			border: 1px solid black;
			border-radius: 50%;
			p{
				width: 0.6rem;
				height: 0.6rem;
				margin: 0.1rem;		
				border-radius: 50%;
				/*background-color: rgb(251,204,5);*/
			}
		}
		div:nth-child(2){
			margin: 0 0.3rem;
			img{
				width: 2.58rem;
				height: 2.58rem;
			}
		}
		div:nth-child(3){
			color: darkgray;
			p{
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
		div:nth-child(4){
			color: darkgray;
			position: absolute;
			right: 0.2rem;
			font-size: 0.5rem;
			img{
				margin-bottom: 1rem;
				width: 0.66rem;
			}
		}
	}
}
.buy{
	border-top: 0.02rem solid rgb(238,240,238);
	padding: 0.2rem 0 0.14rem;
	width: 100%;
	position: fixed;
	bottom: 1.333333rem;
	height: 1.06rem;
	line-height: 1.06rem;
	background-color: white;
	color: black;
	div{
		display: inline-block;
		vertical-align: middle;
		font-size: 0.4rem;
	}
	div:nth-child(1){	
		margin-left: 0.26rem;		
		width: 0.6rem;
		height: 0.6rem;
		border: 1px solid black;
		border-radius: 50%;
		p{
			width: 0.4rem;
			height: 0.4rem;
			margin: 0.1rem;		
			border-radius: 50%;
			/*background-color: rgb(251,204,5);*/
		}
	}
	div:nth-child(2){
		color: rgb(108,108,110);
	}
	div:nth-child(3){
		margin-left: 0.6rem;
		margin-right: 0.4rem;
		color: rgb(68,69,70);
		height: 1.05rem;
		font-size: 0.35rem;
	}
	button{
		border: none;
		width: 2.7rem;
		height: 0.9rem;
		font-size: 0.47rem;
		background-color: rgb(253,217,20);
		position: absolute;
		right: 0.26rem;
	}
	#ap{
		vertical-align: bottom;
		font-size: 0.53rem;
		color: red;
	}
}


</style>
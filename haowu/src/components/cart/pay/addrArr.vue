<template>
	<div class="addrarr">
		<ul>
			<li v-for="(item,index) in addrArr" @click="tocarthome(index)">
				<div>
					<span>{{item.name}}</span>
					<p>{{item.phone}}</p>
				</div>
				<div><span>{{item.address}}</span></div>
				<div>
					
					<div>
						<div @click.stop="editaddr(index)">
							<img src="../../../../static/cart_img/edit.png"/>
							<span>编辑</span>
						</div>
						<div @click.stop="deladdr(index)">
							<img src="../../../../static/cart_img/icon_adapter_address_list_delete 2.png"/>
							<span>删除</span>
						</div>
						<span></span>
					</div>
				</div>
			</li>
		</ul>
		<span class="moren" v-show="morenbol">默认地址</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				morenbol: false
			}
		},
		computed: {
			addrArr () {
				return this.$store.state.addrArr
			}
		},
		watch: {
			addrArr () {
				if (this.addrArr.length==0) {
					this.morenbol = false;
				}else{
					this.morenbol = true;
				}
			}
		},
		mounted: function(){
			this.$store.state.showAddr = this.addrArr[0]
//			console.log(this.$store.state.addrArr)
			if (this.addrArr.length==0) {
				this.morenbol = false;
			}else{
				this.morenbol = true;
			}	
		},
		methods: {
			tocarthome (k) {
				this.$store.state.showAddr = {};
				this.$store.state.showAddr = this.addrArr[k];
//				console.log(this.$store.state.showAddr)
				this.$router.push({name:"payHome"});
			},
			deladdr (k) {
				this.addrArr.splice(k,1)
			},
			editaddr (k) {
				this.$router.push({name:"reviseAddr",query:{data:"修改地址",index:k}});
			}
		}
		
	}
</script>

<style lang="scss" scoped="" type="text/css">
.addrarr{
	font-size: 0.42rem;
	margin-bottom: 1.82rem;
	ul{
		li{
			border-bottom: 0.05rem solid lightgray;
			/*padding: 0.33rem 0.4rem;*/
			p{
				float: right;
			}
		}
	}
}
.addrarr li>div{
	margin: 0.33rem 0.4rem;
}
.addrarr li>div:nth-child(2){
	margin: 0.26rem 0;
	border-bottom: 0.02rem solid lightgray;
	padding-bottom: 0.2rem;
	span{
		margin-left: 0.4rem;;
	}
}
.addrarr li>div:nth-child(3){
		height: 0.53rem;
}
.moren{
	position: absolute;
	display: inline-block;
	width: 2.2rem;
	height: 0.9rem;
	background-color: lightgray;
	color: whitesmoke;
	line-height: 0.9rem;
	text-align: center;
	left: 0.4rem;
	top: 3.38rem;
}
.addrarr li>div:nth-child(3)>div{
	display: inline-block;
	float: right;
}

.addrarr li>div:nth-child(3)>div{

	div{
		margin-right: 0.4rem;
		line-height: 0.53rem;
		display: inline-block;
		img{
			width: 0.5rem;
		}
	}
	
}

</style>
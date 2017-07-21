<template>
	<div class="reviseaddr">
		<pay-header :headerMsg="title">
			<span @click="keepaddr">保存</span>
		</pay-header>
		<input type="text" placeholder="收货人姓名"/>
		<input type="text" placeholder="收货人电话"/>
		<textarea rows="10" placeholder="请填写详细信息,不少于5个字"></textarea>
		<div>
			<div @click.stop="select">
				<p :class="{selected: editbol}"></p>
				
			</div>
			<span>设为默认地址</span>
		</div>
		<p></p>
	</div>
</template>

<script>
	import payHeader from './payHeader'
	export default {
		data () {
			return {
				editbol: false,
				xiabiao: 0
			}
		},
		computed: {
			title () {
				return this.$route.query.data;
			},
			addrArr () {
				return this.$store.state.addrArr;
			}
		},
		mounted: function() {
			console.log(this.addrArr);
			var index = this.$route.query.index;
			var that = this;
			this.xiabiao = index;
			$("input").eq(0).val(that.addrArr[index].name);
			$("input").eq(1).val(that.addrArr[index].phone);
			$("textarea").val(that.addrArr[index].address);
		},
		methods: {
			
			keepaddr () {
				var index = this.xiabiao;
				if ($("textarea").val()==""||$("input").eq(0).val()==""||$("input").eq(1).val()=="") {
					alert("请输入正确信息");

				}else{
					if (this.editbol) {
						this.addrArr.splice(index,1);
						this.addrArr.unshift({"name":$("input").eq(0).val(),"phone":$("input").eq(1).val(),"address":$("textarea").val()});
					}else{
						this.addrArr[index].name = $("input").eq(0).val();
						this.addrArr[index].phone = $("input").eq(1).val();
						this.addrArr[index].address = $("textarea").val();
					}
					this.$router.push({name:"shopAddr"});					
				}
			},
			select () {
				this.editbol = !this.editbol;
			}
		},
		components: { payHeader }
	}
</script>

<style lang="scss" scoped="" type="text/css">
.reviseaddr{
	border-bottom: 0.05rem solid gainsboro;
	padding-bottom: 0.3rem;
	.selected{
		background-color: rgb(251,204,5);
	}
	input{
		border: none;
		width: 100%;
		height: 1.06rem;
		font-size: 0.47rem;
		border-bottom: 0.02rem solid gainsboro;
		margin-top: 0.13rem;		
	}
	textarea{
		border: none;
		width: 100%;
		padding-top: 0.3rem;
		font-size: 0.4rem;
		border-bottom: 0.02rem solid gainsboro;
		overflow: scroll;
	}
	div:nth-child(5){
		margin-top: 0.4rem;
		display: flex;
		align-items: center;	
		div:nth-child(1){
			display: inline-block;
			width: 0.5rem;
			height: 0.5rem;
			border: 1px solid black;
			border-radius: 50%;
			p{
				width: 0.3rem;
				height: 0.3rem;
				margin: 0.1rem;		
				border-radius: 50%;
			}
		}		
		
	}
}
.reviseaddr>span{
	font-size: 0.4rem;
}
.reviseaddr>p{
	width: 100%;
	height: 2.66rem;
	position: absolute;
	background-color: white;
	bottom: 0;
	z-index: 111;
}
</style>
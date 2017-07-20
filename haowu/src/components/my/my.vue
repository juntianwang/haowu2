<template>
	<div>
		<div class="test" @click="d">
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
				list: {
					title: "Hook 铁艺五头挂钩",
					src: [
						"./static/community/1d7619d3-4719-45b0-9da4-98099c5428ab.jpeg",
						"./static/community/8b63a663-5b23-4c57-a59c-d551481f3268.jpeg",
						"./static/community/66d93241-5911-4d74-aa09-8bf88a9afdd1.jpeg",
						"./static/community/374ea1b1-690a-49ec-9238-567bdbf745d2.jpeg"
					],
					content: []
				}
		}
	},
	methods:{
		d () {
			this.$router.push({name:"goodsDetails",params:{data:this.list}})
		}
	}
	,
	components: {
	}
}</script>

<style lang="scss" scoped="" type="text/css">
	.test{
		width: 1.33rem;
		height: 1.33rem;
		background: #828282;
	}
</style>
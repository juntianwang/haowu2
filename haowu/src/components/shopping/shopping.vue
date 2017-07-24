<template>
	<div>
		<div class="test" @click="d">
		</div>
		<app-nav></app-nav>
	</div>
	
</template>

<script>
import AppNav from "../common/AppNav"
import axios from 'axios'
export default {
	data () {
		return {
				list: {
					title: "Hook 铁艺五头挂钩",
					price:"76",
					select_tip:[{
						title:"磨砂黑色",
						num:"11"
					},{
						title:"磨砂白色",
						num:"3"
					},{
						title:"磨砂青色",
						num:"0"
					},{
						title:"磨砂蓝色",
						num:"8"
					}],
					src: [
						"./static/community/1d7619d3-4719-45b0-9da4-98099c5428ab.jpeg",
						"./static/community/8b63a663-5b23-4c57-a59c-d551481f3268.jpeg",
						"./static/community/66d93241-5911-4d74-aa09-8bf88a9afdd1.jpeg",
						"./static/community/374ea1b1-690a-49ec-9238-567bdbf745d2.jpeg"
					],
					content: ["./static/community/0718e78b-d456-4e5e-a323-95def6c260da.jpeg",
							"./static/community/94265a49-fbfb-4b18-a6f5-4b91f4ea560a.jpeg",
							"./static/community/84e40019-06b5-4779-a89a-d7aa426182a5.jpeg",
							"./static/community/6c4776b6-c65f-492e-993d-a7a9a0ebaa74.jpeg",
							"./static/community/4843f0b2-0475-457c-af2e-b2799261489e.jpeg",
							"./static/community/b4e8b173-3bad-48a4-a1f1-a925839199e0.jpeg",
							"./static/community/8de75662-2f80-476c-a35c-7180ac94f3d1.jpeg",
							"./static/community/c6744607-68f9-4be5-854f-bee8017a6d47.jpeg",
					]
				}
		}
	},
	methods:{
		d () {
			this.$router.push({name:"goodsDetails",params:{data:this.list}})
		}
	}
	,
	mounted () {
	
		// axios.post('http://localhost/user.php', qs.stringify({name: 'bar' }));
	}
	,
	components: {
		AppNav,
	}
}
</script>

<style lang="scss" scoped="" type="text/css">
	.test{
		width: 1.33rem;
		height: 1.33rem;
		background: #828282;
	}
</style>
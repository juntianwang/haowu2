<template>
	<div>
		<router-view></router-view>
		<app-nav></app-nav>
	</div>
</template>

<script>
	import AppNav from "../common/AppNav"
	export default {
		data() {
			return {

			}
		},
		components: {
			AppNav,
		}
	}
</script>
<style lang="scss" scoped type="text/css">

</style>
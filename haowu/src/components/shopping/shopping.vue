<template>
	<div>
		<app-nav></app-nav>
	</div>
	
</template>

<script>
	import AppNav from "../common/AppNav"
	import axios from 'axios'; //先引入axios数据请求模块
	
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

<style>
</style>
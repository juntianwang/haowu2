<template>
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list" style="height: 100px; border-bottom: 5px solid black; background: red;">{{ item }}</li>
</ul>

</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import data from '../../../../test/shopping.json';

import axios from 'axios'



export default {
		data() {
			return {
				list:[1,2,3,4,5,6,7]
			}
		},
		methods:{
			loadMore() {
				  this.loading = true;
				  setTimeout(() => {
				    let last = this.list[this.list.length - 1];
				    for (let i = 1; i <= 10; i++) {
				      this.list.push(last + i);
				    }
				    this.loading = true;
				  }, 2500);
				}
		},
		mounted (){

			console.log(data.detail.length)
//			axios({
//			  url: 'http://1.momi.applinzi.com/php_1/cart.php',
//			  method: 'get',
//			  params: {user: "123"}
//			}).then((res) => {
//    			console.log(res)
//			})

		}	
	}
</script>

<style>
</style>
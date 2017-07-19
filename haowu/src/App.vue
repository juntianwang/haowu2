<template>
  <div id="app">
    <router-view></router-view>
    <app-nav></app-nav>
  </div>
</template>

<script>
import AppNav from "./components/common/AppNav"
export default {
  name: 'app',
  
  components:{
  	AppNav,
  	
  }
  
  
  
}
</script>

<style>

</style>

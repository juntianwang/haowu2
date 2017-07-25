<template>
	<div id="search">
		<div class="searchWrap clear">
			<div class="search fl clear">
				<img class="fl" src="../../assets/logo.png" alt="" />
				<input class="fl ipt" type="text" placeholder="优质特供" />
				<span class="fr del">×</span>
			</div>
			<span class="fr cancel">取消</span>
		</div>
		<div class="showSearch">
			<p>热门标签</p>
			<ul class="searchList clear">
				<li class="lis fl">隔板</li>
				<li class="lis fl">被子</li>
				<li class="lis fl">枕头</li>
				<li class="lis fl">餐具</li>
				<li class="lis fl">地毯</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style  scoped="scoped">
	.clear:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	::-webkit-input-placeholder {
		text-align: center;
	}
	
	:-moz-placeholder {
		text-align: center;
	}
	
	::-moz-placeholder {
		text-align: center;
	}
	
	:-ms-input-placeholder {
		text-align: center;
	}
	
	.searchWrap {
		width: 93%;
		margin: 0.4rem auto;
	}
	
	.search {
		width: 85%;
		background: #4b4b4b;
	}
	
	.search img {
		width: 0.85rem;
	}
	
	.del {
		color: white;
		width: 0.42rem;
		height: 0.42rem;
		border-radius: 50%;
		background: gray;
		text-align: center;
		vertical-align: middle;
		margin-top: 0.21rem;
		margin-right: 0.26rem;
	}
	
	.ipt {
		border: none;
		height: 0.64rem;
		width: 70%;
		margin: 0.1rem 0 0 5%;
	}
	
	.cancel {
		font-size: 0.37rem;
		margin-top: 0.18rem;
		color: #5b5b5b;
	}
	
	.showSearch {
		width: 93%;
		margin: 0 auto;
	}
	
	.searchList {
		width: 90%;
		margin: 0 auto;
	}
</style>
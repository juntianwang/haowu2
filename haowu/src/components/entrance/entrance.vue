<template>
	<div id="entrance">
		<div class="entrance-box" @touchstart="boxMove">
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_one_bg.png"/>
			</div>
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_two_bg.png"/>
			</div>
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_three_bg.png"/>
			</div>
			<div class="entrance-img">
				<img src="../../../static/entrance/walkthrough_four_bg.png"/>
			</div>
			<img src="../../../static/entrance/box.png" id="entrance-animate"/>
		</div>
		
	</div>
</template>

<script>
export default {
	methods:{
		boxMove (e) {
			var box = document.getElementsByClassName("entrance-box")[0];
			var img = document.getElementById("entrance-animate")
			
//			var x = e.touches[0].clientX + img.offsetLeft;	
//			var boxx = e.touches[0].clientX - box.offsetLeft;
//			box.addEventListener("touchmove",function(ev){
//				var imgX = (x - ev.touches[0].clientX)/75
//				var boxX = (ev.touches[0].clientX - boxx)/75;
//				img.style.left = imgX + "rem";
//				box.style.left = boxX + "rem";			
//				ev.preventDefault()
//			})
			var boxx = e.touches[0].clientX - box.offsetLeft;
			box.addEventListener("touchmove",function(ev){
				var boxX = (ev.touches[0].clientX - boxx)/75;
//				boxX/
				if (boxX>0){
					boxX = 0
				}
				if(boxX<-30){
					boxX = -30
				}
							
				img.style.left = 2.2+(1.933333-2.2)/10*boxX + "rem";
				img.style.width = 5.573333+(5.573333-6.106666)/10*boxX + "rem";
				img.style.height = 5.026666+(5.026666-5.44)/10*boxX + "rem";
				img.style.top = 7.933333+(7.933333-3.786666)/10*boxX + "rem";
				box.style.left = boxX + "rem";
				
				
				
				
				ev.preventDefault()
			})
			box.addEventListener("touchend",function(ev){
				console.log(11)
			})
		},
	}
	
}
</script>

<style lang="scss" scoped="" type="text/css">
#entrance{
	position: relative;
	width: 10rem;
	height: 17.786666rem;
	overflow: hidden;
	.entrance-box{
		position: absolute;
		height: 17.786666rem;
		width: 40rem;
		top: 0rem;
		left: 0rem;
		.entrance-img{
			width: 10rem;
			height: 17.786666rem;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
		}
		#entrance-animate{
				position: fixed;
				width: 5.573333rem;
				height: 5.026666rem;
				top: 7.933333rem;
				left: 2.2rem;
				/*11111*/
				/*width: 6.106666rem;
				height: 5.44rem;
				top: 3.786666rem;
				left: 1.933333rem;*/
				/*2222*/
				/*width: 2.8rem;
				height: 2.506666rem;
				top: 3.973333rem;
				left:5.066666rem;*/
				/*3333*/
				/*width: 6.026666rem;
				height: 5.333333rem;
				top: 4.133333rem;
				left: 2rem;*/
				/*4444*/
			}
	}
}

</style>
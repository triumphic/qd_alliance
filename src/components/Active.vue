<template>
  <div id="container" class="activePage">
		<!--<div id="header">
				<p>
				</p>
				<span>活动</span>
				<p></p>
		</div>-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
        <!-- silde1 -->
			<div class="swiper-slide slide1">
             	<!-- <img src="../assets/1/bigLogo.png" class="ani resize" id="text-title"
                	style="width:200rem;height:80rem;left:50rem;top:336rem;z-index:3;"
					swiper-animate-effect="scal" swiper-animate-duration="1.5s" swiper-animate-delay="0s"> -->
				<img src="../assets/1/bigLogo.png" class="ani resize" id="scal"
					style="width:200rem;height:80rem;left:50rem;top:336rem;z-index:3;"
					swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="0s">
            	<img src="../assets/1/logo.png" class="ani resize" 
					style="width:80rem;height:30rem;left:100rem;top:430rem;z-index:2;" 
					swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s">
			</div>
        <!-- silde2 -->
			<div class="swiper-slide slide2">
				<img src="../assets/2/person.png" class="ani resize" 
					style="width:300rem;height:300rem;left:-10rem;top:80rem;z-index:2;"
					swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0s">
				<img src="../assets/2/word.png" class="ani resize" 
					style="width:260rem;height:40rem;left:28rem;top:400rem;z-index:3;" 
					swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s">
			</div>
        <!-- silde3 -->
			<div class="swiper-slide slide3">
				<img src="../assets/3/person.png" class="ani resize" 
					style="width:240rem;height:290rem;left:30rem;top:80rem;z-index:2;" 
					swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0s">
				<img src="../assets/3/word.png" class="ani resize" 
					style="width:260rem;height:40rem;left:28rem;top:400rem;z-index:3;" 
					swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s">
			</div>
        <!-- silde4 -->
			<div class="swiper-slide slide4">
				<img src="../assets/4/person.png" class="ani resize" 
					style="width:260rem;height:280rem;left:30rem;top:80rem;z-index:2;" 
					swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0s">
				<img src="../assets/4/word.png" class="ani resize" 
					style="width:260rem;height:40rem;left:28rem;top:400rem;z-index:3;" 
					swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s">
			</div>
        <!-- silde5 -->
			<div class="swiper-slide slide5">
				<img src="../assets/5/person.png" class="ani resize" 
					style="width:260rem;height:280rempx;left:30rem;top:114rem;z-index:1;" 
					swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0s">
				<img src="../assets/5/word.png" class="ani resize" 
					style="width:220rem;height:40rem;left:50rem;top:50rem;z-index:3;" 
					swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s">
			</div>
         <!-- silde6 -->
				<div class="swiper-slide slide6" @click="handleClick">
				</div>
         <!-- silde7 -->
				<div class="swiper-slide slide7">
				</div>
         <!-- silde8 -->
				<div class="swiper-slide slide8">
					<img src="../assets/8/pie.png" class="ani resize" 
						style="width:270rem;height:180rem;left:30rem;top:270rem;z-index:1;" 
						swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="1s">
					<img src="../assets/8/title.png" class="ani resize" 
						style="width:210rem;height:52rem;left:60rem;top:40rem;z-index:3;" 
						swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="0s">
					<img src="../assets/8/CaaS.png" class="ani resize" 
						style="width:300rem;height:90rem;left:10rem;top:154rem;z-index:2;" 
						swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="1s" swiper-animate-delay=".5s">
				</div>
         <!-- silde9 -->
				<div class="swiper-slide slide9">
					<img src="../assets/9/stones1.png" class="ani resize" 
						style="width:80rem;height:60rem;left:40rem;top:310rem;z-index:1;" 
						swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
					<img src="../assets/9/stones2.png" class="ani resize" 
						style="width:80rem;height:60rem;left:130rem;top:310rem;z-index:1;" 
						swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0.2s">
					<img src="../assets/9/stones5.png" class="ani resize" 
						style="width:80rem;height:60rem;left:210rem;top:310rem;z-index:1;" 
						swiper-animate-effect="rotateInDownRight" swiper-animate-duration="1s" swiper-animate-delay="0.2s">
					<img src="../assets/9/stones3.png" class="ani resize" 
						style="width:80rem;height:60rem;left:40rem;top:365rem;z-index:1;" 
						swiper-animate-effect="rotateInUpLeft" swiper-animate-duration="1s" swiper-animate-delay="0.1s">
					<img src="../assets/9/stones4.png" class="ani resize" 
						style="width:80rem;height:60rem;left:210rem;top:365rem;z-index:1;" 
						swiper-animate-effect="rotateInUpRight" swiper-animate-duration="1s" swiper-animate-delay="0.2s">
					<img src="../assets/9/stones6.png" class="ani resize" 
						style="width:80rem;height:60rem;left:130rem;top:365rem;z-index:1;" 
						swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="0.2s">
					<img src="../assets/9/title.png" style="width: 2.656rem; height: 0.8rem;" class="nine-title"/>
					<img src="../assets/9/frame.png" style="width: 3.04rem; height: 1.856rem;" class="nine-kuang"/>
					<!-- <img src="../assets/9/stones3.png" style="width: 0.82rem; height: 0.82rem;" class="nine-four"/> -->
					<!-- <img src="../assets/9/stones4.png" style="width: 0.82rem; height: 0.82rem;" class="nine-six"/> -->
					<!-- <img src="../assets/9/stones6.png" style="width: 0.82rem; height: 0.82rem;" class="nine-five"/> -->
				</div>
         <!-- silde10 -->
				<div class="swiper-slide slide10">
					<img src="../assets/10/stoneList.png" class="ani resize" 
						style="width:260rem;height:350rem;left:30rem;top:30rem;z-index:2;" 
						swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0s">
					<img src="../assets/10/btn.png" style="width: 2rem; height: .4.6rem; top:5.7rem;left:.9rem;" class="ten-btn" @click="goZplist"/>
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<img src="../assets/arrow.png" style="width:20px;height:15px; top:460px; left:150px;" id="array" class="resize">
		</div>
	</div>
</template>

<script>
import { swiperAnimateCache } from "./../js/swiper.animate.min.js";
import { swiperAnimate } from "./../js/swiper.animate.min.js";
require("./../js/swiper.min.js");
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goZplist() {
      this.$router.push("/zplist");
    },
    handleClick () {
      alert(1)
    }
  },
  mounted() {
    document.title = "千丁互联";
    var scaleW = window.innerWidth / 320;
    var scaleH = window.innerHeight / 480;
    var resizes = document.querySelectorAll(".resize");
    for (var j = 0; j < resizes.length; j++) {
      resizes[j].style.width = parseInt(resizes[j].style.width) * scaleW + "px";
      resizes[j].style.height =
        parseInt(resizes[j].style.height) * scaleH + "px";
      resizes[j].style.top = parseInt(resizes[j].style.top) * scaleH + "px";
      resizes[j].style.left = parseInt(resizes[j].style.left) * scaleW + "px";
    }
    var mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", //纵向展示
      pagination: ".swiper-pagination", //小点
      //virtualTranslate : true,
      mousewheelControl: true,
      onInit: function(swiper) {
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
      },
      onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper);
      },
      onTransitionEnd: function(swiper) {
        swiperAnimate(swiper);
      },
      watchSlidesProgress: true,
      onProgress: function(swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
          var slide = swiper.slides[i];
          var progress = slide.progress;
          var translate = progress * swiper.height / 4;
          var scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
          var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
          slide.style.opacity = opacity;
          var es = slide.style;
          es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform =
            "translate3d(0," +
            translate +
            "px,-" +
            translate +
            "px) scaleY(" +
            scale +
            ")";
        }
      },
      onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
          var es = swiper.slides[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration =
            speed + "ms";
        }
      }
    });
  }
};
</script>

<style>
@import "../css/animate.min.css";
@import "../css/swiper.min.css";
/* 图一动画 */
/* @-webkit-keyframes scal{
	0%{opacity:0;
	-webkit-transform: scale(5);
	transform:scale3d(.3,.3,.3)}50%{opacity:1}} */
/* @keyframes scal{
	 0%,50% {
    transform: scale(5);
  }
  50%,75% {
   transform: scaleZ(1);
  }}
#scal{-webkit-animation-name:scal;animation-name:scal}

#text-title {
  -webkit-animation: scal 4s ease;
}
@keyframes titleScale {
  0%,50% {
    transform: scale(5);
  }
  50%,75% {
   transform: scaleZ(1);
  }
} */
.activePage {
  background-color: #000;
  position: relative;
}
/*#head{
	width: 100%;
	height: 2.5rem;
	background-color: #000;
	display: flex;
	justify-content: space-between;
	color: #fff;
	align-items: center;
}*/
.resize {
  z-index: 10;
  position: absolute;
  left: 48%;
  top: 92%;
}
.swiper-container {
  width: 100%;
  height: 100%;
  /*height: calc(100% - 2.5rem);*/
  /*margin-top: 2.5rem;*/
}
.swiper-container .swiper-slide {
  width: 100%;
  height: 100%;
}
#array {
  -webkit-animation: start 1.5s infinite ease-in-out;
}
@keyframes start {
  0%,
  30% {
    opacity: 0;
    transform: translate(0, 10px);
  }
  60% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -8px);
  }
}
.slide1 {
  background: url(../assets/1/background.jpg) no-repeat left top;
  background-size: 100% 100%;
}
.slide2 {
  background: url(../assets/2/background.jpg) no-repeat left top;
  background-size: 100% 100%;
}
.slide3 {
  background: url(../assets/3/background.jpg) no-repeat left top;
  background-size: 100% 100%;
}
.slide4 {
  background: url(../assets/4/background.jpg) no-repeat left top;
  background-size: 100% 100%;
}
.slide5 {
  background: url(../assets/5/background.jpg) no-repeat left top;
  background-size: 100% 100%;
}
.slide6 {
  background: url(../assets/6.jpg) no-repeat left top;
  background-size: 100% 100%;
}
.slide7 {
  background: url(../assets/7.gif) no-repeat left top;
  background-size: 100% 100%;
}
.slide8 {
  background: url(../assets/8/background.jpg) no-repeat left top;
  background-size: cover;
}
.slide9 {
  background: url(../assets/9/background.jpg) no-repeat left top;
  background-size: cover;
}
.slide10 {
  background: url(../assets/10/background.jpg) no-repeat left top;
  background-size: cover;
}
.ani {
  position: absolute;
}
.one-head {
  position: absolute;
  top: 0.14rem;
  left: 0.4rem;
}
.one-logo {
  position: absolute;
  top: 6rem;
  left: 1.5rem;
}
.one-title {
  position: absolute;
  top: 4.5rem;
  left: 0.6rem;
}
.two-man {
  position: absolute;
  top: 1.6rem;
  left: 0;
}
.two-word {
  position: absolute;
  top: 5.6rem;
  left: 0.3rem;
}
.three-man {
  position: absolute;
  top: 1.6rem;
  left: 0.8rem;
}
.three-word {
  position: absolute;
  top: 5.6rem;
  left: 0.3rem;
}
.four-man {
  position: absolute;
  top: 1.6rem;
  left: 0.2rem;
}
.four-word {
  position: absolute;
  top: 5.6rem;
  left: 0.3rem;
}
.five-man {
  position: absolute;
  top: 2.3rem;
  left: 0.8rem;
}
.five-word {
  position: absolute;
  top: 1.2rem;
  left: 0.3rem;
}
.eight-title {
  position: absolute;
  top: 0.48rem;
  left: 0.64rem;
}
.eight-caas {
  position: absolute;
  top: 2.24rem;
  left: 0.32rem;
}
.eight-pie {
  position: absolute;
  top: 3.68rem;
  left: 0.48rem;
}
.nine-title {
  position: absolute;
  top: 3.36rem;
  left: 0.55rem;
}
.nine-kuang {
  position: absolute;
  top: 4.16rem;
  left: 0.38rem;
}
.nine-one {
  position: absolute;
  top: 4.32rem;
  left: 0.48rem;
}
.nine-two {
  position: absolute;
  top: 4.32rem;
  left: 1.52rem;
}
.nine-three {
  position: absolute;
  top: 4.32rem;
  left: 2.56rem;
}
.nine-four {
  position: absolute;
  top: 5.12rem;
  left: 0.48rem;
}
.nine-five {
  position: absolute;
  top: 5.12rem;
  left: 1.52rem;
}
.nine-six {
  position: absolute;
  top: 5.12rem;
  left: 2.56rem;
}
.ten-list {
  position: absolute;
  top: 0.32rem;
  left: 0.4rem;
}
.ten-btn {
  position: absolute;
  top: 5.28rem;
  left: 0.96rem;
}
</style>
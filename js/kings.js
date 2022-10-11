let scene1 = document.querySelector(".sceneOne .narration");
let scene2 = document.querySelector(".sceneTwo .narration");
let scene3 = document.querySelector(".sceneThree .narration");
let scene4 = document.querySelector(".sceneFour .narration");
let scene5 = document.querySelector(".sceneFive .narration");
let scene6 = document.querySelector(".sceneSix .narration");

let scene1NextBtn = document.querySelector(".sceneOne .btn");
let scene2NextBtn = document.querySelector(".sceneTwo .btn");
let scene3NextBtn = document.querySelector(".sceneThree .btn");
let scene4NextBtn = document.querySelector(".sceneFour .btn");
let scene5NextBtn = document.querySelector(".sceneFive .btn");
let scene6NextBtn = document.querySelector(".sceneSix .btn");

const body = document.querySelector("body");
const soundCtrl = document.querySelector("._jsSound")
const video = document.querySelector(".bg_video");
const nextBtn = document.querySelectorAll(".nextBtn")


const swiper = new Swiper('.swiper-container.scenes',{
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	}
})

var bg_sound = new Howl({
  src: ['./media/audio/thunder.wav'],
  autoplay: true,
  loop: true,
  volume: 0.1,
  onend: function() {
    console.log('Finished!');
  }
});

// animations


const sceneDuration = 10000;
const sceneFadeOutDuration = 500;
const sceneOptions = {
	easing: 'easeOutExpo',
	opacity:[0,1],
	duration:1000,
	complete:function(){
		console.log(bg_sound.playing());
	}
}




const introTL = anime.timeline({
	easing: 'easeOutExpo'
});


introTL.add({
	targets:".sceneOne",
	opacity:[0,1],
})

.add({
	targets:[".sceneOne a", ".sceneOne p"],
	translateY:['100px','0'],
	opacity:[0,1],
	complete: function(anim) {
		// start background loop
		body.classList.add("music-playing")
    console.log(bg_sound.playing());
  }
}, 1000)


const fade_to_black = anime({
	targets:body,
	opacity:[1,0],
	duration:500,
	easing: 'easeOutExpo'
})

fade_to_black.pause();


// SCENE TWO ANIMATIONS
// REFACTOR LATER

const sceneTwoTL = anime.timeline(sceneOptions)

sceneTwoTL.add({
	targets:scene2
}).add({
	targets: '.sceneTwo .narration p.one',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneTwo .narration p.one',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneTwo .narration p.two',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneTwo .narration p.two',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneTwo .narration p.three',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneTwo .narration p.three',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneTwo .narration p.four',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneTwo .narration p.four',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneTwo .narration p.five',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneTwo .narration p.five',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneTwo .narration p.six',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneTwo .narration p.six',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets:'.sceneTwo .btn',
	opacity:[0,1],
	width:'100%'
})



// scene three
const sceneThreeTL = anime.timeline(sceneOptions)

sceneThreeTL.add({
	targets:scene3

}).add({
	targets: '.sceneThree .narration p.one',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneThree .narration p.one',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneThree .narration p.two',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneThree .narration p.two',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneThree .narration p.three',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneThree .narration p.three',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneThree .narration p.four',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneThree .narration p.four',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneThree .narration p.five',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneThree .narration p.five',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneThree .narration p.six',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneThree .narration p.six',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets:'.sceneThree .btn',
	opacity:[0,1],
	width:'100%'
})



// sceneFour

const sceneFourTL = anime.timeline(sceneOptions)

sceneFourTL.add({
	targets:scene4

}).add({
	targets: '.sceneFour .narration p.one',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFour .narration p.one',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFour .narration p.two',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFour .narration p.two',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFour .narration p.three',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFour .narration p.three',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFour .narration p.four',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFour .narration p.four',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFour .narration p.five',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFour .narration p.five',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFour .narration p.six',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFour .narration p.six',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets:'.sceneFour .btn',
	opacity:[0,1],
	width:'100%'
})

// sceneFive

const sceneFiveTL = anime.timeline(sceneOptions)

sceneFiveTL.add({
	targets:scene5

}).add({
	targets: '.sceneFive .narration p.one',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFive .narration p.one',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFive .narration p.two',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFive .narration p.two',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFive .narration p.three',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFive .narration p.three',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFive .narration p.four',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFive .narration p.four',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFive .narration p.five',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFive .narration p.five',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneFive .narration p.six',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneFive .narration p.six',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets:'.sceneFive .btn',
	opacity:[0,1],
	width:'100%'
})


// scene six

const sceneSixTL = anime.timeline(sceneOptions)

sceneSixTL.add({
	targets:scene6

}).add({
	targets: '.sceneSix .narration p.one',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneSix .narration p.one',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneSix .narration p.two',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneSix .narration p.two',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneSix .narration p.three',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneSix .narration p.three',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneSix .narration p.four',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneSix .narration p.four',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneSix .narration p.five',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneSix .narration p.five',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets: '.sceneSix .narration p.six',
	duration:sceneDuration,
	opacity:[0,1]
}).add({
	targets: '.sceneSix .narration p.six',
	duration:sceneFadeOutDuration,
	opacity:[1,0]
}).add({
	targets:'.sceneSix .btn',
	opacity:[0,1],
	width:'100%'
})


sceneTwoTL.pause()
sceneThreeTL.pause()
sceneFourTL.pause()
sceneFiveTL.pause()
sceneSixTL.pause()











// EVENT LISTENERS

soundCtrl.addEventListener("click",(e)=>{
	console.log(`from sound control`)
	body.classList.contains("music-playing") ? body.classList.remove("music-playing"):body.classList.add("music-playing");
	
	bg_sound.playing ? bg_sound.pause():bg_sound.play()
})


body.addEventListener('click', function(){
		if(bg_sound.playing){
			bg_sound.pause()
		}
})	


scene1NextBtn.addEventListener("click", (e)=>{
	// play Sound
	bg_sound.play();
	// change Scene
	swiper.slideNext()
	// start the animation
	sceneTwoTL.play()
	video.style = "opacity:0"
	video.src = 'media/smoke1.mp4';
	video.load();
	video.play()
	console.log(video)
	video.style = "opacity:1"
	console.log(bg_sound.playing());
})

scene2NextBtn.addEventListener("click", (e)=>{
	swiper.slideNext()
	sceneThreeTL.play()
	video.style = "opacity:0"
	video.src = '';
	video.load();
	video.play()
	console.log(video)
	video.style = "opacity:1"
})

scene3NextBtn.addEventListener("click", (e)=>{
	swiper.slideNext();
	sceneFourTL.play();
	video.style = "opacity:0";
	video.src = '';
	video.load();
	video.play();
	console.log(video);
	video.style = "opacity:1";
})

scene4NextBtn.addEventListener("click", (e)=>{
	swiper.slideNext()
	sceneFiveTL.play()
})

scene5NextBtn.addEventListener("click", (e)=>{
	swiper.slideNext()
	sceneSixTL.play()
})

scene6NextBtn.addEventListener("click", (e)=>{
	swiper.slideNext()
	sceneThreeTL.play()
})
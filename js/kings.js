let scene1;
let scene2;
let scene3;
let scene4;

const body = document.querySelector("body");
const soundCtrl = document.querySelector("._jsSound")

const video = document.querySelector(".bg_video");
const nextBtn = document.querySelectorAll(".nextBtn")

const swiper = new Swiper('.swiper-container.scenes',{

})

var bg_sound = new Howl({
  src: ['../media/audio/thunder.wav'],
  autoplay: true,
  loop: true,
  volume: 0.1,
  onend: function() {
    console.log('Finished!');
  }
});

// animations

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
    console.log(bg_sound.play());
  }
}, 1000)


// introTL.finished.then()




// EVENT LISTENERS

soundCtrl.addEventListener("click",(e)=>{
	console.log(bg_sound.playing)
	bg_sound.playing ? bg_sound.pause():bg_sound.play()
})

body.addEventListener('click', function(){
		if(bg_sound.playing){
			bg_sound.pause()
		}
})	

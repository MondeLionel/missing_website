
const body = document.querySelector("body");
const characters = document.querySelectorAll(".character");
const images = document.querySelectorAll('img');
const bg_audio = document.getElementById("bg_audio");
let soundBtn = document.querySelector(".soundBtn");
let loadSoundBtn = document.querySelector('.loadSoundBtn');

const bg_audio_src = "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/HxKQM0zSDkf8xwatf/audioblocks-eerie-nights-final_BPahDrPyq_NWM.mp3";

// console.log(images)
let bg_sound = new Howl({
  src: [bg_audio_src],
    loop: false,
  volume: 0.05,
  onend: function() {
    console.log('Finished!');
  }
});

console.log(bg_sound)

loadSoundBtn.addEventListener('click', (e)=>{
    bg_sound.pause();
    hideLoadingScreen();
})

soundBtn.addEventListener('click', function(e){
        soundBtn.innerText = 'Sound Off';
        bg_sound.play();
        console.log("paused");
});



characters.forEach((character)=>{
    character.addEventListener("mouseover", (e)=>{
        // get sibling elements
        const siblings = Array.from(e.target.parentNode.children).filter(child => child !== e.target);
        e.target.classList.add("active")
        // console.log(e.target)
        siblings.forEach(sibling=>{
            sibling.classList.remove("active")
        })
    })

    character.addEventListener("mouseleave",(e)=>{
        e.target.classList.remove("active")
    })
})
const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

const target = document.querySelector('#js-target');



ScrollOut({
     // scrollingElement: ".modal-content"
})

lscroll.on('call',(obj)=>{
    // openMenu(obj)
    console.log(this);
});

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    lscroll.scrollTo(section);
  }
}

function openMenu(_obj)
{
    console.log(_obj);
}


// Function to show the loading screen
function showLoadingScreen() {
  // Your code to display the loading screen
  console.log("Loading screen shown");
}

// Function to hide the loading screen
function hideLoadingScreen() {
    body.classList.remove("loading");

  console.log("Loading screen hidden");
}

// Check if the loading screen has been shown before
if (!localStorage.getItem('loadingScreenShown')) {
  // Show the loading screen
  showLoadingScreen();
  // Simulate some loading time (replace with your actual loading logic)
  setTimeout(() => {
    // Hide the loading screen
    hideLoadingScreen();
    // Set the flag in localStorage
    localStorage.setItem('loadingScreenShown', 'true');
  }, 3000); // 3 seconds for this example
} else {
  console.log("Loading screen already shown before, skipping...");
}



window.addEventListener("load", function(){
    console.log("finished loading");

    // check if images are loaded
    imagesLoaded( document.querySelector('body'), { background: true }, function( instance ) {
          console.log('all images are loaded');
          console.log(instance);
          hideLoadingScreen();
        });
})

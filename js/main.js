
const body = document.querySelector("body");


const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

const target = document.querySelector('#js-target');



ScrollOut({
     scrollingElement: ".modal-content"
})

window.addEventListener("load", function(){
    console.log("finished loading")
   

    // check if images are loaded
    imagesLoaded( document.querySelector('main'), { background: '.hero' }, function( instance ) {
          console.log('all images are loaded');
          console.log(instance)
           body.classList.remove("loading")
        });
    
})


const body = document.querySelector("body");
const characters = document.querySelectorAll(".character");


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

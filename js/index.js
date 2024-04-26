//header-link 

let links=document.querySelectorAll('nav ul li a');


links.forEach((el) => {

    el.addEventListener('click',(e) => {

        links.forEach((l) => {
            l.classList.remove('active');
            
        })
        el.classList.add('active');




        
    })
    
})


//header-link



// Gsap start 

let tl=gsap.timeline({
    scrollTrigger:{
        trigger:'#home-main',
        scrub:true,
        start:'0% 50%',
        end:'100% 80%',
        markers:true,
        snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
    }
})


tl.to('#lat-pro .title',{
    left:'40%',

})
tl.to('.some-int-qut .title',{
    left:'40%',

})
tl.to('#feed-back .title',{
    left:'40%',

})


let h2_el=document.querySelectorAll('#fact-rat h2');
h2_el.forEach((el) => {
    tl.to(el,{
        left:'40%',
    })
    
})






const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);






gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
let timeline1 = gsap.timeline()

timeline1.fromTo(".content div h1 :first-child", {x: "-100vw"}, {x: 0, duration: 1})
        .fromTo(".content div h1 :last-child", {x: "100vw"}, {x: 0, duration: 1}, "<")
        .fromTo(".content div p", {opacity: 0, rotate: "90deg", transformOrigin: "top left"}, {opacity: 1, rotate: "0", duration: .5})
        .fromTo(".content img", {y: "100vh"}, {y: 0, duration: .5})



let timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        toggleActions: "play pause reverse pause",
        reverse: true,
        start: "top 20%",
        end: "bottom"
    }
})

timeline2.fromTo(".section2 div h2 span", {y: "-100vh"}, {y: 0, duration: .5, stagger: .2})
        .fromTo(".section2 div p", {opacity: 0, rotateY: "90deg", transformOrigin: "center"}, {opacity: 1, rotateY: "0", duration: 1})


let timeline3 = gsap.timeline({
    scrollTrigger:{
        trigger:".horizontal-sections",
        start: "top",
        end: "bottom",
        pin: true,
        scrub: true
    }
})

timeline3.fromTo(".section3 div h2", {X: "50vw", scale: 10}, {x: 0, scale: 1, duration: .5})
        .fromTo(".section3 div span", {y: "40vh", backgroundColor: "white", color: "black"}, {y: 0, duration: .5, stagger: .2})
        .fromTo(".horizontal-sections", {x: "0"}, {x: "-35%"})
        .from(".portfolio-item", {x: "50vw", duration: .5, stagger: .1}, "<")



const contactMe = document.querySelector(".section5 div h2").innerHTML
const array = contactMe.split("")

let newContactMe = ""
for(let i = 0; i < contactMe.length; i++){
    if(contactMe[i]===" "){
        newContactMe += `<span>&nbsp;</span>`
    }else{
        newContactMe += `<span>${contactMe[i]}</span>`
    }
}

document.querySelector(".section5 div h2").innerHTML = newContactMe

let timeline5 = gsap.timeline({
    scrollTrigger:{
        trigger:".section5",
        start: "top",
        end: "bottom",
        pin: true,
        scrub: true
    }
})

timeline5.fromTo(".section5 div h2 span", {y: "-50vh"}, {y: 0,  duration: .5, stagger: .5})
    .fromTo(".section5 div p", {y: "100%", opacity: 0}, {y: 0, opacity: 1, duration: .5})
    .fromTo(".section5 div button", {scale: 0}, {scale: 1, duration: .5})
    .to(".section5", {backgroundColor: "black"})
    .from(".section5", {backgroundPosition: "140% 90%", duration: 1}, "<")

/*
        .to(".line-one", {backgroundColor: "yellow"})
        .from(".sun", {x: "50vw"})
        .to(".line-one span", {x: "100vw", delay: .5})
        .to(".sun", {x: "-100vw"}, "<")
        */

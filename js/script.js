gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-inicial", {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.4
});
gsap.from(".img-dir", {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.4
});


gsap.from("h2", {
    duration: 0.9,
    opacity: 0,
    x: 250,
});


gsap.from(".secao-servicos", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    delay: 1,
})



// gsap.from("", {
//     scrollTrigger: ".animate-final",
//     duration: 0.8,
//     opacity: 0,
//     y: -200,
//     stagger: 0.4,
//     delay: 0.5,
// });


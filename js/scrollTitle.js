$(function() {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // get all slides
  var slides = document.querySelectorAll("span");
  console.log(slides.length);

  //need plugin GSAP

  var slideAnimation = new TimelineMax().fromTo(
    slides[2],
    1,
    { x: "-100%" },
    { x: "0%", ease: Linear.easeNone }
  ); // in from left

  // create scene for every slide
  scene = new ScrollMagic.Scene({
    triggerElement: "content__main_a",
    triggerHook: "onLeave"
  })
    .setPin("content__main_a")
    .setTween(slideAnimation)
    .addTo(controller);
});

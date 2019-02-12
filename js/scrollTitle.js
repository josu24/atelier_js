$(function() {
  var slides = document.querySelectorAll("span");
  var cont = document.querySelector("div.content__main");
  var line = document.querySelector("span.avanLineAtelier");

  var controller = new ScrollMagic.Controller();

  avan = new ScrollMagic.Scene({
    triggerElement: slides[2],
    triggerHook: "onLeave",
    offset: -220,
    duration: "20%"
  });
  handmadeIn = new ScrollMagic.Scene({
    triggerElement: slides[0],
    triggerHook: "onLeave",
    duration: "35%"
  });
  container = new ScrollMagic.Scene({
    triggerElement: cont,
    triggerHook: "onLeave",
    duration: "70%",
    offset: 218
  });
  lineScene = new ScrollMagic.Scene({
    triggerElement: line,
    triggerHook: "onLeave",
    duration: "100%",
    offset: -500
  });
  avan.setTween(slides[2], 0.3, { x: "30%", ease: Linear.ease });
  avan.addIndicators();
  avan.addTo(controller);
  handmadeIn.setPin(slides[0]);
  handmadeIn.addIndicators();
  handmadeIn.addTo(controller);
  container.addTo(controller);
  container.addIndicators();
  lineScene.setTween(line, 0.5, { y: "1100%", ease: Linear.ease });
  lineScene.addTo(controller);
  lineScene.addIndicators();
  handmadeIn.on("end", function(event) {
    container.setPin(slides[2]);
    container.setTween(slides[2], 0.5, { x: "-1%", ease: Linear.ease });
  });
});

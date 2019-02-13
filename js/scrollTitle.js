$(function() {
  var controller = new ScrollMagic.Controller();

  var slides = document.querySelectorAll("span");
  var cont = document.querySelector("div.content__main");
  var line = document.querySelector("span.avanLineAtelier");

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
    offset: 218,
    duration: "65%"
  });
  lineScene = new ScrollMagic.Scene({
    triggerElement: line,
    triggerHook: "onLeave",
    duration: 1
  });

  avan.setTween(slides[2], 0.3, { x: "25%", ease: Linear.ease });
  avan.addTo(controller);
  handmadeIn.setPin(slides[0]);
  handmadeIn.addTo(controller);
  container.addTo(controller);
  lineScene.addTo(controller);

  handmadeIn.on("end", function() {
    container.setPin(slides[2]);
    container.setTween(slides[2], 0.5, {
      y: "100%",
      x: "-0%",
      ease: Linear.ease
    });
    lineScene.setPin(line);
    line.style.opacity = 1;
  });
});

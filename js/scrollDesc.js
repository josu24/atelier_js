$(function() {
  var controller = new ScrollMagic.Controller();
  var width;

  var slides = document.querySelectorAll("div.frame");
  var line = document.querySelectorAll("span.descLine");
  var email = document.querySelector("div.content__contact");
  var desc1 = slides[0];
  var desc2 = slides[1];
  var desc3 = slides[2];

  scene1 = new ScrollMagic.Scene({
    triggerElement: desc1,
    offset: 250
  });
  scene2 = new ScrollMagic.Scene({
    triggerElement: desc2,
    offset: 250
  });
  scene3 = new ScrollMagic.Scene({
    triggerElement: desc3,
    offset: 250
  });
  lineScene1 = new ScrollMagic.Scene({
    triggerElement: line[0],
    triggerHook: "onLeave",
    offset: -300,
    duration: "100%"
  });
  lineScene2 = new ScrollMagic.Scene({
    triggerElement: line[1],
    triggerHook: "onLeave",
    offset: -300,
    duration: "100%"
  });
  emailScene = new ScrollMagic.Scene({
    triggerElement: email,
    triggerHook: "onLeave",
    offset: -500,
    duration: "100%"
  });

  scene1.setPin(desc1);
  scene1.addTo(controller);
  scene2.setPin(desc2);
  scene2.addTo(controller);
  scene3.setPin(desc3);
  scene3.addTo(controller);
  lineScene1.setTween(line[0], 2, { y: "50%", ease: Linear.ease });
  lineScene1.addTo(controller);
  lineScene2.setTween(line[1], 2, { y: "50%", ease: Linear.ease });
  lineScene2.addTo(controller);
  emailScene.setTween(email, 2, { y: "150%", ease: Linear.ease });
  emailScene.addTo(controller);

  function updateDuration(e) {
    width = $(window.innerWidth);
    if (width[0] < 500) {
      durationValue = window.innerWidth / 2.1;
      protoDuration = window.innerWidth * 4;
    } else {
      durationValue = window.innerWidth / 1.8;
      protoDuration = window.innerWidth * 3.29;
    }
    scene1.duration(durationValue);
    scene2.duration(durationValue);
    scene3.duration(protoDuration);
  }
  updateDuration();
  $(window).on("resize", updateDuration);
});

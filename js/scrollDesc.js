$(function() {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();
  var width;

  // get all slides
  var slides = document.querySelectorAll("div.frame");
  var line = document.querySelector("span.descLine");
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
    offset: 250,
    duration: 3000
  });
  lineScene = new ScrollMagic.Scene({
    triggerElement: line,
    triggerHook: "onLeave",
    offset: -300,
    duration: "100%"
  });
  scene1.setPin(desc1);
  scene1.addTo(controller);
  scene2.setPin(desc2);
  scene2.addTo(controller);
  scene3.setPin(desc3);
  scene3.addTo(controller);
  lineScene.setTween(line, 2, { y: "50%", ease: Linear.ease });
  lineScene.addTo(controller);
  lineScene.addIndicators();

  function updateDuration(e) {
    width = $(window.innerWidth);
    //console.log(width[0]);
    if (width[0] < 500) {
      durationValue = window.innerWidth / 2.4;
      protoDuration = window.innerWidth * 3.5;
      //console.log("less");
    } else {
      durationValue = window.innerWidth / 2.1;
      protoDuration = window.innerWidth * 2.62;
      //console.log("more");
    }

    /* for (var i = 0; i < scenes.length; i++) {
      scenes[i].duration(durationValue);
    } */
    scene1.duration(durationValue);
    scene2.duration(durationValue);
    scene3.duration(protoDuration);
  }
  updateDuration();
  $(window).on("resize", updateDuration);

  function init() {
    elems = document.querySelectorAll("div.frame");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "fade-in-element"
        );
      }
    }
  }
});

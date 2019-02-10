$(function() {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();
  var width;

  // get all slides
  var slides = document.querySelectorAll("div.frame");
  var desc1 = slides[0];
  var desc2 = slides[1];
  //var scenes = [];
  //console.log(scenes.length);
  // create scene for every slide
  /* for (var i = 0; i < slides.length; i++) {
    scenes[i] = new ScrollMagic.Scene({
      triggerElement: slides[i],
      offset: 250
    })
      .setPin(slides[i])

      .setClassToggle("div.frame", "activeFrame")
      .on("enter", function() {
        slides[i].getElementsByClassName.style.background = "grey";
      })
      .addTo(controller);
  } */

  scene1 = new ScrollMagic.Scene({
    triggerElement: desc1,
    offset: 250
  });
  scene2 = new ScrollMagic.Scene({
    triggerElement: desc2,
    offset: 250
  });
  scene1.setPin(desc1);
  scene1.addTo(controller);
  scene2.setPin(desc2);
  scene2.addTo(controller);
  scene1.on("enter", function() {
    desc1.style.background = "black";
  });
  scene1.on("leave", function() {
    desc1.style.background = "none";
  });

  function updateDuration(e) {
    width = $(window.innerWidth);
    //console.log(width[0]);
    if (width[0] < 500) {
      durationValue = window.innerWidth / 2.4;
      //console.log("less");
    } else {
      durationValue = window.innerWidth / 2.1;
      //console.log("more");
    }

    /* for (var i = 0; i < scenes.length; i++) {
      scenes[i].duration(durationValue);
    } */
    scene1.duration(durationValue);
    scene2.duration(durationValue);
  }
  updateDuration();
  $(window).on("resize", updateDuration);
});

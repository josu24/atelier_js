$(function() {
  // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // get all slides
  var slides = document.querySelectorAll("div.frame");
  var scenes = [];
  console.log(scenes.length);
  // create scene for every slide
  for (var i = 0; i < slides.length; i++) {
    scenes[i] = new ScrollMagic.Scene({
      triggerElement: slides[i],
      offset: 300
    })
      .setPin(slides[i])
      .addTo(controller);
  }
  console.log(scenes.length);
  updateDuration();
  var durationValueCache;
  function getDuration() {
    return durationValueCache;
  }
  function updateDuration(e) {
    durationValueCache = window.innerWidth / 2.5;
    for (var i = 0; i < scenes.length; i++) {
      scenes[i].duration(getDuration);
    }
  }
  $(window).on("resize", updateDuration);
});

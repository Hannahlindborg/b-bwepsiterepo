const el = document.querySelector(".blaze-slider");

new BlazeSlider(el, {
  all: {
    enableAutoplay: true,
    autoplayInterval: 2000,
    transitionDuration: 300,
    slidesToShow: 3,
    stopAutoplayOnInteraction: false,
  },
  "(max-width: 900px)": {
    slidesToShow: 2,
  },
  "(max-width: 500px)": {
    slidesToShow: 1,
  },
});

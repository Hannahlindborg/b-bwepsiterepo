export function initContactPage() {
  document.fonts.ready.then(() => {
    initSplitText();
    initGallerySlider();
  });
}

//Title animation
function initSplitText() {
  const split = SplitText.create("#contact-title", {
    type: "chars",
    charsClass: "char",
  });

  if (!split) return;

  gsap.from(
    split.chars,
    {
      x: -120,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.035,
      ease: "power4.out",
      delay: 0.5,
    },
    "+=0.3"
  );
}

function initGallerySlider() {
  const el = document.querySelector(".blaze-slider");
  if (!el) return;

  new BlazeSlider(el, {
    all: {
      enableAutoplay: true,
      autoplayInterval: 3000,
      transitionDuration: 500,
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
}

// Menu background on scroll

const nav = document.querySelector(".top-menu");

const threshold = 700;

window.addEventListener("scroll", () => {
  if (window.scrollY > threshold) {
    nav.classList.add("top-menu-with-background");
  } else {
    nav.classList.remove("top-menu-with-background");
  }
});

//Split text logo

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  setTimeout(() => {
    let split = SplitText.create("#hero-title", { type: "chars" });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.1,
    });
  }, 500);
});

// Split scroll effect
//https://www.youtube.com/watch?v=3ePl0OnmG3Y

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const verticalScroll = document.querySelector(".vertical-scroll");
  const textColumn = document.querySelector(".text-column");

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".column",
      start: "top 80%",
      end: "+1500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });

  tl.fromTo(
    textColumn,
    { y: () => verticalScroll.offsetHeight - textColumn.offsetHeight },
    { y: 0 },
    "start"
  );

  ScrollTrigger.create({
    trigger: ".column",
    start: "top 80%",
    end: "",
    invalidateOnRefresh: true,
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const cabinContainer = document.querySelector(".cabin-page");
  const split = SplitText.create("#cabin-title", {
    type: "chars",
    charsClass: "char",
  });

  gsap.set(cabinContainer, {
    opacity: 0,
    y: 50,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cabinContainer,
      start: "top 80%",
      once: true,
    },
  });

  tl.to(cabinContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: cabinContainer,
      start: "top 80%",
      once: true,
    },
  }).from(
    split.chars,
    {
      x: -120,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.035,
      ease: "power4.out",
    },
    "+=0.3"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const verticalScroll = document.querySelector(".breakfast-section");
  const textColumn = document.querySelector(".breakfast-info");

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".breakfast-section",
      start: "top 80%",
      end: "+1000",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });

  tl.fromTo(
    textColumn,
    { y: () => verticalScroll.offsetHeight - textColumn.offsetHeight },
    { y: 0 },
    "start"
  );

  ScrollTrigger.create({
    trigger: ".breakfast-section",
    start: "top top",
    end: "",
    invalidateOnRefresh: true,
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const exploreContainer = document.querySelector("#explore-container");
  const split = SplitText.create("#explore-title", { type: "chars" });

  gsap.set(exploreContainer, {
    opacity: 0,
    y: 50,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: exploreContainer,
      start: "top 80%",
      once: true,
    },
  });

  tl.to(exploreContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: exploreContainer,
      start: "top 80%",
      once: true,
    },
  }).from(
    split.chars,
    {
      x: -120,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.035,
      ease: "power4.out",
    },
    "+=0.3"
  );
});

//Testimonials
const el = document.querySelector(".blaze-slider");

new BlazeSlider(el, {
  all: {
    enableAutoplay: true,
    autoplayInterval: 2000,
    transitionDuration: 300,
    slidesToShow: 2,
    stopAutoplayOnInteraction: false,
  },
  "(max-width: 900px)": {
    slidesToShow: 2,
  },
  "(max-width: 500px)": {
    slidesToShow: 1,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const testimonialsContainer = document.querySelector(".testimonials");

  gsap.set(testimonialsContainer, {
    opacity: 0,
    y: 50,
  });

  gsap.to(testimonialsContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: testimonialsContainer,
      start: "top 80%",
      once: true,
    },
  });
});

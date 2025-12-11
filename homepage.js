const nav = document.querySelector(".top-menu");

const threshold = 700;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > threshold) {
    nav.classList.add("top-menu-with-background");
  } else {
    nav.classList.remove("top-menu-with-background");
  }
});

// Split scroll effect
//https://www.youtube.com/watch?v=3ePl0OnmG3Y

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const verticalScroll = document.querySelector(".vertical-scroll");
  //const leftColumn = document.querySelector(".left-column");
  const textColumn = document.querySelector(".text-column");

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".cabin",
      start: "top top",
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

  scrollTrigger.create({
    trigger: ".cabin",
    start: "top top",
    end: "",
    invalidateOnRefresh: true,
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const exploreContainer = document.querySelector("#explore-container");

  gsap.set(exploreContainer, {
    opacity: 0,
    y: 50,
  });

  gsap.to(exploreContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: exploreContainer,
      start: "top 80%",
      once: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const reviewsContainer = document.querySelector(".reviews");

  gsap.set(reviewsContainer, {
    opacity: 0,
    y: 50,
  });

  gsap.to(reviewsContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: reviewsContainer,
      start: "top 80%",
      once: true,
    },
  });
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
      start: "top top",
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

  scrollTrigger.create({
    trigger: ".cabin",
    start: "top top",
    end: "",
    invalidateOnRefresh: true,
  });
});

//Review slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("review-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

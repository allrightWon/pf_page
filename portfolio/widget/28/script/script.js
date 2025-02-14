const container = document.querySelector(".container");
const texts = document.querySelectorAll(".text");
const textAnimation = gsap.timeline();

texts.forEach((text) => {
  textAnimation.from(text, { opacity: 0, y: 200 }).to(text, { opacity: 0 });
});

ScrollTrigger.create({
  animation: textAnimation,
  trigger: container,
  start: "top top",
  end: "bottom+=2000 top",
  pin: true,
  scrub: true,
});

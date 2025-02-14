const container = document.querySelector(".container");
const imgWrap = document.querySelector(".img-wrap");
const totalImg = 50;

// append image
for (let i = 1; i <= totalImg; i++) {
  const img = document.createElement("img");
  img.src = `./images/fruit${i < 10 ? "0" + i : i}.png`;
  img.loading = "lazy";
  imgWrap.appendChild(img);
}

// GSAP
const sequence = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "bottom+=5000 bottom",
    pin: true,
    scrub: true,
  },
});
const imgs = document.querySelectorAll(".img-wrap img");

sequence.to(imgs, {
  opacity: 1,
  stagger: 1,
});

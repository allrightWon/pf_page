let firstSection = document.querySelector(".first-section");
let secondSection = document.querySelector(".second-section");
let background = firstSection.querySelector(".background");
let title = firstSection.querySelector(".title");
let secondOffsetTop = secondSection.offsetTop;

window.addEventListener("scroll", function () {
  let scrollValue = this.scrollY;

  background.style.transform = `translateY(${scrollValue * 0.8}px)`;
  title.style.transform = `scale(${scrollValue * 0.002})`;
});

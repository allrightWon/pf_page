const bannerWraps = document.querySelectorAll(".banner-wrap");

bannerWraps.forEach((bannerWrap, index) => {
  const bookBanner = bannerWrap.querySelector(`.book-banner-${index + 1}`);
  const cloneBanner = bookBanner.cloneNode(true);

  bannerWrap.appendChild(cloneBanner);

  bookBanner.classList.add("original");
  cloneBanner.classList.add("clone");
  if (index % 2 == 0) {
    bookBanner.classList.add("reverse");
    cloneBanner.classList.add("reverse");
  }
});

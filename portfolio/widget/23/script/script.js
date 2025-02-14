$(".thumb-img-box img").click(function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  let imgSrc = $(this).attr("src");
  $(".main-img").prop("src", imgSrc);
});

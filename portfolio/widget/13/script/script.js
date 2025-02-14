$(".question").click(function () {
  $(this).toggleClass("active");
  $(this).siblings(".answer").stop().slideUp();
  $(this).siblings(".question").removeClass("active");
  $(this).next().stop().slideToggle();
});

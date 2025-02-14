$(".this-week-books li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let menu = $(this).attr("data-alt");
  $("#" + menu).addClass("active");
  $("#" + menu)
    .siblings()
    .removeClass("active");
});

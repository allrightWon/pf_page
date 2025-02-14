$(".change-btn").click(function () {
  let imgSrc = $(this).attr("data-cursor");
  $(".cursor img").attr("src", imgSrc);
});

$(window).on("mousemove", function (e) {
  let $cursor = $(".cursor");
  $cursor.css({ top: e.pageY + 10 + "px", left: e.pageX + 10 + "px" });
});

$(".go-signup-btn, .go-signin-btn").click(function () {
  let $clickedBtn = $(this);
  $(this)
    .parents(".main-page")
    .fadeOut(600, function () {
      if ($clickedBtn.hasClass("go-signup-btn") == true) {
        $(".signup-page").fadeIn(600);
      } else if ($clickedBtn.hasClass("go-signin-btn") == true) {
        $(".signin-page").fadeIn(600);
      }
    });
});
$(".xi-close").click(function () {
  $(this)
    .parent()
    .fadeOut(600, function () {
      $(".main-page").fadeIn(600);
    });
});

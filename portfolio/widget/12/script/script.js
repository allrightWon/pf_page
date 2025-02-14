$(".star-box  .fa").click(function () {
  let starIndex = $(this).index();

  $(this).nextAll().removeClass("active");
  $(this).addClass("active");
  $(this).prevAll().addClass("active");

  switch (starIndex) {
    case 0:
      $(".print").html(
        '<img src="./images/star-lv1.png" alt="">' + "아주 별로예요"
      );
      break;
    case 1:
      $(".print").html('<img src="./images/star-lv2.png" alt="">' + "별로예요");
      break;
    case 2:
      $(".print").html(
        '<img src="./images/star-lv3.png" alt="">' + "그냥 그래요"
      );
      break;
    case 3:
      $(".print").html('<img src="./images/star-lv4.png" alt="">' + "좋아요");
      break;
    case 4:
      $(".print").html(
        '<img src="./images/star-lv5.png" alt="">' + "아주 좋아요"
      );
      break;
  }
});

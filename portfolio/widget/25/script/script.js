$(".time").countdown("2025/02/01", function (event) {
  $(this).html(
    event.strftime(
      "<strong>딱 1월까지만 이 가격!</strong> <b>%D</b>일 <b>%H</b>시간 <b>%M</b>분 <b>%S</b>초 남음"
    )
  );
});

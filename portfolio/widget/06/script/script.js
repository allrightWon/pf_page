$(".todo-input").change(function () {
  let inputValue = $(this).val();
  if ($(".todo-list li").length >= 9) {
    alert("최대 9개까지만 입력 가능합니다.");
  } else {
    $(".todo-list").append(
      "<li><span>" +
        inputValue +
        "</span><i class='bi bi-trash'></i><i class='bi bi-check-square'></i></li>"
    );
  }
  $(this).val("");
});
$(".todo-list").on("click", ".bi-trash", function () {
  $(this).parent().remove();
});
$(".todo-list").on(
  "click",
  ".bi-check-square, .bi-check-square-fill",
  function () {
    $(this).toggleClass("bi-check-square bi-check-square-fill");
    $(this).parent().toggleClass("clear");
  }
);

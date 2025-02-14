let currentPage = 1;
let totalPage = $(".gallery-content img").length;

$(".page-number span:first-child").text(currentPage);
$(".page-number span:last-child").text(totalPage);

$(".next-btn").click(function () {
  if (currentPage < 4) {
    currentPage++;
  } else {
    currentPage = 1;
  }
  $(".page-number span:first-child").text(currentPage);
  $(".gallery-content div:first-child").appendTo(".gallery-content");
});
$(".prev-btn").click(function () {
  if (currentPage > 1) {
    currentPage--;
  } else {
    currentPage = 4;
  }
  $(".page-number span:first-child").text(currentPage);
  $(".gallery-content div:last-child").prependTo(".gallery-content");
});

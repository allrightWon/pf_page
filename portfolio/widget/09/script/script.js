$(".friend-code").click(function () {
  if ($(this).is(":checked")) {
    $(".code-input-box").show();
  }
});
$("input[id=allChk]").click(function () {
  if ($(this).is(":checked")) {
    $("input[name=chk]").prop("checked", true);
  } else {
    $("input[name=chk]").prop("checked", false);
  }
});
$("input[name=chk]").click(function () {
  let totalCheckbox = $("input[name=chk]").length;
  let checkedbox = $("input[name=chk]:checked").length;

  if (totalCheckbox == checkedbox) {
    $("input[id=allChk]").prop("checked", true);
  } else {
    $("input[id=allChk]").prop("checked", false);
  }
});
$("#chk4").click(function () {
  if (!$("#chk5").is(":checked") || !$("#chk6").is(":checked")) {
    $("#chk5,#chk6").prop("checked", true);
  } else {
    $("#chk5, #chk6").prop("checked", false);
  }
});
$("input[id=chk5], input[id=chk6]").click(function () {
  if (
    $("input[id=chk5]").is(":checked") &&
    $("input[id=chk6]").is(":checked")
  ) {
    $("input[id=chk4]").prop("checked", true);
  } else {
    $("input[id=chk4]").prop("checked", false);
  }
  // chkAll 상태 업데이트
  let totalCheckbox = $("input[name=chk]").length;
  let checkedbox = $("input[name=chk]:checked").length;

  if (totalCheckbox === checkedbox) {
    $("input[id=allChk]").prop("checked", true);
  } else {
    $("input[id=allChk]").prop("checked", false);
  }
});

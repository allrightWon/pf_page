  // Modal Close
  $(".modal-hide").click(function () {
    $(".promotion-modal").hide();
  });

  // Modal Close Week
  let modalCloseCookie = "modalCloseCookie";
  let modalCloseExpires = 7;

  if ($.cookie(modalCloseCookie)) {
    $(".promotion-modal").hide();
  } else {
    $(".promotion-modal").show();
  }
  $(".modal-hide-week").click(function () {
    $(".promotion-modal").hide();
    $.cookie(modalCloseCookie, "true", { expires: modalCloseExpires });
  });
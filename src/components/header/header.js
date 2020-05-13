import * as $ from "jquery";

$(document).ready(() => {
  $(".hamburger").on("click", function () {
    return $(this).toggleClass("is-active");
  });
});

import * as $ from "jquery";

$(document).ready(() => {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".hamburger-menu").slideToggle();
  });
});

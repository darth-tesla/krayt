import * as $ from "jquery";

$(document).ready(() => {
  setTimeout(() => {
    if ($(".preloader").hasClass("done") === false)
      return $(".preloader").addClass("done");
  }, 1000);
});

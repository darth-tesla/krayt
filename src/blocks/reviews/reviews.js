import * as $ from "jquery";
import Slick from "slick-carousel";

$(".slider").slick({
  nextArrow:
    "<div class='arrow-wrap slick-next'><i class='fas fa-long-arrow-alt-right'></i></div>",
  prevArrow:
    "<div class='arrow-wrap slick-prev'><i class='fas fa-long-arrow-alt-left'></i></div>",
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '-50px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

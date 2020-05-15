import * as $ from "jquery";
import Slick from "slick-carousel";

$(".screenshots__slider").slick({
  nextArrow:
    "<div class='arrow-wrap slick-next'><i class='fas fa-long-arrow-alt-right'></i></div>",
  prevArrow:
    "<div class='arrow-wrap slick-prev'><i class='fas fa-long-arrow-alt-left'></i></div>",
  slidesToShow: 3,
  centerMode: true,
  initialSlide: 3,
  centerPadding: "50px",
});

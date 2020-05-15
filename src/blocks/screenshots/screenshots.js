import * as $ from "jquery";
import Swiper from "swiper";

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container-1", {
    initialSlide: 3,
    slidesPerView: 7,
    centeredSlides: true,
    width: 650,
    containerModifierClass: "swiper-container-1"
  });

  $(".swiper-button-next").on("click", () => {
    mySwiper.slideNext();
  });
  $(".swiper-button-prev").on("click", () => {
    mySwiper.slidePrev();
  });
});

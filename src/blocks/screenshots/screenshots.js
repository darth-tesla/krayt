import * as $ from "jquery";
import Swiper from "swiper";

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container-1", {
    slidesPerView: 1,
    width: 190,
    centeredSlides: true,
    initialSlide: 3,
    containerModifierClass: "swiper-container-1",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        width: 190,
      },
      768: {
        slidesPerView: 3,
        width: 400,
      },
      992: {
        slidesPerView: 3,
        width: 500,
      },
      1200: {
        slidesPerView: 7,
        width: 650,
      },
    },
  });
});

import * as $ from "jquery";

$(document).ready(() => {
  $(".video-block__play").on("click", (e) => {
    e.preventDefault();
    $(".video-modal").addClass("video-modal_is-visible");
  });

  $(".video-modal__cross, .video-modal").on("click", () => {
    const videoSection = document.querySelector(".video-modal");
    $(".video-modal").removeClass("video-modal_is-visible");
    videoSection.querySelector("iframe").src = videoSection.querySelector(
      "iframe"
    ).src;
  });
});

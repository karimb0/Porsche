$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 5000,
    speed: 1000,
  });

  $(".header-btn").on("click", function () {
    $(".menu").addClass("active");
  });

  $(".close-btn").on("click", function () {
    $(".menu").removeClass("active");
  });

  $(".service-slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: 5000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          fade: false,
          dots: false,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  });
});

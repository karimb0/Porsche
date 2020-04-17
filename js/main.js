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
        breakpoint: 600,
        settings: {
          dots: false,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });
});

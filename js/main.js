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
  AOS.init({
    // Global settings:
    disable: "phone",
    disable: "tablet", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    offset: 100,
    delay: 200, // задержка values from 0 to 3000, with step 50ms
    duration: 1500, //  скорость values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});

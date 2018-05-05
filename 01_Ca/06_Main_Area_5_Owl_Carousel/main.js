(function($) {
    'use strict';
// Owl Carousel Active Code
if ($.fn.owlCarousel) {
  $(".welcome_slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });
  $(".app_screenshots_slides").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      margin: 30,
      center: true,
      dots: true,
      responsive: {
          0: {
              items: 1
          },
          480: {
              items: 3
          },
          992: {
              items: 5
          }
      }
  });
}

})(jQuery);
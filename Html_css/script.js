document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper("#main-slider", {
      loop: true, // Enables infinite loop
      autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade", // Fading effect between slides
      speed: 1000, // Transition speed
    });
  });
  
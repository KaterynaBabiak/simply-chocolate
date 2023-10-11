const swiper = new Swiper('.review-swiper', {
  // Optional parameters
  spaceBetween: 16,
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: 'auto',
  direction: 'horizontal',
  /*rewind: true,*/


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
  }
});
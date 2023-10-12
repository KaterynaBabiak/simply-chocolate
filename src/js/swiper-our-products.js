var swiper = new Swiper(".our-products-swiper", {
  spaceBetween: 18,
  /*centerSlide: 'true',*/
  slidesPerView: 'auto',
  direction: 'horizontal',
  /*fade: 'true',*/
  grabCursor: 'true',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
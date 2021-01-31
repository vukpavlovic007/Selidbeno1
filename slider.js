var mySwiper = new Swiper('.swiper-container', {
   // Optional parameters
   direction: 'horizontal',
   slidesPerView: '3.6',
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   // Responsive breakpoints
   breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: -7
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      spaceBetween: 15
     },
     900: {
      slidesPerView: 3,
      spaceBetween: 20
     },
     1500: {
      slidesPerView: 3.7,
      spaceBetween: 30
     }
   }
 })
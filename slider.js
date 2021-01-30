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
      slidesPerView: 1.3,
      spaceBetween: 5
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20
     },
     900: {
      slidesPerView: 3,
      spaceBetween: 30
     },
     1500: {
      slidesPerView: 3.7,
      spaceBetween: 30
     }
   }
 })
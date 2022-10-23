/*jshint esnext: true */
const swiper = new Swiper(".mySwiper", {
  loop:true,
  slidesPerView:1,
  
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop:true,
  slidesPerView:1, 
  spaceBetween:30,          
  navigation: {
    nextEl: ".hot .swiper-button-next",
    prevEl: ".hot .swiper-button-prev",
  },
  breakpoints:{
   768: {slidesPerView:2},
   1024: {slidesPerView:3},
  },
});

const swiper3 = new Swiper(".mySwiper3", {
  loop:true,
  slidesPerView:1, 
  spaceBetween:30,          
  navigation: {
    nextEl: ".video .swiper-button-next",
    prevEl: ".video .swiper-button-prev",
  },
  breakpoints:{
   768: {slidesPerView:2},
   1024: {slidesPerView:3},
   1440: {slidesPerView:4},
  },
});

const swiper4 = new Swiper(".mySwiper4", {
  loop:true,
  slidesPerView:1, 
  spaceBetween:30,          
  navigation: {
    nextEl: ".rent .swiper-button-next",
    prevEl: ".rent .swiper-button-prev",
  },
  breakpoints:{
   768: {slidesPerView:2},
   1024: {slidesPerView:3},
  },
});
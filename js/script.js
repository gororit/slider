$(function(){
 var slider1 = new Swiper('.slider1', {
  slidesPerView:3,
  loop: true,
  loopedSlides: 5,
  spaceBetween:30,
  centeredSlides:true,
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next1',
   prevEl: '.prev1',
  },
 });
 
 var slider2 = new Swiper('.slider2', {
  slidesPerView:1,
  loop: true,
  loopedSlides: 5,
  spaceBetween:20,
  centeredSlides:true,
  
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next1',
   prevEl: '.prev1',
  },
 });

 slider1.on('slideChange', () =>{
 slider2.slideToLoop(slider1.realIndex);
 });

 slider2.on('slideChange', () =>{
 slider1.slideToLoop(slider2.realIndex);
 });
});
 
 
$(document).ready(function () {
 $('.owl-carousel').owlCarousel({
  loop: true,
  smartSpeed: 2000,
  margin: 10,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 1
   },
   1000: {
    items: 1
   }
  }
 })
 $(".owl-prev").html('<div><i class="fa fa-chevron-left"></i></div>');
 $(".owl-next").html('<div><i class="fa fa-chevron-right"></i></div>');
})
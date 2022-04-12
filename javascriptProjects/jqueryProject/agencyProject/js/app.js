$(document).ready(function(){
  $('.preloader').fadeOut();

  //navbar
  $('.navBtn').click(function(){
    $('.nav').toggleClass('nav--show')
  });
  //video
  $('.video__switch-container').click(function(){
    let value = $('.video__switch-btn').hasClass('btnSlide');
    if(value){
      $('.video__switch-btn').removeClass('btnSlide');
      $('.video').get(0).play();
    } else {
     $('.video__switch-btn').addClass('btnSlide');
     $('.video').get(0).pause();
    }
  })
});
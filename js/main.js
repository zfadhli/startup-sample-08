$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true
  });

  $('.owl-nav').addClass('wrapper');
  $('.owl-prev').html('<i class="ion-chevron-left"></i>');
  $('.owl-next').html('<i class="ion-chevron-right"></i>');
});
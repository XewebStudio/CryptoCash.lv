$(document).ready(function(){

  $(".first").owlCarousel({
    responsive : {
      0 : {
        items : 1,
      },
      480 : {
        items:1,
      },
      768 : {
        items:2,
      },
      992 :{
        items:2,
      },
     1600 :{
        items:2,
      },
    },
    loop:true,
    margin:10,
    nav:false
  });
  $(".second").owlCarousel({
    items : 5,  loop:true,
    margin:10,
    nav:false

  });

  // Custom Button
  $('.customNextBtn').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
  });
  
});
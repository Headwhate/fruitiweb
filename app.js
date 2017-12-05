
$(document).ready(function(){
  // navbar
$(".section").fadeOut(5000);

  $('.burger').click(function(){
    $(this).find(".barre").toggleClass('white')
    $('.nav').toggleClass('isOpen');

  });

  $('.principaux li:first-child').hover(function(){

    $('.pfirst').toggleClass('show');
  });
$('.principaux li:nth-child(2)').hover(function(){

  $('.psecond').toggleClass('show');
});
$('.principaux li:last-child').hover(function(){

  $('.pthird').toggleClass('show');
});

$('.secondaires li:first-child').hover(function(){

  $('.sfirst').toggleClass('show');
});

$('.secondaires li:nth-child(2)').hover(function(){

  $('.ssecond').toggleClass('show');
});
$('.secondaires li:last-child').hover(function(){

  $('.sthird').toggleClass('show');
});
// fin navbar
});

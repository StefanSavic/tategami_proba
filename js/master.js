(function() {

  var $logo = $('.logo');


    $logo.on('mouseenter',function () {
      $('body').addClass('changeColor');
      $(this).css('background-image',"url('./images/new_logo_04.png')")
    });

    $logo.on('click',function() {
      $('.navMenu').css('margin-left','0');
    })

    $('.close').on('click',function() {
      $('.navMenu').css('margin-left','-25%');
      $('.hamburger').fadeIn();

    });
    $('.hamburger').on('click',function () {
      $('.navMenu').css('margin-left','0');
        $(this).fadeOut(100);
    })

    $('.body_photography').on('load',function() {
      $('.body_photography').fadeIn();
    });
})();

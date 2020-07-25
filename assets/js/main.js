$(document).ready(function () {
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
    });

  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.animated-icon2').toggleClass('open');  
    $('.navbar-collapse').collapse('hide');
  });


// $(" ").on("click", function(){
//   $(" ").attr("href", 'mailto:jerseyjackpot@gmail.com?' + jQuery.param({body:    $('#message').val(), subject: "Portfolio Contact"}));
// });
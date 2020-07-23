$(document).ready(function () {
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
    });

  });

  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });


// $(".sendEmail").on("click", function(){
//   $("#message").attr("href", 'mailto:jerseyjackpot@gmail.com?' + jQuery.param({body:    $('#message').val(), subject: "Portfolio Contact"}));
// });
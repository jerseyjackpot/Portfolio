$(document).ready(function () {
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
    });

  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
// function sendEmail()){
//     var submitButton;
    
// }


// $("#body-for-email").on("change", function(event){
// $("#email-for-class").attr("href", 'mailto:amaddatu@gmail.com?' + jQuery.param({body:   $('#body-for-email').val(), subject: "My first email"}));
// });
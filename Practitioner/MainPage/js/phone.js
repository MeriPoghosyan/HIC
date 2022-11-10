var input = document.querySelector(".phone");
window.intlTelInput(input,({

}));

$(document).ready(function() {
    $('.iti__flag-container').click(function() { 
      var countryCode = $('.iti__selected-flag').attr('title');
      var countryCode = countryCode.replace(/[^0-9]/g,'')
      $('.phone').val("");
      $('.phone').val("+"+countryCode+" "+ $('.phone').val());
   });
});
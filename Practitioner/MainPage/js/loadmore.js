$( document ).ready(function () {
    $(".pers").slice(0, 3).show();
      if ($(".pers:hidden").length != 0) {
        $("#loadMore").show();
      }   
      $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".pers:hidden").slice(0, 6).slideDown();
        if ($(".pers:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
      });
    });
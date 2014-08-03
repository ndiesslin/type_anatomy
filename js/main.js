function showletter(letterchosen) {
     $('.letters').each(function(index) {
          if ($(this).attr("id") == letterchosen) {
               $(this).fadeIn(600);
          }
          else {
               $(this).fadeOut(600);
          }
     });
}
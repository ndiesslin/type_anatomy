function showletter(letterchosen) {
     $('.letters').each(function(index) {
          if ($(this).attr("id") == letterchosen) {
               $(this).fadeIn(600);
               $("#letter-space").css("position", "fixed");
               $("nav").css("position", "fixed");
          }
          else {
               $(this).fadeOut(200);
          }
     });
}
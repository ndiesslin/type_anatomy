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
		$('.nav_click').click(function(e){
		    $('.nav_click').css("border-bottom", "none");
		    $(this).css("border-bottom", "1px #00ccff solid");
		});
}
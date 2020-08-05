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

var termPrinter = (function() {
  var htmlObject = '';

	// Append our final object to element
  var appendObjectToElement = function(elementName, object) {
		document.querySelector(elementName).innerHTML = object;
  }
	
	// Build letter object to print
	var printLetters = function() {
		var letter;
		for (letter = 1; letter < 47; letter++) {
			htmlObject += '<div class="letters" id="letter' + letter + '"></div>';
		};

		appendObjectToElement('.letter-list', htmlObject);
	}

	// Build term object to print
  var printTerms = function() {
		var terms = ["Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender Height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body Width", "Bowl", "Bracket", "Cap Height", "Character Width", "Counter (Open)", "Counter (Closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head Serif", "Joint", "Leg", "Ligature", "Link/ Neck", "Loop", "Overhang","Serif", "Shoulder","Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex"];
		var term;
		for (term = 1; term < terms.length; term++) {
			htmlObject += '<li><a class="nav_click" onclick="showletter(\'letter' + term + '\')">' + terms[term] + '</a></li>';
		};

		appendObjectToElement('#definition-list', htmlObject);
	}

  return {
		printLetters: printLetters,
		printTerms: printTerms
  };
})();

termPrinter.printLetters();
termPrinter.printTerms();
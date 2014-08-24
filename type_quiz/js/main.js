jQuery(document).ready(function($) {

	$('.flexslider2').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false
	});
	$('.flexslider2').flexslider("pause");
	$('.flexslider2').flexslider(-1);

	$('.flexslider').flexslider({
		animation: "slide",
		sync: ".flexslider2"
	});
	$('.flexslider').flexslider("pause");
	$('.flexslider').flexslider(-1);

	var slider1 = $('.flexslider').data('flexslider');
	slider1.flexAnimate(slider1.getTarget("next"));
	var clickCount = 0;
	$('.flex1-next').click(function(event){
		if (clickCount <= 7){
			event.preventDefault();
			slider1.flexAnimate(slider1.getTarget("next"));
			clickCount++;
		} else{
			event.preventDefault();
			slider1.flexAnimate(slider1.getTarget("next"));
			clickCount++;
			$(".flex1-next").css("display", "none");
		}
	});
});

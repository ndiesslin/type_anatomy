$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide"
	});
	$('.flexslider').flexslider("pause");
	var exampleSlider = $('.flexslider').data('flexslider');
	exampleSlider.flexAnimate(exampleSlider.getTarget("next"));
	$('.flex-next').click(function(event){
		event.preventDefault();
		exampleSlider.flexAnimate(exampleSlider.getTarget("next"));
	});

	$('.flexslider2').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false,
	});
	$('.flexslider2').flexslider("pause");
	var flexSlider2 = $('.flexslider2').data('flexslider2');
	flexSlider2.flexAnimate(flexSlider2.getTarget("next"));
	$('.flex-next').click(function(event){
		event.preventDefault();
		flexSlider2.flexAnimate(flexSlider2.getTarget("next"));
	});
});

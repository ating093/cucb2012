// "use strict";
(function( $ ) {

	$.fn.slideIn = function() {
		$(this).animate({left: "0%"}, 2000);
	}
	
	$.fn.slideOut = function() {
		$(this).animate(
			{left: "-100%"},
			{
				duration: 2000,
				complete: function() {
							$(this).css("left", "100%");
							}
			});
	}

	$.startSlideshow = function () {
		var counter = 0,
			next,
			slides =  $("#slideshow .slide"),
			slidesLen = slides.length - 1;
		
		window.setInterval(	function () {
			if (counter === slidesLen) {
				next = 0;
			} else next = counter + 1;
			
			slides.eq(counter).slideOut();
			counter = next;
			slides.eq(counter).slideIn();
			
		}, 4000	);
    }
}( jQuery ));

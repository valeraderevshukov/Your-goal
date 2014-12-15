head.ready(function() {

	// $(document).on("click", function(){
			
	// });
	$('.js-open-nav').on('click', function(){
		$(this).toggleClass('is-active');
		$('.js-nav').toggleClass('is-active');
		$('body').toggleClass('is-active');
	});
	
	// add to top button
	$(document).scroll(function() {    
		var scroll = $(this).scrollTop();
		if (scroll >= 400) {
			$(".scrolltop").addClass("is-active");
		}
		else{
			$(".scrolltop").removeClass("is-active");
		}
	});

	$(function () {
	    var a = $(".scrolltop"),
	        c = a.offset(),
	        d = a.outerHeight(!0),
	        e = $(".footer").offset();
	    $(document).scroll(function () {
	        var b = $(this).scrollTop(),
	            b = e.top - (b + d + c.top);
	        0 < b ? a.css({
	            top: c.top
	        }) : a.css({
	            top: c.top + b
	        })
	    })
	});
	
	// scrollTop
	$(".scrolltop").on('click', function(){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top + 20
		}, 600);
		return false;
	});
});

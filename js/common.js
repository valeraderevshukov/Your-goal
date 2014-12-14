head.ready(function() {

	// $(document).on("click", function(){
			
	// });
	$('.js-open-nav').on('click', function(){
		$(this).toggleClass('is-active');
		$('.js-nav').toggleClass('is-active');
		$('body').toggleClass('is-active');
	});
	
	//add to top button
	$(document).scroll(function() {    
		var scroll = $(this).scrollTop();
		if (scroll >= 400) {
			$(".scrolltop").addClass("is-active");
		}
		else{
			$(".scrolltop").removeClass("is-active");
		}
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
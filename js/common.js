head.ready(function() {

	// $(document).on("click", function(){
			
	// });
	$('.js-open-nav').on('click', function(){
		$(this).toggleClass('is-active');
		$('.js-nav').toggleClass('is-active');
		$('body').toggleClass('is-active');
	});

});
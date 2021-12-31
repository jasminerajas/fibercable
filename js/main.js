(function ($) {
	$('.owl-carousel-banner').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
			},
			640:{
				items:1,
			},
			0:{
				items:1,
			}
		}
	})

	$('.owl-carousel-product').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:4,
			},
			1024:{
				items:4,
			},
			768:{
				items:3,
			},
			640:{
				items:2,
			},
			0:{
				items:1,
			}
		}
	})

	
})(jQuery);

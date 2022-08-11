$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,

		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		centerMode: true,
		waitForAnimate: false,

		appendArrows: '.put__arrows',
	}
	);
	$('.slider02').slick({
		variableWidth: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,

		appendArrows: '.shop__arrows',
		responsive: [{
			breakpoint: 768,
			settings: {
				centerMode: true,
			}
		}]
	});

}
);


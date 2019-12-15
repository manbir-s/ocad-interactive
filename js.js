$(document).ready(function() {
	$(window).scroll(function() {
		var Scroll = $(window).scrollTop() + 1,
			SectionOneOffset = $('#section-one').offset().top,
			SectionTwoOffset = $('#section-two').offset().top,
			SectionThreeOffset = $('#section-three').offset().top,
			SectionFourOffset = $('#section-four').offset().top,
			SectionFiveOffset = $('#section-five').offset().top,
			SectionSixOffset = $('#section-six').offset().top;
		console.log(window.innerHeight);
		if (Scroll < SectionTwoOffset - window.innerHeight / 2) {
			handleClasses(1);
		} else if (Scroll < SectionThreeOffset - window.innerHeight / 2) {
			handleClasses(2);
		} else if (Scroll < SectionFourOffset - window.innerHeight / 2) {
			handleClasses(3);
		} else if (Scroll < SectionFiveOffset - window.innerHeight / 2) {
			handleClasses(4);
		} else if (Scroll < SectionSixOffset - window.innerHeight / 2) {
			handleClasses(5);
		} else {
			handleClasses(6);
		}
	});
});

function handleClasses(number) {
	for (i = 1; i <= 6; i++) {
		if (number == i) {
			$('.menu-item-' + i).addClass('active');
			$('.menu-item-' + i).removeClass('inactive');
		} else {
			$('.menu-item-' + i).addClass('inactive');
			$('.menu-item-' + i).removeClass('active');
		}
	}
}


// Спрацьовує кожного разу при прокручуванні сторінки
$(window).on("scroll", function(){

	// Отримуємо, на скільки пікселів прокручена сторінка
	var distance = $(window).scrollTop();

	// Додаємо або видаляємо клас в залежності від прокрученої сторінки
	if (distance >= 50) {
		$('.header').addClass('scrolled')
	} else {
		$('.header').removeClass('scrolled')
	}
})



$(document).ready(function(){
	window.setTimeout(function(){
		$(".plane").addClass("animated")
	},500)
})

$(document).on('click','.header__menu-toggle',function(){
	$('.header__menu').toggleClass('opened');
	$('.header').toggleClass('menu-opened');
})



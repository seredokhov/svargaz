// Слайдер

$(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    items: 1,
	    dots: true
	})

})

/* Выпадающее меню */
$(function(){

	var regLink = $('#auth'),
		drop = $('.reg_drop'),
		close = $('.close_link');

	regLink.on('click', function(){
		$(this).addClass('active');
		drop.fadeIn(200);
		return false;
	});

	close.on('click', function () {
		regLink.removeClass('active');
		drop.fadeOut(200);
		return false;
	})
})

/* Неактивные ссылки */

$(function(){
	var link = $('a.disabled');

	link.on('click', function() {
		return false;
	});

})


/* Сортировка в каталоге*/

$(function(){

	var link = $('.sort_link'),
		drop = $('ul.sort_list'),
		li = drop.find('li');

	link.on('click', function () {
		drop.fadeToggle(200);
		return false;
	});

	li.on('click', function () {
		link.text($(this).text());
		drop.fadeOut(200);
	})		

})

/* Custom select */

$(function(){

	var select = $('.custom_select'),
		optionList = $('.custom_options_list'),
		option = $('.custom_options_list').find('a');

	select.on('click', function () {
		optionList.fadeToggle(100);		
	});
	option.on('click', function () {
		var txt = $(this).text();
		select.text(txt);
		optionList.fadeOut(100);
		return false;

	});
})

/* Галлерея */

$(function(){

	var largeImg = $('.large_img_block').find('img'),
		smallImg = $('.prewiew_img_block').find('img');

	smallImg.on('click', function () {
		var src = $(this).attr('src');
		largeImg.attr('src', src);	
	});

})






/* Слайдер сравнения */
$(function () {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	 loop:false,
	 margin:30,
	responsive:{
		0:{
			items:1
		},
		480:{
			items:2
		},
		1200:{
			items:4
		}
	}
	});
})


/* Мобильное меню каталога */

$(function(){
	var btn = $('.aside_button'),
		asideNav = $('.aside_nav');

	btn.on('click', function(){
		asideNav.slideToggle(200);
	})
})


/* Мобильное меню шапки */

$(function(){
	var link = $('.mobile_menu_link'),
		menu = $('.popup'),
		overlay = $('.overlay');

	link.on('click', function(){

		if(!$(this).hasClass('open')) {
			$(this).addClass('open');
			menu.fadeIn(200);
			overlay.fadeIn(200);
		} else {
			$(this).removeClass('open');
			menu.fadeOut(200);
			overlay.fadeOut(200);
		}
		return false;
	});

	overlay.on('click', function() {

		$(this).fadeOut(200);
		link.removeClass('open');
		menu.fadeOut(200);
	})

})



/* Мобильный фильтр в каталоге */

$(function(){
	var link = $('.mobile_filter_link'),
		close = $('.close_filter'),
		filter = $('.filter');


	link.on('click', function() {
		filter.addClass('open');
		return false;
	});

	close.on('click', function() {
		filter.removeClass('open');
		return false;
	});

})


/* Мобильная сортировка */

$(function(){
	var link = $('.mobile_sort_link'),
		sortUl = $('.mobile_controls').find('.sort_list');


	link.on('click', function() {
		sortUl.fadeToggle(200);
		return false;
	});

})


/* Характеристики */

$(function(){
	var mobLink = $('button.mobile_title'),
		block = mobLink.parent().find('.discription');
		descLink = $('.hide_description');

	mobLink.on('click', function() {
		block.not($(this).siblings()).slideUp(200);
		$(this).parent().find('.discription').slideToggle(200);
	});

	descLink.on('click', function() {
		var block = $(this).parent().parent().siblings('.discription');
		if (block.css('display') === 'block') {
			block.slideUp();
			$(this).find('span').text('Показать');
		} else {
			block.slideDown();
			$(this).find('span').text('Скрыть');
		}
		
		return false;
	})

})

/* Инициализация календаря JQuery-UI */

if ($("*").is("#datepicker")) {

	$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Пред',
			nextText: 'След',
			currentText: 'Сегодня',
			monthNames: ['Января','Февраля','Марта','Апреля','Мая','Июня',
			'Июля','Августа','Сентября','Октября','Ноября','Декабря'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Нед',
			dateFormat: 'dd / MM / yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	$("#datepicker").datepicker({
		changeMonth:true,
		changeYear:true,
		showOn: 'button',
		yearRange: '-100:+0'
	});
}


/*  инициализация маски телефона  */

$(function($){
	$("[name = phone]").mask("+9(999) 999-9999");
	$('#set_mobile_phone').mask("+9(999) 999-9999");
});



// Инициализация яндекс карты
$(function() {
	if ($('div').is('#map')) {
		ymaps.ready(init);
		var myMap;

		function init(){
			myMap = new ymaps.Map("map", {
				center: [55.763204, 37.478154],
				zoom: 17,
				controls: ['zoomControl', 'fullscreenControl']
			});
			myMap.behaviors.disable(['drag','scrollZoom', 'rightMouseButtonMagnifier']);
			
		}
	}
})

// Затемнение экрана при наведении на боковое меню
$(function() {
	if($(document).width() > 1200) {
		var menu = $('.aside_nav');
		var wrap = $('.overlay');

		menu.mouseenter(function(){
			wrap.stop().fadeIn(200);
		})
		menu.mouseleave(function(){
			wrap.stop().fadeOut(200);
		})
	}
})

// Написать нам



$(function() {

	var link = $('.feedback_block').find('a'),
		modal = $('.contact_modal'),
		overlay = $('.overlay'),
		close = modal.find('.close');

	link.on('click', function(){
		modal.fadeIn(200);
		overlay.fadeIn(200);
		return false;
	});
	overlay.add(close).on('click', function(){
		modal.fadeOut(200);
		overlay.fadeOut(200);
	})
	
})
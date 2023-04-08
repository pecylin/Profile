$(function () {

	const tabsLink = $('.tabs-button');
	const tabsContent = $('.tabsContent-item');
	const listMorePage = $('.listMorePage-item');
	const lightboxClose = $('.lightbox-close');

	for (let i = 0; i < tabsLink.length; i++) {

		$(tabsLink[i]).on('click', function (e) {
			e.preventDefault();

			$(this).addClass('active').siblings('a').removeClass('active');
			$(tabsContent[i]).fadeIn(500).siblings().hide();
		});
	}

	for (let i = 0; i < listMorePage.length; i++) {

		$(listMorePage[i]).on('click', function (e) {
			e.preventDefault();

			window.location.hash = 'lightbox';
			$('body').addClass('hidden');
			$(tabsLink[0]).addClass('active');
			$(tabsContent[0]).show();

			let file = $(this).parent('ul').data('file');
			for (j = 0; j < tabsContent.length; j++) {
				$(tabsContent[j]).append('<img src=' + 'images/' + file + '/img-demoPage' + (i + 1) + '-' + (j + 1) + '.jpg class="img"/>');
			}
		})
	}

	$(lightboxClose).on('click', function (e) {

		$(tabsContent).fadeOut(500).children().remove();
		$(tabsLink).removeClass('active');
		$('body').removeClass('hidden');
	})

	$('.navToggle').on('click', function () {
		$(this).toggleClass('open');
		$('.nav').toggleClass('open');
	})

	$('.nav-item').on('click', function () {
		$(this).parent('nav').removeClass('open').prev('a').removeClass('open');
	})

	//goTop
	const goTop = $('.link--goTop');

	$(window).scroll(function () {
		let pos = $(this).scrollTop();

		if (pos > 300) {
			console.log('scroll');
			goTop.removeClass('link--goTopDisabled');
		} else {
			goTop.addClass('link--goTopDisabled');
		}

	})

});
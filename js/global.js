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

			for (j = 0; j < tabsContent.length; j++) {
				$(tabsContent[j]).append('<img src=' + 'images/eva/img-demoPage' + (i + 1) + '-' + (j + 1) + '.jpg class="img"/>');
			}
		})
	}

	$(lightboxClose).on('click', function (e) {
		window.location.hash = 'morePage';

		$(tabsContent).fadeOut(500).children().remove();
		$(tabsLink).removeClass('active');
		$('body').removeClass('hidden');
	})
});
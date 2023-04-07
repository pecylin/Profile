$(function () {

	const tabsLink = $('.tabs-button');
	const tabsContent = $('.tabsContent-item');
	const listMorePage = $('.listMorePage-item');
	const lightboxClose = $('.lightbox-close');

	for (let i = 0; i < tabsLink.length; i++) {

		$(tabsLink[i]).on('click', function (e) {
			e.preventDefault();

			$(this).addClass('active').siblings('a').removeClass('active');
			$(tabsContent[i]).addClass('active').siblings('li').removeClass('active');
		});
	}

	for (let i = 0; i < listMorePage.length; i++) {

		$(listMorePage[i]).on('click', function (e) {
			e.preventDefault();

			window.location.hash = 'lightbox';
			$(tabsLink[0]).addClass('active');
			$(tabsContent[0]).addClass('active');

			for (j = 0; j < tabsContent.length; j++) {
				$(tabsContent[j]).append('<img src=' + 'images/eva/img-demoPage' + (i + 1) + '-' + (j + 1) + '.jpg class="img"/>');
			}
		})
	}

	$(lightboxClose).on('click', function (e) {

		$(tabsContent).removeClass('active').children().remove();
		$(tabsLink).removeClass('active');
	})
});

// 	for (let i = 0; i < listMorePage.length; i++) {
// 		listMorePage[i].addEventListener('click', function (e) {
// 			e.preventDefault();

// 			window.location.hash = 'lightbox';

// 			//inserImgInLi
// 			for (j = 0; j < tabsContent.length; j++) {

// 				let img = document.createElement('img');
// 				img.src = 'images/eva/img-demoPage' + (i + 1) + '-' + (j + 1) + '.jpg';
// 				img.setAttribute('id', 'lightbixImg');
// 				img.classList.add('img');
// 				tabsContent[j].appendChild(img);
// 			}

// 		});
// 	}

// 	lightboxClose.addEventListener('click', function () {

// 		for (let i = 0; i < tabsContent.length; i++) {

// 			let lightbixImg = document.getElementById('lightbixImg');
// 			tabsContent[i].removeChild(lightbixImg);
// 		}

// 	});



// window.onload = function () {

// 	//tab切換
// 	let tabsLink = document.getElementById('tabs').querySelectorAll('a');
// 	let tabsContent = document.getElementById('tabsContent').querySelectorAll('li');
// 	let listMorePage = document.getElementById('listMorePage').querySelectorAll('li');
// 	let lightboxClose = document.getElementById('lightboxClose');

// 	for (let i = 0; i < tabsLink.length; i++) {
// 		tabsLink[i].addEventListener('click', function (e) {
// 			e.preventDefault();
// 			tabsContentShow(this);
// 		});
// 	}

// 	for (let i = 0; i < listMorePage.length; i++) {
// 		listMorePage[i].addEventListener('click', function (e) {
// 			e.preventDefault();

// 			window.location.hash = 'lightbox';

// 			//inserImgInLi
// 			for (j = 0; j < tabsContent.length; j++) {

// 				let img = document.createElement('img');
// 				img.src = 'images/eva/img-demoPage' + (i + 1) + '-' + (j + 1) + '.jpg';
// 				img.setAttribute('id', 'lightbixImg');
// 				img.classList.add('img');
// 				tabsContent[j].appendChild(img);
// 			}

// 		});
// 	}

// 	lightboxClose.addEventListener('click', function () {

// 		for (let i = 0; i < tabsContent.length; i++) {

// 			let lightbixImg = document.getElementById('lightbixImg');
// 			tabsContent[i].removeChild(lightbixImg);
// 		}

// 	});

// 	function tabsContentShow(activeTab) {

// 		for (let i = 0; i < tabsLink.length; i++) {

// 			if (tabsLink[i] === activeTab) {
// 				tabsLink[i].classList.add('active');
// 				tabsContent[i].classList.add('active');


// 			} else {
// 				tabsLink[i].classList.remove('active');
// 				tabsContent[i].classList.remove('active');
// 			}
// 		}
// 	}


// }


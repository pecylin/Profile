window.onload = function () {
	let tabsLink = document.getElementById('tabs').querySelectorAll('a');
	let tabsContent = document.getElementById('tabsContent').querySelectorAll('li');

	for (let i = 0; i < tabsLink.length; i++) {
		tabsLink[i].addEventListener('click', function (e) {
			console.log('click')
			e.preventDefault();
			tabsContentShow(this);
		});
	}

	function tabsContentShow(activeTab) {
		console.log('play');

		for (let i = 0; i < tabsLink.length; i++) {
			if (tabsLink[i] === activeTab) {
				tabsLink[i].classList.add('active');
				tabsContent[i].classList.add('active');
			} else {
				tabsLink[i].classList.remove('active');
				tabsContent[i].classList.remove('active');
			}
		}
	}
}
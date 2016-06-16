;var MobileMenu = (function() {
	'use strict';

	$('.main-nav__item-link').on('click', function(e) {
		// check window width without scroll width
		var isMobile = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 768;

		if(isMobile) {
			if($(this).next().hasClass('main-nav_submenu')) {
				e.preventDefault();
				$(this).next().toggleClass('submenu-active');
			}
		}

	})
})();

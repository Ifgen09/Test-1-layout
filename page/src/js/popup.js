var Popup = (function() {
	'use strict';




	function show(popupID, contentString) {
		var HTML = '' +
			'<div id="'+popupID+'" class="popup-holder">' +
			'<div id="popup-'+popupID+'" class="popup-b">' +
			'<div class="popup-content">' +
				contentString +
			'</div>' +
			'</div>' +
			'<a href="#" class="popup-overlay"></a>' +
			'</div>';


		$('body').addClass('popup-open').append(HTML);


		setPopupHeight('popup-'+popupID);
		centerModal('popup-'+popupID);


		$(window).on('resizeEnd', function() {

			setPopupHeight('popup-'+popupID);
			centerModal('popup-'+popupID);
		});
	}

	function setPopupHeight(popupID) {
		console.log(popupID);
		var $popup = $('#'+popupID),
			padding = parseInt($popup.css('padding-top'), 10) + parseInt($popup.css('padding-bottom'), 10);




		$popup.outerHeight($popup.find('.popup-content').height() + padding);

		if ($(window).height() < $popup.outerHeight()) {
			$popup.addClass('b-popup--position-fix');
		}
		$(window).on('resizeEnd', function () {
			if ($(window).height() < $popup.outerHeight()) {
				$popup.addClass('b-popup--position-fix');
			} else {
				$popup.removeClass('b-popup--position-fix');
			}
		});

	}

	function centerModal(popupID){
		var $popup = $('#' + popupID);

		var top = Math.round(($(window).height() - $popup.outerHeight()) / 2);
		top = top > 0 ? top : 0;
		$popup.css('margin-top', top);
	}

	function hide($object) {
		$object.fadeOut(700, function() {
			$(this).remove();
		});
	}


	$(document).on('click', '.popup-overlay', function() {
		hide($(this).parents('.popup-holder'));
		$('body').removeClass('popup-open');
	});


	return {
		show: show,
		setPopupHeight: setPopupHeight
	}

})();
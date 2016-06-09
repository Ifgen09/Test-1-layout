/**
 * resizeEnd event helper
 */
$(window).on('resize', function () {
	if (this.resizeTO) clearTimeout(this.resizeTO);
	this.resizeTO = setTimeout(function () {
		$(this).trigger('resizeEnd');
	}, 300);
});


$(function() {

	$('.js-show-popup').on('click', function(e) {
		e.preventDefault();
		var defPopupHTML =
			'<h2 class="popup-title">Look at form again</h2>' +
			'<form action="/">' +
			'<div class="inputs-b clearfix">' +
				'<div class="input-b clearfix">' +
					'<label for="input-4">Subject</label>' +
					'<input id="input-4" type="text"/>' +
				'</div>' +
				'<div class="input-b clearfix">' +
					'<label for="input-5">From</label>' +
					'<input id="input-5" type="text"/>' +
				'</div>' +
				'<div class="input-b clearfix">' +
					'<label for="input-6">To</label>' +
					'<input id="input-6" type="text"/>' +
				'</div>' +
			'</div>' +
			'</form>';

		Popup.show('default', defPopupHTML);
	});
});
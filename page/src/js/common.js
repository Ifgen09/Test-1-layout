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
				'<div class="inputs-b__labels">' +
					'<label for="input_4">Subject</label>' +
					'<label for="input_5">From</label>' +
					'<label for="input_6">To</label>' +
				'</div>' +
				'<div class="inputs-b__inputs">' +
					'<input id="input_4" type="text"/>' +
					'<input id="input_5" type="text"/>' +
					'<input id="input_6" type="text"/>' +
				'</div>' +
			'</div>' +
			'</form>';

		Popup.show('default', defPopupHTML);
	});
});
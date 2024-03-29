$(() => {
	let idx = 0;
	let tmpHTML = '';
	for (charm in CHARMS) {
		idx++;
		tmpHTML +=
			'<img class="charm" src="img/charms/' +
			charm +
			'.png"' +
			' data-toggle="popover" title="' +
			format(charm) +
			'" alt="' +
			format(charm) +
			'" tabindex="0" data-charm="' +
			charm +
			'"' +
			'" onclick="openCharm(\'' +
			charm.replace("'", "\\'") +
			'\')">';
		// .replace('\'','\\\'') is for defender's crest
		if ([10, 21, 31, 42].includes(idx)) {
			tmpHTML += '<br class="charm-br">';
		}
	}
	$('#charm-div').append(tmpHTML);

	tmpHTML = '';
	for (charm in CHARMS) {
		tmpHTML +=
			'<div class="col-12 col-md-6 col-lg-4 col-xl-3 text-center border">' +
			'<img class="charm nohover" src="img/charms/' +
			charm +
			'.png"' +
			' alt="' +
			format(charm) +
			'">' +
			'<p><i>' +
			format(charm) +
			'</i></p>' +
			'<p>' +
			CHARMS[charm].notches +
			(CHARMS[charm].notches == 1 ? ' notch' : ' notches') +
			'</p>' +
			'<div class="table-desc table-desc-short py-2">' +
			CHARMS[charm].description_short +
			'</div>' +
			'<div class="table-desc table-desc-long py-2 hidden">' +
			CHARMS[charm].description +
			'</div>' +
			'</div>';
	}
	$('#charm-table').append(tmpHTML);

	$('#description-switch').change(() => {
		if ($('#description-switch').is(':checked'))
			$('#description-switch')
				.parent()
				.find('label')
				.text('Long Descriptions');
		else
			$('#description-switch')
				.parent()
				.find('label')
				.text('Short Descriptions');

		$('.table-desc').toggleClass('hidden');
	});

	$('[data-toggle="popover"]').popover({ trigger: 'hover' });

	$('.charm').keydown((evt) => {
		if (evt.which == 13)
			// enter
			openCharm($(':focus').attr('data-charm'));
	});
});

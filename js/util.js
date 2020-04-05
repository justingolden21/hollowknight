const format = str => str.split('_').join(' ');

const getNotches = num => '<img class="notch" src="img/charm_notch.png">'.repeat(num);

function openCharm(charm) {
	$('.modal-title').html('<img class="modal-charm" src="img/charms/' + charm + '.png"> ' + format(charm) );
	$('.modal-body').html(
		'<img class="decoration" src="img/decorative_top.png">' +
		'<b>Notches:</b> ' + CHARMS[charm].notches + getNotches(CHARMS[charm].notches) +
		'<br><b>Price:</b> ' + CHARMS[charm].price + '<img class="geo" src="img/geo.png">' +
		'<br><b>Location:</b> ' + CHARMS[charm].location +
		'<br><b>Description:</b> <i>' + CHARMS[charm].description + '</i>' +
		'<br><b>Acquisition:</b> <span class="spoiler">' + CHARMS[charm].acquisition + '</span>' +
		'<img class="decoration" src="img/decorative_bottom.png">'
	);
	$('.modal').modal('show');
}

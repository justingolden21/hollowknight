const format = str => str.split('_').join(' ');

const getNotches = num => '<img class="notch" src="img/charm_notch.png">'.repeat(num);

function openCharm(charm) {
	$('.modal-title').html(
		'<img class="modal-charm" src="img/charms/' + charm + '.png"> ' + 
		format(charm) 
	);
	$('.modal-body').html(
		'<img class="decoration" src="img/decorative_top.png"><br>' +
		'<div class="text-center">' +
		'<b>Notches:</b> ' + CHARMS[charm].notches + getNotches(CHARMS[charm].notches) +
		' | <b>Price:</b> ' + CHARMS[charm].price + '<img class="geo" src="img/geo.png">' +
		' | <b>Location:</b> ' + CHARMS[charm].location +
		'<br><br><i>' + CHARMS[charm].description + '</i>' +
		'</div>' +
		'<br><img class="decoration" src="img/decorative_bottom.png">' +
		'<br><b>Acquisition:</b> <span class="spoiler">' + CHARMS[charm].acquisition + '</span><br><br>'
	);
	$('.modal').modal('show');
	$('.modal .close').focus();
}

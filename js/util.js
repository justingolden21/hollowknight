const format = str => str.split('_').join(' ');

const getNotches = num => '<img class="notch" src="img/charm_notch.png">'.repeat(num);
const getEffectList = effects => {
	let tmp = '<ul>';
	for(idx in effects)
		tmp += '<li>' + effects[idx] + '</li>';
	return tmp + '</ul>';
};

function openCharm(charm) {
	$('.modal-title').html(
		'<img class="modal-charm" src="img/charms/' + charm + '.png"> ' + 
		format(charm) 
	);
	$('.modal-body').html(
		'<img class="decoration" src="img/decorative_top.png"><br>' +
		'<div class="text-center">' +
		'<b>Notches:</b> ' + CHARMS[charm].notches + getNotches(CHARMS[charm].notches) +
		' | <b>Price:</b> ' + (CHARMS[charm].price!=0 ? CHARMS[charm].price + '<img class="geo" src="img/geo.png">' : 'N/A') +
		' | <b>Location:</b> ' + CHARMS[charm].location +
		'<br><br><i>' + CHARMS[charm].description + '</i>' +
		'</div>' +
		'<br><img class="decoration" src="img/decorative_bottom.png">' +
		'<br><b>Acquisition:</b> <span class="spoiler">' + CHARMS[charm].acquisition + '</span><br>' +
		'<br><b>Effects:</b> <span class="spoiler">' + getEffectList(CHARMS[charm].effects) + '</span><br>' +
		'<br><a href="https://hollowknight.fandom.com/wiki/' + charm  + '" target="_blank">Wiki</a><br>'
	);
	$('.modal').modal('show');
	$('.modal .close').focus();
}

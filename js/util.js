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
		'<div class="text-center">' +
		(charm.indexOf('Fragile')!=-1?
			'<ul class="nav nav-tabs">' +
			'<li class="nav-item" onclick="changeFragile(\'' + charm + '\',true)"><a class="nav-link active">Fragile</a></li>' +
			'<li class="nav-item" onclick="changeFragile(\'' + charm + '\',false)"><a class="nav-link">Unbreakable</a></li>' +
			'</ul>'
			:''
		) +
		'<img class="decoration" src="img/decorative_top.png"><br>' +
		'<b>Notches:</b> ' + CHARMS[charm].notches + getNotches(CHARMS[charm].notches) +
		' | <b>Price:</b> ' + (CHARMS[charm].price!=0 ? CHARMS[charm].price + '<img class="geo" src="img/geo.png">' : 'N/A') +
		' | <b>Location:</b> ' + CHARMS[charm].location +
		'<br><br><i>' + CHARMS[charm].description + '</i>' +
		'<br><img class="decoration" src="img/decorative_bottom.png">' +
		'</div>' +
		'<br><b>Acquisition:</b> <span class="spoiler">' + CHARMS[charm].acquisition + '</span><br>' +
		'<br><b>Effects:</b> <span class="spoiler">' + getEffectList(CHARMS[charm].effects) + '</span><br>' +
		'<br><a href="https://hollowknight.fandom.com/wiki/' + charm  + '" target="_blank">Wiki</a><br>'
	);
	$('.modal').modal('show');
	$('.modal .close').focus();
}

function changeFragile(charm, isFragile) {
	if(isFragile)
		charm = charm.replace('Unbreakable','Fragile');
	else
		charm = charm.replace('Fragile','Unbreakable');

	console.log(charm);

	// todo: set img, desc troupe info, change active tab
}

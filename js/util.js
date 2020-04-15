const format = str => str.split('_').join(' ');
const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();
const capitalizeEach = str => {
	let rtn = '', words = str.split(' ');
	for(word in words)
		rtn += capitalize(words[word]) + ' ';
	return rtn.slice(0,-1);
}

const getNotches = num => '<img class="notch" src="img/charm_notch.png">'.repeat(num);

const getEffectList = effects => {
	let tmp = '<ul>';
	for(idx in effects)
		tmp += '<li>' + effects[idx] + '</li>';
	return tmp + '</ul>';
};

function openCharm(charm) {
	$('#charm-modal .modal-title').html(
		'<img class="modal-charm" src="img/charms/' + charm + '.png"> ' + 
		format(charm) 
	);
	$('#charm-modal .modal-body').html(
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
		'<br><b>Effects:</b> <span class="spoiler">' + getEffectList(CHARMS[charm].effects) + '</span>' +
		'<br><b>Tags:</b> <i>#' + capitalizeEach(CHARMS[charm].category).split(' ').join(' #') + '</i>' +
		'<br><br><b>Acquisition:</b><br> <span class="spoiler">' + CHARMS[charm].acquisition + '</span><br>' +
		'<br><a href="https://hollowknight.fandom.com/wiki/' + charm  + '" target="_blank">Wiki</a><br>'
	);
	$('#charm-modal.modal').modal('show');
	$('#charm-modal.modal .close').focus();
}

const FRAGILE_TEXT = 'This charm is fragile, and will break if its bearer is killed.';
const UNBREAKABLE_TEXT = 'Unbreakable:<br>This charm is unbreakable.';

function changeFragile(charm, isFragile) {
	let newCharm;
	if(isFragile)
		newCharm = charm.replace('Unbreakable','Fragile');
	else
		newCharm = charm.replace('Fragile','Unbreakable');

	// set tab
	$('.nav-link').removeClass('active');
	$('.nav-link:contains('+(isFragile?'Fragile':'Unbreakable')+')').addClass('active');

	// set title
	$('#charm-modal .modal-title').html(
		'<img class="modal-charm" src="img/charms/' + newCharm + '.png"> ' + 
		format(newCharm) 
	);

	// set description, price, and acquisition
	if(isFragile) {
		$('#charm-modal .modal-body').html($('#charm-modal .modal-body').html().replace(UNBREAKABLE_TEXT,FRAGILE_TEXT) );
		$('#charm-modal .modal-body').html($('#charm-modal .modal-body').html().replace('<b>Price:</b> '+CHARMS[charm].price2,'<b>Price:</b> '+CHARMS[charm].price) );
		$('#charm-modal .modal-body').html($('#charm-modal .modal-body').html().replace(CHARMS[charm].acquisition2,CHARMS[charm].acquisition) );
	}
	else {
		$('#charm-modal .modal-body').html($('#charm-modal .modal-body').html().replace(FRAGILE_TEXT,UNBREAKABLE_TEXT) );
		$('#charm-modal .modal-body').html($('#charm-modal .modal-body').html().replace('<b>Price:</b> '+CHARMS[charm].price,'<b>Price:</b> '+CHARMS[charm].price2) );
		$('#charm-modal .modal-body').html($('#charm-modal .modal-body').html().replace(CHARMS[charm].acquisition,CHARMS[charm].acquisition2) );
	}
}

function doPrint() {
	let w = window.open('', '_blank', '');
	w.document.write(
		'<link rel="stylesheet" href="css/reset.css"><link rel="stylesheet" href="css/styles.css">' +
		'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">' +
		'<style>body{background:#fff;}</style>' +
		'<div id="charm-table" class="row">' + $('#charm-table').html() + '</div>' +
		'<br>' + window.location.href +
		'<script>window.print();</script>'
		// '<script>window.print();window.close();</script>'
	);
}

$( ()=> {
	let idx = 0;
	let tmpHTML = '';
	for(charm in CHARMS) {
		idx++;
		tmpHTML +=
			'<img class="charm" src="img/charms/' + charm + '.png"' +
			' data-toggle="popover" title="' + format(charm) +
			'" alt="' + format(charm) +
			'" tabindex="0" data-charm="' + charm + '"' +
			'" onclick="openCharm(\'' + charm.replace('\'','\\\'') + '\')">';
				// .replace('\'','\\\'') is for defender's crest		
		if(idx%10==0) {
			tmpHTML += '<br class="charm-br">';
			if(idx%20==10)
				tmpHTML += '<img class="charm-placeholder" src="img/charms/empty.png">';
		}
	}
	$('#charm-div').append(tmpHTML);

	tmpHTML = '';
	for(charm in CHARMS) {
		tmpHTML +=
			'<div class="col-12 col-md-6 col-lg-4 col-xl-3 text-center border">' +
			'<img class="charm" src="img/charms/' + charm + '.png"' +
			' data-toggle="popover" title="' + format(charm) +
			'" alt="' + format(charm) + '">' +
			'<p><i>' + format(charm) + '</i></p>' +
			'<p>' + CHARMS[charm].notches + (CHARMS[charm].notches==1?' notch':' notches') + '</p>' +
			'<p>' + CHARMS[charm].description + '</p>' +
			'</div>';
	}
	$('#charm-table').append(tmpHTML);

	$('[data-toggle="popover"]').popover({trigger: 'hover'});

	$('.charm').keydown( (evt)=> {
		if(evt.which == 13) // enter
			openCharm($(':focus').attr('data-charm') );
	});
});
$( ()=> {
	let idx = 0;
	for(charm in CHARMS) {
		idx++;
		$('#charm-div').append('<img class="charm" src="img/charms/' + charm + '.png"' +
			' title="' + format(charm) + '" tabindex="0" data-charm="' + charm + '"' +
			'" onclick="openCharm(\'' + charm + '\')">');
		if(idx%10==9) {
			$('#charm-div').append('<br class="charm-br">');
			if(idx%20==9) {
				$('#charm-div').append('<img class="charm-placeholder" src="img/charms/empty.png">');
			}
		}
	}
	$('.charm').keydown( (evt)=> {
		if(evt.which == 13) // enter
			openCharm($(':focus').attr('data-charm') );
	});
});
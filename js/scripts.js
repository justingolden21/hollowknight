// const CHARMS = 'Baldur_Shell,Carefree_Melody,Dashmaster,Deep_Focus,Defender\'s_Crest,Dreamshield,Dream_Wielder,Flukenest,Fragile_Greed,Fragile_Heart,Fragile_Strength,Fury_of_the_Fallen,Gathering_Swarm,Glowing_Womb,Grimmchild,Grubberfly\'s_Elegy,Grubsong,Heavy_Blow,Hiveblood,Joni\'s_Blessing,Kingsoul,Lifeblood_Core,Lifeblood_Heart,Longnail,Mark_of_Pride,Nailmaster\'s_Glory,Quick_Focus,Quick_Slash,Shaman_Stone,Shape_of_Unn,Sharp_Shadow,Soul_Catcher,Soul_Eater,Spell_Twister,Spore_Shroom,Sprintmaster,Stalwart_Shell,Steady_Body,Thorns_of_Agony,Unbreakable_Greed,Unbreakable_Heart,Unbreakable_Strength,Void_Heart,Wayward_Compass,Weaversong'.split(',');

const CHARMS = {
	'Wayward_Compass': {
		notches: 1,
		description: 'Whispers its location to the bearer whenever a map is open.',
		location: 'Dirtmouth',
		price: 220,
		acquisition: 'After the first encounter with Cornifer the cartographer in Forgotten Crossroads, it can be purchased from Iselda in Dirtmouth for 220 Geo',
	},

}

const format = str => str.split('_').join(' ');

function openCharm(charm) {
	$('.modal-title').html('<img class="modal-charm" src="img/charms/' + charm + '.png"> ' + format(charm) );
	$('.modal-body').html(
		'<b>Notches:</b> ' + CHARMS[charm].notches +
		'<br><b>Price:</b> ' + CHARMS[charm].price + '<img class="geo" src="img/geo.png">' +
		'<br><b>Location:</b> ' + CHARMS[charm].location +
		'<br><b>Description:</b> <i>' + CHARMS[charm].description + '</i>' +
		'<br><b>Acquisition:</b> <span class="spoiler">' + CHARMS[charm].acquisition + '</span>'
	);
	$('.modal').modal('show');
}

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
})
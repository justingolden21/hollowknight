const CHARMS = 'Baldur_Shell,Carefree_Melody,Dashmaster,Deep_Focus,Defender\'s_Crest,Dreamshield,Dream_Wielder,Flukenest,Fragile_Greed,Fragile_Heart,Fragile_Strength,Fury_of_the_Fallen,Gathering_Swarm,Glowing_Womb,Grimmchild,Grubberfly\'s_Elegy,Grubsong,Heavy_Blow,Hiveblood,Joni\'s_Blessing,Kingsoul,Lifeblood_Core,Lifeblood_Heart,Longnail,Mark_of_Pride,Nailmaster\'s_Glory,Quick_Focus,Quick_Slash,Shaman_Stone,Shape_of_Unn,Sharp_Shadow,Soul_Catcher,Soul_Eater,Spell_Twister,Spore_Shroom,Sprintmaster,Stalwart_Shell,Steady_Body,Thorns_of_Agony,Unbreakable_Greed,Unbreakable_Heart,Unbreakable_Strength,Void_Heart,Wayward_Compass,Weaversong'.split(',');

$( ()=> {
	for(idx in CHARMS) {
		$('#charm-div').append('<img class="charm" src="img/charms/' + CHARMS[idx] + '.png"' +
			' title="' + CHARMS[idx].split('_').join(' ') + '">');
		if(idx%10==9) {
			$('#charm-div').append('<br class="charm-br">');
			if(idx%20==9) {
				$('#charm-div').append('<img class="charm-placeholder" src="img/charms/empty.png">');
			}
		}
	}
})
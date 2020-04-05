// const CHARMS = 'Baldur_Shell,Carefree_Melody,Dashmaster,Deep_Focus,Defender\'s_Crest,Dreamshield,Dream_Wielder,Flukenest,Fragile_Greed,Fragile_Heart,Fragile_Strength,Fury_of_the_Fallen,Gathering_Swarm,Glowing_Womb,Grimmchild,Grubberfly\'s_Elegy,Grubsong,Heavy_Blow,Hiveblood,Joni\'s_Blessing,Kingsoul,Lifeblood_Core,Lifeblood_Heart,Longnail,Mark_of_Pride,Nailmaster\'s_Glory,Quick_Focus,Quick_Slash,Shaman_Stone,Shape_of_Unn,Sharp_Shadow,Soul_Catcher,Soul_Eater,Spell_Twister,Spore_Shroom,Sprintmaster,Stalwart_Shell,Steady_Body,Thorns_of_Agony,Unbreakable_Greed,Unbreakable_Heart,Unbreakable_Strength,Void_Heart,Wayward_Compass,Weaversong'.split(',');

const CHARMS = {
	'Wayward_Compass': {
		notches: 1,
		price: 220,
		location: 'Dirtmouth',
		description: 'Whispers its location to the bearer whenever a map is open, allowing wanderers to pinpoint their current location.',
		effects: [
			'Shows Knight\'s location on map'
		],
		acquisition: 'Bought from Iselda in Dirtmouth for 220 Geo, after the first encounter with Cornifer the cartographer.',
		category: 'movement',
	},
	'Gathering_Swarm': {
		notches: 1,
		price: 300,
		location: 'Dirtmouth',
		description: 'A swarm will follow the bearer and gather up any loose Geo.<hr>Useful for those who can\'t bear to leave anything behind, no matter how insignificant.',
		effects: [
			'Collects dropped Geo'
		],
		acquisition: 'Bought from Sly in Dirtmouth for 300 Geo.',
		category: 'geo',
	},
	'Stalwart_Shell': {
		notches: 2,
		price: 200,
		location: 'Dirtmouth',
		description: 'Builds resilience. When recovering from damage, the bearer will remain invulnerable for longer.<hr>Makes it easier to escape from dangerous situations.',
		effects: [
			'Increase invincibility duration after being hit to 1.7 seconds (base-1.3, dif-0.4)',
			'Reduces hit recoil (no input time) after being hit to 0.08 seconds (base-0.2, dif-0.12)'
		],
		acquisition: 'Bought from Sly in Dirtmouth for 200 Geo.',
		category: 'defense',
	},
	'Soul_Catcher': {
		notches: 2,
		price: 0,
		location: 'Forgotten Crossroads',
		description: 'Used by shamans to draw more SOUL from the world around them.<hr>Increases the amount of SOUL gained when striking an enemy with the nail.',
		effects: [
			'Gain +3 additional SOUL with each hit for main Soul Vessel',
			'Gain +2 for reserve Soul Vessels'
		],
		acquisition: 'Found at the very end of the Ancestral Mound, after killing the Elder Baldur.',
		category: 'soul',
	},
	'Shaman_Stone': {
		notches: 3,
		price: 220,
		location: 'Forgotten Crossroads',
		description: 'Said to contain the knowledge of past generations of shaman.<hr>Increases the power of spells, dealing more damage to foes.',
		effects: [
			'Increases Vengeful Spirit/Shade Soul damage by 33%',
			'Increases Desolate Dive damage by 51% and Descending Dark damage by 47%',
			'Increases Howling Wraiths/Abyss Shriek damage by 50%',
			'Increases size and hitbox of all Spells'
		],
		acquisition: 'Bought from Salubra for 220 Geo in Forgotten Crossroads.',
		category: 'soul attack',
	},
	'Soul_Eater': {
		notches: 4,
		price: 0,
		location: 'Resting Grounds',
		description: 'Forgotten shaman artifact, used to draw SOUL from still-living creatures.<hr>Greatly increases the amount of SOUL gained when striking an enemy with the nail.',
		effects: [
			'Gain +8 additional SOUL with each hit for main Soul Vessel',
			'Gain +6 for reserve Soul Vessels'
		],
		acquisition: 'Found in the Resting Grounds. Requires Desolate Dive/Descending Dark.<br>Use Desolate Dive/Descending Dark on the grave just under the Stag Station then head east in the passageway. The charm is found next to the sarcophagus of a shaman, which appears to contain a corpse as it can be dream nailed to read "...Let me rest...".',
		category: 'soul',
	},
	'Dashmaster': {
		notches: 2,
		price: 0,
		location: 'Fungal Wastes',
		description: 'Bears the likeness of an eccentric bug known only as \'The Dashmaster\'.<hr>The bearer will be able to dash more often as well as dash downwards. Perfect for those who want to move around as quickly as possible.',
		effects: [
			'Reduce the Mothwing Cloak cooldown by 50%',
			'Allows dashing downwards by holding DOWN'
		],
		acquisition: 'Found beneath a statue below the Mantis Village in the Fungal Wastes, near the entrance to the Royal Waterways.',
		category: 'movement',
	},
	'Thorns_of_Agony': {
		notches: 1,
		price: 0,
		location: 'Greenpath',
		description: 'Senses the pain of its bearer and lashes out at the world around them.<hr>When taking damage, sprout thorny vines that damage nearby foes.',
		effects: [
			'Damages nearby enemies for up to 2x base Nail damage when hit'
		],
		acquisition: 'Found in Greenpath in a maze of thorns. Requires Mothwing Cloak to reach.',
		category: 'defense attack',
	},
	'Fury_of_the_Fallen': {
		notches: 2,
		price: 0,
		location: 'King\'s Pass',
		description: 'Embodies the fury and heroism that comes upon those who are about to die.<hr>When close to death, the bearer\'s strength will increase.',
		effects: [
			'Increases Nail damage by 75% when on 1 HP',
			'This effect is also applied to Great Slash and Dash Slash (but not to Cyclone Slash)'
		],
		acquisition: 'Found in King\'s Pass, the starting cavern, behind a spike filled cavern. Look for the Geo cluster in the bottom right of the pit room. Dash to cross the spikes, and continue right to find the charm.<br>Can be reached at the beginning of the game by nail pogoing on the spikes, or returned to later with the Mothwing Cloak or Mantis Claw.',
		category: 'attack',
	},
	'Fragile_Heart': {
		notches: 2,
		price: 350,
		price2: 12000,
		location: 'Fungal Wastes',
		description: 'Increases the health of the bearer, allowing them to take more damage.<hr>This charm is fragile, and will break if its bearer is killed.',
		effects: [
			'Adds two Masks of health'
		],
		acquisition: 'Purchased from Leg Eater in Fungal Wastes for 350 Geo. Wearing the Defender\'s Crest will cause Leg Eater to lower the cost to 280 Geo.<br>When broken, Leg Eater can repair it for 200 Geo, or for 160 Geo while wearing the Defender\'s Crest.',
		acquisition2: 'Once the Knight has summoned the Grimm Troupe, Divine becomes accessible in Dirtmouth. To get the unbreakable version of Fragile Heart, the player must equip it then when speaking to her, give it to her when prompted. She will eat the charm, then ask for 12000 Geo. Once the Geo is paid, she gives the player the unbreakable version of the Fragile Heart charm. The Grimm Troupe Content Pack is required.',
		category: 'defense',
	},
	'Fragile_Greed': {
		notches: 2,
		price: 250,
		price2: 9000,
		location: 'Fungal Wastes',
		description: 'Causes the bearer to find more Geo when defeating enemies.<hr>This charm is fragile, and will break if its bearer is killed.',
		effects: [
			'Enemies drop 20-60% more Geo'
		],
		acquisition: 'Purchased from Leg Eater in Fungal Wastes for 250 Geo. Wearing the Defender\'s Crest will cause Leg Eater to lower the cost to 200 Geo.<br>When broken, Leg Eater can repair it for 150 Geo, or for 120 Geo while wearing the Defender\'s Crest.',
		acquisition2: 'Once the Knight has summoned the Grimm Troupe, Divine becomes accessible in Dirtmouth. To get the unbreakable version of Fragile Greed, the player must equip it, and then give it to her when prompted while speaking to her. She will eat the charm, then ask for 9000 Geo. Once the Geo is paid, she gives the player the unbreakable version of the charm. The Grimm Troupe Content Pack is required.',
		category: 'geo',
	},
	'Fragile_Strength': {
		notches: 3,
		price: 600,
		price2: 15000,
		location: 'Fungal Wastes',
		description: 'Strengthens the bearer, increasing the damage they deal to enemies with their nail.<hr>This charm is fragile, and will break if its bearer is killed.',
		effects: [
			'Increases Nail damage by 50% rounded up'
		],
		acquisition: 'Purchased from Leg Eater in Fungal Wastes for 600 Geo. Wearing the Defender\'s Crest will cause Leg Eater to lower the cost to 480 Geo.<br>When broken, Leg Eater can repair it for 350 Geo, or for 280 Geo while wearing the Defender\'s Crest.',
		acquisition2: 'Once the Knight has summoned the Grimm Troupe, Divine becomes accessible in Dirtmouth. To get the unbreakable version of Fragile Strength, the Knight must equip it then when speaking to her, give it to her when prompted. She will eat the charm, then ask for 15000 Geo. Once the Geo is paid, she gives the Knight the unbreakable version of the charm. The Grimm Troupe Content Pack is required.',
		category: 'attack',
	},
	'Spell_Twister': {
		notches: 2,
		price: 0,
		location: 'City of Tears',
		description: 'Reflecting the desires of the Soul Sanctum for mastery over SOUL, it improves the bearer\'s ability to cast spells.<hr>Reduces the SOUL cost of casting spells.',
		effects: [
			'Reduces SOUL cost of Spells to 24 from 33.'
		],
		acquisition: 'A secret room on the top of the Soul Sanctum, just before fighting Soul Master. The room which leads up to it is filled with Mistakes and Follies which can make reaching the Charm nearly impossible without taking damage as these enemies may spawn right onto the Knight.<br>The charm itself is found attached to some sort of machine similar to the Lore Tablets found around the area.',
		category: 'soul',
	},
	'Steady_Body': {
		notches: 1,
		price: 120,
		location: 'Forgotten Crossroads',
		description: 'Keeps its bearer from recoiling backwards when they strike an enemy with a nail.<hr>Allows one to stay steady and keep attacking.',
		effects: [
			'Removes all knockback/recoil from hitting enemies'
		],
		acquisition: 'Bought from Salubra for 120 Geo in the Forgotten Crossroads.',
		category: 'movement',
	},


	// 'aaa': {
	// 	notches: 888,
	// 	price: 888,
	// 	location: 'aaa',
	// 	description: 'aaa',
	// 	effects: [
	// 		'aaa'
	// 	],
	// 	acquisition: 'aaa',
	// 	category: 'aaa',
	// },

}
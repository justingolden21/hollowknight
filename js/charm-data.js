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
	'Sprintmaster': {
		notches: 1,
		price: 400,
		location: 'Dirtmouth',
		description: 'Bears the likeness of a strange bug known only as \'The Sprintmaster\'.<hr>Increases the running speed of the bearer, allowing them to avoid danger or overtake rivals.',
		effects: [
			'Increases run speed by ~20% (base 8.3, charm 10.0, dif -1.7)'
		],
		acquisition: 'Bought from Sly in Dirtmouth after acquiring the Shopkeeper\'s Key for 400 Geo. Requires Grimm Troupe content pack.',
		category: 'movement',
	},
	'Grubsong': {
		notches: 1,
		price: 0,
		location: 'Forgotten Crossroads',
		description: 'Contains the gratitude of freed grubs.<hr>Gain SOUL when taking damage.',
		effects: [
			'Gain 15 SOUL when taking damage'
		],
		acquisition: 'Gifted by the Grubfather after 10 Grubs have been freed.',
		category: 'soul',
	},
	'Grubberfly\'s_Elegy': {
		notches: 3,
		price: 0,
		location: 'Forgotten Crossroads',
		description: 'Contains the gratitude of grubs who will move to the next stage of their lives. Imbues weapons with a holy strength.<hr>When the bearer is at full health, they will fire beams of white-hot energy from their nail.',
		effects: [
			'When at full HP, Nail attacks shoot a projectile dealing 50% (rounded down) Nail damage per hit.',
			'Damage: 2/4/6/8/10 (Nail upgrades 0/1/2/3/4)'
		],
		acquisition: 'Gifted by Grubfather after freeing all 46 Grubs.',
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
		acquisition2: 'Once the Knight has summoned the Grimm Troupe, Divine becomes accessible in Dirtmouth. To get the unbreakable version of Fragile Heart, the player must equip it then when speaking to her, give it to her when prompted. She will eat the charm, then ask for 12000 Geo. Once the Geo is paid, she gives the player the unbreakable version of the Fragile Heart charm.',
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
		acquisition2: 'Once the Knight has summoned the Grimm Troupe, Divine becomes accessible in Dirtmouth. To get the unbreakable version of Fragile Greed, the player must equip it, and then give it to her when prompted while speaking to her. She will eat the charm, then ask for 9000 Geo. Once the Geo is paid, she gives the player the unbreakable version of the charm.',
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
		acquisition2: 'Once the Knight has summoned the Grimm Troupe, Divine becomes accessible in Dirtmouth. To get the unbreakable version of Fragile Strength, the Knight must equip it then when speaking to her, give it to her when prompted. She will eat the charm, then ask for 15000 Geo. Once the Geo is paid, she gives the Knight the unbreakable version of the charm.',
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
		category: 'movement attack',
	},
	'Heavy_Blow': {
		notches: 2,
		price: 350,
		location: 'Dirtmouth',
		description: 'Formed from the nails of fallen warriors.<hr>Increases the force of the bearer\'s nail, causing enemies to recoil further when hit.',
		effects: [
			'Increases Nail attack knockback by 75%',
			'Increases Great Slash and Dash Slash knockback by 100%',
			'Increases Cyclone Slash knockback by 150%',
			'Reduces amount of hits needed to stagger a Boss by 1'
		],
		acquisition: 'Bought from Sly for 350 Geo after bringing him the Shopkeeper\'s Key found in the Crystal Peak.',
		category: 'attack defense',
	},
	'Quick_Slash': {
		notches: 3,
		price: 0,
		location: 'Kingdom\'s Edge',
		description: 'Born from imperfect, discarded nails that have fused together. The nails still long to be wielded.<hr>Allows the bearer to slash much more rapidly with their nail.',
		effects: [
			'Decreases Attack Duration (How long the hitbox is active) from 0.36s to 0.25s',
			'Decreases Attack Cooldown (Total time between attacks) from 0.41s to 0.25s'
		],
		acquisition: 'Located in Kingdom\'s Edge, upon a massive anvil in a hidden room in front of a massive corpse known in the game files as "Ancient Nailsmith".<br>Finding it requires travelling to the very east end of Kingdom\'s Edge past Oro\'s hut and locating a breakable floor next to his training dummy. After traversing down a few levels, and looping up the west end of the section, there will be a small tunnel located within a wall leading to the Charm.',
		category: 'attack movement',
	},
	'Longnail': {
		notches: 2,
		price: 300,
		location: 'Forgotten Crossroads',
		description: 'Increases the range of the bearer\'s nail, allowing them to strike foes from further away.',
		effects: [
			'Increases nail range by 15%'
		],
		acquisition: 'Bought from Salubra in the Forgotten Crossroads for 300 Geo.',
		category: 'attack defense',
	},
	'Mark_of_Pride': {
		notches: 3,
		price: 0,
		location: 'Funal Wastes',
		description: 'Freely given by the Mantis Tribe to those they respect.<hr>Greatly increases the range of the bearer\'s nail, allowing them to strike foes from further away.',
		effects: [
			'Increases nail range by 25%'
		],
		acquisition: 'In the Mantis Village, in a chest in a room to the northeast of the Mantis Lords arena. This room can only be accessed after defeating the Mantis Lords.',
		category: 'attack defense',
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
	'Baldur_Shell': {
		notches: 2,
		price: 0,
		location: 'Howling Cliffs',
		description: 'Protects its bearer with a hard shell while focusing SOUL.<hr>The shell is not indestructible and will shatter if it absorbs too much damage.',
		effects: [
			'Block up to 4 hits while using Focus.',
			'Can be repaired by resting at a Bench' // felt adding this was necessary
		],
		acquisition: 'This charm is located in the southwest portion of the Howling Cliffs, where there is a chest that drops only 1 Geo. Jumping down into the chest takes the Knight to a cave guarded by two Elder Baldurs. Defeating the one on the right opens a tunnel filled with Elder Baldur corpses that leads to the charm.',
		category: 'defense soul',
	},
	'Flukenest': {
		notches: 3,
		price: 0,
		location: 'Royal Waterways',
		description: 'Living charm born in the gut of a Flukemarm.<hr>Transforms the Vengeful Spirit and Shade Soul spells into a horde of volatile baby flukes.',
		effects: [
			'Replaces Vengeful Spirit with 9 flukes, and Shade Soul with 16 flukes',
			'Each fluke does 4 damage, resulting in a total damage of 36 with Vengeful Spirit and 64 with Shade Soul'
		],
		acquisition: 'Dropped by Flukemarm in the Royal Waterways when defeated.',
		category: 'summon soul',
	},
	'Defender\'s_Crest': {
		notches: 1,
		price: 0,
		location: 'Royal Waterways',
		description: 'Unique charm bestowed by the King of Hallownest to his most loyal knight. Scratched and dirty, but still cared for.<hr>Causes the bearer to emit a heroic odour.',
		effects: [
			'Spawns toxic clouds that deal 1 damage per tick, the cloud lasts 2.2 seconds and a new one will spawn at the Knight\'s location every 0.2 seconds',
			'Unlocks new interactions with certain NPCs',
			'Leg Eater will give a 20% discount on his items and repairs, Relic Seeker Lemm will refuse to barter, and Tuk will give a free Rancid Egg' // added this
		],
		acquisition: 'Reward from defeating Dung Defender in the Royal Waterways.',
		category: 'summon interaction',
	},
	'Glowing_Womb': {
		notches: 2,
		price: 0,
		location: 'Forgotten Crossroads',
		description: 'Drains the SOUL of its bearer and uses it to birth hatchlings.<hr>The hatchlings have no desire to eat or live, and will sacrifice themselves to protect their parent.',
		effects: [
			'Spawns hatchlings for 8 SOUL each, that deal 9 damage to enemies on contact, a hatchling spawns every 4 seconds for a total of 4 hatchlings at a time'
		],
		acquisition: 'The Glowing Womb can be acquired in the Forgotten Crossroads after the Crystal Heart is acquired at Crystal Peak. The entrance is hidden to the right of the False Knight arena in the ceiling after a series of columns. The area where the charm is acquired is infected even before triggering Infected Crossroads. The Charm itself is found on the body of a giant Aspid Mother.<br>The area itself is littered with Aspid Hunters and Aspid Mothers, both of which will also show up in an arena where a fair number of them need to be fought before Glowing Womb can be acquired.',
		category: 'summon soul',
	},
	'Quick_Focus': {
		notches: 3,
		price: 800,
		location: 'Forgotten Crossroads',
		description: 'A charm containing a crystal lens.<hr>Increases the speed of focusing SOUL, allowing the bearer to heal damage faster.',
		effects: [
			'Focus casts twice as fast'
		],
		acquisition: 'Bought from Salubra in the Forgotten Crossroads for 800 Geo.',
		category: 'soul',
	},
	'Deep_Focus': {
		notches: 4,
		price: 0,
		location: 'Crystal Peak',
		description: 'Naturally formed within a crystal over a long period. Draws in SOUL from the surrounding air.<hr>The bearer will focus SOUL at a slower rate, but the healing effect will double.',
		effects: [
			'Focus heals 2 masks of Health while decreasing Focus speed by 65%'
		],
		acquisition: 'Found in Crystal Peak in a hidden cave made entirely of crystals.<br>Below the area where Cornifer can be found, look for a Husk Miner mining a wall. Break the wall to reveal the secret area. Requires Crystal Heart.',
		category: 'soul',
	},
	'Lifeblood_Heart': {
		notches: 2,
		price: 250,
		location: 'Forgotten Crossroads',
		description: 'Contains a living core that seeps precious lifeblood.<hr>When resting, the bearer will gain a coating of lifeblood that protects from a modest amount of damage.',
		effects: [
			'Adds 2 Lifeblood masks when resting.'
		],
		acquisition: 'Bought from Salubra in the Forgotten Crossroads for 250 Geo.',
		category: 'lifeblood',
	},
	'Lifeblood_Core': {
		notches: 3,
		price: 0,
		location: 'The Abyss',
		description: 'Contains a living core that bleeds precious lifeblood.<hr>When resting, the bearer will gain a coating of lifeblood that protects from a large amount of damage.',
		effects: [
			'Adds 4 Lifeblood masks when resting'
		],
		acquisition: 'On the left wall of the Abyss is a cave that will only open when having 15 or more Lifeblood masks, either through killing Lifeseeds or through the Lifeblood Heart and Joni\'s Blessing charms. Joni\'s Blessing also converts the extra health from Fragile Heart into Lifeblood masks. The charm is found sitting on a dais at the end of the chamber.<br>There is also an Arcane Egg in the same area. Once Lifeblood Core is picked up, the Knight will be immediately ejected from the room and the door will become permanently closed, so it is recommended to pick up the Arcane Egg first and then the charm.',
		category: 'lifeblood',
	},
	'Joni\'s_Blessing': {
		notches: 4,
		price: 0,
		location: 'Howling Cliffs',
		description: 'Blessed by Joni, the kindly heretic. Transfigures vital fluids into blue lifeblood.<hr>The bearer will have a healthier shell and can take more damage, but they will not be able to heal themselves by focusing SOUL.',
		effects: [
			'Increase HP by 40% (rounded down) + 1, all masks become Lifeblood',
			'Causes Lifeseeds to flock to the Knight instead of running away'
		],
		acquisition: 'Found in Joni\'s Repose in Howling Cliffs. The charm is resting on the corpse of Blue Child Joni.',
		category: 'lifeblood',
	},
	'Hiveblood': {
		notches: 4,
		price: 0,
		location: 'The Hive',
		description: 'Golden nugget of the Hive\'s precious hardened nectar.<hr>Heals the bearer\'s wounds over time, allowing them to regain health without focusing SOUL.',
		effects: [
			'Passively heals the last unit of health lost after 12 seconds without taking further damage',
			'Makes the enemies inside the Hive passive'
		],
		acquisition: 'Located in the Hive, below the room where the Lifeblood Icon Hive Knight is fought. Requires defeating the Hive Knight.',
		category: 'defense soul',
	},
	'Spore_Shroom': {
		notches: 1,
		price: 0,
		location: 'Fungal Wastes',
		description: 'Composed of living fungal matter. Scatters spores when exposed to SOUL.<hr>When focusing SOUL, emit a spore cloud that slowly damages enemies.',
		effects: [
			'Focus releases a cloud of spores dealing 1 damage per tick. The cloud lasts 4.1 seconds allowing for 27 ticks of damage (There is a 4.25 second cooldown before being able to use Spore Shroom again)',
			'Able to understand the dialogue of Mister Mushroom',
			'Able to read certain Lore Tablets found in Fungal Wastes and one in Kingdom\'s Edge'
		],
		acquisition: 'This charm is located in the Fungal Wastes near a pool of acid, close to the entrances to the Queen\'s Gardens and Deepnest. Requires Mantis Claw.',
		category: 'summon defense',
	},
	'Sharp_Shadow': {
		notches: 2,
		price: 0,
		location: 'Deepnest',
		description: 'Contains a forbidden spell that transforms shadows into deadly weapons.<hr>When using Shadow Dash, the bearer\'s body will sharpen and damage enemies.',
		effects: [
			'Damages enemies for 1 x Nail damage when dashing through them',
			'When using Shade Cloak, increases dash length by 39% (Only for the single Shade Cloak dash and not regular Mothwing Cloak "cooldown" dashes)'
		],
		acquisition: 'Located in Deepnest, Southeast of the Hot Spring behind a Shade Gate. Requires Shade Cloak.',
		category: 'attack movement',
	},
	'Shape_of_Unn': {
		notches: 2,
		price: 0,
		location: 'Greenpath',
		description: 'Reveals the form of Unn within the bearer.<hr>While focusing SOUL, the bearer will take on a new shape and can move freely to avoid enemies.',
		effects: [
			'Allows moving while focusing'
		],
		acquisition: 'Acquired from Unn beneath the Lake of Unn. Requires Isma\'s Tear.',
		category: 'soul defense',
	},
	'Nailmaster\'s_Glory': {
		notches: 1,
		price: 0,
		location: 'Dirtmouth',
		description: 'Contains the passion, skill and regrets of a Nailmaster.<hr>Increases the bearer\'s mastery of Nail Arts, allowing them to focus their power faster and unleash arts sooner.',
		effects: [
			'Reduces the charge time of Nail Arts to 0.75 seconds (base 1.75, dif -1).'
		],
		acquisition: 'Given by Sly after receiving all 3 Nail Arts from the Nailmasters: Nailmaster Oro, Nailmaster Mato, Nailmaster Sheo',
		category: 'attack',
	},
	'Weaversong': {
		notches: 2,
		price: 0,
		location: 'Deepnest',
		description: 'Silken charm containing a song of farewell, left by the Weavers who departed Hallownest for their old home.<hr>Summons weaverlings to give the lonely bearer some companionship and protection.',
		effects: [
			'Summons 3 small Weaverlings that attack enemies for 3 damage per hit.'
		],
		acquisition: 'Found in the upper part of Weavers\' Den. Requires Grimm Troupe content pack.',
		category: 'summon',
	},
	'Dream_Wielder': {
		notches: 1,
		price: 0,
		location: 'Resting Grounds',
		description: 'Transient charm created for those who wield the Dream Nail and collect Essence.<hr>Allows the bearer to charge the Dream Nail faster and collect more SOUL when striking foes.',
		effects: [
			'Gain +33 additional SOUL when hitting enemies with the Dream Nail (33 to 66)',
			'Doubles the likelihood of receiving Essence when killing enemies',
			'Reduces the attack speed of the Dream Nail from 2.4 seconds to 0.9 seconds'
		],
		acquisition: 'Given by Seer after gathering 500 Essence.',
		category: 'soul interaction',
	},
	'Dreamshield': {
		notches: 3,
		price: 0,
		location: 'Resting Grounds',
		description: 'Defensive charm once wielded by a tribe that could shape dreams.<hr>Conjures a shield that follows the bearer and attempts to protect them.',
		effects: [
			'Conjures a shield that slowly rotates around the Knight\'s position that will block certain projectiles and will deal 1x Nail damage when colliding with an enemy'
		],
		acquisition: 'Found in a room in Resting Grounds, below the Seer\'s room. Requires Grimm Troupe content pack.',
		category: 'defense summon',
	},
	'Grimmchild': {
		notches: 2,
		price: 0,
		location: 'Dirtmouth',
		description: 'Worn by those who take part in the Grimm Troupe\'s Ritual.<hr>The bearer must seek the Grimmkin and collect their flames. Uncollected flames will appear on the bearer\'s map. <hr><details><summary>After defeating Nightmare King Grimm:</summary>Symbol of a completed ritual.<hr>Contains a living, scarlet flame.</details>',
		effects: [
			'Marks uncollected flames on the map',
			'Allows access to the Grimmkin',
			'Summons a flying companion that will deal varied amounts of damage depending on the level of the Grimmchild',
			'Allows access to the Grimm and Nightmare King Grimm fights'
		],
		acquisition: 'Grimmchild is given by Troupe Master Grimm in Dirtmouth after the Grimm Troupe has been summoned. Having Grimmchild equipped reveals three flames around Hallownest. These can be absorbed by the Grimmchild after defeating the Grimmkin Novices which guard them. Returning to Grimm after this upgrades the Grimmchild, causing it to deal 5 damage.<br>After this, three more flames can be collected which are guarded by Grimmkin Masters. Subsequently returning to Grimm will initiate a boss fight with him. Upon defeating Grimm, the Grimmchild is upgraded and can deal 8 damage.<br>Finally, three more flames which are guarded by Grimmkin Nightmares have to be collected. There is also a fourth flame in Deepnest which requires no combat to collect. Having three flames and then using the Dream Nail on Grimm starts the fight with Nightmare King Grimm. When he is defeated, the Grimmchild is in its final form and can deal 11 damage. Requires Grimm Troupe content pack.',
		category: 'summon',
	},
	'Kingsoul': {
		notches: 5,
		price: 0,
		location: 'Queen\'s Gardens,White Palace',
		description: 'Holy charm symbolising a union between higher beings. The bearer will slowly absorb the limitless SOUL contained within.<br>Opens the way to a birthplace.',
		effects: [
			'Slowly generates 4 SOUL every 2 seconds',
			'Opens a secret area within the Abyss'
		],
		acquisition: 'Kingsoul is obtained after getting both White Fragments. The left half of Kingsoul is given by the White Lady in Queen\'s Gardens, the right one is taken off the body of the Pale King after completing the White Palace.<br>After getting both halves, the Kingsoul is automatically created and replaces the slot where the half of the Kingsoul previously resided.',
		category: 'soul interaction',
	},
	'Carefree_Melody': {
		notches: 3,
		price: 0,
		location: 'Dirtmouth',
		description: 'Token commemorating the start of a friendship.<hr>Contains a song of protection that may defend the bearer from damage.',
		effects: [
			'Has a chance to block incoming damage, activates about 22.4% of the time.',
			'The odds of the charm activating increase with each hit taken since it last blocked damage: 0 hits : 0%, 1 hit: 10%, 2 hits: 20%, 3 hits: 30%, 4 hits: 50%, 5 hits: 70%, 6 hits: 80%, 7+ hits: 90%', // added this
			'This charm takes up the spot that Grimmchild was in previously.' // added this
		],
		acquisition: 'After banishing the Grimm Troupe, the charm can be acquired from Nymm by talking to him in Dirtmouth. Requires Grimm Troupe content pack.',
		category: 'defense',
	},
	'Void_Heart': {
		notches: 0,
		price: 0,
		location: 'The Abyss',
		description: 'An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer\'s will.<hr>This charm is a part of its bearer and can not be unequipped.',
		effects: [
			'Unlocks 4 endings',
			'Prevents the non-Void Heart ending for the save file',
			'Renders the Siblings, Void Tendrils and Shade passive',
			'Allows access to the Godmaster Icon Pantheon of Hallownest',
			'This charm takes up the spot that Kingsoul was in previously.' // added this
		],
		acquisition: 'Found in a secret area at the bottom of the Abyss known as Birthplace. The area\'s entrance will only open if the Kingsoul charm is equipped. At the end of the area is an egg which, upon being hit with the Awoken Dream Nail, reveals a memory of the Knight involving Vessels and the Pale King. It is after traversing this memory that the Kingsoul is changed into the Void Heart.',
		category: 'interaction',
	},
}
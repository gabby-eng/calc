/*
 * Original, hand-written one-line summaries of each held item's battle effect,
 * used to power the item info tooltip next to the Item dropdown.
 * These are paraphrases in our own words, not copied from any external source.
 */

var TYPE_BOOST_ITEMS = {
	'Silk Scarf': 'Normal', 'Charcoal': 'Fire', 'Mystic Water': 'Water', 'Magnet': 'Electric',
	'Miracle Seed': 'Grass', 'Never-Melt Ice': 'Ice', 'Black Belt': 'Fighting', 'Poison Barb': 'Poison',
	'Soft Sand': 'Ground', 'Sharp Beak': 'Flying', 'Twisted Spoon': 'Psychic', 'Silver Powder': 'Bug',
	'Hard Stone': 'Rock', 'Spell Tag': 'Ghost', 'Dragon Fang': 'Dragon', 'Black Glasses': 'Dark',
	'Metal Coat': 'Steel', 'Sea Incense': 'Water', 'Wave Incense': 'Water', 'Odd Incense': 'Psychic',
	'Rock Incense': 'Rock', 'Rose Incense': 'Grass',
};

var PLATE_ITEMS = {
	'Draco Plate': 'Dragon', 'Dread Plate': 'Dark', 'Earth Plate': 'Ground', 'Fist Plate': 'Fighting',
	'Flame Plate': 'Fire', 'Icicle Plate': 'Ice', 'Insect Plate': 'Bug', 'Iron Plate': 'Steel',
	'Meadow Plate': 'Grass', 'Mind Plate': 'Psychic', 'Pixie Plate': 'Fairy', 'Sky Plate': 'Flying',
	'Splash Plate': 'Water', 'Spooky Plate': 'Ghost', 'Stone Plate': 'Rock', 'Toxic Plate': 'Poison',
	'Zap Plate': 'Electric',
};

var GEM_ITEMS = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost',
	'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];

var MEMORY_ITEMS = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost',
	'Grass', 'Ground', 'Ice', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];

var DRIVE_ITEMS = { 'Burn Drive': 'Fire', 'Chill Drive': 'Ice', 'Douse Drive': 'Water', 'Shock Drive': 'Electric' };

var Z_CRYSTAL_TYPES = { 'Buginium Z': 'Bug', 'Darkinium Z': 'Dark', 'Dragonium Z': 'Dragon', 'Electrium Z': 'Electric',
	'Fairium Z': 'Fairy', 'Fightinium Z': 'Fighting', 'Firium Z': 'Fire', 'Flyinium Z': 'Flying', 'Ghostium Z': 'Ghost',
	'Grassium Z': 'Grass', 'Groundium Z': 'Ground', 'Icium Z': 'Ice', 'Normalium Z': 'Normal', 'Poisonium Z': 'Poison',
	'Psychium Z': 'Psychic', 'Rockium Z': 'Rock', 'Steelium Z': 'Steel', 'Waterium Z': 'Water' };

var Z_CRYSTAL_SPECIES = { 'Aloraichium Z': 'Alolan Raichu', 'Decidium Z': 'Decidueye', 'Eevium Z': 'Eevee',
	'Incinium Z': 'Incineroar', 'Kommonium Z': "Kommo-o", 'Lunalium Z': 'Lunala', 'Lycanium Z': 'Lycanroc',
	'Marshadium Z': 'Marshadow', 'Mewnium Z': 'Mew', 'Mimikium Z': 'Mimikyu', 'Pikanium Z': 'Pikachu',
	'Pikashunium Z': "Pikachu in a cap", 'Primarium Z': 'Primarina', 'Snorlium Z': 'Snorlax',
	'Solganium Z': 'Solgaleo', 'Tapunium Z': 'the Tapu guardians', 'Ultranecrozium Z': 'Necrozma' };

var MEGA_STONE_SPECIES = {
	Absolite: 'Absol', Abomasite: 'Abomasnow', Aerodactylite: 'Aerodactyl', Aggronite: 'Aggron',
	Alakazite: 'Alakazam', Altarianite: 'Altaria', Ampharosite: 'Ampharos', Audinite: 'Audino',
	Banettite: 'Banette', Beedrillite: 'Beedrill', Blastoisinite: 'Blastoise', Blazikenite: 'Blaziken',
	Cameruptite: 'Camerupt', 'Charizardite X': 'Charizard', 'Charizardite Y': 'Charizard',
	Crucibellite: 'Crucibelle', Diancite: 'Diancie', Galladite: 'Gallade', Garchompite: 'Garchomp',
	Gardevoirite: 'Gardevoir', Gengarite: 'Gengar', Glalitite: 'Glalie', Gyaradosite: 'Gyarados',
	Heracronite: 'Heracross', Houndoominite: 'Houndoom', Kangaskhanite: 'Kangaskhan', Latiasite: 'Latias',
	Latiosite: 'Latios', Lopunnite: 'Lopunny', Lucarionite: 'Lucario', Manectite: 'Manectric',
	Mawilite: 'Mawile', Medichamite: 'Medicham', Metagrossite: 'Metagross', 'Mewtwonite X': 'Mewtwo',
	'Mewtwonite Y': 'Mewtwo', Pidgeotite: 'Pidgeot', Pinsirite: 'Pinsir', Sablenite: 'Sableye',
	Salamencite: 'Salamence', Sceptilite: 'Sceptile', Scizorite: 'Scizor', Sharpedonite: 'Sharpedo',
	Slowbronite: 'Slowbro', Steelixite: 'Steelix', Swampertite: 'Swampert', Tyranitarite: 'Tyranitar',
	Venusaurite: 'Venusaur',
};

var POKE_BALLS = ['Poke Ball', 'Great Ball', 'Ultra Ball', 'Master Ball', 'Safari Ball', 'Level Ball',
	'Lure Ball', 'Moon Ball', 'Friend Ball', 'Love Ball', 'Heavy Ball', 'Fast Ball', 'Sport Ball',
	'Premier Ball', 'Repeat Ball', 'Timer Ball', 'Nest Ball', 'Net Ball', 'Dive Ball', 'Luxury Ball',
	'Heal Ball', 'Quick Ball', 'Dusk Ball', 'Cherish Ball', 'Park Ball', 'Dream Ball', 'Beast Ball',
	'Strange Ball'];

var EVOLUTION_STONES = ['Fire Stone', 'Water Stone', 'Thunder Stone', 'Leaf Stone', 'Moon Stone',
	'Sun Stone', 'Shiny Stone', 'Dusk Stone', 'Dawn Stone', 'Ice Stone'];

var FOSSILS = ['Helix Fossil', 'Dome Fossil', 'Old Amber', 'Root Fossil', 'Claw Fossil', 'Skull Fossil',
	'Armor Fossil', 'Cover Fossil', 'Plume Fossil', 'Jaw Fossil', 'Sail Fossil', 'Fossilized Bird',
	'Fossilized Dino', 'Fossilized Drake', 'Fossilized Fish'];

var SWEETS = ['Berry Sweet', 'Clover Sweet', 'Flower Sweet', 'Love Sweet', 'Ribbon Sweet', 'Star Sweet',
	'Strawberry Sweet'];

var CONFUSE_HEAL_BERRIES = { 'Aguav Berry': 'Sp. Def-disliking', 'Figy Berry': 'Attack-disliking',
	'Iapapa Berry': 'Sp. Atk-disliking', 'Mago Berry': 'Speed-disliking', 'Wiki Berry': 'Defense-disliking' };

var TYPE_RESIST_BERRIES = { 'Babiri Berry': 'Steel', 'Chilan Berry': 'Normal', 'Charti Berry': 'Rock',
	'Chople Berry': 'Fighting', 'Coba Berry': 'Flying', 'Colbur Berry': 'Dark', 'Haban Berry': 'Dragon',
	'Kasib Berry': 'Ghost', 'Kebia Berry': 'Poison', 'Occa Berry': 'Fire', 'Passho Berry': 'Water',
	'Payapa Berry': 'Psychic', 'Rindo Berry': 'Grass', 'Roseli Berry': 'Fairy', 'Shuca Berry': 'Ground',
	'Tanga Berry': 'Bug', 'Wacan Berry': 'Electric', 'Yache Berry': 'Ice' };

var STATUS_CURE_BERRIES = { 'Cheri Berry': 'paralysis', 'Chesto Berry': 'sleep', 'Pecha Berry': 'poison',
	'Rawst Berry': 'a burn', 'Aspear Berry': 'being frozen', 'Persim Berry': 'confusion',
	'PRZ Cure Berry': 'paralysis', 'PSN Cure Berry': 'poison', 'Bitter Berry': 'confusion',
	'Burnt Berry': 'being frozen', 'Ice Berry': 'a burn', 'Mint Berry': 'sleep' };

var STAT_PINCH_BERRIES = { 'Liechi Berry': 'Attack', 'Ganlon Berry': 'Defense', 'Salac Berry': 'Speed',
	'Petaya Berry': 'Sp. Atk', 'Apicot Berry': 'Sp. Def' };

var CONTACT_PUNISH_BERRIES = { 'Jaboca Berry': 'a physical', 'Rowap Berry': 'a special' };

var HIT_REACT_BERRIES = { 'Snowball': ['an Ice-type move', 'Attack'], 'Cell Battery': ['an Electric-type move', 'Attack'],
	'Absorb Bulb': ['a Water-type move', 'Sp. Atk'], 'Luminous Moss': ['a Water-type move', 'Sp. Def'],
	'Kee Berry': ['a physical move', 'Defense'], 'Maranga Berry': ['a special move', 'Sp. Def'] };

var NO_BATTLE_INGREDIENT_BERRIES = ['Razz Berry', 'Nanab Berry', 'Pinap Berry', 'Pomeg Berry',
	'Kelpsy Berry', 'Qualot Berry', 'Hondew Berry', 'Grepa Berry', 'Tamato Berry', 'Cornn Berry',
	'Magost Berry', 'Rabuta Berry', 'Nomel Berry', 'Spelon Berry', 'Pamtre Berry', 'Watmel Berry',
	'Durin Berry', 'Belue Berry'];

var ITEM_DESCRIPTIONS = {
	'Lum Berry': "Cures the holder of any non-volatile status condition or confusion the instant it's afflicted, then is consumed.",
	'Miracle Berry': "Cures the holder of any status condition or confusion the instant it's afflicted, then is consumed (Gen 2's version of Lum Berry).",
	'Mystery Berry': 'Restores 10 PP to a move that has run out, then is consumed (an early version of Leppa Berry).',
	'Leppa Berry': "Restores 10 PP to one of the holder's moves once its PP hits zero, then is consumed.",
	'Sitrus Berry': "Restores a quarter of the holder's max HP once its HP drops to half or below, then is consumed.",
	'Oran Berry': "Restores 10 HP once the holder's HP drops to half or below, then is consumed.",
	'Berry': "Restores a small amount of HP once the holder's HP drops low, then is consumed (Gen 2's version of Oran Berry).",
	'Gold Berry': "Restores 30 HP once the holder's HP drops low, then is consumed.",
	'Berry Juice': "Restores 20 HP once the holder's HP drops to half or below, then is consumed.",
	'Custap Berry': "Lets the holder move first in its priority bracket for one turn once its HP is critically low, then is consumed.",
	'Micle Berry': "Raises the accuracy of the holder's next move once its HP is critically low, then is consumed.",
	'Starf Berry': "Sharply raises a random stat once the holder's HP is critically low, then is consumed.",
	'Lansat Berry': "Sharply raises the holder's critical-hit ratio once its HP is critically low, then is consumed.",
	'Enigma Berry': 'Restores HP to the holder whenever it is hit by a super-effective move, then is consumed.',
	'Berserk Gene': "Sharply raises the holder's Attack but confuses it as soon as it switches in, then is consumed.",
	'Weakness Policy': "Sharply raises the holder's Attack and Sp. Atk when hit by a super-effective move, then is consumed.",
	'Metal Powder': "Boosts Ditto's Defense by 50% while it hasn't Transformed.",
	'Quick Powder': "Boosts Ditto's Speed by 100% while it hasn't Transformed.",
	'Thick Club': "Doubles Cubone's or Marowak's Attack stat.",
	'Light Ball': "Doubles Pikachu's Attack and Sp. Atk stats.",
	'Lucky Punch': "Sharply raises Chansey's critical-hit ratio.",
	'Leek': "Sharply raises Farfetch'd's critical-hit ratio.",
	'Stick': "Sharply raises Sirfetch'd's critical-hit ratio.",
	'Soul Dew': "Boosts the power of Latios's and Latias's Dragon- and Psychic-type moves.",
	'Deep Sea Tooth': "Doubles Clamperl's Sp. Atk stat.",
	'Deep Sea Scale': "Doubles Clamperl's Sp. Def stat.",
	'Choice Band': "Boosts the holder's Attack by 50% but locks it into using only the first move it selects.",
	'Choice Specs': "Boosts the holder's Sp. Atk by 50% but locks it into using only the first move it selects.",
	'Choice Scarf': "Boosts the holder's Speed by 50% but locks it into using only the first move it selects.",
	'Life Orb': "Boosts the power of the holder's attacks by 30%, but costs it 10% of its max HP on every hit that deals damage.",
	'Expert Belt': 'Boosts the power of the holder’s moves by 20% whenever they land a super-effective hit.',
	'Muscle Band': "Boosts the power of the holder's physical moves by 10%.",
	'Wise Glasses': "Boosts the power of the holder's special moves by 10%.",
	'Assault Vest': "Boosts the holder's Sp. Def by 50%, but prevents it from using status moves.",
	'Eviolite': "Boosts the Defense and Sp. Def of a Pokémon that isn't fully evolved by 50%.",
	'Leftovers': "Restores a small amount of HP (about 1/16 of its max) to the holder at the end of every turn.",
	'Black Sludge': "Restores HP each turn to a Poison-type holder, but instead damages any other type each turn.",
	'Sticky Barb': "Damages the holder each turn like a reversed Leftovers, and can latch onto an attacker that makes contact with it.",
	'Toxic Orb': "Badly poisons the holder at the end of the turn it's sent out.",
	'Flame Orb': "Burns the holder at the end of the turn it's sent out.",
	'Iron Ball': "Halves the holder's Speed and grounds it, letting Ground-type moves hit it even if it's normally immune.",
	'Lagging Tail': "Makes the holder move last among Pokémon with the same priority, regardless of Speed.",
	'Full Incense': "Makes the holder move last among Pokémon with the same priority, regardless of Speed.",
	'Macho Brace': "Doubles the Effort Values the holder earns from battles, but halves its Speed.",
	'Power Weight': "Doubles HP Effort Values earned in battle, but halves the holder's Speed.",
	'Power Bracer': "Doubles Attack Effort Values earned in battle, but halves the holder's Speed.",
	'Power Belt': "Doubles Defense Effort Values earned in battle, but halves the holder's Speed.",
	'Power Lens': "Doubles Sp. Atk Effort Values earned in battle, but halves the holder's Speed.",
	'Power Band': "Doubles Sp. Def Effort Values earned in battle, but halves the holder's Speed.",
	'Power Anklet': "Doubles Speed Effort Values earned in battle, but halves the holder's Speed.",
	'Destiny Knot': 'If the holder becomes infatuated, the Pokémon that caused it becomes infatuated as well.',
	'Mental Herb': 'Cures the holder of infatuation, Taunt, Encore, Torment, Heal Block, or Disable the moment it’s affected, then is consumed.',
	'White Herb': "Restores any of the holder's lowered stat stages back to normal once, then is consumed.",
	'Power Herb': "Lets the holder use a charge-up move (like Solar Beam) in a single turn instead of two, then is consumed.",
	'Quick Claw': "Gives the holder a random chance each turn to move first in its priority bracket, regardless of Speed.",
	"King's Rock": "Adds a chance for the holder's attacks that make contact to also make the target flinch.",
	'Razor Fang': "Adds a chance for the holder's attacks that make contact to also make the target flinch.",
	'Scope Lens': "Raises the holder's critical-hit ratio by one stage.",
	'Razor Claw': "Raises the holder's critical-hit ratio by one stage.",
	'Wide Lens': "Boosts the accuracy of the holder's moves by 10%.",
	'Zoom Lens': "Boosts the accuracy of the holder's moves by 20% if it moves after its target that turn.",
	'Bright Powder': "Lowers the accuracy of moves used against the holder by 10%.",
	'Focus Band': "Gives the holder a random chance to survive a hit that would otherwise knock it out, left with 1 HP.",
	'Focus Sash': "Lets the holder survive a hit that would knock it out from full HP, left with 1 HP, then is consumed.",
	'Shell Bell': "Restores HP to the holder equal to 1/8 of the damage it deals with an attack.",
	'Grip Claw': "Extends the duration of the holder's binding and trapping moves.",
	'Binding Band': "Increases the damage dealt each turn by the holder's binding and trapping moves.",
	'Ring Target': "Removes one of the holder's type immunities, letting a move that normally can't hit it do so.",
	'Float Stone': "Halves the holder's weight, affecting weight-based moves and effects.",
	'Protective Pads': "Protects the holder from the additional effects of moves that make contact with it (like Rocky Helmet or Static).",
	'Covert Cloak': "Prevents the holder from being affected by the secondary effects (flinch, stat drops, etc.) of moves used against it.",
	'Clear Amulet': "Prevents the holder's stats from being lowered by other Pokémon's moves or Abilities.",
	'Ability Shield': "Prevents the holder's Ability from being changed, suppressed, or ignored.",
	'Booster Energy': "Activates the holder's Protosynthesis or Quark Drive Ability once if the boosting weather or terrain isn't already active, then is consumed.",
	'Loaded Dice': "Makes the holder's multi-hit moves more likely to hit the maximum number of times.",
	'Punching Glove': "Boosts the power of the holder's punching moves by 10% and removes their contact property.",
	'Mirror Herb': "Copies the most recent stat boost gained by an opposing Pokémon onto the holder once, then is consumed.",
	'Room Service': "Lowers the holder's Speed by one stage once Trick Room takes effect, then is consumed.",
	'Adrenaline Orb': "Raises the holder's Speed by one stage if it's targeted by Intimidate, then is consumed.",
	'Blunder Policy': "Sharply raises the holder's Speed if one of its moves misses due to an accuracy check, then is consumed.",
	'Throat Spray': "Raises the holder's Sp. Atk by one stage whenever it uses a sound-based move.",
	'Terrain Extender': 'Extends the duration of the active terrain from 5 turns to 8.',
	'Heavy-Duty Boots': "Protects the holder from all entry hazard damage and effects when it switches in.",
	'Utility Umbrella': "Negates the effects of Sun and Rain on the holder, without blocking their other battle-wide effects.",
	'Safety Goggles': "Protects the holder from weather damage (sandstorm/hail) and from powder-based moves.",
	'Eject Button': "Switches the holder out for another party member immediately after it's hit by an attack, then is consumed.",
	'Eject Pack': "Switches the holder out for another party member immediately after any of its stats is lowered, then is consumed.",
	'Red Card': "Forces the attacker that hits the holder to switch out for another party member, then is consumed.",
	'Air Balloon': "Grants the holder immunity to Ground-type moves until it's hit by any attack, then is consumed (popped).",
	'Rocky Helmet': "Damages any attacker that hits the holder with a contact move for 1/6 of that attacker's max HP.",
	'Big Root': "Increases the HP the holder recovers from HP-draining moves and Abilities.",
	'Shed Shell': "Lets the holder switch out of battle even when it would normally be trapped.",
	'Light Clay': "Extends the duration of Reflect, Light Screen, and Aurora Veil set by the holder to 8 turns.",
	'Damp Rock': "Extends the duration of Rain Dance to 8 turns when set by the holder.",
	'Heat Rock': "Extends the duration of Sunny Day to 8 turns when set by the holder.",
	'Icy Rock': "Extends the duration of Hail or Snow to 8 turns when set by the holder.",
	'Smooth Rock': "Extends the duration of Sandstorm to 8 turns when set by the holder.",
	'Adamant Orb': "Boosts the power of Dialga's Dragon- and Steel-type moves.",
	'Lustrous Orb': "Boosts the power of Palkia's Dragon- and Water-type moves.",
	'Griseous Orb': "Boosts the power of Giratina's Dragon- and Ghost-type moves and lets it take its Origin Forme.",
	'Adamant Crystal': "Boosts the power of Dialga's Dragon- and Steel-type moves and lets it take its Origin Forme.",
	'Lustrous Globe': "Boosts the power of Palkia's Dragon- and Water-type moves and lets it take its Origin Forme.",
	'Griseous Core': "Boosts the power of Giratina's Dragon- and Ghost-type moves and lets it take its Origin Forme.",
	'Rusted Sword': "Lets Zacian transform into its Crowned Sword form, changing its typing and stats.",
	'Rusted Shield': "Lets Zamazenta transform into its Crowned Shield form, changing its typing and stats.",
	'Metronome': "Boosts the power of a move by 20% for each consecutive turn it's used in a row, up to +100%, resetting if a different move is used.",
	'Prism Scale': 'Has no effect in battle; makes Feebas evolve into Milotic when leveled up while holding it.',
	'Reaper Cloth': 'Has no effect in battle; makes Shuppet evolve into Banette when leveled up while holding it.',
	'Protector': 'Has no effect in battle; makes Rhydon evolve into Rhyperior when leveled up while holding it.',
	'Electirizer': 'Has no effect in battle; makes Electabuzz evolve into Electivire when leveled up while holding it.',
	'Magmarizer': 'Has no effect in battle; makes Magmar evolve into Magmortar when leveled up while holding it.',
	'Dubious Disc': 'Has no effect in battle; makes Porygon2 evolve into Porygon-Z when leveled up while holding it.',
	'Up-Grade': 'Has no effect in battle; makes Porygon evolve into Porygon2 when leveled up while holding it.',
	'Whipped Dream': 'Has no effect in battle; makes Swirlix evolve into Slurpuff when leveled up while holding it.',
	'Sachet': 'Has no effect in battle; makes Spritzee evolve into Aromatisse when leveled up while holding it.',
	'Galarica Cuff': "Has no effect in battle; used to evolve Galarian Slowpoke into Galarian Slowbro.",
	'Galarica Wreath': "Has no effect in battle; used to evolve Galarian Slowpoke into Galarian Slowking.",
	'Oval Stone': 'Has no effect in battle; makes Happiny evolve into Chansey when leveled up during the day while holding it.',
	'Rare Bone': 'Has no effect in battle or on evolution; it just sells for a lot of money.',
	'Bottle Cap': 'Has no effect in battle; used outside of battle to Hyper Train a stat to its maximum IV.',
	'Gold Bottle Cap': 'Has no effect in battle; used outside of battle to Hyper Train every stat to its maximum IV.',
	'Chipped Pot': 'Has no effect in battle; required for an authentic Sinistea to evolve into Polteageist.',
	'Cracked Pot': 'Has no effect in battle; required for an authentic Polteageist to reach its final form.',
	'Auspicious Armor': 'Has no effect in battle; makes Charcadet evolve into Armarouge when used.',
	'Malicious Armor': 'Has no effect in battle; makes Charcadet evolve into Ceruledge when used.',
	'Mail': "Has no effect in battle; it's a message-holding item that can be attached to a Pokémon and traded.",
	Berry: "Restores a small amount of HP once the holder's HP drops low, then is consumed (Gen 2's version of Oran Berry).",
};

function describeCategory(name) {
	if (TYPE_BOOST_ITEMS[name]) {
		return 'Boosts the power of the holder’s ' + TYPE_BOOST_ITEMS[name] + '-type moves by 20%.';
	}
	if (PLATE_ITEMS[name]) {
		var t = PLATE_ITEMS[name];
		return 'Boosts the power of the holder’s ' + t + '-type moves by 20%, and changes Arceus into its ' + t + '-type form.';
	}
	if (name.indexOf(' Gem') === name.length - 4) {
		var gemType = name.slice(0, -4);
		if (GEM_ITEMS.indexOf(gemType) !== -1) {
			return 'Boosts the power of the holder’s first ' + gemType + '-type move that turn by 30%, then is consumed.';
		}
	}
	if (name.indexOf(' Memory') === name.length - 7) {
		var memType = name.slice(0, -7);
		if (MEMORY_ITEMS.indexOf(memType) !== -1) {
			return 'Changes Silvally’s type (and its Multi-Attack) to ' + memType + '.';
		}
	}
	if (DRIVE_ITEMS[name]) {
		return "Changes Genesect's Techno Blast to " + DRIVE_ITEMS[name] + '-type.';
	}
	if (Z_CRYSTAL_TYPES[name]) {
		return 'Lets the holder use a ' + Z_CRYSTAL_TYPES[name] + '-type Z-Move once per battle if it knows a matching move.';
	}
	if (Z_CRYSTAL_SPECIES[name]) {
		return "Lets " + Z_CRYSTAL_SPECIES[name] + ' use its exclusive Z-Move once per battle.';
	}
	if (MEGA_STONE_SPECIES[name]) {
		return "Lets " + MEGA_STONE_SPECIES[name] + ' Mega Evolve while holding it in battle.';
	}
	if (POKE_BALLS.indexOf(name) !== -1) {
		return 'Has no effect in battle; used only to catch wild Pokémon outside of battle.';
	}
	if (EVOLUTION_STONES.indexOf(name) !== -1) {
		return 'Has no effect in battle; used outside of battle to evolve certain Pokémon.';
	}
	if (FOSSILS.indexOf(name) !== -1) {
		return 'Has no effect in battle; used to revive an ancient fossil Pokémon.';
	}
	if (SWEETS.indexOf(name) !== -1) {
		return "Has no effect in battle; determines Milcery's form when it evolves into Alcremie.";
	}
	if (/^TR\d\d$/.test(name)) {
		return 'Has no effect in battle; used once outside of battle to teach its move to a compatible Pokémon.';
	}
	if (CONFUSE_HEAL_BERRIES[name]) {
		return "Restores a third of the holder's max HP (two-thirds with the Ripen Ability) once its HP drops to a quarter or below, but confuses the holder if it dislikes " +
			CONFUSE_HEAL_BERRIES[name].split('-')[0] + '-flavored food, then is consumed.';
	}
	if (TYPE_RESIST_BERRIES[name]) {
		return 'Halves the damage from a ' + TYPE_RESIST_BERRIES[name] + '-type move used against the holder, then is consumed.';
	}
	if (STATUS_CURE_BERRIES[name]) {
		return 'Cures the holder of ' + STATUS_CURE_BERRIES[name] + ' the instant it happens, then is consumed.';
	}
	if (STAT_PINCH_BERRIES[name]) {
		return "Raises the holder's " + STAT_PINCH_BERRIES[name] + ' by one stage once its HP drops low, then is consumed.';
	}
	if (CONTACT_PUNISH_BERRIES[name]) {
		return "Damages an attacker that hits the holder with " + CONTACT_PUNISH_BERRIES[name] +
			" move for 1/8 of its max HP, once the holder's HP is low, then is consumed.";
	}
	if (HIT_REACT_BERRIES[name]) {
		var pair = HIT_REACT_BERRIES[name];
		return "Raises the holder's " + pair[1] + ' by one stage when hit by ' + pair[0] + ', then is consumed.';
	}
	if (NO_BATTLE_INGREDIENT_BERRIES.indexOf(name) !== -1) {
		return 'Has no held battle effect; mainly used as a Natural Gift ingredient or for cooking.';
	}
	return null;
}

/*
 * Effects that genuinely worked differently in Generation VIII (Sword/Shield era)
 * than they do in the most recent generation. Deliberately small: the "modern"
 * item formulas have been stable since roughly Gen 4-6, so very few items that
 * exist in both Gen 8 and the current generation actually changed in between.
 * Add entries here as specific Gen 8 differences are confirmed.
 */
var GEN8_ITEM_OVERRIDES = {
};

// Confirmed via Bulbapedia: the Gen 3-6 pinch-heal/confuse berries (Aguav, Figy,
// Iapapa, Mago, Wiki) restore 1/8 max HP in Gen 3-6 and 1/2 max HP in Gen 7, but
// from Gen 8 onward restore 1/3 max HP (2/3 with the Ripen Ability) instead.
for (var confuseHealBerryName in CONFUSE_HEAL_BERRIES) {
	if (Object.prototype.hasOwnProperty.call(CONFUSE_HEAL_BERRIES, confuseHealBerryName)) {
		GEN8_ITEM_OVERRIDES[confuseHealBerryName] = "Restores a third of the holder's max HP (two-thirds with the Ripen Ability) once its HP drops to a quarter or below, but confuses the holder if it dislikes " +
			CONFUSE_HEAL_BERRIES[confuseHealBerryName].split('-')[0] + '-flavored food, then is consumed.';
	}
}

function baseItemDescription(name) {
	if (Object.prototype.hasOwnProperty.call(ITEM_DESCRIPTIONS, name)) {
		return ITEM_DESCRIPTIONS[name];
	}
	return describeCategory(name);
}

function getItemDescription(name, gen) {
	if (!name) return null;
	if (gen === 8) {
		if (Object.prototype.hasOwnProperty.call(GEN8_ITEM_OVERRIDES, name)) {
			return GEN8_ITEM_OVERRIDES[name];
		}
		var description = baseItemDescription(name);
		if (!description) return null;
		return description + ' (most recent generation effect)';
	}
	return baseItemDescription(name);
}

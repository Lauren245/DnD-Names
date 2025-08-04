export const firstNames = {
 human: ["Alric", "Bran", "Cassia", "Dorian", "Elara", "Garrick", "Helena", "Marcus", "Pickle", "Tobias", "Snork", "Bubbles"],

 elf: ["Aeris", "Caelion", "Elaria", "Faelar", "Ilyana", "Luthien", "Mythas", "Sylvar", "Twinkletoes", "Vaelis", "Glitterdew", "Moonbean"],

 tiefling: ["Azazel", "Balthora", "Cazamir", "Delmira", "Erevan", "Kaelis", "Lilura", "Malrik", "Snickerdoom", "Zareth", "Fizzburn", "Skreech"],

 githyanki: ["Vlakith", "Zaarth", "Kith'rak", "Thraak", "Yrrvek", "Xarzith", "Drenn", "Sarthaal", "Snagblat", "Grizzlevek", "Wobthrakk", "Plibnib"],

 halfOrc: ["Goruk", "Thokk", "Vorga", "Dreg", "Mogra", "Brug", "Hruk", "Zagga", "Snort", "Grumpo", "Bashley", "Meatloaf"],
 
 gnome: ["Fizzwick", "Boddle", "Nimble", "Pipkin", "Tinket", "Wizzle", "Blinky", "Gadget", "Snickerdoodle", "Fuzzle", "Wobblepop", "Ticklefoot"],

 halfling: ["Pippin", "Milo", "Rosie", "Samwise", "Lily", "Tuck", "Bungo", "Doddle", "Nibble", "Twinkle", "Frodo", "Jollybean"],

};

export const lastNames = {
 fighter: ["Ironfist", "Stonebreaker", "Shieldheart", "Battleborn", "Steelgrip", "Hammerfell", "Blazeforge", "Grimstrike", "Meatshield", "Punchsworth", "Clankbottom", "Thudson"],

 rogue: ["Shadowstep", "Nightrunner", "Lockwhisper", "Silversneak", "Darkveil", "Quickhands", "Shadecloak", "Whisperthorn", "Pickpocketson", "Sneakybeans", "Flipdagger", "Skitterfoot"],

 warlock: ["Doomwhisper", "Gravebind", "Voidcaller", "Hexborn", "Nightchant", "Soulmark", "Curseblood", "Ebonflare", "Wigglescourge", "Snarlwand", "Gloombottom", "Dreadpickle"],
 
 cleric: ["Lightbearer", "Dawnsoul", "Blessingvale", "Sunmantle", "Faithward", "Holystrike", "Gracelumen", "Sanctibright", "Praywell", "Halohead", "Smitehug", "Beneduck"],

 bard: ["Songweaver", "Silverstrings", "Lyricfall", "Harpsong", "Fiddlestick", "Chimewind", "Whistledown", "Balladheart", "Jinglesnap", "Tunetwister", "Mirthquake", "Plucknslide"],

 wizard: ["Spellward", "Nightshade", "Starfire", "Mooncloak", "Frostbane", "Grimward", "Runebinder", "Shadowcrest", "Blinkwhisper", "Fizzlebang", "Wandtwirl", "Hexsprocket"],

 barbarian: ["Ironhide", "Stormbreaker", "Bloodaxe", "Rageborn", "Skullcrusher", "Thunderfury", "Grimjaw", "Stonefist", "Bashgut", "Ogrebiter", "Rumblebelly", "Furywhisker"],


};

export const generateName  = (race, classType) => {
    //first save the arrays of names for the specified race and class type into a variable and then include a string literal as a fallback option
    let first = firstNames[race] || ["NameLess"];
    let last = lastNames[classType] || ["Nobody"];

     console.log("first.length = ", first.length);
    console.log("last.length = ", last.length);

    //then randomly select one of them
    let firstName = first[Math.floor(Math.random() * first.length)];
    let lastName = last[Math.floor(Math.random() * last.length)];
   
    return `${firstName} ${lastName}`;
}
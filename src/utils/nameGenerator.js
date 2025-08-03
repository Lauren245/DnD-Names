const firstNames = {
 human: ["Alric", "Bran", "Cassia", "Dorian", "Elara", "Garrick", "Helena", "Marcus", "Pickle", "Tobias", "Snork", "Bubbles"],

 elf: ["Aeris", "Caelion", "Elaria", "Faelar", "Ilyana", "Luthien", "Mythas", "Sylvar", "Twinkletoes", "Vaelis", "Glitterdew", "Moonbean"],

 tiefling: ["Azazel", "Balthora", "Cazamir", "Delmira", "Erevan", "Kaelis", "Lilura", "Malrik", "Snickerdoom", "Zareth", "Fizzburn", "Skreech"],
};

const lastNames = {
 fighter: ["Ironfist", "Stonebreaker", "Shieldheart", "Battleborn", "Steelgrip", "Hammerfell", "Blazeforge", "Grimstrike", "Meatshield", "Punchsworth", "Clankbottom", "Thudson"],

 rogue: ["Shadowstep", "Nightrunner", "Lockwhisper", "Silversneak", "Darkveil", "Quickhands", "Shadecloak", "Whisperthorn", "Pickpocketson", "Sneakybeans", "Flipdagger", "Skitterfoot"],

 warlock: ["Doomwhisper", "Gravebind", "Voidcaller", "Hexborn", "Nightchant", "Soulmark", "Curseblood", "Ebonflare", "Wigglescourge", "Snarlwand", "Gloombottom", "Dreadpickle"],
}

export const generateName  = (race, classType) => {
    //first save the arrays of names for the specified race and class type into a variable and then include a string literal as a fallback option
    let first = firstNames[race] || ["NameLess"];
    let last = lastNames[classType] || ["Nobody"];
    //then randomly select one of them
    let firstName = first[Math.floor(Math.random * first.length)];
    let lastName = last[Math.floor(Math.random * last.length)];
    return `${firstName} ${lastName}`;
}
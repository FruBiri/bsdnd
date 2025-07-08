
const firstNames = [
  ["Arlo", "Annie"], ["Hannibal", "Helvetica"], ["Louie", "Lorentia"], ["Kaylo", "Kyla"],
  ["Lonnie", "Lynn"], ["Boonie", "Belle"], ["Gurzam", "Gorlene"], ["Flip", "Filomena"],
  ["Vordo", "Vesta"], ["Markil", "Marta"], ["Keenwit", "Kora"], ["Silvan", "Sella"],
  ["Jasper", "Juniper"], ["Aldus", "Alana"], ["Hawk", "Hestia"], ["Kitt", "Katt"],
  ["Tom", "Tera"], ["Bognose", "Brula"], ["Oldo", "Oliviette"], ["Huzmar", "Halune"],
  ["Dusty", "Dagmar"], ["Soren", "Solasta"], ["Mundin", "Moonie"], ["Conrad", "Cassidy"],
  ["Florian", "Felicia"], ["Elroy", "Eliza"], ["Willard", "Willomena"], ["Boffin", "Braila"],
  ["Norris", "Nephree"], ["Angelo", "Aquila"], ["Ira", "Isabi"], ["Rylan", "Renetta"],
  ["Axel", "Amortia"], ["Poz", "Pearline"], ["Xoran", "Xera"], ["Duncel", "Dazel"],
  ["Quentin", "Queenie"], ["Boggis", "Brynwith"], ["Yorvin", "Yanna"], ["Rorick", "Rosie"]
];

const surnames = [
  "Crane", "Topps", "Rust", "Angus", "Khan", "Two-Basin", "Muntz", "Korgarten", "Hale", "Copperbottom",
  "Sinellin", "Canto", "Westgale", "Bullbrook", "Deens", "Oakenheart", "Kestrin", "Lurleaf", "Elverin", "Springstep",
  "Pepperdeen", "Winstead", "Harstop", "Everstill", "Bunce", "Nightbird", "Tippet", "Babcock", "Pond", "Saltstaff",
  "Dastrio", "Erstwhile", "Kelriss", "Samosa", "Gaul", "Starr", "Dickers", "Vidini", "Tarny", "Zabor"
];

const races = ["Elf", "Human", "Halfling", "Birdfolk", "Half-Orc", "Goblin"];

const traits = [
  "Haggard", "Plain", "Filthy", "Wine-Stained", "Flirty", "Flamboyant", "Scrawny", "Towering", "Wrinkled", "Suspicious",
  "Unkempt", "Perfumed", "Hot-Headed", "Chiseled", "Sultry", "Serene", "Hums", "Cryptic", "Weird Laugh", "Monotone",
  "Humorless", "Princely", "Scarred", "Jolly", "Rude", "Big Ol' Hat", "Bearded", "Near-Deaf", "Frightened", "Inquisitive",
  "Excitable", "Swaggering", "Tiny", "Young", "Motherly", "Lazy", "Drawl", "Interrupts", "Trails Off", "Mumbles"
];

const professions = [
  "Vagabond", "Hunter", "Merchant", "Sailor", "Farmer", "Urchin", "Trapper", "Scout", "Tailor", "Courtier",
  "Miner", "Burglar", "Carpenter", "Innkeeper", "Fisherman", "Poacher", "Shepherd", "Hermit", "Smuggler", "Graverobber",
  "Actor", "Sellsword", "Archaeologist", "Horse Trainer", "Cultist", "Physician", "Cutpurse", "Assassin", "Gambler", "Painter",
  "Adventurer", "Minstrel", "Servant", "Fortune Teller", "Monster Slayer", "Cook", "Investigator", "Knight", "Spy", "Noble"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateNpc() {
  const namePair = getRandomItem(firstNames);
  const firstName = namePair[Math.floor(Math.random() * 2)];
  const surname = getRandomItem(surnames);
  const race = getRandomItem(races);
  const trait = getRandomItem(traits);
  const profession = getRandomItem(professions);

  const result = `${firstName} ${surname} — a ${trait} ${race} ${profession}`;
  document.getElementById("npcResult").textContent = result;
}

document.getElementById("generateNpc").addEventListener("click", generateNpc);

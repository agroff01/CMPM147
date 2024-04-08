const fillers = {
  num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
  
  intro: ["Introducing,", "Presenting,", "Behold,", "May I suggest...", "Perhaps...", "People would love"],
  quest: ["Parade", "Adventure", "Quest", "Legend", "Guitar", "Tribute", "Sound", "Hero", "Minimum Wage Worker", "Student", "Gamer", "Incel", "$quest2","$quest2","$quest2","$quest2"],
  quest2: ["The Boardwalk", "The Marine", "Sound", "Pumpkins", "Legend", "Destiny", "Remixes", "Dispair", "Love", "Bears", "Oceans", "Chores", "$quest","$quest","$quest"],
  gameAdj: ["intense", "dramatic", "terrible", "tedious", "gripping", "narrative driven", "outright disappointing", "New York Times Best Seller", "colorfull", "life-changing", "powerful", "mid", "satisfying", "FLAWLESS"],
  gameType: ["$gameType $gameType", "$gameType $gameType", "RPG", "adventure", "text-based-adventure", "FPS", "puzzle", "simpulator", "simulator", "RTS", "MOBA", "TPS", "Sandbox"],
  platform: ["Xbox One", "Xbox Series X", "Xbox Series S", "PS4", "PS5", "PS9", "PSP", "Xbox Kinect", "Quest", "Steam", "Steam VR", "Epic Games Store", "$platform, $platform, and $platform", "$platform and $platform", "$platform but NOT $platform"],
  charName: ["Wumpus", "Greg", "Adam", "Selene", "Jack", "Mickey Mouse", "Jill", "Johnny", "Jimmy", "Johnson", "Wes", "Homer", "Marge", "Snoopy", "Grass", "Buttlet", "Scramp"],
  goal: ["the [insert generic macguffin here]", "the gem of whaeva", "love", "a good meal", "the legendary muffin", "$num riches", "The Staff of Truth", "The Shadowcloak", "The Time Chamber", "the nearest IHOP"],
  storyEvent: ["strange portals", "sunken ships", "deals with devils", "ruined cities", "a guy named steve", "loot", "boring people", "pesky bugs", "romance", "an old wise man", "prophecies", "world shattering flamingos", "taxes", "Mark Zuckerberg", "a few candles", "magical artifacts", "epic rap battles", "the personification of boredom", "car salesmen", "4 of the 7 dwarves", "a Toyota Tacoma"],
  end: ["This is sure to win Game Of The Year!", "\n\nThis... this isn't my finest work...", "How does that sound?", "Cool right!?", "This is the one!", "It's the perfect AAAA title.", "Sounds like fun to me!", "There's nothing else like it!"],
};

const template = `Here's an idea! $intro

-----
The $quest of $quest2!

In this $gameAdj $gameType game for the $platform, you get to play as $charName in search of $goal. Over your travels you will encounter $storyEvent, $storyEvent, and even $storyEvent. Will $charName succeed?? Give us your money and find out!
-----

How about that? $end
`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;
var characterName = null;

function replacer(match, name) { 
  //Use the same main charactrer name if we already found one
  if (characterName != null && name == "charName") return characterName;
  
  let options = fillers[name];
  if (options) {
    var result = options[Math.floor(Math.random() * options.length)];
    if (name == "charName") characterName = result;
    return result;
  } else {
    return `<UNKNOWN:${name}>`;
  }
}

function generate() {
  let story = template;
  characterName = null;
  while (story.match(slotPattern)) {
    story = story.replace(slotPattern, replacer);
  }

  /* global box */
  $("#box").text(story);
}

/* global clicker */
$("#clicker").click(generate);

generate();

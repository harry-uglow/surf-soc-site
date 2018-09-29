export const events = [
  {
    __typename: 'Event',
    id: "freshFair18",
    title: "Freshers Fair",
    description: "Come and meet the new committee and find out what's in store" +
    " from Surf Soc this year. Plus, a chance to win a free Freshers Trip ticket!!" +
    " (Probably a lie)",
    date: "2nd October",
    where: "Queen's Lawn",
  },
  {
    __typename: 'Event',
    id: "off18",
    title: "Ocean Film Festival",
    description: "Featuring films such as X, Y and Z, the Ocean Film Festival is always " +
    "a nice and chilled out evening in the midst of the hectic start to the year.",
    date: "12th October",
    where: "Union Chapel, Islington",
  },
  {
    __typename: 'Event',
    id: "firstCSP18",
    title: "Sports Night",
    description: "It's the first sports night of the year, and that means the first surf party! " +
    "This one's always mental so join us for pre-drinks from 7:30 before we head to the union to " +
    "get waaaveeeyyyy!",
    date: "3rd October",
    where: "Metric, 568 & Union bar"
  },
  {
    __typename: 'Event',
    id: "VGBs18",
    title: "Vengaboys in Metric!",
    description: "Just kidding, this one is very much a placeholder (they all are really). But " +
    "wouldn't that be great, we can dream ok!",
    date: "TBA",
    where: "Metric"
  }
];

let text = "";
for (let i = 0; i < 100; i++) {
  text += "We went surfing and it was fun. "
}

export const trips = [
  {
    __typename: 'Trip',
    id: "moliets18",
    title: "Moliets 2018",
    date: "1st - 7th July",
    video: true,
    text
  },
  {
    __typename: 'Trip',
    id: "portugal18",
    title: "Portugal 2018",
    date: "24th - 31st March",
    video: false,
    text
  }
];

export const committee = [
  {
    __typename: 'Committee',
    name: "Harry",
    position: "President",
    degree: "Computing",
    description: "I’m a fully qualified wizard, a pineapple connoisseur " +
    "and a firm believer that it is NOT possible to grow boneless chickens. " +
    "You’ll most commonly find me being an utter moron in the student union, " +
    "Newquay or sometimes even further afield. Not the best surfer by " +
    "any measure (which is a bit of a recurring trend in these committee profiles), " +
    "but in spite of my hungover cries that “we’ve all " +
    "been surfing before”, I think all these trips might actually be " +
    "starting to pay off. Looking forward to another great year.",
  },
  {
    __typename: 'Committee',
    name: "Josh",
    position: "Vice President",
    degree: "Materials",
    description: "I’m going to get this out early: I lived " +
    "in Newquay for 8 months. I mention it from time to time, and it’s where I " +
    "fell in love with surfing. Come rain or shine (invariably rain) I’ll always " +
    "be wet-suited and booted ready to get down to the beach and catch some party " +
    "waves. I’m by no means the best surfer however I do know flip-flops are always an " +
    "appropriate footwear choice. I am blessed with the ability to recall " +
    "song lyrics, and cursed with a terrible singing voice, as a compromise " +
    "I promise to always bring speakers. I look forward to sharing a hell of a year " +
    "ahead, and can’t wait to get in the water \u{1F919}",
  },
  {
    __typename: 'Committee',
    name: "Martina",
    position: "Treasurer",
    degree: "Biochemistry",
    description: "Hi there, as some of you may know, I'm the little spanish gremlin! " +
    "Basically a little entity with loads of energy, a bit of a funny accent and " +
    "loads of love for surfsoc. If you wish to find me, go where the waves are " +
    "shreeeeding or where the beers are rolling.",
  },
  {
    __typename: 'Committee',
    name: "Ellie",
    position: "Tour Secretary",
    degree: "Chemistry",
    description: "Skills: fancy dress, telling people how great surfing is, " +
    "using the biggest surfboard I can find, unironic bad dancing, " +
    "telling people how great pole dancing is, " +
    "staying motivated whilst hungover, resident Loud Voice.\n" +
    "Not Skills: surfing, speaking quietly, remaining in a sensible location on " +
    "nights out, remaining calm around sharks, catching waves with a hangover, " +
    "being unafraid of sharks, drinking heavily, sharks.\n" +
    "If you need me, follow the sound of my voice. I'm " +
    "pumped for my 5th year in SurfSoc, so trust me, you won't regret joining. Also " +
    "there aren't actually any sharks.",
  },
  {
    __typename: 'Committee',
    name: "Arran",
    position: "Social Secretary",
    degree: "Biology",
    description: "If you ever need me, look no further than the poor lad " +
    "flailing around with a foamy in the breakers. However, what I lack in" +
    "surfing prowess I try to make up for in my award-winningly “unique” dance " +
    "moves and, some would say painfully, bad jokes. Looking forward to " +
    "another year trying to convince bemused freshers that Stella Artois " +
    "tastes like Baked Beans. Peace out.",
  },
  {
    __typename: 'Committee',
    name: "Dex",
    position: "Liability",
    degree: "Chemistry",
    description: "If you’re looking for a guy who drinks too much, gets very " +
    "messy, and cant really surf, then I’m your man. I’m looking forward to " +
    "the new wave of Freshers, and know we will all have a gnarly time. I’ve " +
    "had my highs and I’ve had my lows. With my proudest moment being when I " +
    "did a 360 on my board in Morocco (kinda), to my messiest moment of being " +
    "in my underwear on a Cornish dance floor, I am looking forward to another " +
    "year of shenanigans.",
  },
  {
    __typename: 'Committee',
    name: "Abi",
    position: "Secretary",
    degree: "Physics",
    description: "I joined IC surf soc 2 years ago but then went on a year abroad " +
    "and now won’t stop mentioning the year abroad. Did I mention I did a year " +
    "abroad? Dos cervezas por favor xx I still absolutely love the ocean and " +
    "surfing and everything about surf soc despite essentially being a glorified " +
    "beginner (foamies 5eva). Very excited for the year ahead and to reclaim my " +
    "title of Mosquito Muerta.",
  },
  {
    __typename: 'Committee',
    name: "James",
    position: "Secretary",
    degree: "Air-bro-nautics",
    description: "Although only starting surfing just a year ago on a holiday " +
    "with friends, I’m totally hooked. From splashing around aimlessly in the " +
    "white water on the fresher’s trip to catching my first greenies in Portugal, " +
    "last year was awesome! Can’t wait to do it all over again and enjoy one too " +
    "many pints in Newquay’s Chy Bar as the lightweight that I am.",
  }
];


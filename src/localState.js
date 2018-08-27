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
    description: "I’m a fully qualified wizard, an eclectic pineapple connoisseur " +
    "and a firm believer that it is NOT possible to grow boneless chickens. " +
    "You’ll most commonly find me being an utter moron in the student union, " +
    "Newquay or sometimes even further afield. Not the best surfer by " +
    "any measure, but in spite of my hungover cries that “we’ve all " +
    "been surfing before”, I think all these trips might actually be " +
    "starting to pay off. Looking forward to another great year.",
  },
  {
    __typename: 'Committee',
    name: "Josh",
    position: "Vice President",
    degree: "Ask",
    description: "",
  },
  {
    __typename: 'Committee',
    name: "Martina",
    position: "Treasurer",
    degree: "Biochemistry?",
    description: "",
  },
  {
    __typename: 'Committee',
    name: "Ellie",
    position: "Tour Secretary",
    degree: "Chemistry",
    description: "",
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
    description: "",
  },
  {
    __typename: 'Committee',
    name: "Abi",
    position: "Secretary",
    degree: "Ask",
    description: "",
  },
  {
    __typename: 'Committee',
    name: "James",
    position: "Secretary",
    degree: "Air-bro-nautics",
    description: "",
  }
];


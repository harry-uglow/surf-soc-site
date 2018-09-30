import harry from "./images/harry.jpg";
import abi from "./images/abi.jpg";
import arran from "./images/arran.jpg";
import dex from "./images/dex.jpg";
import james from "./images/james.jpg";
import josh from "./images/josh.jpg";
import ellie from "./images/ellie.jpg";
import martina from "./images/martina.jpg";
import wetherspoons from "./images/wetherspoons.jpg";
import stSebMain from "./images/stsebmain.jpg";
import stSebCannon from "./images/stsebcannon.jpg";
import filipHammock from "./images/filiphammock.jpg";
import bang from "./images/bang.jpg";
import jamesCalc from "./images/jamescalc.jpg";
import jamesChair from "./images/jameschair.jpg";
import hattieBite from "./images/hattiebite.jpg";
import flunkyball from "./images/flunkyball.jpg";
import kyle from "./images/kyle.jpg";
import wholesome from "./images/wholesome.jpg";
import fresh from "./images/fresh.jpg";
import off17 from "./images/off17.jpeg";
import sportsnight from "./images/sportsnight.jpg";
import bowling from "./images/bowling.jpg";
import curry from "./images/curry.jpg";
import pancakes from "./images/pancakes.jpg";
import acc from "./images/acc.jpg";
import baleal from "./images/baleal.jpg";
import estella from "./images/estella.jpg";
import joashred from "./images/joashred.jpg";
import supercafe from "./images/supercafe.jpg";
import cliffGroup from "./images/cliff_group.jpg";
import dipsy from "./images/dipsy.jpg";



export const events = [
  {
    __typename: 'Event',
    id: "freshFair18",
    title: "Freshers Fair",
    description: ["Come and meet the new committee and find out what's in store" +
    " from Surf Soc this year. You can find us in the middle of Queen's Lawn, just " +
    "look for the gazebo, surfboards and nutters in wetsuits."],
    date: "2nd October",
    where: "Queen's Lawn",
    img: fresh,
  },
  {
    __typename: 'Event',
    id: "firstCSP18",
    title: "Sports Night",
    description: ["It's the first sports night of the year, and that means the first surf party! " +
    "This one's always mental so join us for pre-drinks from 7:30 before we head to the union to " +
    "get waaaveeeyyyy!"],
    date: "3rd October",
    where: "Metric, 568 & Union bar",
    img: sportsnight,
  },
  {
    __typename: 'Event',
    id: "off18",
    title: "Ocean Film Festival",
    description: ["Featuring short films such as The Big Wave Project, BLUE and Adventure is Calling, the Ocean Film Festival is always " +
    "a great chilled out evening in the midst of the hectic start to the year. Buy tickets at ",
    "https://www.oceanfilmfestival.co.uk"],
    date: "12th October",
    where: "Union Chapel, Islington",
    img: off17,
  },
];

export const pastEvents = [
  {
    __typename: 'Event',
    id: "acc18",
    title: "ACC Bar Nights",
    description: ["To those not in the loop, ACC nights are sports nights with a certain " +
    "\"je ne sais quoi\". Well actually we do know what, it's the inclusion of " +
    "four drinks tokens with all our tickets. Surfsoc always makes a strong showing at ACC, " +
    "arriving after our solid pre-drinks events in quality fancy dress (usually poor quality)."],
    img: acc,
  },
  {
    __typename: 'Event',
    id: "pancakes18",
    title: "Pancake Day",
    description: ["In February, after a crazy (and freezing) trip to Wales at the weekend, " +
    "we were in need of a nice, calm, warm evening. Thankfully, Pancake Day gave us " +
    "the perfect excuse to cram 15 of us into Harry's kitchen where we made far too many " +
    "pancakes, some of which were even edible."],
    img: pancakes
  },
  {
    __typename: 'Event',
    id: "curry18",
    title: "BYOB Curry",
    description: ["January saw a group of 20 surf soc legends journey to the birthplace " +
    "of Indian food, Brick Lane. There we enjoyed the classic uni combo of starters, a main " +
    "and rice or naan for just £10, accompanied by our bevs of choice. Once our " +
    "bellies were filled, we headed to XOYO until we were hungry again and in need of kebabs. " +
    "Until next time Brick Lane."],
    img: curry,
  },
  {
    __typename: 'Event',
    id: "bowling18",
    title: "Boozy Bowling",
    description: ["A crossover with snowsports saw us head to Acton and don some rather uncomfortable shoes " +
    "for a spot of bowling. The night saw many decreasingly successful attempts at knocking " +
    "over 10 pins coupled with a rising number of new rules. No one remembers what the final " +
    "score was so we'll have to go back this year and try again."],
    img: bowling,
  },
];

let text = [""];
for (let i = 0; i < 100; i++) {
  text[0] += "We went surfing and it was fun. "

}

export const trips = [
  {
    __typename: 'Trip',
    id: "moliets18",
    title: "Moliets 2018",
    date: "1st - 7th July",
    author: "Josh",
    video: true,
    text: [
      [
        "Bonjour mon petit Chou-fleurs,",
        "",
        "As the tan-lines fade and the crushing realism of football requiring 4 more years to come home settles in, we draw to a close another epic year in the saga of Surf Soc, and what finer highlight could there be than the most recent excursion to Star Surf Camp, Moliets? The week started for most with the traditional pre-flight Spoons, followed by the seemingly also traditional flight delay courtesy of Ryanair, but in all but a heartbeat the ground of what some amongst us call home was rising to meet us. The land of the mimes and trophy cabinet of the football World Cup, France.",
      ],
      [
        "Evenings turned into days as they have a tendency to, and in the blink of an eye the week was over; however, it would be a shame not to make a note in some form of the fun and festivities that transpired during the course of the “semaine”.",
        "",
        "bSan Sebastian",
        "In the afternoon of our third day the gang headed to San Sebastian, a picturesque town situated on the north coast of Spain in the Basque region. We were released onto the unsuspecting calle’s and left to explore the numerous tapas bars, with Spanish omelettes aplenty and cheap beer to enjoy. The afternoon was shared with many cinnamon sugar churros and a trip to Lidl to restock and appreciate the difference in culture between the Spanish and the English way of life, most strikingly the €26 leg of Jamón serrano greeting us in the entrance, not something you’d find in the UK."
      ],
      [
        "With Sangria bottles and people at an agreeable ratio of 1:1, the group divided into 2 interests, those willing to bravely encamp deep within enemy territory to proudly support England in their quarter final play-off’s against the football powerhouse of Columbia, and those who wanted to ascend a hill and enjoy a spectacular view of a sunset and play with some cannons. The evening concluded with a thrilling game of football, many photos of cannons between legs, and a round of unexpectedly expensive Jäger bombs in a bar called El Anden, before driving back over the border to France. Got to love living with freedom of movement."
      ],
      [
        "bLazy days",
        "Hammock sessions quickly became a firm favourite amongst the crowd, with several beckoning fabric hammocks offering optimal comfort for reading, napping or just watching the world go by. For those amongst of us who have “all been surfing before”, it was a great place to sit and chat whilst waiting for the real surfers to return from the beach and regale us with their tales of hanging 10, getting barrelled and just generally shredding the gnar.",
      ],
      [
        "bGames",
        "During many spare moments in the week, Harry’s eyes could be seen to light up at the mere mention of a bang, along with many people quick to volunteer their services; Surf Soc hasn’t plunged head first into becoming a hedonistic community, it just discovered a wild west themed card game to pass the time."
      ],
      [
      "Naturally, one of the highlights of this game was the amount of times you were able to say “I’m going to bang you”, and the great showdown between Tag Teams “Sceriffo Rowina”, “Vice Jattie” and Peter “Rinnegato” Whalley, where Hattie’s cries of innocence still ring in everyone’s ear, especially James’ who was sat next to her and experienced the equivalent decibel level of a Boeing 737 engine, with an approximate turning circle of 1.4 km.",
      ],
      [
        "A surf soc trip would, of course, not be complete without the traditional evening game of werewolves and villagers. With James “Cowx“’s lyrical tone transporting us all to a faraway village in a medieval time, where the werewolves awake at night and the dead don’t speak, many accusations flew across the room to responses of “Me?! A werewolf?! In this game?!”, before invariably being revealed as a werewolf and lynched. A hell of a game, but as a way of a hint, here’s what to avoid doing to not be accused of being a werewolf:",
        "• Being too loud, people will think you’re overcompensating",
        "• Being too quiet, people will think you’re trying to avoid being detected",
        "• Accusing someone straight away, people will think you’re trying to deflect attention",
        "• Not immediately accusing someone, people will think you can’t lie quick enough",
        "• Absolutely nailing all of the above, people will think you’re too good a liar, therefore a werewolf"
      ],
      [
        "bFlunkyball",
        "Like any self respecting surf soc trip abroad, the skills of restraint, strength, temptation and cunning were put to the test in the traditional manner, a round robin in the game of champions, flunkyball.",
      ],
      [
        "The most tantalising and exciting scenes sprung from the last place play off, which really turned into a game for the fans. It concluded, to no one’s surprise, with both teams being disqualified for cheating, but in many ways this was greater than a win. Whilst much shouldn’t be said about this game, what can be mentioned is that if Hattie didn’t want projectiles to be aimed at her, she shouldn’t have had a literal target on her leg."
      ],
      [
        "Of course, this brief snapshot of our time at Moliets would be incomplete without the mention of Star Surf's very own Boardmasters festival that took place while we were there; although there were plenty of breathy acoustic guitar players, coupled with a guy’s spoken word poetry about Brexit (summary: it's bad and hurts our feelings) we managed to throw a couple of real world acts into the mix. Our very own Kyle Scheps and James Cowx toed the line between performance and art in their renditions of Demons - Imagine Dragons, and Sandstorm - Darude, respectively. Kyle took the stage armed with nothing but his soulful voice and had the audience swaying while he belted out the vocals. I’m pretty sure I saw roses and underwear being thrown at the stage afterwards. Cowx delivered what the audience had always wanted, but had never known they’d needed, Darude Sandstorm on an old plastic recorder he found in a cave in Derbyshire. Whipping the crowd into a frenzy until he released them on the drop, James surely has a magic touch when it comes to handling unusual instruments in front of a crowd.",
      ],
      [
        "And now, as the flunkyball of time collides with the bottles of destiny, and the beer drops of fate land on the head of regret, we say goodbye to another year at Imperial. For some this now spells the beginning of actual adult life, paying taxes and finding ways to make the financial quarter more quarterly. For others there’s a few more years left in which to enjoy metric nights and long summers (or not if that internship comes through). Either way, there will be more trips to come, and more nights at the union to enjoy together. Hope to see you around soon."
      ]
    ],
    images: [
      wetherspoons, stSebMain, stSebCannon, filipHammock, bang, jamesCalc, jamesChair, flunkyball, hattieBite, kyle, wholesome
    ]
  },
  {
    __typename: 'Trip',
    id: "portugal18",
    title: "Portugal 2018",
    date: "24th - 31st March",
    author: "Flo",
    video: false,
    text: [
      [
        "After the introduction of the Easter Portugal trip last year, it was unsurprising that this year's tickets went in a flash. 48 of our finest and most dedicated Imperial surfers descended onto Lisbon airport in our favourite number one airline, easyjet. We were met by Mr. Uglow who had enjoyed a pleasant stay in a local airbnb as, overcome with excitement, he involuntarily decided to fly out a day early. With hopes in our hearts of an epic week of surf, sun and smash we embarked onto the airport transfer. The driver bashed around corners and barged through roundabouts, getting us there quicker and more car sick than anyone could’ve wished for.",
      ],
      [
        "Baleal looked as stunning as we remembered it to be: cheap sangria, insanely addictive corn snacks, 2 for 1 pastel de natas, lovely rock formations, soft sand and, quite usefully, an ocean full of waves (truly a surf soc members dream). A group of early settlers were found already on a few waves of their own, lounging in the hostel. These brave men and women had bitten the bullet and travelled straight from the union the night of the Spring Carnival. It always seems like a good idea at the time however upon arrival an ex-social sec, Mr. Churchill, was nowhere to be found. The tales say he shone too brightly and too beautifully for this world, exploring the local specialities found in the beverage section of the beloved supermarket. That night, we feasted on Portuguese roast chicken and heavenly, buttery rice before retiring to our bunks, ready for a week of surfing but exhausted from our journey through shitty airports, crying babies and drivers with loose interpretations of speed limits.",
      ],
      [
        "We spent the first morning going through the usual motions of being introduced to the hostel, the rules and, most importantly, the surf instructors. People shimmied into wet-suits, slapped on sunscreen and waddled to the beach in doubled-up formation.",
        "Everyone was impressed at the quality of teaching by the instructors. Beginners learned how to pop up and ride their first waves and even the kookiest of kooks improved their skills out back. The afternoons were spent going out surfing again (if you were as fit as Mr. Sassy pants and Fresher Flip), or cycling along the coast and were always complimented by a daily hang out at the number one place in town; the supermarket. 2 for 1€ beers and a number 9 baguette along with ice creams from our childhood made for a relaxing pre-dinner atmosphere and prepared us for the evening antics.",
      ],
      [
        "As some of you may know, flunkyball is a traditional German beach game which has been lovingly adopted by the club and is played on every trip abroad. A supermarket session was sacrificed as we headed down to the beach, hands full with stubbies, water bottles and the FINEst of space bags. Our imperial surfers are fierce flunkyball players. We threw, we ran, we drank, we laughed, we gagged a little, some tears were shed and we swore a lot. In the end no one knew who won, but we all know we battled hard as we swayed back to the hostel for dinner. Unfortunately it appeared as if the hostel had suddenly run out of cutlery, leading to a feast enjoyed with our hands or straight off the plate. It was not an elegant sight, and the hostel staff watched in awe at the primal scene displayed to them."
      ],
      [
        "The week ended with another tradition: a fun filled night of fancy dress and games. Highlights include a boot-leg Dipsy from the teletubbies, a pack of m&m's, an m&m and eminem. Truths were uncovered in rounds of back to back and legs twisted playing twister. The night ended in the beach bar with our resident pole dancer doing the splits on a sticky dance floor.",
      ],[
        "This trip many memories were made and our passion for surfing grew! As everyone boards the flight back to grey london the post trip blues set in. But there is hope- summer trip has yet to come!"
      ]
    ],
    images: [baleal, joashred, supercafe, estella, dipsy, cliffGroup]
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
    img: harry,
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
    img: josh,
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
    img: martina,
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
    img: ellie,
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
    img: arran,
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
    img: dex,
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
    img: abi,
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
    img: james,
  }
];


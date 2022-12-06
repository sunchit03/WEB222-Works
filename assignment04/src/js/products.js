/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */

  {
    id: "b001",
    title: "The Hobbit",
    description:
      "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
    price: 1199,
    discontinued: false,
    categories: ["g01"]
  },
  {
    id: "b002",
    title: "A Game of Thrones",
    description:
      "A Game of Thrones tells an epic tale of honor and treachery, love and vengeful hatred, intrigue and heroism set in a world where summers and winters can last for years, even lifetimes. The story fashions itself around the Starks of Winterfell, a family whose legacy is one of stiff-necked honor.",
    price: 799,
    discontinued: false,
    categories: ["g01"]
  },
  {
    id: "b003",
    title: "The Colour of Magic",
    description:
      "“The Color of Magic” is a hero's journey tale done in comedic fashion. It's the first book in Prachett's disc world series. An incompetent wizard, Rincewind, becomes the guide to a goofy but wealthy tourist named Twoflower.",
    price: 599,
    discontinued: false,
    categories: ["g01"]
  },
  {
    id: "b004",
    title: "The Lord of the Rings",
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
    price: 1899,
    discontinued: false,
    categories: ["g01", "g03"]
  },
  {
    id: "b005",
    title: "Salem's Lot",
    description:
      "Salem's Lot is the story of a small American town being overtaken by vampires, and a brave band of people who come together to fight an ancient evil. Events centre on Ben Mears, a moderately successful writer who has returned to Jerusalem's Lot in order to write a novel based on his early years.",
    price: 1190,
    discontinued: false,
    categories: ["g02"]
  },
  {
    id: "b006",
    title: "The Exorcist",
    description:
      "The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon.",
    price: 2899,
    discontinued: true,
    categories: ["g02"]
  },
  {
    id: "b007",
    title: "The Ruins",
    description:
      "The story of four young Americans caught in a deadly situation on a trip to Mayan ruins in Mexico, it builds a tension that Serling excelled at, created from knowing that a situation is spinning out of control in ways beyond the characters' comprehension.",
    price: 2495,
    discontinued: false,
    categories: ["g02", "g06"]
  },
  {
    id: "b008",
    title: "It",
    description:
      "The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
    price: 1299,
    discontinued: false,
    categories: ["g02"]
  },
  {
    id: "b009",
    title: "Treasure Island",
    description:
      "It's a tale about a boy who has a treasure map and goes to an island to find the treasure - but the only problem is is that there are pirates on the ship and they want the treasure!",
    price: 1704,
    discontinued: true,
    categories: ["g03"]
  },
  {
    id: "b010",
    title: "Tarzan of the Apes",
    description:
      "The story tells of an infant — the son of an aristocratic English couple — abandoned when his parents die in the jungles of Africa. Rescued and reared by apes, he learns to speak their language and imitate their ability to travel swiftly through the treetops.",
    price: 3921,
    discontinued: false,
    categories: ["g03"]
  },
  {
    id: "b011",
    title: "Captain Blood",
    description:
      "Sentenced to ten years of slavery on a Barbados plantation, Blood escapes from captivity and boldly embarks on a career as a pirate, never losing sight of his goals of clearing his name and returning to England.",
    price: 3366,
    discontinued: false,
    categories: ["g03"]
  },
  {
    id: "b012",
    title: "The Proposal",
    description:
      "“The Proposal” tells the story of freelance writer Nik who meets handsome doctor Carlos after she turns down her boyfriend's surprise proposal at a Dodgers game. Carlos rescues Nik from a prying camera crew, and the two form a connection.",
    price: 999,
    discontinued: false,
    categories: ["g04"]
  },
  {
    id: "b013",
    title: "The Hating Game",
    description:
      "The story of The Hating Game by Sally Thorne revolves around Lucy Hutton and Joshua Templeman, two executive assistants forced together when rival publishing companies merge, making their respective bosses co-CEOs. They spend their days antagonizing each other and verbally sparring.",
    price: 1199,
    discontinued: false,
    categories: ["g04"]
  },
  {
    id: "b014",
    title: "Love at First Like",
    description:
      "In Hannah Orenstein's Love at First Like, a New York jewelry shop owner accidentally leads her Instagram followers to believe that she's engaged—and then decides to keep up the ruse.",
    price: 4051,
    discontinued: true,
    categories: ["g04"]
  },
  {
    id: "b015",
    title: "Poster Girl",
    description:
      "Veronica Roth tells the story of a woman's desperate search for a missing girl after the collapse of the oppressive dystopian regime--and the dark secrets about her family and community she uncovers along the way",
    price: 3499,
    discontinued: false,
    categories: ["g05"]
  },
  {
    id: "b016",
    title: "Station Eternity",
    description:
      "Amateur detective Mallory Viridian's talent for solving murders ruined her life on Earth and drove her to live on an alien space station, but her problems still follow her in this witty, self-aware novel that puts a speculative spin on murder mysteries, from the Hugo-nominated author of Six Wakes.",
    price: 1199,
    discontinued: false,
    categories: ["g05"]
  },
  {
    id: "b017",
    title: "Across the Sand",
    description:
      "Across the Sand takes us back to the world of Sand, to a far future many generations after a disaster has destroyed civilization as we know it, where four siblings struggle to build their futures amid the harsh wastes of endless desert.",
    price: 1499,
    discontinued: false,
    categories: ["g05"]
  },
  {
    id: "b018",
    title: "The Maze Cutter",
    description:
      "The islanders are hunted by the Godhead, the Remnant Nation, and scientists with secret agendas. When they cross paths with an orphan named Minho from the Remnant Nation, the dangers become real and they don't know who they can trust.",
    price: 999,
    discontinued: false,
    categories: ["g05", "g03"]
  },
  {
    id: "b019",
    title: "Jackal",
    description:
      "A young Black girl goes missing in the woods outside her white Rust Belt town. But she’s not the first—and she may not be the last....",
    price: 1399,
    discontinued: false,
    categories: ["g06", "g02"]
  },
  {
    id: "b020",
    title: "No Strangers Here",
    description:
      "This solid series launch from O'Connor takes a more somber approach to crime solving than her Irish Village mysteries, most recently Murder on an Irish Farm. When the body of wealthy 69-year-old racehorse owner Johnny O'Reilly is found on the shores of Dingle, Ireland, Det. Insp.",
    price: 2700,
    discontinued: false,
    categories: ["g06"]
  },
  {
    id: "b021",
    title: "The Whispering Dark",
    description:
      "Delaney Meyers-Petrov is tired of being seen as fragile just because she's Deaf. So when she's accepted into a prestigious program at Godbole University that trains students to slip between parallel worlds, she's excited for the chance to prove herself.",
    price: 1319,
    discontinued: false,
    categories: ["g06"]
  },
  {
    id: "b022",
    title: "Dark Room Etiquette",
    description:
      "Sixteen-year-old Sayers Wayte has everything—until he's kidnapped by a man who tells him the privileged life he's been living is based on a lie. Trapped in a windowless room, without knowing why he's been taken or how long the man plans to keep him shut away, Sayers faces a terrifying new reality.",
    price: 2399,
    discontinued: false,
    categories: ["g06"]
  },
  {
    id: "b023",
    title: "Becoming",
    description:
      "Becoming is the memoir of former first lady of the United States Michelle Obama, published in 2018. Described by the author as a deeply personal experience, the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother.",
    price: 1399,
    discontinued: false,
    categories: ["g07"]
  },
  {
    id: "b024",
    title: "I Am Malala",
    description:
      "I AM MALALA is the remarkable tale of a family uprooted by global terrorism, of the fight for girls' education, of a father who, himself a school owner, championed and encouraged his daughter to write and attend school, and of brave parents who have a fierce love for their daughter in a society that prizes sons.",
    price: 1199,
    discontinued: false,
    categories: ["g07"]
  },
  {
    id: "b025",
    title: "A Promised Lad",
    description:
      "Remaining focused on his political career, the presidential memoir documents Obama's life from his early years through to the events surrounding the killing of Osama bin Laden in May 2011.",
    price: 1899,
    discontinued: false,
    categories: ["g07"]
  },
  {
    id: "b026",
    title: "Into the Wild",
    description:
      "Into the Wild tells the true story of the journey of 24-year-old Christopher McCandless into Alaska's Denali National Park and Preserve, where he starved to death in an abandoned bus after spending four months foraging and hunting game.",
    price: 1399,
    discontinued: false,
    categories: ["g07"]
  }
];

const teams = [

  {
    id: "angry-apples",
    name: "Angry Apples",
    owner: "Ripken",
    logo: "assets/logos/angry-apples.png.png",

    record: "4-10",
    titles: 0,
    pointsFor: 1375,
    pointsAgainst: 1544,

    playoffRecord: "0-0",
    playoffAppearances: 0,

    awards: {
      mvp: 0,
      playoffMvp: 0,
      rookieOfYear: 0,
      mostImproved: 0,
      firstTeam: 0,
      secondTeam: 1
    },

    scoring: {
      avgPointsPerGame: 137.5,

      topScores: [
        { score: 184.72, week: 5, year: 2025 },
        { score: 177.83, week: 9, year: 2025 },
        { score: 172.41, week: 12, year: 2025 }
      ],

      lowScores: [
        { score: 60.84, week: 2, year: 2025 },
        { score: 69.14, week: 7, year: 2025 },
        { score: 76.58, week: 10, year: 2025 }
      ],

      bestSeason: {
        year: 2025,
        points: 1375
      },

      worstSeason: {
        year: 2025,
        points: 1375
      }
    },

    headToHead: [
      { opponentId: "jake-the-snake", record: "2-3" },
      { opponentId: "big-ben-banditos", record: "1-4" },
      { opponentId: "lake-cle-elum", record: "3-2" }
    ],

    schedule: [
      {
        week: 1,
        opponent: "Jake the Snake",
        result: "L",
        score: "102.14 - 128.66"
      },

      {
        week: 2,
        opponent: "Lake Cle Elum",
        result: "W",
        score: "137.22 - 118.44"
      }
    ]
  },

  {
    id: "jake-the-snake",
    name: "Jake the Snake",
    owner: "Jake",
    logo: "assets/logos/jake-the-snake.png.png",
    record: "11-3",
    titles: 1,
    pointsFor: 1878,
    pointsAgainst: 1512
  },

  {
    id: "big-ben-banditos",
    name: "Big Ben Banditos",
    owner: "Ben",
    logo: "assets/logos/big-ben-banditos.png.png",
    record: "8-6",
    titles: 0,
    pointsFor: 1641,
    pointsAgainst: 1599
  },

  {
    id: "bryley-the-builder",
    name: "Bryley the Builder",
    owner: "Bryley",
    logo: "assets/logos/bryley-the-builder.png.png",
    record: "7-7",
    titles: 0,
    pointsFor: 1682,
    pointsAgainst: 1658
  },

  {
    id: "boarder-patrollers",
    name: "The Boarder Patrollers",
    owner: "Curtis",
    logo: "assets/logos/boarder-patrollers.png.png",
    record: "9-5",
    titles: 0,
    pointsFor: 1688,
    pointsAgainst: 1602
  },

  {
    id: "bradshaw-bunch",
    name: "Bradshaw Bunch",
    owner: "Jeff",
    logo: "assets/logos/bradshaw-bunch.png.png",
    record: "7-7",
    titles: 0,
    pointsFor: 1565,
    pointsAgainst: 1581
  },

  {
    id: "mclovin",
    name: "McLovin",
    owner: "Rawlings",
    logo: "assets/logos/mclovin.png.png",
    record: "8-6",
    titles: 0,
    pointsFor: 1654,
    pointsAgainst: 1614
  },

  {
    id: "lake-cle-elum",
    name: "Lake Cle Elum",
    owner: "Ritch",
    logo: "assets/logos/lake-cle-elum.png.png",
    record: "9-5",
    titles: 0,
    pointsFor: 1672,
    pointsAgainst: 1554
  },

  {
    id: "purple-reign",
    name: "Purple Reign",
    owner: "Willie",
    logo: "assets/logos/purple-reign.png.png",
    record: "0-14",
    titles: 0,
    pointsFor: 1074,
    pointsAgainst: 1811
  },

  {
    id: "cats-pajamas",
    name: "The Cat's Pajamas",
    owner: "Reese",
    logo: "assets/logos/the-cat's-pajamas.png",
    record: "7-7",
    titles: 0,
    pointsFor: 1480,
    pointsAgainst: 1498
  }

];

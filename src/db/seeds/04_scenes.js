const table = 'scenes'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      movie_id: 1,
      location_id: 1,
      description: "The house boat where Tom Hanks lives"
    },
    {
      id: 2,
      movie_id: 1,
      location_id: 2,
      description: "Tom Hanks and Rob Reiner chatting about what women are looking for"
    },
    {
      id: 3,
      movie_id: 1,
      location_id: 3,
      description: "Tom and Rob have their infamous tiramisu banter while downing a beer and clams at Athenian Seafood Restaurant and Bar in Pike Place Market"
    },
    {
      id: 4,
      movie_id: 1,
      location_id: 4,
      description: "When Tom is in Pike Place Market"
    },
    {
      id: 5,
      movie_id: 2,
      location_id: 5,
      description: "Accompanied by her friend Noah, Rachel follows the trail up to ‘Astoria’, driving across Deception Pass Bridge, at the northern tip of Whidbey Island."
    },
    {
      id: 6,
      movie_id: 2,
      location_id: 6,
      description: "When the crazed horse leaps from the ferry"
    },
    {
      id: 7,
      movie_id: 2,
      location_id: 7,
      description: "When the crazed horse leaps from the ferry"
    },
    {
      id: 8,
      movie_id: 2,
      location_id: 8,
      description: "The apartment where Seattle reporter named Rachel, lived is in the Harbor Steps Apartments near downtown Seattle"
    },
    {
      id: 9,
      movie_id: 3,
      location_id: 9,
      description: "Cameron and Bianca stand in front of the Troll as they brainstorm ways to find a guy for Kat"
    },
    {
      id: 10,
      movie_id: 3,
      location_id: 10,
      description: "After Kat flashes the soccer coach to get Patrick out of detention (budding teen love at its finest), they go paddling on Lake Union."
    },
    {
      id: 11,
      movie_id: 3,
      location_id: 11,
      description: "The Site Of The Prom where Bianca punches Joey not once but three times"
    },
    {
      id: 12,
      movie_id: 3,
      location_id: 12,
      description: "The high school where a large portion of the movie takes place"
    },
    {
      id: 13,
      movie_id: 4,
      location_id: 13,
      description: "The Forks High School where Edward meets Bella"
    },
    {
      id: 14,
      movie_id: 4,
      location_id: 14,
      description: "The Carver Café, where Bella and her dad ate dinner a couple of times."
    },
    {
      id: 15,
      movie_id: 4,
      location_id: 15,
      description: "The Cullen House."
    },
    {
      id: 16,
      movie_id: 4,
      location_id: 16,
      description: "The beach where Jacob told Bella about his tribes history with the Cullen family."
    },
    {
      id: 17,
      movie_id: 5,
      location_id: 17,
      description: "The office where Tom (Michael Douglas) works and where Meredith (Demi Moore) calls Tom into her office to discuss some operations, and forces herself onto him."
    },
    {
      id: 18,
      movie_id: 5,
      location_id: 18,
      description: "The location where the banquet was held in Volunteer Park"
    },
    {
      id: 19,
      movie_id: 6,
      location_id: 19,
      description: "Christian Grey's Condo where it overlooks Seattle"
    },
    {
      id: 20,
      movie_id: 6,
      location_id: 4,
      description: "Anastasia's apartment near Pike Place Market"
    },
    {
      id: 21,
      movie_id: 7,
      location_id: 20,
      description: "Sakya Monastery where several scenes for the movie were also filmed."
    },
    {
      id: 22,
      movie_id: 7,
      location_id: 21,
      description: "The Seattle Art Museum where several scenes for the movie were also filmed."
    },
    {
      id: 23,
      movie_id: '8',
      location_id: '22',
      description: 'Godzilla emerges from the waters near Manhattan.'
    },
    {
      id: 24,
      movie_id: '9',
      location_id: '23',
      description: "Right before godzilla destroys Tokyo."
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}

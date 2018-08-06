const table = 'movies'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      imbdID: 'tt2294629',
      title: 'Frozen',
      year: 2013,
      rated: 'PG',
      genre: 'Animation, Adventure, Comedy',
      director: 'Chris Buck, Jennifer Lee',
      plot: 'When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg'
    }
    {
      id: 2,
      imdbID: 'tt0117060',
      title: 'Mission: Impossible',
      year: 1996,
      rated: 'PG-13',
      genre: 'Action, Adventure, Thriller',
      director: 'Brian De Palma',
      plot: 'n American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg'
    },
    {
      id: ,
      imdbID: '',
      title: '',
      year: ,
      rated: '',
      genre: '',
      director: '',
      plot: '',
      poster: ''
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`)
  });
};

const table = 'movies'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      imdbID: 'tt2294629',
      title: 'Frozen',
      year: 2013,
      rated: 'PG',
      genre: 'Animation, Adventure, Comedy',
      director: 'Chris Buck, Jennifer Lee',
      plot: 'When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg'
    },
    {
      id: 2,
      imdbID: 'tt0117060',
      title: 'Mission: Impossible',
      year: 1996,
      rated: 'PG-13',
      genre: 'Action, Adventure, Thriller',
      director: 'Brian De Palma',
      plot: 'An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg'
    },
    {
      id: 3,
      imdbID: 'tt0831387',
      title: 'Godzilla',
      year: 2014,
      rated: 'PG-13',
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Gareth Edwards',
      plot: 'The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.',
      poster: 'https://m.media-amazon.com/images/M/MV5BN2E4ZDgxN2YtZjExMS00MWE5LTg3NjQtNTkxMzJhOTA3MDQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    },
    {
      id:4,
      imdbID: 'tt4262980',
      title: 'Shin Godzilla',
      year: 2016,
      rated: 'NR',
      genre: 'Action, Adventure, Drama',
      director: ' Hideaki Anno, Shinji Higuchi',
      plot: 'Japan is plunged into chaos upon the appearance of a giant monster.',
      poster: 'https://m.media-amazon.com/images/M/MV5BODQ4ZmIzNWMtY2NiYi00MmM1LWFjMGQtMDE0Nzc1NzhjNjEyXkEyXkFqcGdeQXVyNDUwNzM4MzQ@._V1_SX300.jpg'
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`)
  });
};

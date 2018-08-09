const table = 'movies'
exports.seed = knex => {
  return knex(table).insert([
    {
      id: 1,
      imdbID: "tt0108160",
      title: "Sleepless in Seattle",
      year: 1993,
      rated: "PG",
      genre: "Comedy, Drama, Romance",
      director: "Nora Ephron",
      plot: "A recently widowed man's son calls a radio talk-show in an attempt to find his father a partner.",
      poster: "https://m.media-amazon.com/images/M/MV5BNWY1MDJkZGUtZTE2OS00ODZiLTlmNzQtMDZjNzM2ZjkwM2QxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      id: 2,
      imdbID: "tt0298130",
      title: "The Ring",
      year: 2002,
      rated: "PG-13",
      genre: "Horror, Mystery",
      director: "Gore Verbinski",
      plot: "A journalist must investigate a mysterious videotape which seems to cause the death of anyone in a week of viewing it.",
      poster: "https://ia.media-imdb.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_SX300.jpg"
    },
    {
      id: 3,
      imdbID: "tt0147800",
      title: "10 Things I Hate About You",
      year: 1999,
      rated: "PG-13",
      genre: "Comedy, Drama, Romance",
      director: "Gil Junger",
      plot: "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.",
      poster: "https://m.media-amazon.com/images/M/MV5BMmVhZjhlZDYtMDAwZi00MDcyLTgzOTItOWNiZjY0YmE0MGE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      id: 4,
      imdbID: "tt1099212",
      title: "Twilight",
      year: 2008,
      rated: "PG-13",
      genre: "Drama, Fantasy, Romance",
      director: "Catherine Hardwicke",
      plot: "A teenage girl risks everything when she falls in love with a vampire.",
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg"
    },
    {
      id: 5,
      imdbID: "tt0109635",
      title: "Disclosure",
      year: 1994,
      rated: "R",
      genre: "Drama, Thriller",
      director: "Barry Levinson",
      plot: "A computer specialist is sued for sexual harassment by a former lover turned boss who initiated the act forcefully, which threatens both his career and his personal life.",
      poster: "https://ia.media-imdb.com/images/M/MV5BYzhkNjE2YTQtYWQzNS00ZTkwLTg4YzAtNjNlYTRlMGEzYjcxL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      id: 6,
      imdbID: "tt2322441",
      title: "Fifty Shades of Grey",
      year: 2015,
      rated: "R",
      genre: "Drama, Romance, Thriller",
      director: "Sam Taylor-Johnson",
      plot: "Literature student Anastasia Steele's life changes forever when she meets handsome, yet tormented, billionaire Christian Grey.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_SX300.jpg"
    },
    {
      id: 7,
      imdbID: "tt0107426",
      title: "Little Buddha",
      year: 1993,
      rated: "PG",
      genre: "Drama",
      director: "Bernardo Bertolucci",
      plot: "Lama Norbu comes to Seattle in search of the reincarnation of his dead teacher, Lama Dorje. His search leads him to young Jesse Conrad, Raju, a waif from Kathmandu, and an upper class Indian girl.",
      poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1NzQ4MDY0NV5BMl5BanBnXkFtZTcwOTg4MTgyMQ@@._V1_SX300.jpg"
    },
    {
      id: 8,
      imdbID: "tt0831387",
      title: "Godzilla",
      year: 2014,
      rated: "PG-13",
      genre: "Action, Adventure, Sci-Fi",
      director: "Gareth Edwards",
      plot: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
      poster: "https://m.media-amazon.com/images/M/MV5BN2E4ZDgxN2YtZjExMS00MWE5LTg3NjQtNTkxMzJhOTA3MDQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      id: 9,
      imdbID: "tt4262980",
      title: "Shin Godzilla",
      year: 2016,
      rated: "NR",
      genre: "Action, Adventure, Drama",
      director: "Hideaki Anno, Shinji Higuchi",
      plot: "Japan is plunged into chaos upon the appearance of a giant monster.",
      poster: "https://m.media-amazon.com/images/M/MV5BODQ4ZmIzNWMtY2NiYi00MmM1LWFjMGQtMDE0Nzc1NzhjNjEyXkEyXkFqcGdeQXVyNDUwNzM4MzQ@._V1_SX300.jpg"
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}))`)
  });
};

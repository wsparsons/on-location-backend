const table = 'scenes'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      movie_id: '1',
      location_id: '1',
      description: 'The whole movie.'
    },
    {
      id: 2,
      movie_id: '2',
      location_id: '2',
      description: 'The motorcycle chase scene.'
    },
    {
      id: 3,
      movie_id: '3',
      location_id: '3',
      description: "Right before godzilla destroys Tokyo."
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}

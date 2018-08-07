const table = 'photos'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      scene_id: 1,
      photo: 'https://thornews.files.wordpress.com/2013/12/disney-frozen-norwegian-fjord.jpeg',

    },
    {
      id: 2,
      scene_id: 2,
      photo: 'https://mustseeplaces.eu/wp-content/uploads/2017/01/arc-de-triomphe.jpg'
    },
    {
      id: 3,
      scene_id: 3,
      photo: 'https://3.bp.blogspot.com/-EibaJ0-CuTg/T40fIQ9fqnI/AAAAAAAAEoY/e3nPsuia_rU/s1600/godzilla+98.jpg'
    },
    {
      id: 4,
      scene_id: 4,
      photo: 'https://sociorocketnewsen.files.wordpress.com/2015/03/gs-1.jpg?w=580&h=546'
    },
    {
      id: 5,
      scene_id: 4,
      photo: 'https://en.wikipedia.org/wiki/Godzilla#/media/File:Godzilla_%2754_design.jpg'
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}

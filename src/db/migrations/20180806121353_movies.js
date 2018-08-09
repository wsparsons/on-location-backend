
exports.up = knex => {
  return knex.schema.createTable('movies', table => {
    table.increments('id')
    table.string('imdbID').notNullable().unique()
    table.string('title').notNullable()
    table.integer('year', 25).notNullable()
    table.string('rated', 25).notNullable()
    table.string('genre', 64).notNullable()
    table.string('director', 512).notNullable()
    table.string('plot').notNullable()
    table.string('poster').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('movies')
};


exports.up = knex => {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('imbdID').notNullable()
    table.string('title').notNullable()
    table.integer('year', 4).notNullable()
    table.string('rated', 6).notNullable()
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

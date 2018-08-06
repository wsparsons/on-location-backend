
exports.up = knex => {
  return knex.schema.createTable('scenes', table => {
    table.increments()
    table.integer('movie_id').notNullable()
    table.foreign('movie_id').references('movies.id').onDelete('CASCADE')
    table.integer('location_id').notNullable()
    table.foreign('location_id').references('locations.id').onDelete('CASCADE')
    table.string('description').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })

};

exports.down = knex => {
  return knex.schema.dropTable('scenes')
};

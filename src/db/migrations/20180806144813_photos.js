
exports.up = knex => {
  return knex.schema.createTable('photos', table => {
    table.increments()
    table.integer('scene_id').notNullable()
    table.foreign('scene_id').references('scenes.id')
    table.string('photo').defaultsTo('../../images/movie-clapper-board-blank.png')
    table.timestamps(true,true)
  })

}

exports.down = knex => {
  return knex.schema.dropTable('photos')

}


exports.up = knex => {
  return knex.schema.createTable('photos', table => {
    table.increments()
    table.integer('scene_id').notNullable()
    table.foreign('scene_id').references('scenes.id')
    table.string('photo')
    table.timestamps(true,true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('photos')
};

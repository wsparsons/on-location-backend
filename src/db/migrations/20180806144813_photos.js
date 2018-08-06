
exports.up = knex => {
  return knex.schema.createTable('photos', table => {
    table.increments()
    table.integer('scene_id').notNullable()
    table.foreign('scene_id').references('scenes.id')
<<<<<<< HEAD
    table.string()
    table.timestamps(true,true)
  })

=======
    table.string('photo')
    table.timestamps(true,true)
  })
>>>>>>> 1f62f607f7f9fcd108b2ad9b4257ba036db9987d
};

exports.down = knex => {
  return knex.schema.dropTable('photos')
<<<<<<< HEAD

=======
>>>>>>> 1f62f607f7f9fcd108b2ad9b4257ba036db9987d
};

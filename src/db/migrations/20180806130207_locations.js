
exports.up = knex => {
  return knex.schema.createTable('locations', table => {
    table.increments()
    table.float('lat',10)
    table.float('long',10)
    table.string('address', 1024)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('locations')
};

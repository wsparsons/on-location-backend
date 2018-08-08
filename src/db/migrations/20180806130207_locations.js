
exports.up = knex => {
  return knex.schema.createTable('locations', table => {
    table.increments('id')
    table.float('lat',20)
    table.float('long',20)
    table.string('address', 1024)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('locations')
};

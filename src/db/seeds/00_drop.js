exports.seed = async knex => {
  await knex('scenes').del()
  await knex('locations').del()
  await knex('movies').del()
  await knex('users').del()
}

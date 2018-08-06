const db = require('../db')

function getAll() {
  return db('movies')
}

module.exports = {
  getAll
}

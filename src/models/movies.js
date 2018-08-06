const db = require('../db')

function getAll() {
  return db('movies')
}

modele.exports = {
  getAll
}

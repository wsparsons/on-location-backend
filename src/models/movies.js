const db = require('../db')

function getAll() {
  return db('movies')
}

function getOne(id) {
    return db('movies').where({ id })
}


module.exports = {
  getAll,
  getOne
}

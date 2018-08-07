const knex = require('knex')
const db = require('../db')

function getAll() {
  return db('movies')
}


function getOne(id) {
    return db('movies').where({ id })
  
function search(fullText) {
  return db('movies').where('title', 'ILIKE', `%\\${fullText}%`)
}


module.exports = {
  getAll,
  getOne,
  search
}

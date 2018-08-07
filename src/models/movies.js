const knex = require('knex')
const db = require('../db')


function getAll() {
  return db('movies')
}


function getOne(id) {
    return db('movies').where({ id })
}

function search(fullText) {
  return db('movies').where('title', 'ILIKE', `%\\${fullText}%`)
}



function create (body) {
 // console.log('IN MODEL CREATE MOVIE')
 // console.log('PASSING IN: ', body)
  return db('movies')
  .insert(body)
  .returning('*')
  .then(([response]) => response)
}


module.exports = {
  getAll,
  getOne,
  search,
  create
}

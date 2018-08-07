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

// Get a complete list of all scenes in the database by movie title, address, and description
// not currently working.

// function getAllScenes() {
//   return db('movies')
//   .select('movies.title', 'locations.address', 'scenes.description')
//   .from('movies')
//   .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
//   .innerJoin('locations', 'location_id', '=', 'locations.id')
// }

function getScenes(id) {
  return db()
  .where('movies.id', id)
  .select('scenes.description','locations.address', 'photos.photo')
  .from('movies')
  .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
  .innerJoin('locations', 'location_id', '=', 'locations.id')
  .innerJoin('photos', 'scenes.id', '=', 'scene_id')
}

function getOneScene(movieId, sceneId) {
  return db()
  .where('movies.id', movieId)
  .where('scenes.id', sceneId)
  .select('scenes.description','locations.address', 'locations.lat', 'locations.long')
  .from('movies')
  .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
  .innerJoin('locations', 'location_id', '=', 'locations.id')
}

function getPhotos(movieId, sceneId) {
  return db()
  .where('movies.id', movieId)
  .where('scenes.id', sceneId)
  .select('photos.photo')
  .from('movies')
  .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
  .innerJoin('locations', 'location_id', '=', 'locations.id')
  .innerJoin('photos', 'scenes.id', '=', 'scene_id')
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
  // getAllScenes,
  getScenes,
  getOneScene,
  getPhotos,
  create
}

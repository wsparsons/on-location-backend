const knex = require('knex')
const db = require('../db')

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
    return db('movies')
        .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
        .innerJoin('locations', 'location_id', '=', 'locations.id')
        .innerJoin('photos', 'scenes.id', '=', 'scene_id')    
        .select('scenes.movie_id', 'scenes.description', 'locations.address', 'photos.photo')
       .where('movie_id', id)

}

function getOneScene(movieId, sceneId) {
    return db('scenes')
        .where('movies.id', movieId)
        .where('scenes.id', sceneId)
        .select('scenes.description', 'locations.address', 'locations.lat', 'locations.long')
        .from('movies')
        .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
        .innerJoin('locations', 'location_id', '=', 'locations.id')
}

function getPhotos(movieId, sceneId) {
    return db('scenes')
        .where('movies.id', movieId)
        .where('scenes.id', sceneId)
        .select('photos.photo')
        .from('movies')
        .innerJoin('scenes', 'movies.id', '=', 'scenes.movie_id')
        .innerJoin('locations', 'location_id', '=', 'locations.id')
        .innerJoin('photos', 'scenes.id', '=', 'scene_id')
}

function create(body) {
    // console.log('IN MODEL CREATE MOVIE')
    // console.log('PASSING IN: ', body)
    return db('scenes')
        .insert(body)
        .returning('*')
        .then(([response]) => response)
}


module.exports = {
    // getAllScenes,
    getScenes,
    getOneScene,
    getPhotos,
    create
}
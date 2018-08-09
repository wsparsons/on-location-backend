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
        // .innerJoin('photos', 'scenes.id', '=', 'scene_id')
        .select('scenes.id', 'scenes.movie_id', 'scenes.description', 'locations.address', 'scenes.created_at', 'scenes.updated_at')
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

function create(movieId, body) {
     console.log('IN MODEL CREATE SCENE')
     const {address} = body
     console.log('PASSING IN: ', address)
    return db('locations')
        .insert({address})
        .returning('id')
        .then(function (response) {
            console.log(body, response, movieId)
            return db('scenes')

                .insert({movie_id: movieId, description: body.description, location_id: response[0]})
                .returning('*')
        })

}

function editScene(sceneId, body) {
  let updatedScene
  return db('scenes')
    .where('scenes.id', sceneId)
    .update({
      description: body.description,
      updated_at: new Date()
    })
    .returning('*')
    .then((sceneArray) => {
      updatedScene = sceneArray[0]
      return db('locations')
        .where('locations.id', updatedScene.location_id)
        .update({
          address: body.address,
          updated_at: new Date()
        })
        .returning('*')
    })
    .then(([response]) => {
      // updatedScene.location = response

      updatedScene.address = response.address
      updatedScene.lat = response.lat
      updatedScene.long = response.long

      return updatedScene
    })
}

function deleteScene(id) {
    return db('scenes')
        .where({ id })
        .del()
        .returning('*')
        .then(([response]) => response)
}

module.exports = {
    // getAllScenes,
    getScenes,
    getOneScene,
    getPhotos,
    create,
    editScene,
    deleteScene
}

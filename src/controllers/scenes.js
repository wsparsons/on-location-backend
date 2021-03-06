const model = require('../models/scenes')
const resourceName = 'scenes'

// async function getAllScenes(req, res, next) {
//   console.log("getting all scenes")
//   const data = await model.getAllScenes()
//   res.status(201).json({ data })
// }

async function getScenes(req, res, next) {
    try {
        console.log('IN GET SCENES, movieid: ', req.params.movieId)
        const movieId = req.params.movieId
        const response = await model.getScenes(movieId)
        res.status(200).json({ [resourceName]: response })
    } catch (e) {
        console.log(e)
        next({
            status: 404,
            error: `Scene could not be found`
        })
    }
}

async function getOneScene(req, res, next) {
    try {
        const movieId = req.params.movieId
        const sceneId = req.params.sceneId
        const data = await model.getOneScene(movieId, sceneId)
        res.status(200).json({ data })
    } catch(e) {
        next({
            status: 404,
            error: 'Scene could not be found'
        })
    }
}

async function getPhotos(req, res, next) {
    try {
        const movieId = req.params.movieId
        const sceneId = req.params.sceneId
        const data = await model.getPhotos(movieId, sceneId)
        res.status(200).json({ data })
    } catch(e) {
        next({
            status: 404,
            error: 'Photo not found'
        })
    }
}

async function create(req, res, next) {
    try {
        const response = await model.create(req.params.movieId, req.body)
        console.log('RES:', response)
        res.status(201)
    } catch (e) {
        next({
            status: 400,
            error: `Scene could not be added`
        })
    }
}

async function editScene(req, res, next){
  try {
      const movieId = req.params.movieId
      const sceneId = req.params.sceneId
      const data = await model.editScene(sceneId, req.body)
      res.status(200).json({ data })
  } catch(e) {
    console.log(e);
    next({
      status: 400,
      error: `Could not update scene`
    })
  }
}

async function deleteScene(req, res, next) {
    try {
        const id = req.params.sceneId
        const response = await model.deleteScene(id)

        res.json({ [resourceName]: response })
    } catch(e) {
        console.log('DEL ERROR: ', e)
        next({
            status: 400,
            error: 'Could not delete'
        })
    }
}

module.exports = {
    // getAllScenes,
    getScenes,
    getOneScene,
    getPhotos,
    create,
    deleteScene,
    editScene
}

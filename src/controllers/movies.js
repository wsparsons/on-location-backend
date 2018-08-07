const model = require('../models/movies')
const resourceName = 'movie'

async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({ data })
}


async function getOne(req, res, next) {
  try {
    console.log('IN GET ONE MOVIE WITH ID:', req.params.movieId)
    const data = await model.getOne(req.params.movieId)
    res.status(200).json({data})
  } catch(err) {
    next({status: 404, message:err.message })
  }
}

async function search(req, res, next) {
  const fullText = req.body.title
  const data = await model.search(fullText)
  res.status(200).json({ data })
}

// async function getAllScenes(req, res, next) {
//   console.log("getting all scenes")
//   const data = await model.getAllScenes()
//   res.status(201).json({ data })
// }

async function getScenes(req, res, next) {
  const movieId = req.params.movieId
  const data = await model.getScenes(movieId)
  res.status(200).json({ data })
}

async function getOneScene(req, res, next) {
  const movieId = req.params.movieId
  const sceneId = req.params.sceneId
  const data = await model.getOneScene(movieId, sceneId)
  res.status(200).json({ data })
}

async function getPhotos(req, res, next) {
  const movieId = req.params.movieId
  const sceneId = req.params.sceneId
  const data = await model.getPhotos(movieId, sceneId)
  res.status(200).json({ data })
}

async function create(req, res, next) {
  try {
    const response = await model.create(req.body)
    console.log('RES:', response)
    res.status(201).json({ [resourceName]: response })
  } catch (e) {
    next({
      status: 400,
      error: `Movie could not be added`
    })
  }
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

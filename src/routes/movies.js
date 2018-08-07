const router = require('express').Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAll)
router.get('/:movieId', ctrl.getOne)
router.get('/search', ctrl.search)
// router.get('/scenes', ctrl.getAllScenes)
router.get('/:movieId/scenes', ctrl.getScenes)
router.get('/:movieId/scene/:sceneId', ctrl.getOneScene)
// Photos route for getting just photos for a particular scene.
router.get('/:movieId/scene/:sceneId/photos', ctrl.getPhotos)

router.post('/', ctrl.create)

module.exports = router

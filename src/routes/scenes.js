const router = require('express').Router()
const ctrl = require('../controllers/scenes')

// router.get('/scenes', ctrl.getAllScenes)
router.get('/:movieId/scenes', ctrl.getScenes)
router.get('/:movieId/scene/:sceneId', ctrl.getOneScene)
// Photos route for getting just photos for a particular scene.
router.get('/:movieId/scene/:sceneId/photos', ctrl.getPhotos)

//router.post('/scenes', ctrl.create)

module.exports = router

const router = require('express').Router()
const ctrl = require('../controllers/scenes')
const auth = require('../lib/auth')

// router.get('/scenes', ctrl.getAllScenes)
router.get('/:movieId/scenes', ctrl.getScenes)
router.get('/:movieId/scene/:sceneId', ctrl.getOneScene)
// Photos route for getting just photos for a particular scene.
router.get('/:movieId/scene/:sceneId/photos', ctrl.getPhotos)

router.post('/:movieId/scenes', auth.isLoggedIn, ctrl.create)
router.patch('/:movieId/scene/:sceneId', auth.isLoggedIn,  ctrl.editScene)
router.delete('/:movieId/scene/:sceneId', ctrl.deleteScene)

module.exports = router

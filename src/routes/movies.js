const router = require('express').Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAll)
// router.get('/:movieId', ctrl.getOne)
router.get('/search', ctrl.search)

module.exports = router

const router = require('express').Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAll)
// router.get('/:movieId', ctrl.getOne)

module.exports = router

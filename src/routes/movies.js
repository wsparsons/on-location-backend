const router = require('express').Router()
const ctrl = require('../controllers/movies')


router.get('/', ctrl.getAll)
router.get('/search', ctrl.search)
router.get('/:movieId', ctrl.getOne)

router.post('/', ctrl.create)


module.exports = router

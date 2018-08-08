const router = require('express').Router()
const ctrl = require('../controllers/movies')
const auth = require('../lib/auth')

router.get('/', ctrl.getAll)
router.get('/search', ctrl.search)
router.get('/:movieId', ctrl.getOne)

router.post('/', auth.isLoggedIn, ctrl.create)


module.exports = router

const model = require('../models/movies')

function getAll(req, res, next) {
  const data = model.getAll()
  res.status(200).json({ data })
}

modele.exports = {
  getAll
}

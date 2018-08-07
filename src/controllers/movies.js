const model = require('../models/movies')

async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({ data })
}

async function search(req, res, next) {
  const fullText = req.body.title
  const data = await model.search(fullText)
  res.status(200).json({ data })
}

module.exports = {
  getAll,
  search
}

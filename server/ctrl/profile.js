'use strict'

const BoardRoster = require('../models/BoardRoster')

module.exports.index = (req, res, err) => {
  let id = req.params.id
  BoardRoster.find({ _id: id })
  .then(boards => {
    console.log(boards)
    res.json(boards)
  })
}

module.exports.create = (req, res, err) => {
  let id = req.params.id
}

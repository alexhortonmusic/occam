'use strict'

const BoardRoster = require('../models/BoardRoster')

module.exports.index = (req, res, err) => {
  let id = req.params.id
  BoardRoster.find({ boardOwnerId: id })
  .then(boards => {
    console.log(boards)
    res.json(boards)
  })
}

module.exports.create = (req, res, err) => {
  let newBoard = req.body
  BoardRoster.create(newBoard)
  .then(board => res.json(board))
}

module.exports.edit = (req, res, err) => {

}

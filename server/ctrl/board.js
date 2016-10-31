'use strict'

const BoardRoster = require('../models/BoardRoster')
const Board = require('../models/User')

module.exports.index = (req, res, err) => {
  let id = req.params.boardId
  Board.findOne({ _id: id})
  .then(board => {
    res.json(board)
  })
}

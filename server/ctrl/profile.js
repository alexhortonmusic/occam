'use strict'

const BoardRoster = require('../models/BoardRoster')

module.exports.index = (req, res, err) => {
  let id = req.params.id
  BoardRoster.find({ boardOwnerId: id })
  .then(boards => {
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

module.exports.destroy = (req, res, err) => {
  let boardId = req.params.id
  BoardRoster.findOneAndRemove({ _id: boardId }, function(err, doc, result) {
    console.log(doc)
  })
  .then(document => {
    if (document === null) {
      res.json('deleted')
    }
  })
}

'use strict'

const Board = require('../models/Board')
const User = require('../models/User')

module.exports.index = (req, res, err) => {
  let id = req.params.id
  Board.find({ boardOwnerId: id })
  .then(boards => {
    res.json(boards)
  })
}

module.exports.getUser = (req, res, err) => {
  let userId = req.params.id

  User.findOne({ _id: userId })
  .then(user => {
    res.json(user)
  })
}

module.exports.create = (req, res, err) => {
  let newBoard = req.body
  Board.create(newBoard)
  .then(board => res.json(board))
}

module.exports.edit = (req, res, err) => {
  let boardId = req.params.id
  let nameUpdate = req.body

  Board.findOneAndUpdate({ _id: boardId }, nameUpdate, { new: true }, function (err, doc) {
    if (err) {
      console.log('Did not update name')
    } else {
      console.log(doc)
      res.json(doc)
    }
  })
}

module.exports.destroy = (req, res, err) => {
  let boardId = req.params.id
  Board.findOneAndRemove({ _id: boardId }, function(err, doc, result) {
    console.log(doc)
  })
  .then(document => {
    if (document === null) {
      res.json('deleted')
    }
  })
}

'use strict'

const Board = require('../models/Board')

module.exports.index = (req, res, err) => {
  let id = req.params.boardId
  console.log(id)
  Board.findOne({ _id: id})
  .then(board => {
    res.json(board)
  })
}

module.exports.edit = (req, res, err) => {
  let id = req.params.boardId
  let newList = req.body

  Board.findOneAndUpdate({ _id: id }, { $push: { tasks: newList } }, { new: true, upsert: true }, function (err, doc) {
    if (err) {
      console.log('Something went wrong')
    } else {
      console.log(doc)
      res.json(doc)
    }
  })
}

// module.exports.new = (req, res, err) => {
//   let id = req.params.boardId
//   let newTask = req.body.tasks[0]
//   let list = req.body.name
//
//   Board.findOneAndUpdate({ _id: id }, { tasks: { name: list, $push: { tasks: newTask } }}, { new: true, upsert: true }, function (err, doc) {
//     if (err) {
//       console.log('Something went wrong')
//     } else {
//       console.log(doc)
//       res.json(doc)
//     }
//   })
// }

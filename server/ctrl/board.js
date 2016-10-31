'use strict'

const Board = require('../models/Board')

module.exports.index = (req, res, err) => {
  let id = req.params.boardId
  Board.findOne({ _id: id})
  .then(board => {
    res.json(board)
  })
}

module.exports.edit = (req, res, err) => {
  let id = req.params.boardId
  let newList = req.body

  console.log(newList)

  Board.findOneAndUpdate({ _id: id }, { $push: { lists: newList } }, { new: true }, function (err, doc) {
    if (err) {
      console.log('Something went wrong')
    } else {
      res.json(doc)
    }
  })
}

module.exports.new = (req, res, err) => {

  let boardId = req.params.boardId
  let listId = req.params.listId
  let newTask = req.body.taskName

  console.log(newTask)
  console.log(listId)
  console.log(boardId)

  Board.findOne({ _id: boardId })
  .then(board => {
    let listArr = board.lists

    let listIndex
    listArr.forEach((list, index) => {
      if (list._id == listId) {
        console.log(index)
        listIndex = index
      }
    })

    let tasksArr = listArr[listIndex].tasks
    tasksArr.push(newTask)
    board.save()
    res.json(board)
  })
}

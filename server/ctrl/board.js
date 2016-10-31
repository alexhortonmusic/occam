'use strict'

const Board = require('../models/Board')

// gets all lists on a board
module.exports.index = (req, res, err) => {
  let id = req.params.boardId
  Board.findOne({ _id: id})
  .then(board => {
    res.json(board)
  })
}

// adds a new list to a board
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

// adds a new task to a list
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

// deletes a list from a board
module.exports.destroy = (req, res, err) => {
  let boardId = req.params.boardId
  let listId = req.params.listId

  Board.findOne({ _id: boardId})
  .then(board => {
    let listArr = board.lists
    listArr.pull({ _id: listId })
    board.save()
    res.json(board)
  })
}

module.exports.taskDestroy = (req, res, err) => {
  console.log(req.params)

  let boardId = req.params.boardId
  let listId = req.params.listId
  let taskToDelete = req.params.task

  Board.findOne({ _id: boardId })
  .then(board => {
    let listArr = board.lists

    let taskList
    listArr.forEach((list) => {
      if (list._id == listId) {
        taskList = list.tasks
        taskList.forEach((task, index) => {
          if (task === taskToDelete) {
            console.log(task)
            taskList.pull(task)
          }
        })
      }
    })
    board.save()
    res.json(board)
  })
}

module.exports.editList = (req, res, err) => {
  let boardId = req.params.boardId
  let listId = req.params.listId
  let newTitle = req.body.newTitle

  Board.findOne({ _id: boardId})
  .then(board => {
    let listArr = board.lists

    listArr.forEach((list) => {
      if (list._id == listId) {
        list.name = newTitle
        console.log(list.name)
      }
    })
    board.save()
    res.json(board)
  })
}

module.exports.editTask = (req, res, err) => {

}

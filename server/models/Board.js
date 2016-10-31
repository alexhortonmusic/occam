'use strict'

const mongoose = require('mongoose')

let taskSet = new Schema({
  taskList: [String]
})

module.exports = mongoose.model('Board', {
  boardId: String,
  tasks: [taskSet]
})

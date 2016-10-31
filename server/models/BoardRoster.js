'use strict'

const mongoose = require('mongoose')

// let taskList = {
//   name: String,
//   tasks: [String]
// }

let taskSet = {
  name: String,
  tasks: [String]
}

module.exports = mongoose.model('BoardRoster', {
  boardName: {
    type: String,
    required: true
  },
  boardOwnerId: {
    type: String,
    required: true
  },
  members: [String],
  tasks: [ taskSet ]
})

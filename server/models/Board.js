'use strict'

const mongoose = require('mongoose')

let listSet = {
  name: String,
  tasks: [String]
}

module.exports = mongoose.model('Board', {
  boardName: {
    type: String,
    required: true
  },
  boardOwnerId: {
    type: String,
    required: true
  },
  members: [String],
  lists: [ listSet ]
})

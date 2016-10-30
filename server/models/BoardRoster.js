'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('BoardRoster', {
  boardName: {
    type: String,
    required: true
  },
  boardOwnerId: {
    type: String,
    required: true
  },
  members: [String]
})

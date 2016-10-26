'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('BoardRoster', {
  boardName: {
    type: String,
    required: true
  },
  boardOwnerEmail: {
    type: String,
    required: true
  }
  members: [{
    email: String,
    firstName: String,
    lastName: String
  }]
})

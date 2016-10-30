'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Board', {
  boardId: String,
  tasks: [String] 
})

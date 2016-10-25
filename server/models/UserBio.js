'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('UserBio', {
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    lowercase: true,
  },
  gitHub: {
    type: String,
    lowercase: true,
  },
  personalSite: {
    type: String,
    lowercase: true,
  }
})

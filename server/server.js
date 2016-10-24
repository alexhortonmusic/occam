'use strict'

const { json } = require('body-parser')
const { Server } = require('http')
const express = require('express')
const mongoose = require('mongoose')
// const socketio = require('socket.io')
// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)

const app = express()
const server = Server(app)
// const io = socketio(server)

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/occam'
const PORT = process.env.PORT || 3000
app.set('PORT', PORT)

app.use(express.static('client'))
app.use(json())

app.get('/api/login', (req, res) => {
  res.json({ title: 'Login' })
})

const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [HTML5_EMAIL_REGEX, 'Please enter a valid email address'],
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  }
})

app.post('/api/login', (req, res) => {
  const newUser = req.body
  console.log(newUser)
  if (newUser.password === newUser.confirmation) {
    User
    .create(newUser)
    .then(newUser => res.json(newUser))
    .catch(console.error)
  } else {
    res.json({ msg: 'Passwords must match'})
  }
})

mongoose.Promise = Promise

mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})

'use strict'

const { json } = require('body-parser')
const { Server } = require('http')
const express = require('express')
const mongoose = require('mongoose')
// const socketio = require('socket.io')

const app = express()
// const server = Server(app)
// const io = socketio(server)

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/occam'
const PORT = process.env.PORT || 3000

app.use(express.static('client'))
app.use(json())

app.get('/', (req, res) => {
  console.log('hi')
  res.json({ title: 'Howdy' })
})

app.listen(3000)
// mongoose.Promise = Promise
// mongoose.connect(MONGODB_URL, () => {
//   server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
// })

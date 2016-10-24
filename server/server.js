'use strict'

const { json } = require('body-parser')
const { Server } = require('http')
const express = require('express')
const socketio = require('socket.io')

const { connect } = require('../database')

const app = express()
const server = Server(app)
const io = socketio(server)


const PORT = process.env.PORT || 3000

app.use(express.static('client'))
app.use(json())

app.get('/api/login', (req, res) => {
  console.log('hi')
  res.json({ title: 'Hello' })
})

.connect()
  .then(() => {
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  })
  .catch(console.error)

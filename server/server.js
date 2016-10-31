'use strict'

const { json } = require('body-parser')
const { Server } = require('http')
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const routes = require('./routes/')

const app = express()
const server = Server(app)

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/occam'
const PORT = process.env.PORT || 3000
app.set('PORT', PORT)

if (process.env.NODE_ENV !== 'production') {
  app.locals.pretty = true
}

//Null catches
app.locals.user = { email: 'a@b.com' }
app.locals.errors = {}
app.locals.body = {}

// middlewares
app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }),
  secret: 'westworld'
}))

app.use((req, res, next) => {
  app.locals.email = req.session.email
  next()
})

app.use(({ method, url, headers: { 'user-agent': agent }}, res, next) => {
  const timeStamp = new Date()
  next()
})

app.use(express.static('client'))
app.use(json())

// routes
app.use(routes)

// Error handling middleware
app.use((
    err,
    { method, url, headers: { 'user-agent': agent } },
    res,
    next
  ) => {

    if (process.env.NODE_ENV === 'production') {
      res.sendStatus(err.status || 500)
    } else {
      res.set('Content-Type', 'text/plain').send(err.stack)
    }

    const timeStamp = new Date()
    const statusCode = res.statusCode
    const statusMessage = res.statusMessage

    console.error(
      `[${timeStamp}] "(${method} ${url})" Error (${statusCode}): "${statusMessage}"`
    )
    console.error(err.stack)
  }
)

mongoose.Promise = Promise

mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})

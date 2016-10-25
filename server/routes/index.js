'use strict'

const { Router } = require('express')

const router = Router()

const register = require('./register')
const login = require('./login')
const fillOut = require('./fillOut')

router.use(register)
router.use(login)
router.use(fillOut)

router.get('/api/logout', (req, res) => {
  if (req.session.email) {
    res.json(req.session.email)
  } else {
    res.json('not logged in')
  }
})

// guard middleware
router.use((req, res, next) => {
  if (req.session) {
    next()
  } else {
    res.redirect('/login')
  }
})


// router.post('/api/profile', (req, res) => {
//
// })

router.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) throw err
    res.json('logged out')
  })
})

module.exports = router

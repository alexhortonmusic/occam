'use strict'

const { Router } = require('express')

const router = Router()

const register = require('./register')
const login = require('./login')
const fillOut = require('./fillOut')
const profile = require('./profile')

router.use(register)
router.use(login)
router.use(fillOut)
router.use(profile)


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
    // console.log("Middle", req.session.email)
    next()
  } else {
    res.json('must login')
  }
})


router.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      throw err
    }
  })
  res.json('logged out')
})

module.exports = router

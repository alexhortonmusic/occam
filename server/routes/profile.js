'use strict'

const { Router } = require('express')
const profile = require('../ctrl/profile')

const router = Router()

router.get('/api/profile', profile.index)

// router.get('/api/profile', profile.new)
//
// router.post('/api/profile', profile.create)

module.exports = router

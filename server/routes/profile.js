'use strict'

const { Router } = require('express')
const profile = require('../ctrl/profile')

const router = Router()

router.get('/api/profile/:id', profile.index)

router.post('/api/profile/:id', profile.create)

module.exports = router

'use strict'

const { Router } = require('express')
const profile = require('../ctrl/profile')

const router = Router()

router.get('/api/:id', profile.getUser)

router.get('/api/profile/:id', profile.index)

router.post('/api/profile/:id', profile.create)

router.put('/api/profile/:id', profile.edit)

router.delete('/api/profile/:id', profile.destroy)

module.exports = router

'use strict'

const { Router } = require('express')
const register = require('../ctrl/register')

const router = Router()

router.get('/api/register', register.index)

router.post('/api/register', register.create)

module.exports = router

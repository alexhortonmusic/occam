'use strict'

const { Router } = require('express')
const register = require('../ctrl/register')

const router = Router()

router.post('/api/register', register.create)

module.exports = router

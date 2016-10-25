'use strict'

const { Router } = require('express')
const login = require('../ctrl/login')

const router = Router()

router.post('/api/login', login.create)

module.exports = router

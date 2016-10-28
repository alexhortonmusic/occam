'use strict'

const { Router } = require('express')
const fillOut = require('../ctrl/fillOut')

const router = Router()

router.get('/api/fillOut', fillOut.index)

// router.get('/api/fillOut', fillOut.new)
//
router.post('/api/fillOut', fillOut.create)

module.exports = router

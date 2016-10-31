'use strict'

const { Router } = require('express')
const board = require('../ctrl/board')

const router = Router()

router.get('/api/board/:boardId', board.index)

router.put('/api/board/:boardId', board.edit)

// router.patch('/api/board/:boardId', board.new)
//
// router.delete('/api/board/:boardId', board.destroy)

module.exports = router

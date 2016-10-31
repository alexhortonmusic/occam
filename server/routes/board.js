'use strict'

const { Router } = require('express')
const board = require('../ctrl/board')

const router = Router()

router.get('/api/board/:boardId', board.index)

router.patch('/api/board/:boardId', board.edit)

router.put('/api/board/:boardId/:listId', board.new)

router.delete('/api/board/:boardId/:listId', board.destroy)

router.delete('/api/board/:boardId/:listId/:task', board.taskDestroy)

module.exports = router

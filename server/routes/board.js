'use strict'

const { Router } = require('express')
const board = require('../ctrl/board')

const router = Router()

router.get('/api/board/:boardId', board.index)

// adds new list
router.patch('/api/board/:boardId', board.edit)

// adds new task
router.patch('/api/board/:boardId/:listId', board.new)

// deletes list
router.delete('/api/board/:boardId/:listId', board.destroy)

// deletes task
router.delete('/api/board/:boardId/:listId/:task', board.taskDestroy)

// edits list name
router.put('/api/board/:boardId/:listId', board.editList)

// edits task 
// router.put('/api/board/:boardId/:listId/:task', board.editTask)

module.exports = router

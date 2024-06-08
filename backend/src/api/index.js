const express = require('express')
const todo = require('./todo/todo.routes')

const router = express.Router()

router.use('/', todo)

router.get('/', (req, res) => {
	res.json({
		message: 'API - 👋🌎🌍🌏',
	})
})

module.exports = router

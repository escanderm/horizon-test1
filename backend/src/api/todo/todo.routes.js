const express = require('express')
const { addTodoInList, getAllTodos, completeTodo, deleteTodo } = require('./todo.services')

const router = express.Router()

router.get('/getTasks', async (req, res, next) => {
	try {
		const readyData = await getAllTodos()
		if (!readyData) {
			res.status(500).send('Unknown DB error')
		}
		if (readyData.error) {
			res.status(500).send(readyData.message)
		}
		res.json({ success: true, data: readyData })
	} catch (e) {
		next(e)
	}
})

router.post('/addTask', async (req, res, next) => {
	try {
		const { todo } = req.body
		if (!todo) {
			res.status(400)
			throw new Error('You must fill out the form')
		}

		const readyData = await addTodoInList(todo)
		if (!readyData) {
			res.status(500).send('Unknown DB error')
		}
		if (readyData.error) {
			res.status(500).send(readyData.message)
		}
		res.json({ success: true, data: readyData })
	} catch (e) {
		next(e)
	}
})

router.put('/completeTask/:id', async (req, res, next) => {
	try {
		if (!req.params.id) {
			res.status(400)
			throw new Error('You must use todo`s ID')
		}

		const readyData = await completeTodo(req.params.id)
		if (!readyData) {
			res.status(500).send('Unknown DB error')
		}
		if (readyData.error) {
			res.status(500).send(readyData.message)
		}
		res.json({ success: true, data: readyData })
	} catch (e) {
		next(e)
	}
})

router.delete('/deleteTask/:id', async (req, res, next) => {
	try {
		const readyData = await deleteTodo(req.params.id)
		if (!readyData) {
			res.status(500).send('Unknown DB error')
		}
		if (readyData.error) {
			res.status(500).send(readyData.message)
		}
		res.json({ success: true, data: readyData })
	} catch (e) {
		next(e)
	}
})

module.exports = router

const TodoModel = require('../../../mongo/entities/todo.entity')
const res = require('express/lib/response')

async function addTodoInList(todo) {
	try {
		const data = new TodoModel({
			text: todo,
			createdAt: Date.now(),
		})
		await data.save()
		return data
	} catch (e) {
		return {
			error: true,
			message: e.message,
		}
	}
}

async function getAllTodos() {
	try {
		return TodoModel.find()
	} catch (e) {
		return {
			error: true,
			message: e.message,
		}
	}
}

async function completeTodo(id) {
	try {
		const todo = await TodoModel.findById(id)
		if (!todo) {
			return {
				error: true,
				message: 'Todo not found',
			}
		}
		return await TodoModel.findByIdAndUpdate(
			id,
			{ status: todo?.status === 1 ? 0 : 1, updatedAt: Date.now() },
			{ new: true },
		)
	} catch (e) {
		return {
			error: true,
			message: e.message,
		}
	}
}

async function deleteTodo(id) {
	try {
		const todo = await TodoModel.findByIdAndDelete(id)
		if (!todo) {
			return {
				error: true,
				message: 'Todo not found',
			}
		}
		return todo
	} catch (e) {
		return {
			error: true,
			message: e.message,
		}
	}
}

module.exports = { addTodoInList, getAllTodos, completeTodo, deleteTodo }

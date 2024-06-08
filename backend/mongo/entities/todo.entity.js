const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	status: {
		type: Number,
		required: true,
		default: 0,
	},
	createdAt: {
		type: Date,
		required: true,
	},
	updatedAt: {
		type: Date,
	},
})

const TodoModel = mongoose.model('TodoModel', todoSchema)

module.exports = TodoModel

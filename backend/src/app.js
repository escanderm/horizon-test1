const express = require('express')
const connectDB = require('../mongo/mongo')

const api = require('./api')
const app = express()
app.use(express.json())

connectDB().finally()

app.get('/', (req, res) => {
	res.json({ message: '✨👋🌎🌍🌏✨' })
})

const port = process.env.PORT || 3000

app.use('/api', api)
module.exports = app

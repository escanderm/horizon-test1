const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://root:example@127.0.0.1:27017/', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected to MongoDB')
	} catch (e) {
		console.log('error', e?.message)
		process.exit(1)
	}
}

module.exports = connectDB

const axios = require('axios')
const assert = require('assert')
const { response } = require('express')

describe('e2e test ', () => {
	//this.timeout(30000)

	it('Testing /api/addTask', async () => {
		const response = await axios.post('http://localhost:3000/api/addTask', {
			todo: 'Test Task 1',
		})
		assert.equal(response.status, 201, 'Servers response is not ok')
		assert.equal(response.data.success, true, 'Save response is not ok')
		assert(response.data.success, 'Error save data')
		if (response.data.success) {
			await axios.delete(`http://localhost:3000/api/deleteTask/${response.data.data._id}`)
		}
	})

	it('Testing /api/getTasks', async () => {
		const response = await axios.get('http://localhost:3000/api/getTasks')

		assert.equal(response.status, 200, 'Servers response is not ok')
		assert.equal(response.data.success, true, 'Save response is not ok')
		assert(response.data.success, 'Error get data')
	})

	it('Testing /api/completeTask', async () => {
		const testTask = await axios.post('http://localhost:3000/api/addTask', {
			todo: 'Test Task 1',
		})
		const id = testTask.data.data._id
		const oldStatus = testTask.data.data.status
		const response = await axios.put(`http://localhost:3000/api/completeTask/${id}`)
		assert.equal(response.status, 200, 'Servers response is not ok')
		assert.equal(response.data.success, true, 'Complete response is not ok')
		assert(response.data.data.status !== oldStatus, 'Error update data')
		if (testTask.data.success) {
			await axios.delete(`http://localhost:3000/api/deleteTask/${id}`)
		}
	})
})

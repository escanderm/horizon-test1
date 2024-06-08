import axios from "axios";

export const getAllLists = async () => {
	try {
		const list = await axios.get('http://localhost:3000/api/getTasks')
		if(!list.data) {
			console.error('Could not fetch get data, no data.', list.status)
			return false
		}
		return await list.data
	} catch (e) {
		console.error('Could not fetch get data.', e?.message)
		return false
	}
}

export const updateList = async (id) => {
	const response = await axios.put(`http://localhost:3000/api/completeTask/${id}`)
	if(!response.data.success) {
		console.error('Could not update data.', response.status)
	}
}

export const addNewTask = async (text) => {
	const response = await axios.post('http://localhost:3000/api/addTask', {
		todo: text,
	})
	if(!response.data.success) {
		console.error('Could not add data.', response.status)
		return false
	}
}

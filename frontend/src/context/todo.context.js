'use client'
import { createContext, useEffect, useState } from 'react'
import { addNewTask, getAllLists, updateList } from '@/utils/api'

export const TodoContext = createContext({})

export const TodoProvider = ({ children }) => {
	const [list, setList] = useState([])

	useEffect( () => {
		getAndSetList()
	},[])

	const getAndSetList = async () => {
		const defList = await getAllLists()
		setList(defList.data.sort((a, b) => (a.id < b.id ? 1 : -1)))
	}

	const updateTask = async (id) => {
		await updateList(id)
		getAndSetList()
	}

	const addTask = async (text) => {
		await addNewTask(text)
		getAndSetList()
	}

	return (
		<TodoContext.Provider value={{list, updateTask, addTask}}>{children}</TodoContext.Provider>
	)
}


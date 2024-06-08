'use client'
import { useState } from 'react'
import Modal from '@/components/Modal'

const AddTask = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
		<div className={'flex flex-row justify-end'}>
			<div className={'bg-blue-300 rounded-md hover:bg-opacity-70 cursor-pointer py-2 px-3'} onClick={()=> setShowModal(!showModal)}>Add Note</div>
		</div>
			<Modal showModal={showModal} setShowModal={setShowModal}/>
		</>
	)
}

export default AddTask

import { useContext, useState } from 'react'
import { TodoContext } from '@/context/todo.context'

const Modal = ({showModal, setShowModal}) => {
	if (!showModal) return ('')
	const [textValue, setTextValue] = useState('')
	const {addTask} = useContext(TodoContext)

	const addHandler = () => {
		if (textValue.length < 10) return
		addTask(textValue)
		setShowModal(false)
	}

	return (
		<div className={'absolute top-0 left-0 w-full bg-black h-full bg-opacity-70 flex flex-col items-center justify-center'}>
			<div className={'bg-white max-w-[600px] p-16  flex flex-col relative'}>
				<div className={'text-lg font-[600] mt-4'}>ADD TASK</div>
				<div className={'border mt-4'}>
					<textarea className={'h-28 p-4'} rows='10' cols='30' value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
				</div>
				<div className={'mt-4 flex justify-end'}>
					<div className={'bg-blue-300 rounded-md hover:bg-opacity-70 cursor-pointer py-2 px-3'} onClick={addHandler}>ADD TASK</div>
				</div>
				<div className={'absolute top-5 right-5 text-3xl font-bold cursor-pointer hover:opacity-70'} onClick={()=>setShowModal(false)}>X</div>
			</div>
		</div>
	)
}

export default Modal

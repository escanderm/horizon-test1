import PropTypes from 'prop-types'
import moment from 'moment'
import { TodoContext } from '@/context/todo.context'
import { useContext } from 'react'

const ListItem = ({ item }) => {
	const {updateTask} = useContext(TodoContext)

	return (
		<div className={'border-b border-gray-400 flex flex-col justify-start text-lg py-4 text-left'}>
			<div className={'text-sm mb-2'}>Created @ {moment(item.createdAt).format("DD-MM-YYYY, hh:mm:ss")}</div>
			<div className="flex flex-row items-center justify-start text-lg">
				<div className={`${item.status === 1 && 'line-through'} flex-1 text-left`}>
					{item.text}
				</div>
				<div className={`${item.status === 1 ? 'bg-amber-400' : 'bg-green-400'} rounded-md py-2 px-3 cursor-pointer hover:bg-opacity-70`} onClick={() => updateTask(item._id)}>
					{item.status === 1 ? 'ARCHIVE' : 'DONE'}
				</div>
			</div>
			<div className={'text-sm mb-2 text-right'}>{item.updatedAt && 'Updated @ ' + moment(item.updatedAt).format("DD-MM-YYYY, hh:mm:ss")}</div>
		</div>
	)
}

export default ListItem

ListItem.propTypes = {
	item: {
		text: PropTypes.string,
		status: PropTypes.number,
		createdAt: PropTypes.string,
		_id: PropTypes.string
	},
}

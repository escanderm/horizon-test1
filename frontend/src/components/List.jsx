'use client'
import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '@/context/todo.context'
import ListItem from '@/components/ListItem'
import Search from '@/components/Search'

const List = () => {
	const [search, setSearch] = useState('');
	const { list } = useContext(TodoContext)

	return (
		<>
			<Search search={search} setSearch={setSearch} />
			<div className={'mt-7'}>
				<div>
					{list.length ? list
						.filter((item) => item.text.includes(search))
						.map((item, index) => <ListItem key={index} item={item} />) : <div>No todos found...</div>}
				</div>
			</div>
		</>
	)
}

export default List

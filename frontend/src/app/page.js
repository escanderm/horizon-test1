import Search from '@/components/Search'
import List from '@/components/List'
import AddTask from '@/components/AddTask'

export default function Home() {
	return (
		<div className={'max-w-[1100px] mx-auto text-center py-20 px-4'}>
			<div className={'text-2xl font-bold'}>TODO LIST</div>
			<AddTask />
			<List />
		</div>
	)
}

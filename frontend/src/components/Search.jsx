const Search = ({search, setSearch}) => {

	return (
		<div className={'mt-7'}>
			<div>
				<input onChange={e => setSearch(e.target.value)} value={search} className={'border py-2 px-3'} placeholder={'Search notes...'}/>
			</div>
		</div>
	)
}

export default Search

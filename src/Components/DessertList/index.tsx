import DessertCard from './DessertCard'
import data from 'Assets/Data/data.json'

function DessertList() {


	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-max'>
			{data.map((item) => (
				<DessertCard key={item.name} item={item} />
			))}
		</div>
	)
}

export default DessertList

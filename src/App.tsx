import { DessertList } from 'Components'

function App() {
	return (
		<main className='min-h-screen bg-rose-50 pt-20 pl-28 mb-20'>
			<div className='w-max h-max flex flex-col gap-8'>
				<h2 className='text-heading-l'>Desserts</h2>
				<DessertList />
			</div>
		</main>
	)
}

export default App

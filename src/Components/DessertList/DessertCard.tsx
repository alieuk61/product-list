import { ICartItem } from 'Types'
import { AddToCartButton } from 'Components'

interface Props {
	item: ICartItem
}

function DessertCard({ item }: Props) {
	return (
		<div className='max-w-sm rounded-lg overflow-hidden'>
			<div className='relative h-[240px] w-[250px] mb-6'>
				<img className='rounded-lg' src={item.image.desktop} alt={item.name} />
				<AddToCartButton item={item} />
			</div>
			<div className='px-6 py-4'>
				<p className='text-rose-500 text-body-s mb-1'>{item.category}</p>
				<h2 className='font-bold text-rose-900 mb-1'>{item.name}</h2>
				<p className='text-red text-body-l leading-none'>${item.price.toFixed(2)}</p>
			</div>
		</div>
	)
}

export default DessertCard

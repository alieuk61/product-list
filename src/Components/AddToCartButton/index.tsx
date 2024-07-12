import { useState, useEffect } from 'react'
import { useProductContext } from 'Contexts'
import { ICartItem } from 'Types'
import {
	IconAddToCart,
	IconDecrementQuantity,
	IconIncrementQuantity
} from 'Assets/Icons'

interface Props {
	item: ICartItem
}

function AddToCartButton({ item }: Props) {
	const { cart, addItemToCart, incrementItemQuantity, decrementItemQuantity } =
		useProductContext()
	const [inCart, setInCart] = useState(false)
	const [quantity, setQuantity] = useState(0)

	useEffect(() => {
		const cartItem = cart.find((cartItem) => cartItem.name === item.name)
		if (cartItem) {
			setInCart(true)
			setQuantity(cartItem.quantity)
		} else {
			setInCart(false)
			setQuantity(0)
		}
	}, [cart, item.name])

	const handleAddToCart = () => {
		addItemToCart({ ...item, quantity: 1 })
	}

	const handleIncrement = () => {
		incrementItemQuantity(item.name)
	}

	const handleDecrement = () => {
		decrementItemQuantity(item.name)
	}

	return (
		<div className='absolute left-0 right-0 mx-auto w-40 -bottom-[22px]'>
			{inCart && quantity > 0 ? (
				<div className='w-40 h-11 rounded-[999px] bg-red flex space-x-2 p-3 items-center justify-between'>
					<button
						className='bg-red-500 text-white p-2 rounded'
						onClick={handleDecrement}
					>
						<IconDecrementQuantity />
					</button>
					<span className='text-body-s text-white'>{quantity}</span>
					<button
						className='bg-green-500 text-white p-2 rounded'
						onClick={handleIncrement}
					>
						<IconIncrementQuantity />
					</button>
				</div>
			) : (
				<button
					className='bg-white border border-rose-400 border-solid flex items-center gap-2 justify-center text-rose-900 w-40 h-11 py-2 px-4 rounded-[999px] text-body-s'
					onClick={handleAddToCart}
				>
					<IconAddToCart />
					Add to Cart
				</button>
			)}
		</div>
	)
}

export default AddToCartButton

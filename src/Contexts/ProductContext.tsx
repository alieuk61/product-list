import {
	createContext,
	useContext,
	useState,
	useMemo,
	PropsWithChildren
} from 'react'
import { ICartItem } from 'Types'

const ProductContext = createContext<IProductContext | undefined>(undefined)

export interface IProductContext {
	cart: ICartItem[]
	addItemToCart: (item: ICartItem) => void
	removeItemFromCart: (id: string) => void
	incrementItemQuantity: (name: string) => void
	decrementItemQuantity: (name: string) => void
	clearCart: () => void
	totalItems: number
	totalPrice: number
	orderConfirmed: boolean
	confirmOrder: () => void
	newOrder: () => void
}

export const ProductProvider = ({ children }: PropsWithChildren) => {
	const [cart, setCart] = useState<ICartItem[]>([])
	const [orderConfirmed, setOrderConfirmed] = useState(false)

	const addItemToCart = (item: ICartItem) => {
		setCart((prevCart) => {
			const itemIndex = prevCart.findIndex(
				(cartItem) => cartItem.name === item.name
			)
			if (itemIndex !== -1) {
				const updatedCart = [...prevCart]
				updatedCart[itemIndex].quantity += item.quantity
				return updatedCart
			}
			return [...prevCart, item]
		})
	}

	const removeItemFromCart = (name: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.name !== name))
	}

	const incrementItemQuantity = (name: string) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.name === name ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}

	const decrementItemQuantity = (name: string) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.name === name && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		)
	}

	const clearCart = () => {
		setCart([])
	}

	const totalItems = useMemo(
		() => cart.reduce((sum, item) => sum + item.quantity, 0),
		[cart]
	)
	const totalPrice = useMemo(
		() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
		[cart]
	)

	const confirmOrder = () => setOrderConfirmed(true)

	const newOrder = () => {
		clearCart()
		setOrderConfirmed(false)
	}

	return (
		<ProductContext.Provider
			value={{
				cart,
				addItemToCart,
				removeItemFromCart,
				incrementItemQuantity,
				decrementItemQuantity,
				clearCart,
				totalItems,
				totalPrice,
				confirmOrder,
				newOrder,
				orderConfirmed
			}}
		>
			{children}
		</ProductContext.Provider>
	)
}

export const useCartContext = () => {
	const context = useContext(ProductContext)
	if (!context) {
		throw new Error('useCartContext must be used within a ProductProvider')
	}
	return context
}

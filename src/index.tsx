import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ProductProvider } from 'Contexts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<ProductProvider>
			<App />
		</ProductProvider>
	</React.StrictMode>
)

reportWebVitals()

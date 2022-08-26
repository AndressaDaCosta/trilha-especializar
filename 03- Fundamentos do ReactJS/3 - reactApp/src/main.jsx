import React from 'react'
import ReactDOM from 'react-dom/client'
// { por não ser export defaut }
import { Home } from './pages/Home'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
)

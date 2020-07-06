import React from 'react'

import './App.css'

import StopsFilter from './components/StopsFilter'
import PriceFilter from './components/PriceFilter'
import TicketList from './components/TicketList'
import Logo from './components/Logo'

function App() {
	return (
		<main className="App">
			<div className="App-logo">
				<Logo />
			</div>
			<div className="App-row">
				<StopsFilter />
				<div className="App-column">
					<PriceFilter />
					<TicketList />
				</div>
			</div>
		</main>
	)
}

export default App

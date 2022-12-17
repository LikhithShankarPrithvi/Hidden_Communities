import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
		</div>
	)
}

export default App

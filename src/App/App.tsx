// REACT
import React, { Dispatch, SetStateAction, useState } from 'react'

// HOT LOADER
import { hot } from 'react-hot-loader'

// COMPONENTES
import Navbar from 'Components/Navbar/Navbar'

const App: React.FC = () => {
	const [count, setCount]: [number, Dispatch<SetStateAction<number>>] = useState(0)

	return (
		<div>
			<Navbar />
			<h1>Hello</h1>
			<button onClick={() => setCount(count + 1)}>Aumentar</button>
			<button onClick={() => setCount(count - 1)}>Disminuir</button>
			<h2>{count}</h2>
		</div>
	)
}

export default hot(module)(App)

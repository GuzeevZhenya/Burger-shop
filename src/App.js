import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import {Menu} from './Components/Menu/Menu'

const App = () => {
	return (
		<>
			<div className='App'>
				<NavBar />
				<Menu />
			</div>
		</>
	);
}

export default App;

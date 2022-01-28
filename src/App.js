import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import {Menu} from './Components/Menu/Menu'
import Modal from './Components/Modal/Modal';
import { Order } from './Components/Order/Order';
import { UseOpenItem } from './Hooks/useOpenItem';
import { useOrders } from './Hooks/useOrders';

const App = () => {
	const openItem = UseOpenItem();
	const orders = useOrders();

	return (
		<>
			<div className='App'>
				<NavBar />
				<Order {...orders}/>
				<Menu {...openItem} />
				{openItem.openItem && <Modal {...openItem}  {...orders} />}
			</div>
		</>
	);
}

export default App;

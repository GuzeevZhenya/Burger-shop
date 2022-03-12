import React from 'react';
import Trash from '../../img/trash.svg';
import './OrderListItem.css';
import {totalPriceItems} from '../Modal/Modal'

const buttonStyle = {
	width: '24px',
	height: '24px',
	borderColor: 'transparent',
	cursor: 'pointer',
	backgroundImage: `url(${Trash})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundColor:'inherit',
	backgroundSize:'cover'
}

export const OrderListItem = ({ orders,index,deleteItem }) => {
	
	const topping = orders.topping.filter(item => item.checked).map(item=>item.name).join(', ');
	return (
		<>
			<li className='order-item'>
				<span className='order-name'>{orders.name}-{orders.choice}</span>
				<span>{orders.count}</span>
				<span className='order-price'>{totalPriceItems(orders).toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</span>
				<button style={buttonStyle} onClick={()=>deleteItem(index)}></button>
					{topping && <div className='order-toppings'>{topping}</div>}
			</li>
		</>
	);
}

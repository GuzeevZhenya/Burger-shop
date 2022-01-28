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

export const OrderListItem = ({ orders })=> {
	return (
		<>
			<li className='order-item'>
				<span className='order-name'>{orders.name}</span>
				<span>{orders.count}</span>
				<span className='order-price'>{totalPriceItems(orders).toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</span>
					<button style={buttonStyle}></button>
			</li>
		</>
	);
}

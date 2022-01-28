import React from 'react';
import './Order.css';
import Button from '../Button/Button';
import { OrderListItem } from '../OrderListItem/OrderListItem';
import {totalPriceItems} from '../Modal/Modal'

export const Order = ({ orders }) => {

	const total = orders.reduce((result, order) => 
		totalPriceItems(order) + result, 0);
	
	const totalCounter = orders.reduce((result, order)=> order.count + result, 0);
	 
	return (
		<div className='order'>
			<h1 className='order-title'>Ваш заказ</h1>
			<div className='order-content'>
				<ul className="order-list">
					{
						orders.length ? orders.map(item =>
							<OrderListItem orders={item}/>
						) : <p>Пусто</p>
					}
				</ul>
			</div>
			<div className="order-total">
				<span>Итого:</span>
				<span>{totalCounter}</span>
				<span>{total.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</span>
			</div>
			<Button buttonName={'Оформить'}/>
		</div>
	);
}

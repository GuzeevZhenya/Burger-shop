import React from 'react';
import './ListItem.css';
import card from '../../img/banner.png'


export const ListItem = ({ itemList }) => {
	console.log(card)
	return (
		<ul className='list'>
			{itemList.map(item => (
				<li className='list-item' key={item.id}>
					<img src={item.img}/>
					<p>{item.name}</p>
					<p>{item.price.toLocaleString('ru-Ru',{style:'currency',currency:'RUB'})}</p>
				</li>
			))}
		</ul>		
	);
}

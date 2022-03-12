import React from 'react';
import './ListItem.css';


export const ListItem = ({ itemList, setOpenItem }) => {
	return (
		<ul className='list'>
			{itemList.map(item => (
				<li className='list-item' key={item.id}>
					<img src={item.img} alt={item.name}
						onClick={() => setOpenItem(item)} />
					<p>{item.name}</p>
					<p>{item.price.toLocaleString('en-US',{style:'currency',currency:'EUR'})}</p>
				</li>
			))}
		</ul>		
	);
}

import React from 'react';
import './Menu.css'
import { dbMenu } from '../DBMenu';
import {ListItem} from '../ListItem/ListItem'

export const Menu = () => {
	return (
		<main className='main-menu'>
			<section>
				<h2>Бургеры</h2>
				<ListItem itemList={dbMenu.burger}/>
			</section>
			<section>
				<h2>Закуски и напитки</h2>
			<ListItem itemList={dbMenu.other}/>
		</section>
		</main>
	);
}



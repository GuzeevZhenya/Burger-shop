import React from 'react';
import './Menu.css'
import { dbMenu } from '../DBMenu';
import {ListItem} from '../ListItem/ListItem'

export const Menu = ({ setOpenItem }) => {
	return (
		<main className='main-menu'>
			<section>
				<h2 className='main-menu__title'>Бургеры</h2>
				<ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
			</section>
			<section>
				<h2 className='main-menu__title'>Закуски и напитки</h2>
			<ListItem itemList={dbMenu.other}  setOpenItem={setOpenItem}/>
		</section>
		</main>
	);
}



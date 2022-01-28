import React from 'react';
import './NavBar.css'
import logIn from '../../img/sign.svg';

export const NavBar = ()=> {
	return (
		<div className='navBar'>
			<div className='navBar-logo'>
				<img src='https://burger-king.by/local/templates/main/images/logo-new.svg' alt="logo" />
				
				<h1>Burger-King</h1>
			</div>
			<button className='navBar-button'>
				<img src={logIn} alt='log in'/>
				Log in
			</button>
		</div>
	);
}

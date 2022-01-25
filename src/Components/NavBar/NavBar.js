import React from 'react';
import './NavBar.css'
import LogoImg from '../../img/logo.svg';
import logIn from '../../img/sign.svg';

export const NavBar = ()=> {
	return (
		<div className='navBar'>
			<div className='navBar-logo'>
				<img src={LogoImg} alt="logo" />
				
				<h1>Burger-King</h1>
			</div>
			<button className='navBar-button'>
				<img src={logIn} alt='log in'/>
				Log in
			</button>
		</div>
	);
}

import React from 'react';
import './Button.css'


export default function Button({buttonName,buttonFuntion}) {
	return (
		<button onClick={buttonFuntion} className='button'>{buttonName}</button>
	);
}

import React from 'react';
import './Button.css'


export default function Button({buttonName,buttonFuntion,disabled}) {
	return ( 
		<button disabled={disabled} onClick={buttonFuntion} className='button'>{buttonName}</button>
	);
}

import {useState} from 'react';

const getTopping = toppings => toppings.map(item => (
	{name:item,checked:false}
))


export const useTopping = (openItem) => {
	const [toppings, setToppings] = useState(getTopping(openItem.toppings));

	const checkToppings = index => {
		setToppings(toppings.map((item, i) => {
			const newItem = {...item}
			if (i === index) {
				newItem.checked = !newItem.cheked;
			}
			return newItem
		}))
	}
	return {toppings,checkToppings}
}
	






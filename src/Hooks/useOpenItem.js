import {useState} from 'react';

export const UseOpenItem = () => {
	const [openItem, setOpenItem] = useState(null);
	return {openItem,setOpenItem}
}

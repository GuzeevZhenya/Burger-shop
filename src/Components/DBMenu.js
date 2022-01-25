export const dbMenu = {
	burger: [
		{
			name: 'JS Burger',
			img: '/menu/js-burger.png',
			id: 1,
			price: 250,
			toppings: ['Бекон', 'Кетчуп', 'Сыр Чеддер', 'Огурцы', 'Помидор', 'Халапеньо'],
		},
		{
			name: 'Borsh Burger',
			img: '../src/img/menu/black-burger.png',
			id: 2,
			price: 499.9,
			toppings: ['Бекон', 'Красный лук'],
		},
		{
			name: 'Freckles Burger',
			img: '/menu/freckles-burger.png',
			id: 3,
			price: 350,
			toppings: ['Ананас', 'Майонец'],
		},
		{
			name: 'Timon Burger',
			img: '/menu/black-burger.png',
			id: 4,
			price: 150,
		},
		{
			name: 'React Burger',
			img: '/menu/react-burger.png',
			id: 5,
			price: 299.9,
			toppings: ['Кетчуп', 'Сыр Чеддер'],
		},
		{
			name: 'Sun Burger',
			img: '/menu/sun-burger.png',
			id: 6,
			price: 200,
			toppings: ['Сыр Чеддер', 'Красный лук'],
		},
	],
	other: [
		{
			name: 'Coka',
			img: '/menu/soda.png',
			id: 1,
			price: 50,
			choices: ['Coca-cola', 'Fanta', 'Mirinda', 'Sprite'],
		},
		{
			name: 'Чайкофф',
			img: '/menu/tea.png',
			id: 2,
			price: 70,
			choices: ['Черный', 'Зеленый'],
		},
		{
			name: 'Лукошко Фри',
			img: '/menu/french-fries.png',
			id: 3,
			price: 75,
		},
		{
			name: 'Нагиевцы',
			img: '/menu/nuggets.png',
			id: 4,
			price: 100,
			choices: ['Филе', 'Крылья'],
		},
		{
			name: 'Кофе',
			img: '/menu/coffee.png',
			id: 5,
			price: 150,
			choices: ['Эспрессо', 'Капучино'],
		},
		{
			name: 'Гринч',
			img: '/menu/green-coffee.png',
			id: 6,
			price: 175.25
		},
	]
};



// export const dbMenu = {
// 	burger: [
// 		{
// 			name: 'Биг Тейсти Три сыра',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%91%D0%B8%D0%B3-%D0%A2%D0%B5%D0%B9%D1%81%D1%82%D0%B8-3-%D1%81%D1%8B%D1%80%D0%B0.png',
// 			id: 1,
// 			price: 10.30,
// 			toppings: ['Бекон', 'Кетчуп', 'Сыр Чеддер', 'Огурцы', 'Помидор', 'Халапеньо'],
// 		},
// 		{
// 			name: 'МакЧикен™ Премьер',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD-%D0%BF%D1%80%D0%B5%D0%BC%D1%8C%D0%B5%D1%80.png',
// 			id: 2,
// 			price: 6.90,
// 			toppings: ['Бекон', 'Красный лук'],
// 		},
// 		{
// 			name: 'Биг Тейсти',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%91%D0%B8%D0%B3-%D0%A2%D0%B5%D0%B9%D1%81%D1%82%D0%B8.png',
// 			id: 3,
// 			price: 9.50,
// 			toppings: ['Ананас', 'Майонец'],
// 		},
// 		{
// 			name: 'Тройной чизбургер',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/_%D0%A2%D1%80%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9%D0%A7%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80.png',
// 			id: 4,
// 			price: 150,
// 		},
// 		{
// 			name: 'Биг Мак™',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%91%D0%B8%D0%B3-%D0%9C%D0%B0%D0%BA.png',
// 			id: 5,
// 			price: 7.20,
// 			toppings: ['Кетчуп', 'Сыр Чеддер'],
// 		},
// 		{
// 			name: 'Роял',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%A0%D0%BE%D1%8F%D0%BB-%D0%A7%D0%B8%D0%B7.png',
// 			id: 6,
// 			price: 6.30,
// 			toppings: ['Сыр Чеддер', 'Красный лук'],
// 		},
// 	],
// 	other: [
// 		{
// 			name: 'Молочный коктейль шоколадный',
// 			img: 'https://mcdonalds.by/images/product-images/Desserts/Menuby-choco-shake.jpg',
// 			id: 1,
// 			price: 50,
// 			choices: ['Coca-cola', 'Fanta', 'Mirinda', 'Sprite'],
// 		},
// 		{
// 			name: 'МакФлурри™ карамельный с вафельно-шоколадной крошкой',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B/%D0%9C%D0%B0%D0%BA%D1%84%D0%BB%D1%83%D1%80%D1%80%D0%B8-%D0%BA%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%B0.png',
// 			id: 2,
// 			price: 70,
// 			choices: ['Черный', 'Зеленый'],
// 		},
// 		{
// 			name: 'Молочный коктейль ванильный',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B/Menuby-vanila-shake.jpg',
// 			id: 3,
// 			price: 75,
// 		},
// 		{
// 			name: 'Нагиевцы',
// 			img: '/menu/nuggets.png',
// 			id: 4,
// 			price: 3.40,
// 			choices: ['Филе', 'Крылья'],
// 		},
// 		{
// 			name: 'МакСанди™ клубничный',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B/%D0%9C%D0%B0%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8-%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4.png',
// 			id: 5,
// 			price: 3.20,
// 			choices: ['Эспрессо', 'Капучино'],
// 		},
// 		{
// 			name: 'МакСанди™ шоколадный',
// 			img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B/%D0%9C%D0%B0%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8-%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4.png',
// 			id: 6,
// 			price: 3.00
// 		},
// 	]
// };


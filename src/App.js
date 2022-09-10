import Header from './components/Header';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Modal from './components/Modal';
import {
	updateCartTotal,
	initMyListToSession,
	initializeSessionStorage,
} from './helpers';
import { useState, useEffect } from 'react';

const MENU = [
	{
		id: 0,
		name: 'Sushi',
		subtitle: 'Finest fish and veggies',
		price: 22.99,
		qty: '0',
	},
	{
		id: 1,
		name: 'Schnitzel',
		subtitle: 'A german specialty',
		price: 16.5,
		qty: '0',
	},
	{
		id: 2,
		name: 'BBQ Burger',
		subtitle: 'American, raw, meaty',
		price: 12.99,
		qty: '0',
	},
	{
		id: 3,
		name: 'Green Bowl',
		subtitle: 'Healthy...and green...',
		price: 18.99,
		qty: '0',
	},
];

function App() {
	let tqty = sessionStorage.getItem('tQty');
	let tprice = sessionStorage.getItem('tPrice');
	const [myCart, setmyCart] = useState({ tqty: tqty | 0, tprice: tprice | 0 });
	const [modalView, setmodalView] = useState(false);
	const [myList, setmyList] = useState(initMyListToSession(MENU));

	useEffect(() => {
		initializeSessionStorage(myList);

		return () => {};
		// eslint-disable-next-line
	}, []);

	function updateCart(content) {
		sessionStorage.setItem(content.name, content.val);
		updateCartTotal();
		tqty = sessionStorage.getItem('tQty');
		tprice = sessionStorage.getItem('tPrice');
		setmyCart({ tqty: tqty, tprice: tprice });
		setmyList((currState) => {
			let newList = [...currState];
			newList[content.id].qty = content.val.split(' * ')[0];
			return newList;
		});
	}
	function handleViewCart() {
		window.scrollTo(0, 0);
		setmodalView((currState) => {
			return currState ? false : true;
		});
	}
	function orderHandler(x) {
		let tqty = 0;
		let newArr = [];
		x.items.forEach((el) => {
			newArr.push({
				item_id: el.id,
				name: el.name,
				qty: el.qty,
				price: el.price,
			});
			tqty += parseInt(el.qty);
		});
		newArr.push({
			item_id: '-',
			name: 'TOTAL:',
			qty: tqty,
			price: parseFloat(x.total),
		});
		console.table(newArr);
		sessionStorage.clear();
		setmyCart({ tqty: tqty | 0, tprice: tprice | 0 });
		initializeSessionStorage(myList);
		setmyList(initMyListToSession(MENU));
		handleViewCart();
		document.getElementById('qtybadge_header').innerHTML = '0';
	}
	return (
		<div>
			{modalView ? (
				<Modal
					raise={updateCart}
					cart={myList}
					close={handleViewCart}
					order={orderHandler}
				/>
			) : (
				<></>
			)}
			<Header raise={handleViewCart} cart={myCart} />
			<Intro />
			<Menu raise={updateCart} MENU={myList} />
		</div>
	);
}

export default App;

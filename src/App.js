import Header from './components/Header';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Modal from './components/Modal';
import { updateCartTotal } from './helpers';
import { useState } from 'react';

function App() {
	let tqty = sessionStorage.getItem('tQty');
	let tprice = sessionStorage.getItem('tPrice');
	const [myCart, setmyCart] = useState({ tqty: tqty | 0, tprice: tprice | 0 });

	function updateCart(content) {
		console.log(content);
		sessionStorage.setItem(content.key, content.val);
		updateCartTotal();
		tqty = sessionStorage.getItem('tQty');
		tprice = sessionStorage.getItem('tPrice');
		setmyCart({ tqty: tqty, tprice: tprice });
	}
	return (
		<div>
			<Modal />
			<Header cart={myCart} />
			<Intro />
			<Menu raise={updateCart} />
		</div>
	);
}

export default App;

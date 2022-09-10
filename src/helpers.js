export function updateCartTotal() {
	let object = sessionStorage;
	let tQty = 0;
	let tPrice = 0;
	for (const key in object) {
		if (typeof object[key] === 'string' && object[key].split(' * ')[1]) {
			let val = sessionStorage.getItem(key);
			tQty += parseInt(val.split(' * ')[0]);
			tPrice += parseFloat(val.split(' * ')[1]) * parseInt(val.split(' * ')[0]);
		}
	}
	tPrice = tPrice.toFixed(2);
	sessionStorage.setItem('tQty', tQty);
	sessionStorage.setItem('tPrice', tPrice);
}

export function formatSessionOrders() {
	let object = sessionStorage;
	let arr = [];
	for (const key in object) {
		if (typeof object[key] === 'string' && object[key].split(' * ')[1]) {
			const num = object[key].split(' * ');
			const qty = num[0];
			const price = num[1];
			const total = (parseFloat(price) * parseInt(qty)).toFixed(2);

			const entry = { item: key, qty: qty, price: price, total: total };
			if (parseInt(num) > 0) {
				arr.push(entry);
			}
		}
	}
	return arr;
}
export function initializeSessionStorage(MENU) {
	MENU.forEach((el) => {
		if (!sessionStorage.getItem(el.name)) {
			sessionStorage.setItem(el.name, `0 * ${el.price}`);
		}
	});
}

export function initMyListToSession(myList) {
	let object = sessionStorage;
	for (const key in object) {
		if (typeof object[key] === 'string' && object[key].split(' * ')[1]) {
			const num = object[key].split(' * ');
			const qty = num[0];
			myList.forEach((el) => {
				if (el.name === key) {
					el.qty = qty;
				}
			});
		}
	}
	return myList;
}
export function zeroOutMyList(MENU) {}

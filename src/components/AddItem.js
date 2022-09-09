import { useState, useEffect } from 'react';
import s from 'styled-components';

const AddItem = (props) => {
	const [qtyState, setQtyState] = useState({
		item: props.item,
		qty: sessionStorage.getItem(props.item).split(' * ')[0] | '0',
	});

	useEffect(() => {
		if (sessionStorage.getItem(props.item)) {
			let val = sessionStorage.getItem(props.item);
			val ? console.log('ok') : sessionStorage.setItem(props.item, '0 * 0');
		} else {
			sessionStorage.setItem(props.item, '0');
		}
		return () => {};
	}, [props.item]);

	function handleQty(x) {
		setQtyState((currState) => {
			let val = parseInt(currState.qty) + parseInt(x);
			let obj = { key: props.item, val: val + ' * ' + props.price };
			props.raise(obj);
			return { name: props.item, qty: val };
		});
	}
	function increaseBtn() {
		handleQty(1);
	}
	function decreaseBtn() {
		const el = document.getElementById(`input_${props.itemID}`);
		if (parseInt(el.innerHTML) > 0) {
			handleQty(-1);
		}
	}
	return (
		<Div>
			<label>Amount |</label>
			<Input id={`input_${props.itemID}`}>{qtyState.qty}</Input>
			<Decrease onClick={decreaseBtn}>▼</Decrease>
			<Increase onClick={increaseBtn}>⯅</Increase>
		</Div>
	);
};
let Div = s.div`
width:125px;
text-align:center;
margin-left:auto;
`;

let Input = s.span`
width:40px;
margin-left: 10px;
font-weight: bolder;
font-size: 20px;
text-align: center;
`;

let Button = s.button`

  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  width:60px;

&focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

&hover {
  background-color: #2c974b;
}

&focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

&disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

&active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
`;
let Decrease = s(Button)`
text-align: center;
margin-right: 5px;
background-color:red;

`;
let Increase = s(Button)`
`;
export default AddItem;

import s from 'styled-components';
const CartFooter = (props) => {
	let grandTotal = 0;
	props.item.forEach((el) => {
		grandTotal += parseInt(el.qty) * parseFloat(el.price);
	});
	function closeHandler() {
		props.raise(true);
	}
	function orderHandler() {
		props.order({ total: grandTotal.toFixed(2) });
	}
	return (
		<Div>
			<S>Total: </S>
			<S2>${grandTotal.toFixed(2)}</S2>
			<Div2>
				<Button
					onClick={closeHandler}
					style={{ marginRight: '5px', backgroundColor: 'red' }}
				>
					Close
				</Button>
				<Button onClick={orderHandler}>Order</Button>
			</Div2>
		</Div>
	);
};
let Div2 = s.div`float:right;`;
let Div = s.div`padding:20px 10px;`;
let S = s.span`
font-weight:bolder;
font-size:25px;
`;
let S2 = s.span`
font-size:25px;`;
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
export default CartFooter;

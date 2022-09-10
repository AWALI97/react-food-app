import s from 'styled-components';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const Modal = (props) => {
	let children = [];
	let cart = props.cart.filter((el) => {
		return el.qty !== '0';
	});
	function handleButton(content) {
		props.raise(content);
	}
	cart.forEach((el) => {
		children.push(
			<CartItem
				raise={handleButton}
				key={`cart_key_${el.id}`}
				item={el}
			></CartItem>
		);
	});
	function closeHandler() {
		props.close(true);
	}
	function orderHandler(total) {
		//{total: total}
		props.order({ items: cart, ...total });
	}

	return (
		<BackDrop>
			<Cart>
				{children}
				<CartFooter raise={closeHandler} order={orderHandler} item={cart} />
			</Cart>
		</BackDrop>
	);
};

let BackDrop = s.div`
  width: 100%;
  height: 300%;
  background-color: rgba(0, 0, 0, 0.9);
  position:absolute;
  top:0;
  z-index: 100;
`;
let Cart = s.div`
  width: 70%;
  background-color: white;
  margin:auto;
  margin-top: 25vh;
  border-radius:25px;
  padding:5px;
  z-index: 110;
`;

export default Modal;

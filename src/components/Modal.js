import s from 'styled-components';
import { formatSessionOrders } from '../helpers';
import CartItem from './CartItem';

const Modal = () => {
	console.log();
	let sess = formatSessionOrders();
	let children = [];
	console.log(sess);
	let i = 0;
	function handleButton(content) {
		console.log('doing nothin: ', content);
	}
	sess.forEach((el) => {
		children.push(
			<CartItem raise={handleButton} key={`cart_key_${i}`} item={el}></CartItem>
		);
		i++;
	});
	return (
		<BackDrop>
			<Cart>{children}</Cart>
		</BackDrop>
	);
};
let BackDrop = s.div`
  width: 100%;
  height: 300%;
  background-color: black;
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

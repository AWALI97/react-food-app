import styled from 'styled-components';
import AddItem from './AddItem';
import '../styles.css';
const CartItem = (props) => {
	function handleButton(content) {
		props.raise(content);
	}
	let total = (parseInt(props.item.qty) * parseFloat(props.item.price)).toFixed(
		2
	);
	return (
		<div className="menuItem menuItem2">
			<div>
				<ItemName>{props.item.name}</ItemName>
				<ItemDef>${props.item.price}</ItemDef>
				<ItemTotal>Total: ${total}</ItemTotal>
			</div>

			<AddItem
				className="AddItemClass"
				price={props.item.price}
				item={props.item}
				raise={handleButton}
			/>
		</div>
	);
};
let ItemName = styled.p`
	color: black;
	font-weight: bolder;
	margin: 0px;
	padding: 0px;
`;
let ItemDef = styled.p`
	font-style: italic;
	font-size: 15px;
	margin: 0px;
	padding: 0px;
`;
let ItemTotal = styled.p`
	color: Black;
	font-weight: bolder;
	font-size: 15px;
	margin: 0px;
	padding: 0px;
`;

export default CartItem;

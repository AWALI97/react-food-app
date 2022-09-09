import styled from 'styled-components';
import AddItem from './AddItem';
import '../styles.css';
const CartItem = (props) => {
	console.log(props);
	function handleButton(content) {
		props.raise(content);
	}
	return (
		<div className="menuItem menuItem2">
			<div>
				<ItemName>{props.item.item}</ItemName>
				<ItemDef>${props.item.price}</ItemDef>
				<ItemTotal>Total: {props.item.total}</ItemTotal>
			</div>

			<AddItem
				className="AddItemClass"
				price={props.item.price}
				item={props.item.item}
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

import styled from 'styled-components';
import AddItem from './AddItem';
import '../styles.css';
const MenuItem = (props) => {
	function handleButton(content) {
		props.raise(content);
	}
	return (
		<div className="menuItem">
			<div>
				<ItemName>{props.item.name}</ItemName>
				<ItemDef>{props.item.subtitle}</ItemDef>
				<ItemPrice>${props.item.price}</ItemPrice>
			</div>

			<AddItem
				className="AddItemClass"
				price={props.item.price}
				item={props.item.name}
				raise={handleButton}
				itemId={props.item.id}
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
let ItemPrice = styled.p`
	color: red;
	font-weight: bolder;
	font-size: 15px;
	margin: 0px;
	padding: 0px;
`;

export default MenuItem;

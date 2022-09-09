import styled from 'styled-components';
import MenuItem from './MenuItem';
const MENU = [
	{ id: 0, name: 'Sushi', subtitle: 'Finest fish and veggies', price: 22.99 },
	{ id: 1, name: 'Schnitzel', subtitle: 'A german specialty', price: 16.5 },
	{ id: 2, name: 'BBQ Burger', subtitle: 'American, raw, meaty', price: 12.99 },
	{
		id: 3,
		name: 'Green Bowl',
		subtitle: 'Healthy...and green...',
		price: 18.99,
	},
];

const Menu = (props) => {
	function handleButton(content) {
		props.raise(content);
	}
	let children = [];
	let i = 0;
	MENU.map((element) => {
		children.push(
			<MenuItem
				raise={handleButton}
				key={`menu_key_${i}`}
				item={element}
			></MenuItem>
		);
		i++;
		return true;
	});
	return <MenuCard>{children}</MenuCard>;
};
let MenuCard = styled.div`
	width: 80%;
	margin: auto;
	background-color: white;
	margin-top: 5px;
	padding-top: 3px;
	padding-bottom: 3px;
`;
export default Menu;

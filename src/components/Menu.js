import styled from 'styled-components';
import MenuItem from './MenuItem';
import { useState } from 'react';

const Menu = (props) => {
	// eslint-disable-next-line
	const [myMenu, setmyMenu] = useState(props.MENU);

	function handleButton(content) {
		props.raise(content);
	}
	let children = [];
	let i = 0;
	myMenu.map((element) => {
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

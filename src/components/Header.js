import '../styles.css';
const Header = (props) => {
	function holla() {
		console.log('holla');
	}
	return (
		<div>
			<div className="header_header">
				<nav id="nav_header">
					<span id="span_header">ReactMeals</span>
					<div id="badge_header" onClick={holla}>
						🛒 Your Cart <span id="qtybadge_header">{props.cart.tqty}</span>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;

import { Link } from "react-router-dom";

function Header({ route }) {
	return (
		<div className="header">
			<Link to={route}>←</Link>
		</div>
	);
}

export default Header;

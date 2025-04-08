import { Link } from "react-router-dom";

function Header({ route }) {
	return (
		<div className="header">
			<Link to={route}>
				<img src="/img/arrow-back.svg" alt="" />
			</Link>
		</div>
	);
}

export default Header;

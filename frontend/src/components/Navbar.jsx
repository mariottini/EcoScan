import { Link } from "react-router";

function Navbar() {
	return (
		<nav>
			<Link to="/calendar">
				<img src="/img/calendario.svg" alt="" />
			</Link>
			<Link to="/search">
				<img src="/img/ricerca.svg" alt="" />
			</Link>
			<Link to="/camera">
				<img src="/img/fotocamera.svg" alt="" />
			</Link>
			<Link to="/charts">
				<img src="/img/grafico.svg" alt="" />
			</Link>
			<Link to="/profile">
				<img src="/img/user.svg" alt="" />
			</Link>
		</nav>
	);
}

export default Navbar;

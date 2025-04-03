import { Link } from "react-router";

function Home() {
	return (
		<div class="home_container">
			<img src="/img/logo.svg"></img>
			<h1 className="home-title">EcoScan</h1>
			<Link to="/login">
				<button className="button_style">Accedi</button>
			</Link>
			<p>
				Non hai un account?{" "}
				<Link to="/register">
					<a href="">Registrati!</a>
				</Link>
			</p>
			<Link to="/search">
				<a>Accedi come ospite.</a>
			</Link>
		</div>
	);
}

export default Home;

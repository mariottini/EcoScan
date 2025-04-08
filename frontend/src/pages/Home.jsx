import { Link } from "react-router";

function Home() {
	return (
		<div className="home-container">
			<div className="logo-container">
				<img src="/img/logo.svg" className="logo"></img>
				<h1 className="title">EcoScan</h1>
			</div>
			<div className="links-container">
				<div className="main">
					<Link to="/login">
						<button className="home-btn">Accedi</button>
					</Link>
					<p>
						Non hai un account?{" "}
						<Link to="/register">
							<a href="">Registrati!</a>
						</Link>
					</p>
				</div>
				<Link to="/select-city">
					<a>Accedi come ospite.</a>
				</Link>
			</div>
		</div>
	);
}

export default Home;

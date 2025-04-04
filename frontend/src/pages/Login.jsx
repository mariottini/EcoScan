import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		const response = await fetch("http://127.0.0.1:5000/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();

		if (response.ok) {
			setMessage(data.message);
			console.log("dati utente: ", data.user);
			navigate("/search");
		} else {
			setMessage(data.error);
		}
	};

	return (
		<div className="loginContainer">
			<div className="logo">
				<img src="/img/logo.svg" alt="Logo" />
			</div>
			<h1>Ciao!</h1>
			<p className="subtitle">Accedi al tuo account.</p>
			<form onSubmit={handleLogin}>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					placeholder="user@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="********"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit" className="btn">
					Accedi
				</button>
				<p className="loginInfo">{message}</p>
			</form>
			<p className="register">
				Non hai un account?{" "}
				<Link to="/register">
					<u>Registrati!</u>
				</Link>
			</p>
		</div>
	);
}

export default Login;

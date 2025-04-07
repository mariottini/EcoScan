import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Register() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();

		const response = await fetch("http://127.0.0.1:5000/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, surname, email, password }),
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
			<h1>Benvenuto!</h1>
			<p className="subtitle">Crea il tuo account.</p>
			<form onSubmit={handleRegister}>
				<div className="name-surname-form">
					<div>
						<label htmlFor="name">Nome</label>
						<input
							type="text"
							id="name"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="surname">Cognome</label>
						<input
							type="text"
							id="surname"
							placeholder="Surname"
							value={surname}
							onChange={(e) => setSurname(e.target.value)}
							required
						/>
					</div>
				</div>
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
					Registrati
				</button>
			</form>
			<p className="register">
				Hai già un account?{" "}
				<Link to="/login">
					<u>Accedi!</u>
				</Link>
			</p>
		</div>
	);
}

export default Register;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SelectCity() {
	const [comune, setComune] = useState("");
	const [cities, setCities] = useState([]);
	const navigate = useNavigate();

	// 👇 Per ora hardcoded, ma puoi prendere l'id_user da context o localStorage
	const id_user = 1;

	useEffect(() => {
		const fetchCities = async () => {
			const response = await fetch("http://localhost:5000/get-city");
			const data = await response.json();
			setCities(data);
		};
		fetchCities();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("http://localhost:5000/update-city", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id_user, id_city: parseInt(comune) }),
		});

		if (response.ok) {
			console.log("Comune aggiornato!");
			navigate("/camera");
		} else {
			console.error("Errore nella modifica del comune");
		}
	};

	return (
		<div className="home-container select-city">
			<div className="logo-container">
				<img src="/img/logo.svg" alt="Logo" className="logo" />
				<h2 className="subtitle">Seleziona il comune.</h2>
			</div>

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="selezione_comune">Comune</label>
					<select
						name="selezione_comune"
						id="selezione_comune"
						value={comune}
						onChange={(e) => setComune(e.target.value)}
						required
					>
						<option value="">Seleziona il comune...</option>
						{cities.map((city) => (
							<option key={city.id_city} value={city.id_city}>
								{city.name ? city.name : "Nessun comune selezionato"}
							</option>
						))}
					</select>
				</div>
				<button className="button-style" type="submit">
					Conferma
				</button>
			</form>

			<a href="/camera">
				<u>Più tardi.</u>
			</a>
		</div>
	);
}

export default SelectCity;

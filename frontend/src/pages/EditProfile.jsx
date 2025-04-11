import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProfile() {
	const [image, setImage] = useState(null);
	const [nome, setNome] = useState("");
	const [cognome, setCognome] = useState("");
	const [comune, setComune] = useState("");
	const [cities, setCities] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch("http://localhost:5000/get-user/1");
			const data = await response.json();
			setNome(data.name);
			setCognome(data.surname);
			setComune(data.id_city);
		};

		const fetchCities = async () => {
			const response = await fetch("http://localhost:5000/get-city");
			const data = await response.json();
			setCities(data);
		};

		fetchUser();
		fetchCities();
	}, []); // <-- importante: array vuoto per evitare loop

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("http://localhost:5000/update-user/1", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: nome,
				surname: cognome,
				id_city: parseInt(comune), // converto in int per sicurezza
			}),
		});

		if (response.ok) {
			console.log("Dati aggiornati!");
			navigate("/profile");
		} else {
			console.error("Errore nell'aggiornamento");
		}
	};

	// Gestione cambiamento immagine
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="user-container edit-user">
			<div className="user-img">
				<img
					src={image || "/img/user-page.svg"}
					alt="User Avatar"
					className="propic"
				/>
				<label htmlFor="file-upload" className="edit-icon">
					<img src="/img/edit-user-page.svg" alt="edit" />
				</label>
				<input
					type="file"
					id="file-upload"
					style={{ display: "none" }}
					onChange={handleImageChange}
					accept="image/*"
				/>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="name-surname-form">
					<div>
						<label htmlFor="name">Nome</label>
						<input
							type="text"
							id="name"
							placeholder="Name"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="surname">Cognome</label>
						<input
							type="text"
							id="surname"
							placeholder="Surname"
							value={cognome}
							onChange={(e) => setCognome(e.target.value)}
							required
						/>
					</div>
				</div>
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
				<button type="submit" className="btn">
					Conferma
				</button>
			</form>
		</div>
	);
}

export default EditProfile;

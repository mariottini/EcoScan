import { useState } from "react";

function EditProfile() {
	const [image, setImage] = useState(null);
	const [nome, setNome] = useState("");
	const [cognome, setCognome] = useState("");
	const [comune, setComune] = useState("");

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

	// Funzione per svuotare i form
	const handleSubmit = () => {
		// Azzera i valori dei form
		setNome("");
		setCognome("");
		setComune("");

		// Puoi aggiungere la logica per inviare i dati se necessario

		console.log("Dati inviati:", { nome, cognome, comune });
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
			<form>
				<div className="name-surname-form">
					<div>
						<label htmlFor="name">Nome</label>
						<input type="text" id="name" placeholder="Name" required />
					</div>
					<div>
						<label htmlFor="surname">Cognome</label>
						<input type="text" id="surname" placeholder="Surname" required />
					</div>
				</div>
				<select name="selezione_comune" id="selezione_comune">
					<option value="">Seleziona il comune...</option>
					<option value="">Verona</option>
					<option value="">Villafranca</option>
				</select>
				<button type="submit" className="btn">
					Conferma
				</button>
			</form>
			{/* <div className="form-container">
				<div className="name-surname-container">
					<div className="form-name">
						<h3>Nome</h3>
						<input
							type="text"
							id="nome"
							name="nome"
							value={nome}
							onChange={(e) => setNome(e.target.value)} // Gestione cambiamento
						/>
					</div>
					<div className="form-surname">
						<h3>Cognome</h3>
						<input
							type="text"
							id="cognome"
							name="cognome"
							value={cognome}
							onChange={(e) => setCognome(e.target.value)} // Gestione cambiamento
						/>
					</div>
				</div>

				<div className="form-city">
					<h3>Comune</h3>
					<input
						type="text"
						id="comune"
						name="comune"
						value={comune}
						onChange={(e) => setComune(e.target.value)} // Gestione cambiamento
					/>
				</div>

				<input
					type="button"
					value="Conferma"
					className="modify-button confirm-button"
					onClick={handleSubmit} // Azzera i campi al clic
				/>
			</div> */}
		</div>
	);
}

export default EditProfile;

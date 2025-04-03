import SearchBar from "../components/SearchBar";
import CardRicerca from "../components/CardRicerca";

import { useState } from "react";

function Search() {
	const [trashData, setTrashData] = useState([]);

	const fetchData = (query) => {
		fetch(`http://127.0.0.1:5000/get-trash/${query}`)
			.then((response) => response.json())
			.then((data) => {
				console.log("Dati ricevuti: ", data);
				setTrashData(Array.isArray(data) ? data : []);
			})
			.catch((error) => console.error("Fetch error: ", error));
	};

	return (
		<div className="contenitore_ricerca">
			<SearchBar onSearch={fetchData} />
			<h2>Recenti:</h2>

			<div className="contenitore_ricerca_card">
				{trashData.length > 0 ? (
					trashData.map((item) => (
						<CardRicerca key={item.id_trash} trash={item} />
					))
				) : (
					<p>Nessun risultato trovato</p>
				)}
			</div>
		</div>
	);
}

export default Search;

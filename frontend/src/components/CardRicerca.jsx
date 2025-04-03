import { useEffect, useState } from "react";

function CardRicerca({ trash }) {
	const [category, setCategory] = useState("");

	useEffect(() => {
		if (trash.id_category) {
			fetch(`http://127.0.0.1:5000/get-category/${trash.id_category}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.name) {
						setCategory(data.name);
					} else {
						setCategory("Categoria non trovata");
					}
				})
				.catch((error) => console.error("Fetch error:", error));
		}
	});

	return (
		<div className="card_ricerca">
			<div>
				<img src={trash.image} alt={trash.name} />
			</div>

			<section>
				<h2>{trash.name}</h2>
				<div>
					<h3>{category}</h3>
				</div>
			</section>
		</div>
	);
}

export default CardRicerca;

import { useEffect, useState } from "react";
import { Link } from "react-router";

function CardSearch({ trash }) {
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
		<Link to={"/trash/" + trash.name}>
			<div className="card-search">
				<img src={trash.image} alt={trash.name} />
				<div>
					<h2>{trash.name}</h2>
					<h4>{category}</h4>
				</div>
			</div>
		</Link>
	);
}

export default CardSearch;

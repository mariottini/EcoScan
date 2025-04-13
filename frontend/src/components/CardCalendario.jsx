import { useEffect, useState } from "react";

function CardCalendario({ id_category }) {
	const [category, setCategory] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const res = await fetch(
					`http://localhost:5000/get-category/${id_category}`
				);
				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Errore generico");
				setCategory(data);
			} catch (err) {
				console.error("Errore nel caricamento categoria:", err.message);
				setCategory(null);
			} finally {
				setLoading(false);
			}
		};

		if (id_category) fetchCategory();
	}, [id_category]);

	if (loading) return <p>Caricamento categoria...</p>;
	if (!category) return <p>Categoria non trovata</p>;

	return (
		<div
			className={`card-calendar ${category.name
				.toLowerCase()
				.replaceAll(" ", "-")}`}
		>
			<img
				src={
					"/img/" + category.name.toLowerCase().replaceAll(" ", "-") + ".svg"
				}
				alt={`icona ${category.name.toLowerCase()}`}
			/>
			<hr />
			<h2>{category.name}</h2>
		</div>
	);
}

export default CardCalendario;

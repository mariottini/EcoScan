import { useParams } from "react-router-dom";
import CardHint from "../components/CardHint";
import CardTrash from "../components/CardTrash";
import { useEffect, useState } from "react";


function Trash() {

	const params = useParams();
	console.log(params.name)

	const [trash, setTrash] = useState({});

	useEffect(() => {
		if (params.name) {
			fetch(`http://127.0.0.1:5000/get-trash/${params.name}`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data[0])
					
					if (data[0]) {
						fetch(`http://127.0.0.1:5000/get-category/${data[0].id_category}`)
							.then((response) => response.json())
							.then((data_category) => {
								console.log(data_category)
								data[0].name_category = data_category.name;

								if (data[0]) {
									fetch(`http://127.0.0.1:5000/get-advice/${data[0].id_trash}`)
										.then((response) => response.json())
										.then((data_hint) => {
											console.log("DATA hint", data_hint)
											data[0].hint_text = data_hint[0].text;
											
											setTrash(data[0]);
										})
										.catch((error) => console.error("Fetch error:", error));
								}
					
							})
							.catch((error) => console.error("Fetch error:", error));
					}
					
				})
				.catch((error) => console.error("Fetch error:", error));
		}
	}, []);
  
	console.log(trash)

	return (
		<div className="container_trash">
			<img src={trash.image} alt={trash.name}></img>
			<h2>{trash.name}</h2>
			<section>
				<CardHint trash={trash}/>
				<h3>COME RICICLARE</h3>
				<CardTrash trash={trash}/>
			</section>
		</div>
	);
}

export default Trash;

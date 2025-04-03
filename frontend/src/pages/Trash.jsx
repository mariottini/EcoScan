import CardHint from "../components/CardHint";
import CardTrash from "../components/CardTrash";

function Trash() {
	return (
		<div className="container_trash">
			<img></img>
			<h2>Rifiuto</h2>
			<section>
				<CardHint />
				<h3>COME RICICLARE</h3>
				<CardTrash />
			</section>
		</div>
	);
}

export default Trash;

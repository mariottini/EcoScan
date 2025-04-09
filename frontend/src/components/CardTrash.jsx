function CardTrash({ trash }) {
	return (
		<div className="card-trash">
			{trash.name_category && (
				<img
					src={
						"/img/" +
						trash.name_category.toLowerCase().replaceAll(" ", "-") +
						".svg"
					}
				></img>
			)}

			<h2>{trash.name_category}</h2>
		</div>
	);
}

export default CardTrash;

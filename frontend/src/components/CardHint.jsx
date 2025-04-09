function CardHint({ trash }) {
	return (
		<div className="card-hint">
			<div>
				<h2>Consiglio sostenibile</h2>
				<p>{trash.hint_text}</p>
			</div>
			{/* <div>
				<img src=""></img>
			</div> */}
		</div>
	);
}

export default CardHint;

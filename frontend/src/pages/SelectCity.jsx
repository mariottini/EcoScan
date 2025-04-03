function Comune() {
	return (
		<>
			<div className="comune_container">
				<img className="comune_logo_img" src="/img/Logo.svg" alt="" />
				<h2>Seleziona il comune.</h2>

				{/* CARD SELEZIONE COMUNE */}
				<div className="card_selezione_comune">
					<form action="" method="" className="form_selezione_comune">
						<label for="selezione_comune">Comune</label>
						<select name="selezione_comune" id="selezione_comune">
							<option value="">Seleziona il comune...</option>
							<option value="">Verona</option>
							<option value="">Villafranca</option>
						</select>
						<button className="button_style">Conferma</button>
					</form>
				</div>

				<p>Più tardi.</p>
			</div>
		</>
	);
}

export default Comune;

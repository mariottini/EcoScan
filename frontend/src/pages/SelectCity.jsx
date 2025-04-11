function Comune() {
	return (
		<div className="home-container select-city">
			<div className="logo-container">
				<img src="/img/logo.svg" alt="Logo" className="logo" />
				<h2 className="subtitle">Seleziona il comune.</h2>
			</div>

			<form action="" method="">
				<div>
					<label for="selezione_comune">Comune</label>
					<select name="selezione_comune" id="selezione_comune">
						<option value="">Seleziona il comune...</option>
						<option value="">Verona</option>
						<option value="">Villafranca</option>
					</select>
				</div>
				<button className="button-style">Conferma</button>
			</form>
			<a href="/camera">
				<u>Più tardi.</u>
			</a>
		</div>
	);
}

export default Comune;

import CardCalendario from "../components/CardCalendario";

function Calendario() {
	return (
		<div className="calendar-container">
			<div className="calendar-date">
				<button className="arrow">
					<img src="/img/arrow-back.svg" />
				</button>
				<h2 className="day">Lunedì</h2>
				<h5 className="date">18/03/2025</h5>
				<button className="arrow">
					<img src="/img/arrow-forward.svg" />
				</button>
			</div>
			<div className="card-calendar-container">
				<CardCalendario />
			</div>
			<p className="calendar-text">
				Sacchi e contenitori dei rifiuti vanno posizionati all’esterno della
				propria abitazione
				<strong>
					{" "}
					sulla pubblica via, dopo le 21.00 ed entro le 24.00
				</strong>{" "}
				del giorno precedente la raccolta prevista dal calendario.
			</p>
		</div>
	);
}

export default Calendario;

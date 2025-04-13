import { useEffect, useState } from "react";
import CardCalendario from "../components/CardCalendario";

function Calendario() {
	const [calendarData, setCalendarData] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const fetchCalendar = async () => {
			const response = await fetch("http://localhost:5000/get-calendar/2"); // ID città
			const data = await response.json();
			setCalendarData(data);

			const today = new Date();
			const currentDayName = today
				.toLocaleDateString("it-IT", { weekday: "long" })
				.toLowerCase();

			const foundIndex = data.findIndex(
				(entry) => entry.day.toLowerCase() === currentDayName
			);
			setCurrentIndex(foundIndex !== -1 ? foundIndex : 0);
		};

		fetchCalendar();
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : calendarData.length - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < calendarData.length - 1 ? prevIndex + 1 : 0
		);
	};

	const getDateForDay = (startDate, dayTarget) => {
		const daysOfWeek = [
			"domenica",
			"lunedì",
			"martedì",
			"mercoledì",
			"giovedì",
			"venerdì",
			"sabato",
		];
		let date = new Date(startDate);
		while (daysOfWeek[date.getDay()] !== dayTarget.toLowerCase()) {
			date.setDate(date.getDate() + 1);
		}
		return date;
	};

	if (!calendarData.length) return <p>Caricamento...</p>;

	const { day, id_category } = calendarData[currentIndex];
	const targetDate = getDateForDay(new Date(), day);
	const formattedDate = targetDate.toLocaleDateString("it-IT");

	return (
		<div className="calendar-container">
			<div className="calendar-date">
				<button className="arrow" onClick={handlePrev}>
					<img src="/img/arrow-back.svg" />
				</button>
				<h2 className="day">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
				<h5 className="date">{formattedDate}</h5>
				<button className="arrow" onClick={handleNext}>
					<img src="/img/arrow-forward.svg" />
				</button>
			</div>

			<div className="card-calendar-container">
				<CardCalendario id_category={id_category} />
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

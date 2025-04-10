import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
// import chartData from "../data/rifiuti_comuni_2004_2023.json";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function LineChart() {
	const data = {
		labels: [
			"2004",
			"2005",
			"2006",
			"2007",
			"2008",
			"2009",
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017",
			"2018",
			"2019",
			"2020",
			"2021",
			"2022",
			"2023",
		],
		datasets: [
			{
				label: "Verona",
				data: [
					531.4107665187997, 534.1231389109505, 551.1798480993137,
					583.9090527059932, 558.7811077032192, 523.1157689762738,
					529.925872010587, 512.0160544474903, 494.36177522022444,
					521.3529110512129, 517.3734242890084, 513.8885664873175,
					536.045120431168, 516.5679815790597, 522.9370507497831,
					522.8038193506563, 500.5289369926556, 496.9985829277642,
					485.1398848002973, 493.9449522380284,
				],
				borderColor: "rgba(75, 192, 192, 1)",
				backgroundColor: "rgba(75, 192, 192, 0.2)",
			},
			{
				label: "Villafranca di Verona",
				data: [
					536.4900757849152, 547.0598420119297, 557.9403973509934,
					569.4914989811513, 582.7059676623056, 567.2001460475872,
					591.127004257632, 528.806520496857, 472.23039640987287,
					471.56948391922214, 451.80794682067017, 426.2096463216244,
					449.83402139520865, 434.81553923928743, 440.83729433272396,
					450.9768604442316, 450.1459978975822, 466.95188505538954,
					444.1002298572466, 456.37229292591803,
				],
				borderColor: "rgba(255, 99, 132, 1)",
				backgroundColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { position: "top" },
			title: { display: true, text: "dal 2004 al 2023" },
		},
	};

	return <Line data={data} options={options} height={"100%"} />;
}

export default LineChart;

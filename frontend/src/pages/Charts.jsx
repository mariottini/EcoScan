import React from "react";
import Chart from "../components/Chart";

function Charts() {
	return (
		<div className="charts-container">
			<h1>PRODUZIONE RIFIUTO TOTALE PRO CAPITE DEL COMUNE: in kg</h1>
			<div className="chart-container">
				<Chart />
			</div>
		</div>
	);
}
export default Charts;

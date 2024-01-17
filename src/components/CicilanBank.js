import React, { useState } from "react";
import "../App.css";

function CicilanBank() {
	const [nominal, setNominal] = useState(null);
	const [bunga, setBunga] = useState(null);
	const [periode, setPeriode] = useState(null);
	const [cicilan, setCicilan] = useState(null);

	const handleNominalChange = (event) => {
		setNominal(parseFloat(event.target.value));
	};

	const handleBungaChange = (event) => {
		setBunga(parseFloat(event.target.value));
	};

	const handlePeriodeChange = (event) => {
		setPeriode(parseFloat(event.target.value));
	};

	const countCicilan = () => {
		const cicil = (nominal + nominal * (bunga / 100)) / periode;
		setCicilan(cicil);
	};

	return (
		<>
			<div className="CicilanForm container mt-5">
				<div className="initialform">
					<h2 className="mb-4">Kalkulator Cicilan</h2>
					<form>
						<div className="form-group">
							<label htmlFor="nominal">Nominal (Rp):</label>
							<input
								type="number"
								className="form-control"
								id="nominal"
								value={nominal}
								onChange={handleNominalChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="bunga">Bunga (%):</label>
							<input
								type="number"
								className="form-control"
								id="bunga"
								value={bunga}
								onChange={handleBungaChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="periode">periode (Bulan):</label>
							<input
								type="number"
								className="form-control"
								id="periode"
								value={periode}
								onChange={handlePeriodeChange}
							/>
						</div>
					</form>
					<button className="btn btn-success" onClick={countCicilan}>
						Hitung Cicilan
					</button>
				</div>
				<div className="hasil">
					{cicilan !== null && (
						<>
							<div className="alert alert-success ">
								<p className="mt-3">
									Cicilan Per Bulan Yang Harus Dibayar Rp: {cicilan}
								</p>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
export default CicilanBank;

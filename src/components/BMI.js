import React, { useState } from "react";
import "../App.css";

function BMI() {
	const [berat, setBerat] = useState(null);
	const [tinggi, setTinggi] = useState(null);
	const [bmiResult, setBmiResult] = useState(null);
	const [bmiResultCategory, setBmiResultCategory] = useState(null);

	const handleBeratChange = (event) => {
		setBerat(parseFloat(event.target.value));
	};

	const handleTinggiChange = (event) => {
		setTinggi(parseFloat(event.target.value));
	};

	const countBMI = () => {
		const hasil = berat / (tinggi * tinggi);

		if (hasil < 18.5) {
			setBmiResultCategory("Underweight");
		} else if (hasil >= 18.5 && hasil < 25) {
			setBmiResultCategory("Normal Weight");
		} else if (hasil >= 25 && hasil < 30) {
			setBmiResultCategory("Overweight");
		} else if (hasil >= 30 && hasil < 35) {
			setBmiResultCategory("Obesity Class I");
		} else if (hasil >= 35 && hasil < 40) {
			setBmiResultCategory("Obesity Class II");
		} else {
			setBmiResultCategory("Obesity Class III");
		}

		setBmiResult(hasil);
	};

	return (
		<>
			<div className="BMIform container mt-5">
				<div className="initialform">
					<h2 className="mb-4">Kalkulator Body Mass Index</h2>
					<form>
						<div className="form-group">
							<label htmlFor="berat">Berat badan (kg):</label>
							<input
								type="number"
								className="form-control"
								id="berat"
								value={berat}
								onChange={handleBeratChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="tinggi">Tinggi badan (m):</label>
							<input
								type="number"
								className="form-control"
								id="tinggi"
								value={tinggi}
								onChange={handleTinggiChange}
							/>
						</div>
					</form>
					<button className="btn btn-success" onClick={countBMI}>
						Hitung BMI
					</button>
				</div>
				<div className="hasil">
					{bmiResult !== null && (
						<>
							<div className="alert alert-success ">
								<h4>{bmiResultCategory}</h4>
								<p className="mt-3">Hasil: {bmiResult}</p>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default BMI;

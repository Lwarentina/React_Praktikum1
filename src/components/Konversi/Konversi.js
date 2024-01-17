import React, { useState } from "react";
import "../../App.css";
import KonversiHandler from "./KonversiHandler";

function Konversi() {
	const [bilangan, setBilangan] = useState("decimal");
	const [tobilangan, setTobilangan] = useState("decimal");
	const [value, setValue] = useState("");
	const [result, setResult] = useState(null);

	const handleBilanganChange = (event) => {
		setBilangan(event.target.value);
	};

	const handleTobilanganChange = (event) => {
		setTobilangan(event.target.value);
	};

	const handleValueChange = (event) => {
		setValue(event.target.value);
	};

	const handleConvert = () => {
		const result = KonversiHandler.handleConvert(bilangan, tobilangan, value);
		setResult(result);
	};

	return (
		<>
			<div className="KonversiForm container mt-5">
				<div className="initialform">
					<h2 className="mb-4">Konversi Bilangan</h2>

					<div className="convertsuhu">
						<label htmlFor="init">Bilangan Awal: </label>

						<div className="pilihansuhu">
							<select
								className="form-control pilihsuhu"
								id="init"
								name="type"
								value={bilangan}
								onChange={handleBilanganChange}
							>
								<option value="decimal">Decimal</option>
								<option value="octal">Octal</option>
								<option value="binary">Binary</option>
								<option value="hexadecimal">Hexadecimal</option>
							</select>
						</div>
						<label htmlFor="init">Konversikan Ke: </label>

						<div className="pilihansuhu">
							<select
								className="form-control pilihsuhu"
								name="type"
								id="final"
								value={tobilangan}
								onChange={handleTobilanganChange}
							>
								<option value="decimal">Decimal</option>
								<option value="octal">Octal</option>
								<option value="binary">Binary</option>
								<option value="hexadecimal">Hexadecimal</option>
							</select>
						</div>
					</div>
					<label htmlFor="inputValue">Masukkan Bilangan: </label>

					<div className="pilihansuhu">
						<input
							type="text"
							className="form-control pilihsuhu"
							id="inputValue"
							value={value}
							onChange={handleValueChange}
						/>
					</div>
					<button className="btn btn-success mt-3" onClick={handleConvert}>
						Convert
					</button>
					<div className="mt-5 pilihansuhu bah">
						{result !== null && (
							<div className="alert alert-success">Hasil: {result}</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Konversi;

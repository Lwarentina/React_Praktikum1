import React, { useState } from "react";
import "../App.css";

function Diskon() {
	const [harga, setHarga] = useState(null);
	const [ppn, setPpn] = useState(null);
	const [diskon, setDiskon] = useState(null);
	const [harga_akhir, setHarga_akhir] = useState(null);

	const handleHargaChange = (event) => {
		setHarga(parseFloat(event.target.value));
	};

	const handlePpnChange = (event) => {
		setPpn(parseFloat(event.target.value));
	};

	const handleDiskonChange = (event) => {
		setDiskon(parseFloat(event.target.value));
	};

	const countHarga = () => {
		const harga_akhir = harga + (harga * ppn) / 100 - (harga * diskon) / 100;
		setHarga_akhir(harga_akhir);
	};

	return (
		<>
			<div className="DiskonForm container mt-5">
				<div className="initialform">
					<h2 className="mb-4">Kalkulator Diskon</h2>
					<form>
						<div className="form-group">
							<label htmlFor="HargaAwal">Harga Awal (Rp):</label>
							<input
								type="number"
								className="form-control"
								id="HargaAwal"
								value={harga}
								onChange={handleHargaChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="PPN">PPN (%):</label>
							<input
								type="number"
								className="form-control"
								id="PPN"
								value={ppn}
								onChange={handlePpnChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="periode">Diskon (%):</label>
							<input
								type="number"
								className="form-control"
								id="Diskon"
								value={diskon}
								onChange={handleDiskonChange}
							/>
						</div>
					</form>
					<button className="btn btn-success" onClick={countHarga}>
						Hitung Harga Akhir
					</button>
				</div>
				<div className="hasil">
					{harga_akhir !== null && (
						<>
							<div className="alert alert-success ">
								<p className="mt-3">
									Harga Akhir Setelah PPN dan Diskon Rp: {harga_akhir}
								</p>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default Diskon;

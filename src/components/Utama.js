import React from "react";
import { Routes, Route } from "react-router-dom";
import BMI from "./BMI";
import CicilanBank from "./CicilanBank";
import Diskon from "./Diskon";
import Konversi from "./Konversi/Konversi";
import Beranda from "./Beranda";

const Utama = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Beranda />} />
				<Route path="/bmi" element={<BMI />} />
				<Route path="/cicilan" element={<CicilanBank />} />
				<Route path="/diskon" element={<Diskon />} />
				<Route path="/Konversi" element={<Konversi />} />
			</Routes>
		</div>
	);
};

export default Utama;

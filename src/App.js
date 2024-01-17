
import "bootstrap/dist/css/bootstrap.min.css";
import Utama from "./components/Utama";
import { Link } from "react-router-dom";
import React from "react";

function App() {
	return (
		<div>
			<hr />
			<Link to="/bmi">bmi</Link> |
			<Link to="/cicilan">cicilan</Link> |
			<Link to="/diskon">diskon</Link> |
			<Link to="/Konversi">konversi</Link>
			<hr />
			<span>
				<Utama />
			</span>
		</div>
	);
}

export default App;

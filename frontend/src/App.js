import React from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;

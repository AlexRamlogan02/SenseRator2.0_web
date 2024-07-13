import React from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import SurveyPage from "./pages/SurveyPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<LandingPage />} />
				<Route path="surveys" element={<SurveyPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
